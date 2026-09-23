import React from 'react';

const logos = [
  { src: '/client/aanya_logo.png', alt: 'Aanya Logo' },
  { src: '/client/aryamba_logo.png', alt: 'Aryamba Logo' },
  { src: '/client/sripada_hospital_logo.png', alt: 'Sripada Hospital Logo' },
  { src: '/client/svatantra_logo.png', alt: 'Svatantra Logo' },
  { src: '/client/wmn_logo.png', alt: 'WMN Logo' },
  { src: '/client/hearfon.png', alt: 'HearFon Logo' },
  { src: '/client/tara-dental.png', alt: 'TARA Dental Aesthetics and Wellness Logo' },
  { src: '/client/wisdenClinics.png', alt: 'Wisden Clinics Logo' },
];

const loopLogos = [...logos, ...logos];

const LogoTile: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="flex shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-8 py-4 shadow-[0_4px_12px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.03)]">
    <img src={src} alt={alt} className="max-h-[110px] max-w-[260px] scale-110 object-contain max-sm:max-h-20 max-sm:max-w-[180px]" />
  </div>
);

const ClientLogos: React.FC = () => {
  return (
    <section className="border-b border-slate-100 bg-bg-light py-20 text-center">
      <div className="mb-14 px-8 text-center">
        <h2 className="mb-4 font-serif text-[2.8rem] leading-[1.2] font-semibold text-text-dark">
          Our Health Care <span className="text-primary-orange">Partners</span>
        </h2>
      </div>

      <div
        className="mx-auto w-full max-w-[1400px] overflow-hidden"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 64px, black calc(100% - 64px), transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0, black 64px, black calc(100% - 64px), transparent 100%)' }}
      >
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10">
          {loopLogos.map((logo, index) => (
            <LogoTile key={index} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
