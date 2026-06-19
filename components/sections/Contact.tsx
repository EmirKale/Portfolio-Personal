'use client';

import { profile } from '@/lib/data/profile';
import { useI18n } from '@/components/providers/I18nProvider';
import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import ArrowIcon from '@/components/ArrowIcon';
import MagneticButton from '@/components/MagneticButton';

export default function Contact() {
  const { locale, dictionary } = useI18n();
  const dict = dictionary.contact;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({ success: true, message: dict.successMessage[locale] });
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="section-border py-24 md:py-32 bg-bg">
      <div className="max-w-container mx-auto px-6 md:px-10">
        {/* Big Title */}
        <motion.h2
          className="text-display-xl font-display font-bold uppercase text-cream mb-16 leading-[0.9]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {dict.title[locale]}
        </motion.h2>

        {submitStatus && (
          <motion.div
            className="mb-8 p-5 rounded-xl border border-cream/20 bg-surface text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-cream text-sm">{submitStatus.message}</p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <p className="text-cream-muted text-lg leading-relaxed max-w-md">
              {dict.subtitle[locale]}
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-border-line flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm">✉</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cream-muted mb-1">
                    {dict.emailLabel[locale]}
                  </p>
                  <a href={`mailto:${profile.email}`} className="text-cream font-medium hover:underline">
                    {profile.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-border-line flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm">☎</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cream-muted mb-1">
                    {dict.phoneLabel[locale]}
                  </p>
                  <a href={`tel:${profile.phoneHref}`} className="text-cream font-medium hover:underline">
                    {profile.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-border-line flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm">◉</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cream-muted mb-1">
                    {dict.location[locale]}
                  </p>
                  <p className="text-cream font-medium">{profile.location[locale]}</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-cream border border-border-line rounded-full hover:bg-surface-hover hover:border-cream/20 transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-cream border border-border-line rounded-full hover:bg-surface-hover hover:border-cream/20 transition-all duration-300"
              >
                LinkedIn
              </a>
              <a
                href={profile.cv}
                download
                className="px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-cream border border-border-line rounded-full hover:bg-surface-hover hover:border-cream/20 transition-all duration-300"
              >
                {dict.downloadCv[locale]}
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-xs uppercase tracking-[0.2em] text-cream-muted mb-3">
                  {dict.nameLabel[locale]}
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder={dict.namePlaceholder[locale]}
                  className="w-full px-0 py-4 bg-transparent text-cream text-base border-b border-border-line focus:border-cream/40 outline-none transition-colors duration-300 placeholder:text-cream-muted/50"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs uppercase tracking-[0.2em] text-cream-muted mb-3">
                  {dict.emailLabel[locale]}
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder={dict.emailPlaceholder[locale]}
                  className="w-full px-0 py-4 bg-transparent text-cream text-base border-b border-border-line focus:border-cream/40 outline-none transition-colors duration-300 placeholder:text-cream-muted/50"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs uppercase tracking-[0.2em] text-cream-muted mb-3">
                  {dict.messageLabel[locale]}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder={dict.messagePlaceholder[locale]}
                  rows={5}
                  className="w-full px-0 py-4 bg-transparent text-cream text-base border-b border-border-line focus:border-cream/40 outline-none transition-colors duration-300 placeholder:text-cream-muted/50 resize-none"
                />
              </div>

              <MagneticButton
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-2 w-full py-4 bg-cream text-bg text-sm font-semibold uppercase tracking-[0.15em] rounded-full hover:bg-cream/90 transition-colors duration-300 mt-4"
              >
                {isSubmitting ? dict.submitting[locale] : dict.submitButton[locale]}
                {!isSubmitting && <ArrowIcon variant="dark" className="ml-1 -mr-2 scale-90" />}
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}