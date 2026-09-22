import React, { useEffect, useState } from 'react';
import ContactModal from './ContactModal';

const heroImages = ['/Banner.png', '/Banner-1.png', '/Banner-2.png'];
const SLIDE_INTERVAL = 5000;

const stats = [
  { value: '15', suffix: '+', label: 'PARTNER HOSPITALS' },
  { value: '45', suffix: '+', label: 'WEBSITES BUILT' },
  { value: '2,760', suffix: '+', label: 'LEADS GENERATED' },
  { value: '99', suffix: '%', label: 'SATISFACTION' },
];

const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const scrollToCaseStudies = () => {
    document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
  };

  const badge = (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/60 px-5 py-1.5 backdrop-blur-sm">
      <span>🥇</span>
      <span className="text-[0.7rem] font-medium tracking-wide text-primary-orange">
        Trusted by 15+ hospital brands
      </span>
    </div>
  );

  const actions = (
    <div className="mb-16 flex gap-4 max-sm:flex-col">
      <button
        onClick={() => setIsContactOpen(true)}
        className="flex items-center gap-2 rounded-lg bg-primary-orange px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-orange-hover"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        Talk to an Expert
      </button>
      <button
        onClick={scrollToCaseStudies}
        className="flex items-center gap-2 rounded-lg border border-white/30 bg-slate-900/40 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-slate-900/80"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        Our Healthcare Portfolio
      </button>
    </div>
  );

  const statsGrid = (
    <div className="flex max-w-[720px] gap-3 max-lg:flex-wrap">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-1 flex-col items-center justify-center rounded-lg border border-white/15 bg-slate-900/45 px-2.5 py-3.5 text-center backdrop-blur-md max-lg:basis-[calc(50%-1rem)]"
        >
          <div className="mb-1 font-serif text-xl font-semibold text-white" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>
            {stat.value}<span className="align-super font-sans text-sm font-normal">{stat.suffix}</span>
          </div>
          <div className="text-[0.6rem] font-bold tracking-wide text-slate-100 uppercase" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative">
      {/* ===== Mobile / small-screen layout: banner image (fully visible), content below ===== */}
      <div className="md:hidden">
        <div className="relative w-full overflow-hidden bg-slate-900">
          <div className="relative aspect-video w-full">
            {heroImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt="Buzziwah hospital website showcase"
                className="absolute inset-0 h-full w-full object-contain transition-opacity duration-[1200ms] ease-in-out"
                style={{ opacity: index === activeSlide ? 1 : 0 }}
              />
            ))}
          </div>
          <div className="flex justify-center gap-2 py-3">
            {heroImages.map((image, index) => (
              <span
                key={image}
                className={`h-1.5 cursor-pointer rounded-full transition-all duration-200 ${
                  index === activeSlide ? 'w-6 bg-primary-orange' : 'w-1.5 bg-white/40'
                }`}
                onClick={() => setActiveSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 px-6 py-8 text-white">
          {badge}

          <h1 className="mb-5 max-w-[700px] font-serif text-[1.75rem] leading-[1.15] font-semibold text-white">
            One Agency. Every Hospital Niche.<br />Full-Funnel Growth.
          </h1>

          <p className="mb-8 max-w-[560px] text-sm leading-relaxed text-slate-200">
            From super-speciality hospitals to fertility centres, multi-disciplinary practices to neuro-rehab — we build the brand, the website, the content and the campaigns that turn trust into patients.
          </p>

          {actions}
          {statsGrid}
        </div>
      </div>

      {/* ===== Desktop / tablet layout: image as full-bleed background with overlay text ===== */}
      <section className="relative hidden min-h-[calc(100vh-110px)] items-center overflow-hidden px-8 py-16 text-white md:flex">
        {/* Background Slides */}
        {heroImages.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 z-0 bg-cover bg-[position:right_bottom] opacity-0 transition-opacity duration-[1200ms] ease-in-out"
            style={{
              backgroundImage: `url('${image}')`,
              opacity: index === activeSlide ? 1 : 0,
            }}
          ></div>
        ))}

        {/* Background Overlay for text readability */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-900/40 via-slate-900/20 to-slate-900/0" />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] pl-2">
          {badge}

          <h1
            className="mb-5 max-w-[700px] font-serif text-[2.5rem] leading-[1.15] font-semibold text-white max-lg:text-[2.1rem]"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.55)' }}
          >
            One Agency. Every Hospital Niche.<br />Full-Funnel Growth.
          </h1>

          <p
            className="mb-8 max-w-[560px] text-sm leading-relaxed text-slate-200"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.55)' }}
          >
            From super-speciality hospitals to fertility centres, multi-disciplinary practices to<br />
            neuro-rehab — we build the brand, the website, the content and the campaigns that turn trust into patients.
          </p>

          {actions}
          {statsGrid}
        </div>

        {/* Bottom Carousel Dots */}
        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroImages.map((image, index) => (
            <span
              key={image}
              className={`h-1.5 cursor-pointer rounded-full transition-all duration-200 ${
                index === activeSlide ? 'w-6 bg-primary-orange' : 'w-1.5 bg-white/40'
              }`}
              onClick={() => setActiveSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* Bottom Gradient Border */}
      <div className="relative h-1 w-full bg-gradient-to-r from-[#f56d22] via-[#eab308] via-[#22c55e] to-[#06b6d4] md:absolute md:bottom-0 md:left-0 md:z-30" style={{ backgroundImage: 'linear-gradient(to right, #f56d22 0%, #eab308 20%, #22c55e 60%, #06b6d4 100%)' }} />

      {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
    </div>
  );
};

export default Hero;
