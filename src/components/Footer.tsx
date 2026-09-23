import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1325] px-8 pt-20 pb-8 font-sans text-slate-400">
      <div className="mx-auto max-w-[1280px]">

        <div className="mb-16 grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-10">
          <div className="pr-8 max-lg:col-span-full max-lg:max-w-[600px] max-lg:pr-0">
            <div className="mb-8 flex items-center gap-3">
              <img src="/buzziwah.health-white-logo.png" alt="Buzziwah Agency" style={{ height: '40px', objectFit: 'contain', transform: 'scale(2.8)', transformOrigin: 'left center' }} />
            </div>
            <p className="mb-8 text-[0.85rem] leading-relaxed text-slate-500">
              Buzziwah is a Bengaluru-based digital marketing agency, with a dedicated focus on healthcare brands. We've partnered with hospitals, clinics and fertility centres across India to build their brand, content and patient acquisition with honesty, transparency, and data-driven strategy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white" aria-label="Facebook"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white" aria-label="Instagram"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white" aria-label="Twitter"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white" aria-label="YouTube"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="mb-6 text-xs font-semibold tracking-wide text-white uppercase">TOP CLIENTS</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="/case-study/1" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">Aanya Hospital</a></li>
              <li><a href="/case-study/2" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">Sripada Multispeciality Hospital</a></li>
              <li><a href="/case-study/3" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">WMN Doctors</a></li>
              <li><a href="/case-study/4" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">Aryamba IVF</a></li>
              <li><a href="/case-study/5" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">Svatantra</a></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="mb-6 text-xs font-semibold tracking-wide text-white uppercase">SERVICES</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="https://www.buzziwah.com/website-development" target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">Web Design</a></li>
              <li><a href="https://www.buzziwah.com/seo" target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">Technical SEO</a></li>
              <li><a href="https://www.buzziwah.com/content-solution" target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">Content Strategy</a></li>
              <li><a href="https://www.buzziwah.com/performance-marketing" target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">Conversion Tracking</a></li>
              <li><a href="https://www.buzziwah.com/services" target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">HIPAA Compliance</a></li>
              <li><a href="https://www.buzziwah.com/services" target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">All Services &rarr;</a></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="mb-6 text-xs font-semibold tracking-wide text-white uppercase">RESOURCES</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="/#case-studies" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">Case Studies</a></li>
              <li><a href="https://www.buzziwah.com/services" target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">Strategy Guide</a></li>
              <li><a href="/#get-started" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">Website Audit</a></li>
              <li><a href="/#reviews" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">Reviews</a></li>
              <li><a href="https://www.buzziwah.com/blogs" target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">Blog</a></li>
              <li><a href="/#faq" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">FAQ</a></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="mb-6 text-xs font-semibold tracking-wide text-white uppercase">COMPANY</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="https://www.buzziwah.com/about" target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">About Us</a></li>
              <li><a href="https://www.buzziwah.com/contact" target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">Partner With Us</a></li>
              <li><a href="https://www.buzziwah.com/contact" target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-slate-400 transition-colors hover:text-primary-orange">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-6 border-t border-white/5 pt-8 pb-4 max-sm:flex-col max-sm:items-start">
          <div className="text-xs text-slate-500">
            &copy; 2026 Buzziwah. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
            <a href="#" className="text-slate-400 transition-colors hover:text-white">Privacy Policy</a>
            <span className="text-slate-700">&middot;</span>
            <a href="#" className="text-slate-400 transition-colors hover:text-white">Terms</a>
            <span className="text-slate-700">&middot;</span>
            <a href="#" className="text-slate-400 transition-colors hover:text-white">Disclaimer</a>
            <span className="text-slate-700">&middot;</span>
            <a href="#" className="text-slate-400 transition-colors hover:text-white">Editorial Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
