'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { login } from '@/app/actions/auth';
// react-dom'dan useFormState import ediyoruz (React 18)
import { useFormState, useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-4 px-6 bg-gradient-to-r from-cream to-cream-dim text-bg font-bold uppercase tracking-widest rounded-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
    </button>
  );
}

export default function LoginPage() {
  const [state, formAction] = useFormState(login, null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cream/5 via-transparent to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-cream/5 via-transparent to-transparent opacity-30" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md p-8 relative z-10"
      >
        <div className="bg-surface/30 backdrop-blur-xl border border-cream/10 rounded-[2rem] p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-cream/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cream to-cream-muted mb-2">
              Yönetici Girişi
            </h1>
            <p className="text-sm text-cream-muted">
              Portfolyo yönetim paneline hoş geldiniz. Lütfen bilgilerinizi girin.
            </p>
          </div>

          <form action={formAction} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-cream-muted ml-1">Kullanıcı Adı</label>
              <input 
                type="text" 
                name="username"
                required
                className="w-full bg-black/20 border border-cream/10 rounded-2xl px-5 py-4 text-cream placeholder-cream/20 focus:outline-none focus:border-cream/30 focus:bg-black/40 transition-all duration-300"
                placeholder="Kullanıcı adınızı girin"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-cream-muted ml-1">Şifre</label>
              <input 
                type="password" 
                name="password"
                required
                className="w-full bg-black/20 border border-cream/10 rounded-2xl px-5 py-4 text-cream placeholder-cream/20 focus:outline-none focus:border-cream/30 focus:bg-black/40 transition-all duration-300"
                placeholder="Şifrenizi girin"
              />
            </div>

            {state?.message && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center"
              >
                {state.message}
              </motion.div>
            )}

            <div className="pt-4">
              <SubmitButton />
            </div>
          </form>

          <div className="mt-8 text-center">
            <a href="/" className="text-xs text-cream-muted hover:text-cream transition-colors duration-300">
              ← Portfolyoya Dön
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
