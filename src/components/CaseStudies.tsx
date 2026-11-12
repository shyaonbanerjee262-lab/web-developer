import React, { useState } from 'react';
import { CASE_STUDIES, ASSETS } from '../data/content';
import {
  Quote,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeCaseId, setActiveCaseId] = useState<string>(CASE_STUDIES[0].id);
  const [imageError, setImageError] = useState(false);

  const activeCase =
    CASE_STUDIES.find((c) => c.id === activeCaseId) || CASE_STUDIES[0];

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            <span>Evidence & Proven Outcomes</span>
            <span aria-hidden="true">·</span>
            <span>Enterprise Case Studies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Real enterprise transformations delivered by our Indian engineering centers.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Measurable latency reductions, millions in infrastructure savings, and mission-critical systems deployed without downtime.
          </p>
        </div>

        {/* Case Study Selector (Buttons - interactive filter controls per §1.A) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {CASE_STUDIES.map((cs) => {
            const isSelected = cs.id === activeCaseId;
            return (
              <button
                key={cs.id}
                type="button"
                onClick={() => setActiveCaseId(cs.id)}
                className={`p-4 text-left rounded-lg border transition-all ${
                  isSelected
                    ? 'bg-white dark:bg-slate-950 border-blue-600 dark:border-blue-500 shadow-sm ring-1 ring-blue-600/20'
                    : 'bg-white/60 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                  <span>{cs.clientIndustry}</span>
                  <span aria-hidden="true">·</span>
                  <span>{cs.clientRegion}</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2">
                  {cs.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detail Box */}
        <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                  <span>{activeCase.clientIndustry}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeCase.clientRegion}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {activeCase.title}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      The Architecture Bottleneck:
                    </h4>
                    <p>{activeCase.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      The Engineering Solution:
                    </h4>
                    <p>{activeCase.solution}</p>
                  </div>
                </div>

                {/* Tech Stack list - Clean unboxed text (§1.A) */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Deployed Technologies
                  </span>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                    {activeCase.techStack.map((tech, idx) => (
                      <span key={idx}>
                        {tech}
                        {idx < activeCase.techStack.length - 1 && (
                          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700 ml-2">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Attributable Quote (§1.H) */}
              <div className="mt-8 p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <p className="text-xs italic text-slate-700 dark:text-slate-300 leading-relaxed">
                  "{activeCase.quote.text}"
                </p>
                <div className="mt-2 text-xs font-semibold text-slate-900 dark:text-white">
                  {activeCase.quote.author}
                  <span className="font-normal text-slate-500 dark:text-slate-400 ml-1">
                    · {activeCase.quote.role}, {activeCase.quote.company}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Metrics & Media (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              {/* Media Asset (§3.E) */}
              <div className="h-52 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 relative bg-slate-100 dark:bg-slate-900">
                {!imageError ? (
                  <img
                    src={ASSETS.devSquad}
                    alt="IndusLogic software development squad in India"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-900 text-white p-6 text-center text-xs">
                    Engineering Squad Deployment · Bengaluru
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-slate-950/90 to-transparent text-white text-xs">
                  <span className="font-semibold">Bengaluru Software Development Pod</span>
                  <span className="block text-[11px] text-slate-300">
                    Dedicated agile squad collaborating across timezones
                  </span>
                </div>
              </div>

              {/* 4 Quantitative Impact Metrics (§1.D Tabular-nums & §1.H) */}
              <div className="grid grid-cols-2 gap-3">
                {activeCase.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200/80 dark:border-slate-800"
                  >
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {m.label}
                    </div>
                    <div className="text-xl font-bold font-mono text-slate-900 dark:text-white tabular-nums mt-0.5">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
