import React, { useState, useId } from 'react';
import {
  EngagementModel,
  TimezoneOption,
} from '../types';
import { TECH_STACKS } from '../data/content';
import {
  Calculator,
  Users,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  RotateCcw,
  Clock,
  IndianRupee,
  Briefcase,
  Layers,
} from 'lucide-react';

interface EstimatorProps {
  onProceedToRFP: (estimatedDetails: {
    model: EngagementModel;
    teamSize: number;
    monthlyCost: number;
    savings: number;
    selectedTech: string[];
    timezone: TimezoneOption;
    currency?: 'INR' | 'USD';
  }) => void;
}

export const Estimator: React.FC<EstimatorProps> = ({ onProceedToRFP }) => {
  const modelId = useId();
  const timezoneId = useId();

  // State
  const [model, setModel] = useState<EngagementModel>('dedicated_pod');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [architects, setArchitects] = useState<number>(1);
  const [seniorDevs, setSeniorDevs] = useState<number>(3);
  const [devopsEngineers, setDevopsEngineers] = useState<number>(1);
  const [qaEngineers, setQaEngineers] = useState<number>(1);
  const [selectedTech, setSelectedTech] = useState<string[]>([
    'java',
    'react',
    'aws',
    'kafka',
  ]);
  const [timezone, setTimezone] = useState<TimezoneOption>('us_overlap');
  const [durationMonths, setDurationMonths] = useState<number>(6);

  // Rate constants in INR and USD
  const RATES_MONTHLY_INR = {
    architect: 780000,
    seniorDev: 590000,
    devops: 620000,
    qa: 440000,
  };

  const US_BENCHMARK_RATES_INR = {
    architect: 1980000,
    seniorDev: 1600000,
    devops: 1730000,
    qa: 1150000,
  };

  const RATES_MONTHLY_USD = {
    architect: 9500,
    seniorDev: 7200,
    devops: 7500,
    qa: 5400,
  };

  const US_BENCHMARK_RATES_USD = {
    architect: 24000,
    seniorDev: 19500,
    devops: 21000,
    qa: 14000,
  };

  const totalEngineers = architects + seniorDevs + devopsEngineers + qaEngineers;

  // Monthly cost calculation based on active currency
  const rates = currency === 'INR' ? RATES_MONTHLY_INR : RATES_MONTHLY_USD;
  const benchmarkRates = currency === 'INR' ? US_BENCHMARK_RATES_INR : US_BENCHMARK_RATES_USD;

  const monthlyCost =
    architects * rates.architect +
    seniorDevs * rates.seniorDev +
    devopsEngineers * rates.devops +
    qaEngineers * rates.qa;

  const usMonthlyEquivalent =
    architects * benchmarkRates.architect +
    seniorDevs * benchmarkRates.seniorDev +
    devopsEngineers * benchmarkRates.devops +
    qaEngineers * benchmarkRates.qa;

  const monthlySavings = usMonthlyEquivalent - monthlyCost;
  const savingsPercent = Math.round((monthlySavings / (usMonthlyEquivalent || 1)) * 100);

  const toggleTech = (id: string) => {
    if (selectedTech.includes(id)) {
      if (selectedTech.length > 1) {
        setSelectedTech(selectedTech.filter((t) => t !== id));
      }
    } else {
      setSelectedTech([...selectedTech, id]);
    }
  };

  const handleReset = () => {
    setModel('dedicated_pod');
    setCurrency('INR');
    setArchitects(1);
    setSeniorDevs(3);
    setDevopsEngineers(1);
    setQaEngineers(1);
    setSelectedTech(['java', 'react', 'aws', 'kafka']);
    setTimezone('us_overlap');
    setDurationMonths(6);
  };

  return (
    <section id="estimator" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            <span>Engineering Pod Sizing & Pricing</span>
            <span aria-hidden="true">·</span>
            <span>Real-Time Estimation Tool</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Configure your enterprise pod and calculate immediate engineering efficiency.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Tailor your squad composition, tech stack, and timezone alignment. Compare transparent Indian delivery rates against equivalent US/EU in-house costs.
          </p>
        </div>

        {/* Main Grid: Interactive Controls + Live Estimate Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* 1. Engagement Model Selector */}
            <div>
              <label htmlFor={modelId} className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                1. Select Engagement Model
              </label>
              <div id={modelId} className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'dedicated_pod', label: 'Dedicated Pod', desc: 'Autonomous squad' },
                  { id: 'app_development', label: 'Custom App Dev', desc: 'Full-lifecycle' },
                  { id: 'systems_integration', label: 'Systems & ERP', desc: 'Middleware/APIs' },
                  { id: 'staff_augmentation', label: 'Staff Augmentation', desc: 'Senior specialists' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setModel(item.id as EngagementModel)}
                    className={`p-3 text-left rounded-lg border transition-all ${
                      model === item.id
                        ? 'bg-blue-50/70 dark:bg-blue-950/40 border-blue-600 dark:border-blue-500 text-slate-900 dark:text-white shadow-sm ring-1 ring-blue-600/20'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-semibold">{item.label}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Squad Composition Counters */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  2. Squad Composition & Roles
                </span>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                  Total Squad Size: {totalEngineers} Engineers
                </span>
              </div>

              <div className="space-y-3">
                {/* Architects */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      Principal Solutions Architects
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      12+ yrs exp · Microservices, Event-driven, ERP Integration
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={architects <= 0}
                      onClick={() => setArchitects(Math.max(0, architects - 1))}
                      className="w-8 h-8 flex items-center justify-center rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700"
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-mono font-semibold text-sm tabular-nums text-slate-900 dark:text-white">
                      {architects}
                    </span>
                    <button
                      type="button"
                      disabled={architects >= 3}
                      onClick={() => setArchitects(Math.min(3, architects + 1))}
                      className="w-8 h-8 flex items-center justify-center rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Senior Devs */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      Senior Backend & Full-Stack Engineers
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      6–10 yrs exp · Java, Go, Node, React, Cloud APIs
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={seniorDevs <= 1}
                      onClick={() => setSeniorDevs(Math.max(1, seniorDevs - 1))}
                      className="w-8 h-8 flex items-center justify-center rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700"
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-mono font-semibold text-sm tabular-nums text-slate-900 dark:text-white">
                      {seniorDevs}
                    </span>
                    <button
                      type="button"
                      disabled={seniorDevs >= 10}
                      onClick={() => setSeniorDevs(Math.min(10, seniorDevs + 1))}
                      className="w-8 h-8 flex items-center justify-center rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* DevOps / SRE */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      DevOps / Cloud SRE Specialists
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      7+ yrs exp · Kubernetes, Terraform, AWS/GCP, CI/CD
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={devopsEngineers <= 0}
                      onClick={() => setDevopsEngineers(Math.max(0, devopsEngineers - 1))}
                      className="w-8 h-8 flex items-center justify-center rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700"
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-mono font-semibold text-sm tabular-nums text-slate-900 dark:text-white">
                      {devopsEngineers}
                    </span>
                    <button
                      type="button"
                      disabled={devopsEngineers >= 4}
                      onClick={() => setDevopsEngineers(Math.min(4, devopsEngineers + 1))}
                      className="w-8 h-8 flex items-center justify-center rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* QA Automation */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      QA Automation & Integration Testing Engineers
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      5+ yrs exp · Playwright, Cypress, JMeter, API contract tests
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={qaEngineers <= 0}
                      onClick={() => setQaEngineers(Math.max(0, qaEngineers - 1))}
                      className="w-8 h-8 flex items-center justify-center rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700"
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-mono font-semibold text-sm tabular-nums text-slate-900 dark:text-white">
                      {qaEngineers}
                    </span>
                    <button
                      type="button"
                      disabled={qaEngineers >= 4}
                      onClick={() => setQaEngineers(Math.min(4, qaEngineers + 1))}
                      className="w-8 h-8 flex items-center justify-center rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Tech Stack Multi-select */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  3. Key Enterprise Tech Stack Requirements
                </span>
                <span className="text-xs text-slate-400">
                  {selectedTech.length} selected
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {TECH_STACKS.slice(0, 12).map((tech) => {
                  const isSelected = selectedTech.includes(tech.id);
                  return (
                    <button
                      key={tech.id}
                      type="button"
                      onClick={() => toggleTech(tech.id)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                        isSelected
                          ? 'bg-slate-900 text-white dark:bg-blue-600 dark:text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {tech.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Timezone Overlap Selection */}
            <div>
              <label htmlFor={timezoneId} className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                4. Primary Timezone & Working Window
              </label>
              <div id={timezoneId} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'us_overlap', label: 'US East / West Overlap', sub: '4–5 hours synchronous sprint overlap' },
                  { id: 'eu_overlap', label: 'Europe GMT / CET Overlap', sub: '6–7 hours full afternoon alignment' },
                  { id: 'apac_overlap', label: 'APAC & Australia Overlap', sub: 'Complete 8 hours concurrent working day' },
                  { id: 'round_the_clock', label: '24/7 Follow-the-Sun', sub: 'Continuous multi-shift delivery' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTimezone(item.id as TimezoneOption)}
                    className={`p-3 text-left rounded-lg border transition-all ${
                      timezone === item.id
                        ? 'border-blue-600 dark:border-blue-500 bg-blue-50/60 dark:bg-blue-950/30 text-slate-900 dark:text-white'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-semibold">{item.label}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Reset Button */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset parameters</span>
              </button>
            </div>
          </div>

          {/* Results Summary Column (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Squad Scope & Investment Summary
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {totalEngineers}-Engineer Dedicated Pod
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Based on delivery from our Bengaluru & Hyderabad engineering campuses
                </p>
              </div>

              {/* Currency Selector */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shrink-0 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setCurrency('INR')}
                  className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                    currency === 'INR'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <IndianRupee className="w-3.5 h-3.5" />
                  <span>INR</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                    currency === 'USD'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  USD ($)
                </button>
              </div>
            </div>

            {/* Pricing Comparison Box */}
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  IndusLogic Pod (Monthly)
                </span>
                <span className="text-2xl font-bold font-mono text-slate-900 dark:text-white tabular-nums flex items-center">
                  {currency === 'INR' ? (
                    <>
                      <IndianRupee className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-0.5 shrink-0" />
                      {monthlyCost.toLocaleString('en-IN')}
                    </>
                  ) : (
                    <>${monthlyCost.toLocaleString('en-US')}</>
                  )}
                  <span className="text-xs font-normal text-slate-500 ml-1"> / mo</span>
                </span>
              </div>

              <div className="flex items-baseline justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
                <span>US/EU In-House Baseline</span>
                <span className="font-mono tabular-nums line-through flex items-center">
                  {currency === 'INR' ? (
                    <>
                      <IndianRupee className="w-3 h-3 mr-0.5 shrink-0" />
                      {usMonthlyEquivalent.toLocaleString('en-IN')} / mo
                    </>
                  ) : (
                    <>${usMonthlyEquivalent.toLocaleString('en-US')} / mo</>
                  )}
                </span>
              </div>

              <div className="flex items-baseline justify-between text-xs pt-1">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Projected Monthly Savings
                </span>
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 tabular-nums flex items-center">
                  {currency === 'INR' ? (
                    <>
                      <IndianRupee className="w-3.5 h-3.5 mr-0.5 shrink-0" />
                      {monthlySavings.toLocaleString('en-IN')} ({savingsPercent}%)
                    </>
                  ) : (
                    <>${monthlySavings.toLocaleString('en-US')} ({savingsPercent}%)</>
                  )}
                </span>
              </div>
            </div>

            {/* Operational Specifications (Tabular nums & clean typography) */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  Deployment Ramp-up
                </span>
                <span className="font-medium text-slate-900 dark:text-white">
                  5–7 business days to Sprint 1
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                  Included Management
                </span>
                <span className="font-medium text-slate-900 dark:text-white">
                  Dedicated Agile Scrum Master & TAM
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-600" />
                  Security Standard
                </span>
                <span className="font-medium text-slate-900 dark:text-white">
                  SOC 2 Cleanroom, MDM, VPN Tunnel
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  Risk Mitigation
                </span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  2-Week Risk-Free Trial Guarantee
                </span>
              </div>
            </div>

            {/* CTA: Lock In Estimate */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() =>
                  onProceedToRFP({
                    model,
                    teamSize: totalEngineers,
                    monthlyCost,
                    savings: monthlySavings,
                    selectedTech,
                    timezone,
                    currency,
                  })
                }
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                <span>Lock In Scope & Book Technical Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                No credit card required. Proposal reviewed by a Principal Architect within 4 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
