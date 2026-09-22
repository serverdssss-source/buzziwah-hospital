import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

const CaseStudies: React.FC = () => {

  return (
    <section className="bg-bg-light px-8 py-24 text-text-dark" id="case-studies">
      <div className="mb-16 text-center">
        <span className="mb-3 block text-[0.8rem] font-bold tracking-[0.1em] text-subtitle-teal uppercase">
          THE BIGGER BUZZIWAH STORY
        </span>
        <h2 className="mb-4 font-serif text-[2.8rem] leading-[1.2] font-semibold text-text-dark max-sm:text-[2.2rem]">
          Five Healthcare Brands. <span className="text-primary-orange">Five Different Problems.</span>
        </h2>
        <p className="mx-auto max-w-[750px] text-lg text-text-gray">
          We don't bring the same healthcare strategy to every brand. We look at where the brand is, what is holding it back and what needs to happen next. Then we build the communication around that.
        </p>
      </div>

      <div className="mx-auto mb-12 grid max-w-[1280px] grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {caseStudies.map((study) => (
          <Link
            to={`/case-study/${study.id}`}
            className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white no-underline transition-all hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)]"
            key={study.id}
          >
            <div className="relative h-[220px] w-full">
              <img src={study.image} alt={study.title} className="h-full w-full object-cover object-top" />
              <span className="absolute top-4 left-4 rounded-full bg-teal-600 px-3 py-1.5 text-[0.7rem] font-semibold tracking-wide text-white">
                {study.tag}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <h3 className="mb-2 font-serif text-[1.4rem] leading-snug font-semibold text-slate-900">{study.title}</h3>
              <p className="mb-8 flex-1 text-[0.95rem] leading-relaxed text-slate-500">{study.description}</p>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-[0.8rem] text-slate-400">{study.readTime}</span>
                <span className="font-[inherit] text-sm font-semibold text-primary-orange transition-opacity">
                  Read Case Study &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
