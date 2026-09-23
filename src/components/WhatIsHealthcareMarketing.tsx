import React from 'react';

const WhatIsHealthcareMarketing: React.FC = () => {
  return (
    <section className="bg-bg-light px-8 py-24" id="what-is-healthcare-marketing">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-2 items-center gap-16 max-lg:grid-cols-1 max-lg:gap-12">
          
          {/* Left Side: Content */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-10 font-serif text-[2.8rem] leading-[1.2] font-semibold text-text-dark max-md:text-[2.2rem]">
              The Healthcare <br /><span className="text-primary-orange">Marketing Problem</span>
            </h2>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-primary-orange">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
                <p className="mt-2 text-lg leading-relaxed text-slate-700">
                  Generic agencies don’t always understand healthcare communication.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
                <p className="mt-2 text-lg leading-relaxed text-slate-700">
                  Healthcare requires trust, accuracy, empathy and patient-friendly storytelling.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Video */}
          <div className="relative flex aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)]">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="h-full w-full object-cover"
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-primary-orange"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIsHealthcareMarketing;
