import React, { useRef, useState, useEffect } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Dr. Kavita Rao',
    initial: 'K',
    color: '#be123c',
    location: 'Aanya Hospital',
    flag: '🇮🇳',
    time: '6 days ago',
    text: "Buzziwah built our identity from the ground up — brand, website, content — before we'd even opened our doors. Patients recognise us now, not just find us.",
    tags: ['Bengaluru']
  },
  {
    id: 2,
    name: 'Dr. Venkatesh Rao',
    initial: 'V',
    color: '#0f766e',
    location: 'Sripada Multispeciality Hospital',
    flag: '🇮🇳',
    time: '2 weeks ago',
    text: "Allopathy, Ayurveda and Rehab under one roof was hard to communicate. Buzziwah gave each vertical its own voice while keeping us one Sripada.",
    tags: ['Bengaluru']
  },
  {
    id: 3,
    name: 'Dr. Priya Nair',
    initial: 'P',
    color: '#7e22ce',
    location: 'WMN Doctors',
    flag: '🇮🇳',
    time: '3 weeks ago',
    text: "With 13 doctors, we worried our content would feel repetitive. Buzziwah built distinct content buckets so every doctor's expertise gets its own spotlight.",
    tags: ['Bengaluru']
  },
  {
    id: 4,
    name: 'Dr. Anjali Desai',
    initial: 'A',
    color: '#b45309',
    location: 'Aryamba IVF',
    flag: '🇮🇳',
    time: '1 month ago',
    text: "Buzziwah didn't just get Aryamba noticed — they helped us guide people through real fertility questions, instead of pushing IVF as the only answer.",
    tags: ['Bengaluru']
  },
  {
    id: 5,
    name: 'Dr. Rohan Mehta',
    initial: 'R',
    color: '#1d4ed8',
    location: 'Svatantra',
    flag: '🇮🇳',
    time: '2 months ago',
    text: "Neuro rehab is hard for families to understand. Buzziwah's content finally makes the recovery journey clear before someone even walks through our door.",
    tags: ['Bengaluru']
  }
];

const ReviewsSection: React.FC = () => {
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
      scrollRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white px-8 py-24 text-text-dark" id="reviews">
      <div className="mb-14 text-center">
        <span className="mb-3 block text-[0.8rem] font-bold tracking-[0.1em] text-primary-orange uppercase">
          CLIENT REVIEWS
        </span>
        <h2 className="mb-2 font-serif text-[2.8rem] leading-[1.2] font-semibold text-text-dark max-sm:text-[2.2rem]">
          Real Hospitals. <span className="text-primary-orange">Real Results.</span>
        </h2>
        <p className="mb-6 text-lg text-text-gray">Verified reviews from healthcare leaders</p>

        <div className="flex items-center justify-center gap-3 text-sm text-slate-800">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            ))}
          </div>
          <span><strong>5.0</strong> &middot; Based on 50+ reviews</span>
        </div>
      </div>

      <div className="relative mx-auto mb-12 max-w-[1280px]">
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
          {reviews.map((review) => (
            <div className="flex flex-[0_0_340px] flex-col rounded-xl border border-slate-200 bg-white p-6 [scroll-snap-align:start] max-sm:flex-[0_0_300px]" key={review.id}>
              <div className="mb-4 flex items-center">
                <div
                  className="mr-4 flex h-[42px] w-[42px] items-center justify-center overflow-hidden rounded-full text-lg font-semibold text-white"
                  style={{ backgroundColor: review.color }}
                >
                  <span>{review.initial}</span>
                </div>
                <div className="flex-1">
                  <h4 className="mb-0.5 text-[0.95rem] font-semibold text-blue-600">{review.name}</h4>
                  <span className="flex items-center gap-1 text-xs text-slate-500">{review.flag} {review.location}</span>
                </div>
                <div className="ml-auto">
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>

              <div className="mb-3 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  ))}
                </div>
                <span className="text-xs text-slate-400">{review.time}</span>
              </div>

              <p className="mb-6 flex-1 text-sm leading-normal text-slate-600">{review.text}</p>

              <div className="flex flex-wrap gap-2">
                {review.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-1 text-[0.7rem] font-semibold text-green-800">
                    {tag}
                  </span>
                ))}
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

      <div className="text-center">
        <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-transparent px-7 py-3 text-[0.95rem] font-semibold text-slate-800 transition-all hover:border-slate-400 hover:bg-slate-50">
          Read All Reviews
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;
