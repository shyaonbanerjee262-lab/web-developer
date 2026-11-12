import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap, Globe, Layers } from 'lucide-react';
import { ASSETS } from '../data/content';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onExploreEstimator,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Balanced Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Enterprise Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subtle editorial kicker - No pill box! (§1.A) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-4">
              <span>Enterprise Engineering from India</span>
              <span aria-hidden="true">·</span>
              <span>Dedicated Pods & Systems Integration</span>
              <span aria-hidden="true">·</span>
              <span>SOC 2 & ISO 27001</span>
            </div>

            {/* Main Headline with clamp and text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15] text-balance">
              Streamline enterprise applications and systems integration with India’s elite engineering pods.
            </h1>

            {/* Concrete value proposition copy */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              We engineer mission-critical cloud applications, decouple legacy ERP and CRM monolithic architectures, and orchestrate real-time event streaming pipelines. Backed by verified senior architects and development squads across Bengaluru and Hyderabad.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onExploreEstimator}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                <span>Configure Engineering Pod</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-blue-600 border border-slate-200 dark:border-slate-800"
              >
                <span>Schedule Architecture Review</span>
              </button>
            </div>

            {/* Quick trust assurances - Clean text with separators (§1.A) */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>48h Talent Deployment SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>100% Comprehensive IP Assignment</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>Direct US & EU Timezone Overlap</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset with Fallback (§3.E) */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full h-80 sm:h-96 lg:h-full min-h-[380px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm relative group bg-slate-100 dark:bg-slate-900">
              {!imageError ? (
                <img
                  src={ASSETS.heroHub}
                  alt="IndusLogic Enterprise Engineering Center in Bengaluru India"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center">
                  <Layers className="w-12 h-12 text-blue-400 mb-3" />
                  <p className="font-semibold text-lg">Bengaluru Innovation Center</p>
                  <p className="text-xs text-slate-400 mt-1">1,200+ Enterprise Engineers & Integration Architects</p>
                </div>
              )}

              {/* Scrim overlay and contextual trust caption */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent text-white">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span>Bengaluru Tech Innovation Campus</span>
                  <span className="text-slate-300">1,200+ Vetted Engineers</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Supporting global banking, healthcare & supply chain enterprises
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column KPI Strip below Hero Split (§5.13 & §1.D Tabular-nums) */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-200/80 dark:border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-mono tabular-nums">
                48 Hours
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                Candidate Matching Speed
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Vetted senior engineers interview-ready in 2 days
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-200/80 dark:border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
                99.4%
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                Enterprise SLA Adherence
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Across 140+ active production software deployments
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-200/80 dark:border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-mono tabular-nums">
                58% - 65%
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                TCO Engineering Savings
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Compared to US/EU in-house hiring & infrastructure costs
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-200/80 dark:border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400 font-mono tabular-nums">
                SOC 2 & ISO
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                Cleanroom IP Protection
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                ISO 27001, SOC 2 Type II, and GDPR compliant delivery
              </p>
            </div>
          </div>
        </div>

        {/* Enterprise Logos / Client Credibility Bar */}
        <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 pt-6 border-t border-slate-200 dark:border-slate-800">
          <span className="font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[11px]">
            Trusted by global enterprise engineering organizations:
          </span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 font-medium tracking-tight text-slate-600 dark:text-slate-400 text-sm">
            <span>FinEdge Global</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">/</span>
            <span>TransGlobal Logistics</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">/</span>
            <span>Omnicell Health</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">/</span>
            <span>Apex Cloud Systems</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">/</span>
            <span>NordicPay Enterprise</span>
          </div>
        </div>
      </div>
    </section>
  );
};
