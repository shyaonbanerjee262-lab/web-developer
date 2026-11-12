import React, { useState } from 'react';
import { ARCHITECTURE_SCENARIOS } from '../data/content';
import {
  Server,
  ArrowRight,
  Database,
  Cloud,
  CheckCircle,
  Activity,
  Layers,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const ArchitectureVisualizer: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(
    ARCHITECTURE_SCENARIOS[0].id
  );

  const scenario =
    ARCHITECTURE_SCENARIOS.find((s) => s.id === selectedScenarioId) ||
    ARCHITECTURE_SCENARIOS[0];

  return (
    <section id="architecture" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            <span>Enterprise Integration Blueprints</span>
            <span aria-hidden="true">·</span>
            <span>Architecture Simulator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Interactive enterprise systems integration topologies.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Select an enterprise architecture scenario to explore how our India engineering teams bridge on-premises legacy systems with modern cloud event streams.
          </p>
        </div>

        {/* Scenario Selector Tabs (Buttons - interactive filter controls per §1.A) */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 mb-8 max-w-fit">
          {ARCHITECTURE_SCENARIOS.map((sc) => {
            const isActive = sc.id === selectedScenarioId;
            return (
              <button
                key={sc.id}
                type="button"
                onClick={() => setSelectedScenarioId(sc.id)}
                className={`px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {sc.name}
              </button>
            );
          })}
        </div>

        {/* Visual Pipeline Container */}
        <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8">
          {/* Top Info Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {scenario.tagline}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                {scenario.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
                {scenario.description}
              </p>
            </div>

            <div className="flex items-center gap-6 shrink-0 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px] uppercase tracking-wider">
                  Throughput
                </span>
                <span className="font-mono font-bold text-slate-900 dark:text-white tabular-nums text-sm">
                  {scenario.dataThroughput}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px] uppercase tracking-wider">
                  Latency
                </span>
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 tabular-nums text-sm">
                  {scenario.syncLatency}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Topology Diagram (3-Stage Flow) */}
          <div className="py-8">
            <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-center">
              {/* Stage 1: Legacy Core */}
              <div className="lg:col-span-3 p-5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Database className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Stage 01: Core
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Source System
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    {scenario.legacySystem}
                  </p>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/80 dark:border-slate-800">
                  Transaction logs & master data tables
                </div>
              </div>

              {/* Connector 1 */}
              <div className="lg:col-span-1 flex justify-center py-2 lg:py-0">
                <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium">
                  <span className="hidden lg:inline-block">→</span>
                  <span className="lg:hidden">↓</span>
                </div>
              </div>

              {/* Stage 2: Integration Mesh */}
              <div className="lg:col-span-3 p-5 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-md bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    Stage 02: Bus
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Integration & Streaming Spine
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    {scenario.middlewareLayer}
                  </p>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-blue-200/60 dark:border-blue-900/40">
                  CDC replication, schema validation & buffering
                </div>
              </div>

              {/* Connector 2 */}
              <div className="lg:col-span-1 flex justify-center py-2 lg:py-0">
                <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium">
                  <span className="hidden lg:inline-block">→</span>
                  <span className="lg:hidden">↓</span>
                </div>
              </div>

              {/* Stage 3: Modern Cloud */}
              <div className="lg:col-span-3 p-5 rounded-lg bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-md bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    Stage 03: Cloud
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Target Enterprise Apps
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    {scenario.targetCloud}
                  </p>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-emerald-200/60 dark:border-emerald-900/30">
                  Real-time microservices, mobile apps & analytics
                </div>
              </div>
            </div>
          </div>

          {/* Protocols & Key Architectural Benefits */}
          <div className="mt-4 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                Supported Wire Protocols & Encryption
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {scenario.protocols.map((proto, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {proto}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                Enterprise Engineering Guarantees
              </span>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {scenario.keyBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
