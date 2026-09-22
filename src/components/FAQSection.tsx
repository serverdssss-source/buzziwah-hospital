import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Do you specialize only in healthcare?',
    answer: 'Yes. We focus 100% on hospitals, clinics, and medical networks. This means we understand patient journeys, HIPAA compliance, and medical terminology right from the start without needing a learning curve.'
  },
  {
    id: 2,
    question: 'How long does a typical website redesign take?',
    answer: 'A comprehensive hospital website typically takes 12 to 16 weeks from discovery to launch. This includes UI/UX design, custom development, medical copywriting, and rigorous security testing.'
  },
  {
    id: 3,
    question: 'Do you provide ongoing SEO and maintenance?',
    answer: 'Absolutely. We offer complete post-launch support, including continuous SEO optimization, technical maintenance, security updates, and performance monitoring to ensure steady patient acquisition.'
  },
  {
    id: 4,
    question: 'Are your websites HIPAA compliant?',
    answer: 'Yes, security is our top priority. All our websites are built on secure architectures with SSL encryption, HIPAA-compliant forms, and secure servers to protect patient data.'
  },
  {
    id: 5,
    question: 'What is the typical cost for a hospital website?',
    answer: 'Costs vary depending on the scale of the hospital network and the required functionality (e.g., patient portals, doctor directories). Schedule a call with us to get a tailored estimate for your project.'
  },
  {
    id: 6,
    question: 'How do I get started?',
    answer: 'Simply reach out via our contact form or book a call. Our strategists will evaluate your current digital presence and propose a tailored plan for your hospital brand.'
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-bg-light px-8 py-24 text-text-dark" id="faq">
      <div className="mb-14 text-center">
        <span className="mb-3 block text-[0.8rem] font-bold tracking-[0.1em] text-subtitle-teal uppercase">
          BEFORE YOU ASK
        </span>
        <h2 className="mb-4 font-serif text-[2.8rem] leading-[1.2] font-semibold text-text-dark max-sm:text-[2.2rem]">
          Questions hospitals <span className="text-primary-orange">ask us first</span>
        </h2>
        <p className="mb-6 text-lg text-text-gray">The honest answers — the same ones our strategists give on the first call.</p>
      </div>

      <div className="mx-auto mb-12 flex max-w-[800px] flex-col gap-4">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={faq.id}
              className={`overflow-hidden rounded-lg border bg-white transition-all duration-300 ${isActive ? 'border-teal-600' : 'border-slate-200'}`}
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left font-[inherit]"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isActive}
              >
                <span className="text-base font-semibold text-slate-800">{faq.question}</span>
                <span className="text-2xl leading-none font-normal text-primary-orange">{isActive ? '−' : '+'}</span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: isActive ? '200px' : '0px', opacity: isActive ? 1 : 0 }}
              >
                <p className="m-0 px-6 pb-6 text-[0.95rem] leading-relaxed text-slate-500">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-transparent px-7 py-3 text-[0.95rem] font-semibold text-slate-800 transition-all hover:border-slate-400 hover:bg-slate-50">
          See all questions &rarr;
        </button>
      </div>
    </section>
  );
};

export default FAQSection;
