import React, { useRef, useState, useEffect } from 'react';

const hospitals = [
  {
    id: 1,
    name: 'Aanya Hospital',
    location: 'India',
    image: '/aanya.png',
    imagePosition: 'top',
    type: 'MULTI-SPECIALITY',
    flag: '🇮🇳',
    meta1: 'Advanced Care',
    meta1Icon: 'hospital',
    meta2: 'New Launch',
    description: 'A brand-new hospital, launched from zero — identity, website and content built to make patients remember, not just visit.',
    linkText: 'Visit Live Website',
    url: 'https://aanyahospital.com/'
  },
  {
    id: 3,
    name: 'WMN Doctors',
    location: 'Group Practice',
    image: '/WMN.png',
    imagePosition: 'top',
    type: "WOMEN'S HEALTHCARE",
    flag: '🇮🇳',
    meta1: '13 Doctors',
    meta1Icon: 'hospital',
    meta2: '8 Senior Consultants',
    description: '13 doctors, one brand — content built around distinct expertise so no two doctors sound the same.',
    linkText: 'Visit Live Website',
    url: 'https://wmnhealthcareservices.com/'
  },
  {
    id: 5,
    name: 'Svatantra',
    location: 'Neuro Rehab Center',
    image: '/svatantra.png',
    type: 'NEURO REHAB',
    flag: '🇮🇳',
    meta1: 'Specialized Therapy',
    meta1Icon: 'bed',
    meta2: 'Patient Recovery',
    description: 'Reframing neuro rehab as a journey families can understand — not just a list of therapies.',
    linkText: 'Visit Live Website',
    url: 'https://svatantrarehab.com/'
  },
  {
    id: 4,
    name: 'Aryamba IVF',
    location: 'Fertility Center',
    image: '/Aryamba.png',
    imagePosition: 'top',
    type: 'IVF CLINIC',
    flag: '🇮🇳',
    meta1: 'Advanced IVF',
    meta1Icon: 'bed',
    meta2: 'Fertility Care',
    description: 'From building awareness to guiding real fertility decisions — without jumping straight to "you need IVF."',
    linkText: 'Visit Live Website',
    url: 'https://www.aryamba.in/'
  },
  {
    id: 2,
    name: 'Sripada Multispeciality Hospital',
    location: 'India',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop',
    type: 'MULTI-SPECIALITY',
    flag: '🇮🇳',
    meta1: 'Integrated Care',
    meta1Icon: 'hospital',
    meta2: 'Rehab Services',
    description: 'Allopathy, Ayurveda and Rehab — three healthcare worlds, one recognisable brand voice.',
    linkText: 'Visit Live Website',
    url: ''
  }
];

const FeaturedHospitals: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white px-8 py-24 text-text-dark" id="featured-hospitals">
      <div className="mb-14 text-center">
        <h2 className="mb-4 font-serif text-[2.8rem] leading-[1.2] font-semibold text-text-dark max-lg:text-[2.2rem]">
          Featured <span className="text-primary-orange">Hospitals</span>
        </h2>
        <p className="mx-auto max-w-[650px] text-lg text-text-gray">
          World-class hospitals handpicked for quality, accreditation, and patient outcomes
        </p>
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        {showLeftArrow && (
          <button
            className="absolute top-[55%] left-[-1rem] z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] transition-all hover:bg-slate-50 hover:shadow-[0_6px_10px_-1px_rgba(0,0,0,0.15)]"
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
        )}

        <div
          className="flex gap-6 overflow-x-auto py-4 pb-8 [scroll-snap-type:x_mandatory] [scrollbar-width:none] [scroll-behavior:smooth] [&::-webkit-scrollbar]:hidden"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {hospitals.map((hospital) => (
            <div
              className="flex flex-[0_0_320px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] transition-all duration-200 [scroll-snap-align:start] hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] max-sm:flex-[0_0_280px]"
              key={hospital.id}
            >
              <div className="relative h-[200px] w-full">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: hospital.imagePosition ?? 'center' }}
                />
                {hospital.type && (
                  <span className="absolute top-4 left-4 rounded-full bg-slate-900/85 px-3 py-1.5 text-[0.65rem] font-semibold tracking-wide text-white backdrop-blur-sm">
                    {hospital.type}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 font-serif text-[1.15rem] font-semibold text-slate-900">{hospital.name}</h3>

                <p className="mb-6 text-sm leading-normal text-slate-500">
                  {hospital.description}
                </p>

                <div className="mt-auto border-t border-slate-100 pt-4">
                  {hospital.url ? (
                    <a
                      href={hospital.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-primary-orange transition-[gap] hover:gap-2.5"
                    >
                      {hospital.linkText}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                  ) : (
                    <span className="cursor-default text-sm font-semibold text-slate-400">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button
            className="absolute top-[55%] right-[-1rem] z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] transition-all hover:bg-slate-50 hover:shadow-[0_6px_10px_-1px_rgba(0,0,0,0.15)]"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default FeaturedHospitals;
