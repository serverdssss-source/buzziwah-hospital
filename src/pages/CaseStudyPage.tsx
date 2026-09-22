import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies.find(s => s.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!study) {
    return (
      <>
        <Header />
        <div className="min-h-[60vh] px-8 py-32 text-center">
          <h2>Case Study Not Found</h2>
          <Link to="/" className="font-bold text-primary-orange">&larr; Back to Home</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <article className="min-h-[80vh] bg-bg-light px-8 pt-6 pb-16">
        <div className="mx-auto max-w-[1100px] overflow-hidden rounded-2xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
          <img
            src={study.image}
            alt={study.title}
            className="h-[220px] w-full object-cover object-top sm:h-[320px] md:h-[450px] md:[object-position:var(--desktop-pos)]"
            style={{ '--desktop-pos': study.imagePosition ?? 'top' } as React.CSSProperties}
          />
          <div className="p-12">
            <Link to="/#case-studies" className="mb-6 inline-block text-sm font-semibold text-slate-500">
              &larr; Back to all Case Studies
            </Link>

            <div className="mb-8">
              <span className="text-[0.8rem] font-bold tracking-[0.1em] text-subtitle-teal uppercase">
                {study.tag}
              </span>
              <h1 className="my-2 font-serif text-[2.5rem] leading-[1.2] text-slate-900">
                {study.title}
              </h1>
              <h2 className="text-[1.3rem] font-medium text-primary-orange">
                {study.subtitle}
              </h2>
            </div>

            <div className="text-[1.05rem] leading-relaxed text-slate-600">
              {study.content}
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
};

export default CaseStudyPage;
