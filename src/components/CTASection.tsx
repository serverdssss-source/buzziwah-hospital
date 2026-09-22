import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const CTASection: React.FC = () => {
  return (
    <section className="bg-bg-light px-8 py-24" id="get-started">
      <div
        className="relative mx-auto grid max-w-[1280px] grid-cols-[1fr_420px] gap-12 overflow-hidden rounded-3xl p-10 px-16 text-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] max-lg:grid-cols-1 max-lg:gap-10 max-lg:p-10 max-sm:p-6"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
      >
        {/* Subtle background glow */}
        <div
          className="pointer-events-none absolute top-[-20%] right-[-10%] h-[80%] w-1/2 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,109,34,0.15) 0%, rgba(15,23,42,0) 70%)' }}
        />

        <div className="relative z-[1] flex flex-col items-start">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-[0.85rem] font-semibold text-emerald-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            Strategists online now - typical reply in 2 minutes
          </div>

          <h2 className="mb-4 text-[2.4rem] leading-[1.2] font-semibold max-sm:text-[2rem]">
            Free Website Audit & Strategy for <br />
            <span className="font-serif text-primary-orange">Hospital Brands</span>
          </h2>

          <p className="mb-6 max-w-[550px] text-[1.05rem] leading-relaxed text-slate-400">
            Building a hospital website isn't just about design — it's patient journeys, SEO, and HIPAA compliance. A dedicated Buzziwah strategist handles all of it with you, and our initial audit costs you nothing.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 inline-flex items-center gap-2 rounded-lg bg-primary-orange px-7 py-3.5 text-[1.05rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#e85d1c]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            Chat with a strategist — free
          </a>

          <div className="inline-flex cursor-pointer items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-[0.85rem] text-slate-300 transition-colors hover:bg-white/10">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ))}
            </div>
            <span>5.0 from 50+ hospital reviews &rarr;</span>
          </div>
        </div>

        <div className="relative z-[1] rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-[10px]">
          <h3 className="mb-5 text-xs font-bold tracking-[0.1em] text-primary-orange uppercase">WHAT YOUR STRATEGIST DELIVERS</h3>

          <ul className="mb-5 flex flex-col gap-4">
            <li className="flex items-start gap-3 text-[0.95rem] leading-snug text-slate-200">
              <span className="text-lg opacity-90">🔍</span>
              <span><strong className="text-white">Free website audit</strong> on your current site</span>
            </li>
            <li className="flex items-start gap-3 text-[0.95rem] leading-snug text-slate-200">
              <span className="text-lg opacity-90">🎨</span>
              <span><strong className="text-white">UI/UX Mockups</strong> & design assistance</span>
            </li>
            <li className="flex items-start gap-3 text-[0.95rem] leading-snug text-slate-200">
              <span className="text-lg opacity-90">🚀</span>
              <span><strong className="text-white">Technical SEO</strong> on launch</span>
            </li>
            <li className="flex items-start gap-3 text-[0.95rem] leading-snug text-slate-200">
              <span className="text-lg opacity-90">✍️</span>
              <span><strong className="text-white">Content Strategy</strong> with the right tone</span>
            </li>
            <li className="flex items-start gap-3 text-[0.95rem] leading-snug text-slate-200">
              <span className="text-lg opacity-90">🔒</span>
              <span><strong className="text-white">HIPAA Compliance</strong> arranged securely</span>
            </li>
            <li className="flex items-start gap-3 text-[0.95rem] leading-snug text-slate-200">
              <span className="text-lg opacity-90">📈</span>
              <span><strong className="text-white">Conversion Tracking</strong> from arrival to booking</span>
            </li>
            <li className="flex items-start gap-3 text-[0.95rem] leading-snug text-slate-200">
              <span className="text-lg opacity-90">🤝</span>
              <span><strong className="text-white">Support from launch to scale</strong></span>
            </li>
          </ul>

          <p className="border-t border-white/10 pt-5 text-[0.85rem] leading-relaxed text-slate-400">
            Our initial audit and coordination is free to you. You pay the standard agency rates only when development begins.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CTASection;
