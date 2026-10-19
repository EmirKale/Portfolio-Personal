import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { certificates } from '@/lib/data/certificates';

export const metadata: Metadata = {
  title: 'Emir Kale — Sistem Kayıtları & Portfolyo (Önizleme)',
  description: 'AI Destekli .NET & Full-Stack Geliştirici portfolyo önizlemesi. Minimalist terminal ve sistem mimarisi yaklaşımı.',
};

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-[#090d16] text-[#f8fafc] font-mono selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* ── Üst Bilgilendirme Çubuğu ──────────────────────── */}
      <aside aria-label="Önizleme modu bildirimi" className="border-b border-slate-800 bg-[#0d1424] px-4 py-2.5 text-xs text-slate-400">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
            <span className="text-slate-200 font-semibold">ÖNİZLEME MODU — YÖN C:</span>
            <span>Terminal & Sistem Kayıtları Yaklaşımı</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-500">Mevcut siteniz değişmedi</span>
            <Link
              href="/"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm px-1"
            >
              ← Mevcut Tasarıma Dön
            </Link>
          </div>
        </div>
      </aside>

      {/* ── Üst Navigasyon ─────────────────────────────────── */}
      <header className="border-b border-slate-800 sticky top-0 bg-[#090d16]/95 backdrop-blur-none z-40">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="#top"
              className="font-semibold text-slate-100 hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
            >
              emir_kale.sys
            </Link>
            <span className="text-slate-600 text-xs hidden sm:inline" aria-hidden="true">/</span>
            <span className="text-xs text-slate-400 hidden sm:inline">.NET & AI Full-Stack</span>
          </div>

          <nav className="flex items-center gap-4 sm:gap-6 text-xs text-slate-400" aria-label="Sayfa içi bağlantılar">
            <a
              href="#vaka-calismalari"
              className="hover:text-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm px-1 py-0.5"
            >
              [projeler]
            </a>
            <a
              href="#sistem-arsivi"
              className="hover:text-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm px-1 py-0.5"
            >
              [arsiv]
            </a>
            <a
              href="#sertifikalar"
              className="hover:text-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm px-1 py-0.5"
            >
              [sertifikalar]
            </a>
            <a
              href="#iletisim"
              className="text-emerald-400 hover:text-emerald-300 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm px-1 py-0.5"
            >
              [iletisim]
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="max-w-5xl mx-auto px-4 py-12 sm:py-16 space-y-20">
        {/* ── Giriş / Kimlik Bölümü (Hero) ──────────────────── */}
        <section aria-labelledby="giris-baslik" className="space-y-6">
          <div className="flex items-center gap-2 text-xs text-emerald-400">
            <span>$</span>
            <span>whoami --status</span>
          </div>

          <div className="space-y-4">
            <h1 id="giris-baslik" className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
              Emir Kale — .NET & Full-Stack Sistem Geliştirici
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-[65ch]">
              ASP.NET Core Web API ve modern web teknolojileriyle uçtan uca sistemler,
              üretim odaklı SaaS araçları ve yapay zeka entegrasyonlu (OpenAI, Gemini, pgvector)
              servis mimarileri geliştiriyorum.
            </p>
          </div>

          {/* Sistem Parametreleri Tablosu */}
          <div className="border border-slate-800 rounded-none bg-[#0c1220] p-4 text-xs space-y-2 text-slate-300">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
              <div>
                <span className="text-slate-500 block">KONUM:</span>
                <span>İstanbul, TR</span>
              </div>
              <div>
                <span className="text-slate-500 block">ÇEKİRDEK YIĞIN:</span>
                <span>.NET 8, C#, Next.js 15, SQL Server</span>
              </div>
              <div>
                <span className="text-slate-500 block">AI KATMANI:</span>
                <span>OpenAI API, pgvector, Gemini</span>
              </div>
              <div>
                <span className="text-slate-500 block">DURUM:</span>
                <span className="text-emerald-400 font-semibold">Proje & İş Fırsatlarına Açık</span>
              </div>
            </div>
          </div>

          {/* Hızlı Eylemler */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
            <a
              href="#iletisim"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4 py-2.5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
            >
              İletişime Geç (emirkale03@gmail.com)
            </a>
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-700 hover:border-slate-500 text-slate-200 px-4 py-2.5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
            >
              CV İndir (PDF)
            </a>
            <a
              href="https://github.com/emirkale"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 px-4 py-2.5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
            >
              GitHub Profilim ↗
            </a>
            <a
              href="https://www.linkedin.com/in/emirkale/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 px-4 py-2.5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>

        {/* ── Bölüm 1: Seçili 3 Vaka Çalışması ───────────────── */}
        <section id="vaka-calismalari" aria-labelledby="vaka-baslik" className="space-y-8">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <div>
              <div className="text-xs text-emerald-400 mb-1">$ ls -la ./case-studies/</div>
              <h2 id="vaka-baslik" className="text-lg sm:text-xl font-bold text-slate-100">
                Seçili Vaka Çalışmaları (3 Temel Proje)
              </h2>
            </div>
            <span className="text-xs text-slate-500">3 proje yüklendi</span>
          </div>

          <div className="space-y-12">
            {/* Proje 1: ViCareerAI */}
            <article className="border border-slate-800 bg-[#0c1220] p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs text-emerald-400 font-semibold block">VAKA 01 // SAAS & AI</span>
                  <h3 className="text-xl font-bold text-slate-100">ViCareerAI</h3>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <a
                    href="https://vi-career-ai.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/20 px-3 py-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                  >
                    Canlı Ürün (vi-career-ai.vercel.app) ↗
                  </a>
                  <a
                    href="https://github.com/EmirKale/ViCareerAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-slate-700 hover:border-slate-600 text-slate-300 px-3 py-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                  >
                    Kaynak Kod ↗
                  </a>
                </div>
              </div>

              {/* Gerçek Ekran Görüntüsü */}
              <div className="border border-slate-800 bg-[#080c16] overflow-hidden">
                <Image
                  src="/ViCareer/Ekran görüntüsü 2026-05-28 112458.png"
                  alt="ViCareerAI SaaS arayüzü ve başvuru takip paneli ekran görüntüsü"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Teknik Özellikler ve Vaka Dökümü */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
                <div className="space-y-1.5">
                  <span className="text-slate-500 block uppercase font-semibold">Çözülen Problem</span>
                  <p className="text-slate-300 leading-relaxed max-w-[65ch]">
                    İş arayanların her başvuru için ayrı ön yazı hazırlamakta vakit kaybetmesi ve
                    başvuru süreçlerinin dağınık tablolarda takibinin zorlaşması.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-slate-500 block uppercase font-semibold">Uygulanan Mimari</span>
                  <p className="text-slate-300 leading-relaxed max-w-[65ch]">
                    Next.js 15 App Router üzerinde Supabase PostgreSQL ve Auth altyapısı.
                    OpenAI GPT-4o API ile parametrik ön yazı üretimi, LemonSqueezy ile faturalandırma ve
                    Kanban başvuru takip mimarisi.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-slate-500 block uppercase font-semibold">Ölçülebilir Çıktı</span>
                  <p className="text-slate-300 leading-relaxed max-w-[65ch]">
                    Freemium modelle yayına alınmış, gerçek kullanıcıların CV ve başvuru
                    süreçlerini tek merkezden yönetebildiği canlı SaaS ürünü.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-800/80 pt-3 flex flex-wrap gap-2 text-[11px] text-slate-400">
                <span className="text-slate-500">Yığın:</span>
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300">Next.js 15</span>
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300">Supabase</span>
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300">OpenAI GPT-4o</span>
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300">LemonSqueezy</span>
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300">Tailwind CSS</span>
              </div>
            </article>

            {/* Proje 2: Virasure Platform */}
            <article className="border border-slate-800 bg-[#0c1220] p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs text-emerald-400 font-semibold block">VAKA 02 // .NET & AI ANALİZİ</span>
                  <h3 className="text-xl font-bold text-slate-100">Virasure Platform</h3>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <a
                    href="https://github.com/EmirKale/Virasure"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-slate-700 hover:border-slate-600 text-slate-300 px-3 py-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                  >
                    GitHub Deposu ↗
                  </a>
                </div>
              </div>

              {/* Gerçek Ekran Görüntüsü */}
              <div className="border border-slate-800 bg-[#080c16] overflow-hidden">
                <Image
                  src="/Virasure/virasure-12.png"
                  alt="Virasure Platformu yönetim paneli ve AI analiz ekranı"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
                <div className="space-y-1.5">
                  <span className="text-slate-500 block uppercase font-semibold">Çözülen Problem</span>
                  <p className="text-slate-300 leading-relaxed max-w-[65ch]">
                    Sigorta poliçe şartlarının ve kapsam detaylarının kullanıcılar için anlaşılmasının zor
                    olması ve karşılaştırmanın manuel yapılması.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-slate-500 block uppercase font-semibold">Uygulanan Mimari</span>
                  <p className="text-slate-300 leading-relaxed max-w-[65ch]">
                    ASP.NET Core Web API katmanı üzerinde Entity Framework Core ve SQL Server.
                    Gemini AI API entegrasyonu ile poliçe maddelerinin anlamsal özeti ve web kaynaklarıyla uyumluluk puanlama servisi.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-slate-500 block uppercase font-semibold">Ölçülebilir Çıktı</span>
                  <p className="text-slate-300 leading-relaxed max-w-[65ch]">
                    Doğal dilde poliçe sorgulaması yapabilen ve dış kaynak uyumluluğunu skorlayabilen
                    katmanlı kurumsal backend mimarisi.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-800/80 pt-3 flex flex-wrap gap-2 text-[11px] text-slate-400">
                <span className="text-slate-500">Yığın:</span>
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300">ASP.NET Core</span>
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300">Web API</span>
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300">Gemini AI</span>
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300">Entity Framework Core</span>
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300">SQL Server</span>
              </div>
            </article>

            {/* Proje 3: Yummy */}
            <article className="border border-slate-800 bg-[#0c1220] p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs text-emerald-400 font-semibold block">VAKA 03 // FULL-STACK & GERÇEK ZAMANLI SİSTEM</span>
                  <h3 className="text-xl font-bold text-slate-100">Yummy Platformu</h3>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <a
                    href="https://github.com/EmirKale/Yummy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-slate-700 hover:border-slate-600 text-slate-300 px-3 py-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                  >
                    GitHub Deposu ↗
                  </a>
                </div>
              </div>

              {/* Gerçek Ekran Görüntüsü */}
              <div className="border border-slate-800 bg-[#080c16] overflow-hidden">
                <Image
                  src="/Yummy/ApiYummy.png"
                  alt="Yummy ASP.NET Core API Swagger dokümantasyonu ve mimari test ekranı"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
                <div className="space-y-1.5">
                  <span className="text-slate-500 block uppercase font-semibold">Çözülen Problem</span>
                  <p className="text-slate-300 leading-relaxed max-w-[65ch]">
                    Restoranların menü, rezervasyon ve müşteri yorumlarını farklı araçlarda dağınık şekilde
                    yönetmesi ve anlık bildirim eksikliği.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-slate-500 block uppercase font-semibold">Uygulanan Mimari</span>
                  <p className="text-slate-300 leading-relaxed max-w-[65ch]">
                    ASP.NET Core Web API ve MVC hibrit yapısı. Rezervasyon güncellemelerinde
                    SignalR ile çift yönlü WebSocket iletişimi. OpenAI API ile yorum moderasyonu.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-slate-500 block uppercase font-semibold">Ölçülebilir Çıktı</span>
                  <p className="text-slate-300 leading-relaxed max-w-[65ch]">
                    Tüm sipariş ve rezervasyon adımlarını gerçek zamanlı senkronize eden,
                    modüler katmanlı kurumsal yönetim sistemi.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-800/80 pt-3 flex flex-wrap gap-2 text-[11px] text-slate-400">
                <span className="text-slate-500">Yığın:</span>
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300">C# / .NET</span>
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300">SignalR (Real-time)</span>
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300">OpenAI Moderation</span>
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300">Entity Framework</span>
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300">SQL Server</span>
              </div>
            </article>
          </div>
        </section>

        {/* ── Bölüm 2: Proje & Sistem Arşivi (Tablo Düzeni) ──── */}
        <section id="sistem-arsivi" aria-labelledby="arsiv-baslik" className="space-y-6">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <div>
              <div className="text-xs text-emerald-400 mb-1">$ cat ./projects_archive.tsv</div>
              <h2 id="arsiv-baslik" className="text-lg sm:text-xl font-bold text-slate-100">
                Sistem & Proje Arşivi
              </h2>
            </div>
            <span className="text-xs text-slate-500">Kart ızgarası yerine tablo</span>
          </div>

          <div className="border border-slate-800 bg-[#0c1220] overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-400">
                  <th className="p-3 font-semibold">PROJE</th>
                  <th className="p-3 font-semibold">TİP</th>
                  <th className="p-3 font-semibold">MİMARİ & TEKNOLOJİ</th>
                  <th className="p-3 font-semibold">ÇÖZÜM / NOT</th>
                  <th className="p-3 font-semibold text-right">KAYNAK</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 font-semibold text-slate-100">AskBase</td>
                  <td className="p-3 text-slate-400">AI SaaS / Doc Q&A</td>
                  <td className="p-3 text-slate-300">Next.js, pgvector, Supabase, Stripe</td>
                  <td className="p-3 text-slate-400 max-w-xs">Büyük dokümanlarda vektör tabanlı anlamsal soru-cevap.</td>
                  <td className="p-3 text-right">
                    <a
                      href="https://github.com/emirkale"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline"
                    >
                      Repo ↗
                    </a>
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 font-semibold text-slate-100">Vitransport Lojistik</td>
                  <td className="p-3 text-slate-400">Kurumsal Sistem</td>
                  <td className="p-3 text-slate-300">ASP.NET Core MVC, EF Core, SQL Server</td>
                  <td className="p-3 text-slate-400 max-w-xs">Kara, deniz ve hava taşımacılığı için navlun hesaplama ve operasyon modülleri.</td>
                  <td className="p-3 text-right">
                    <a
                      href="https://github.com/emirkale"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline"
                    >
                      Repo ↗
                    </a>
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 font-semibold text-slate-100">AudioLoop</td>
                  <td className="p-3 text-slate-400">Medya Aracı</td>
                  <td className="p-3 text-slate-300">Next.js, FFmpeg, React</td>
                  <td className="p-3 text-slate-400 max-w-xs">Ağır programlara gerek duymadan tarayıcı/yerel medya işleme hattı.</td>
                  <td className="p-3 text-right">
                    <a
                      href="https://github.com/emirkale"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline"
                    >
                      Repo ↗
                    </a>
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/40">
                  <td className="p-3 font-semibold text-slate-100">Melody Admin</td>
                  <td className="p-3 text-slate-400">Yönetim Paneli</td>
                  <td className="p-3 text-slate-300">ASP.NET Core, Bootstrap, EF Core</td>
                  <td className="p-3 text-slate-400 max-w-xs">Rol tabanlı yetkilendirme ve kurumsal CRUD yönetimi.</td>
                  <td className="p-3 text-right">
                    <a
                      href="https://github.com/emirkale"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline"
                    >
                      Repo ↗
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Bölüm 3: Teknik Envanter (Kutu Yerine Mimari) ──── */}
        <section aria-labelledby="yetenek-baslik" className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <div className="text-xs text-emerald-400 mb-1">$ env | grep STACK</div>
            <h2 id="yetenek-baslik" className="text-lg sm:text-xl font-bold text-slate-100">
              Teknik Altyapı ve Çalışma Alanları
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="border border-slate-800 bg-[#0c1220] p-4 space-y-2">
              <span className="text-slate-400 font-semibold block">BACKEND & SERVİS</span>
              <ul className="space-y-1 text-slate-300">
                <li>• C# & .NET 8</li>
                <li>• ASP.NET Core Web API</li>
                <li>• Entity Framework Core</li>
                <li>• SignalR (WebSocket)</li>
                <li>• Katmanlı Mimari / Repository</li>
              </ul>
            </div>

            <div className="border border-slate-800 bg-[#0c1220] p-4 space-y-2">
              <span className="text-slate-400 font-semibold block">VERİ & DEPOLAMA</span>
              <ul className="space-y-1 text-slate-300">
                <li>• Microsoft SQL Server</li>
                <li>• PostgreSQL & Supabase</li>
                <li>• pgvector (Vektör Arama)</li>
                <li>• MongoDB</li>
                <li>• LINQ Sorgu Optimizasyonu</li>
              </ul>
            </div>

            <div className="border border-slate-800 bg-[#0c1220] p-4 space-y-2">
              <span className="text-slate-400 font-semibold block">YAPAY ZEKA ENTEGRASYONU</span>
              <ul className="space-y-1 text-slate-300">
                <li>• OpenAI API (GPT-4o, Moderation)</li>
                <li>• Google Gemini API</li>
                <li>• Anlamsal Vektör Arama</li>
                <li>• Prompt Mühendisliği & JSON Mode</li>
                <li>• Claude Code / Anthropic Araçları</li>
              </ul>
            </div>

            <div className="border border-slate-800 bg-[#0c1220] p-4 space-y-2">
              <span className="text-slate-400 font-semibold block">FRONTEND & ARAÇLAR</span>
              <ul className="space-y-1 text-slate-300">
                <li>• Next.js 15 (App Router)</li>
                <li>• TypeScript & React</li>
                <li>• Tailwind CSS</li>
                <li>• Git & GitHub CI/CD</li>
                <li>• Vercel Dağıtımı</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Bölüm 4: Doğrulanmış Sertifikalar ──────────────── */}
        <section id="sertifikalar" aria-labelledby="sertifika-baslik" className="space-y-6">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <div>
              <div className="text-xs text-emerald-400 mb-1">$ ls ./credentials/*.pdf</div>
              <h2 id="sertifika-baslik" className="text-lg sm:text-xl font-bold text-slate-100">
                Doğrulanmış Sertifikalar ve Eğitimler
              </h2>
            </div>
            <span className="text-xs text-slate-500">{certificates.length} adet kayıtlı belge</span>
          </div>

          <div className="border border-slate-800 bg-[#0c1220] divide-y divide-slate-800/80 text-xs">
            {certificates.map((cert) => (
              <div key={cert.pdf} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-900/40">
                <div className="space-y-1">
                  <div className="font-semibold text-slate-200">{cert.title}</div>
                  <div className="text-slate-400 text-[11px]">
                    Kurum: <span className="text-slate-300">{cert.issuer}</span> • {cert.meta.tr}
                  </div>
                </div>
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-slate-700 hover:border-slate-500 text-slate-300 px-3 py-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm w-fit"
                >
                  <span>PDF Doğrula</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Bölüm 5: Zaman Çizelgesi (Log Formatı) ─────────── */}
        <section aria-labelledby="log-baslik" className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <div className="text-xs text-emerald-400 mb-1">$ git log --oneline --reverse</div>
            <h2 id="log-baslik" className="text-lg sm:text-xl font-bold text-slate-100">
              Gelişim Zaman Çizelgesi
            </h2>
          </div>

          <div className="space-y-4 text-xs">
            <div className="border-l-2 border-emerald-500/70 pl-4 py-1 space-y-1">
              <span className="text-emerald-400 font-semibold">[2026] SAAS & YAPAY ZEKA SİSTEMLERİ</span>
              <p className="text-slate-300 leading-relaxed max-w-[65ch]">
                ViCareerAI canlı SaaS lansmanı. AskBase doküman arama platformu ve AudioLoop gibi
                Next.js 15 + Supabase + OpenAI odaklı uçtan uca ürünlerin geliştirilmesi.
              </p>
            </div>

            <div className="border-l-2 border-slate-700 pl-4 py-1 space-y-1">
              <span className="text-slate-300 font-semibold">[2025] FULL-STACK & KURUMSAL MİMARİLER</span>
              <p className="text-slate-400 leading-relaxed max-w-[65ch]">
                ASP.NET Core Web API, SignalR ve Gemini AI entegrasyonlu Virasure ve Yummy platformları.
                İleri düzey veritabanı optimizasyonları ve mikro/katmanlı servis yapıları.
              </p>
            </div>

            <div className="border-l-2 border-slate-800 pl-4 py-1 space-y-1">
              <span className="text-slate-400 font-semibold">[2024] TEMELLER & EĞİTİM</span>
              <p className="text-slate-500 leading-relaxed max-w-[65ch]">
                Bandırma Onyedi Eylül Üniversitesi Bilgisayar Programcılığı eğitimi.
                C# programlama temelleri, nesne yönelimli programlama ve SQL veritabanı disiplini.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bölüm 6: İletişim & Açık Kanallar ──────────────── */}
        <section id="iletisim" aria-labelledby="iletisim-baslik" className="space-y-6 border-t border-slate-800 pt-12">
          <div className="space-y-2">
            <div className="text-xs text-emerald-400">$ ping -c 1 emirkale</div>
            <h2 id="iletisim-baslik" className="text-xl sm:text-2xl font-bold text-slate-100">
              Doğrudan İletişim & Kanallar
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-[65ch]">
              Yeni bir yazılım projesi, teknik iş birliği veya tam zamanlı/kontratlı pozisyonlar için
              doğrudan aşağıdaki kanallardan ulaşabilirsiniz.
            </p>
          </div>

          <div className="border border-slate-800 bg-[#0c1220] p-6 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-slate-500 block uppercase font-semibold">E-Posta</span>
                <a
                  href="mailto:emirkale03@gmail.com"
                  className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                >
                  emirkale03@gmail.com
                </a>
              </div>

              <div>
                <span className="text-slate-500 block uppercase font-semibold">Telefon</span>
                <a
                  href="tel:+905453305110"
                  className="text-slate-300 hover:text-slate-100 text-sm focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                >
                  +90 545 330 51 10
                </a>
              </div>

              <div>
                <span className="text-slate-500 block uppercase font-semibold">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/emirkale/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                >
                  linkedin.com/in/emirkale ↗
                </a>
              </div>

              <div>
                <span className="text-slate-500 block uppercase font-semibold">GitHub</span>
                <a
                  href="https://github.com/emirkale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                >
                  github.com/emirkale ↗
                </a>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-slate-500 text-[11px]">
              <span>© {new Date().getFullYear()} Emir Kale. Gerçek verilerle, süssüz ve amaca uygun inşa edildi.</span>
              <a
                href="#top"
                className="text-slate-400 hover:text-slate-200 focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
              >
                ↑ Sayfa Başına Dön
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
