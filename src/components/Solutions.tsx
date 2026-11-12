import React, { useState } from 'react';
import {
  Layers,
  Cpu,
  Workflow,
  Cloud,
  Check,
  ArrowRight,
  ShieldCheck,
  Server,
  Zap,
} from 'lucide-react';
import { ASSETS } from '../data/content';

interface SolutionsProps {
  onSelectSolution: (solutionName: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolution }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="solutions" className="py-16 md:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            <span>Capabilities & Delivery</span>
            <span aria-hidden="true">·</span>
            <span>Enterprise Scale</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Comprehensive engineering services designed for complex enterprise architectures.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            From modernizing legacy monoliths to architecting high-throughput event meshes and dedicated engineering centers in India.
          </p>
        </div>

        {/* Asymmetric Bento Grid (§2.C) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Card 01: Dedicated Pods (Span 7) */}
          <div className="md:col-span-7 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                  01. Dedicated Engineering Pods
                </span>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>Autonomous Squads</span>
                  <span aria-hidden="true">·</span>
                  <span>Agile Sprints</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Full-stack engineering teams embedded directly into your backlog.
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Autonomous, cross-functional squads containing Principal Architects, Senior Full-Stack Engineers, DevOps specialists, and QA Automation leads. Managed by certified Scrum Masters with full visibility in your Jira and GitHub.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  'Daily standups aligned with your local timezone',
                  'Zero ramp-up friction with pre-vetted senior talent',
                  'Bi-weekly sprint demos and burndown accountability',
                  'Transparent source code ownership & commit rights',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Staffed from our Bengaluru & Hyderabad campuses
              </span>
              <button
                type="button"
                onClick={() => onSelectSolution('Dedicated Engineering Pods')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <span>Deploy a Pod</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 02: Systems Integration Command Center (Span 5 - with Image) */}
          <div className="md:col-span-5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col justify-between">
            <div className="h-48 sm:h-56 relative bg-slate-200 dark:bg-slate-800">
              {!imageError ? (
                <img
                  src={ASSETS.systemsIntegration}
                  alt="Enterprise systems integration command suite in India"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-slate-900 text-white text-center">
                  <Workflow className="w-8 h-8 text-blue-400 mb-2" />
                  <p className="text-sm font-semibold">Systems Integration Center</p>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  02. Systems & ERP Integration
                </span>
                <p className="text-xs text-slate-200">
                  SAP · Oracle NetSuite · Salesforce · MuleSoft · Kafka
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Unified enterprise integration pipelines with zero data loss.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Eliminate brittle point-to-point connections. We engineer resilient event meshes, Change Data Capture (CDC) feeds, and bi-directional API orchestrators that keep legacy ERPs in perpetual sync with cloud applications.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Sub-200ms synchronization SLA
                </span>
                <button
                  type="button"
                  onClick={() => onSelectSolution('Systems & ERP Integration')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  <span>Explore Blueprints</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 03: Legacy Monolith Modernization (Span 6) */}
          <div className="md:col-span-6 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                  03. Monolith Modernization
                </span>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>Strangler Fig Pattern</span>
                  <span aria-hidden="true">·</span>
                  <span>Zero Downtime</span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Incremental migration to containerized microservices.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                Avoid multi-million dollar "rip-and-replace" failures. We peel off high-traffic bounded contexts into decoupled Spring Boot or Go microservices deployed on Kubernetes, maintaining data consistency throughout the transition.
              </p>

              <div className="space-y-2 mb-6 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Domain-driven decomposition of Java EE, .NET Framework, & PHP backends</span>
                </div>
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Dual-write verification with automated shadow traffic replay</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Active-active rollbacks with instant failover protection</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Avg. 40% reduction in cloud compute bills
              </span>
              <button
                type="button"
                onClick={() => onSelectSolution('Monolith Modernization')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <span>Request Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 04: Cloud-Native & Event-Driven Architecture (Span 6) */}
          <div className="md:col-span-6 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                  04. Cloud-Native & Event Streams
                </span>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>AWS / GCP / Azure</span>
                  <span aria-hidden="true">·</span>
                  <span>Apache Kafka</span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                High-concurrency infrastructure engineered for 99.999% uptime.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                Architecting resilient multi-region infrastructure that gracefully handles ten-fold traffic spikes. Utilizing Terraform infrastructure-as-code, GitOps via ArgoCD, and comprehensive OpenTelemetry tracing.
              </p>

              <div className="space-y-2 mb-6 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Multi-cloud Kubernetes architecture with auto-scaling node groups</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Sub-millisecond distributed caching with Redis Enterprise & Citus</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>End-to-end observability, SLO monitoring & chaos engineering</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                14,000+ TPS production benchmarked
              </span>
              <button
                type="button"
                onClick={() => onSelectSolution('Cloud-Native & Event Streams')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <span>View Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
