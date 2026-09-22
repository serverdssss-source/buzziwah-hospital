import React from 'react';

const HowWeWork: React.FC = () => {
  return (
    <section className="bg-bg-light px-8 py-24 text-text-dark" id="how-we-work">
      <div className="mb-16 text-center">
        <span className="mb-3 block text-[0.8rem] font-bold tracking-[0.1em] text-subtitle-teal uppercase">
          HOW BUZZIWAH WORKS
        </span>
        <h2 className="mb-6 font-serif text-[2.8rem] leading-[1.2] font-semibold text-text-dark max-lg:text-[2.2rem]">
          How We Build <span className="text-primary-orange">Websites</span>
        </h2>
        <p className="mx-auto max-w-[700px] text-lg leading-relaxed text-text-gray">
          We don't just build websites. We build conversion-focused digital experiences for hospitals — tailored to your patients and your brand.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-4 gap-6 max-lg:grid-cols-2 max-lg:gap-8 max-sm:grid-cols-1">
        <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-10 px-6 text-center transition-all hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)]">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
          </div>
          <h3 className="mb-4 text-lg font-semibold text-slate-800">Strategic Design</h3>
          <p className="mb-6 text-sm leading-relaxed text-slate-500">
            Custom UI/UX tailored for patient accessibility, easy navigation, and modern hospital branding.
          </p>
        </div>

        <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-10 px-6 text-center transition-all hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)]">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
          </div>
          <h3 className="mb-4 text-lg font-semibold text-slate-800">Medical Content</h3>
          <p className="mb-6 text-sm leading-relaxed text-slate-500">
            Authoritative healthcare copywriting reviewed by specialists to establish trust and credibility.
          </p>
        </div>

        <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-10 px-6 text-center transition-all hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)]">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <h3 className="mb-4 text-lg font-semibold text-slate-800">Robust Development</h3>
          <p className="mb-6 text-sm leading-relaxed text-slate-500">
            Secure, lightning-fast, and HIPAA-compliant architecture built to scale with your healthcare network.
          </p>
        </div>

        <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-10 px-6 text-center transition-all hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)]">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          <h3 className="mb-4 text-lg font-semibold text-slate-800">SEO & Growth</h3>
          <p className="mb-6 text-sm leading-relaxed text-slate-500">
            Optimized for local and technical search to ensure patients find your hospital when they need it most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
