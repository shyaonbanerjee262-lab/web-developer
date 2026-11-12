import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        'IndusLogic delivered an elite 8-person engineering pod that integrated seamlessly into our New York core banking sprint teams. Their architects decoupled our legacy payment ledger within six months, reducing our transaction processing latency by 83% while maintaining zero downtime.',
      author: 'Marcus Vance',
      role: 'VP of Platform Engineering',
      company: 'FinEdge Global Technologies (New York)',
      metric: '-83% Processing Latency',
    },
    {
      quote:
        'Finding senior Kafka and SAP S/4HANA integration engineers in Central Europe had become a year-long roadblock. IndusLogic matched three principal architects from Bengaluru and Hyderabad in under 48 hours. They transformed our freight dispatch architecture into a live event stream.',
      author: 'Elena Rostova',
      role: 'Chief Technology Officer',
      company: 'TransGlobal Logistics Europe (Frankfurt)',
      metric: '22,000 Real-Time Shipments / Day',
    },
    {
      quote:
        'The depth of technical rigor and security consciousness from IndusLogic exceeded our expectations for healthcare systems. They handled complex FHIR/HL7 telemetry pipelines across 34 hospital networks with 100% compliance on every HIPAA and SOC 2 audit milestone.',
      author: 'Dr. Christopher Barnes',
      role: 'Head of Digital Health Infrastructure',
      company: 'Omnicell Health Systems (Boston)',
      metric: '4.2M Patient Records Synchronized',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            <span>Executive Trust</span>
            <span aria-hidden="true">·</span>
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Trusted by engineering leadership worldwide.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Hear directly from VPs of Engineering and CTOs who scaled their enterprise development and integration capabilities with our teams in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm"
            >
              <div>
                <Quote className="w-6 h-6 text-blue-600/40 mb-4" />
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 tabular-nums mb-1">
                  {t.metric}
                </div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">
                  {t.author}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {t.role}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
