import React, { useState } from 'react';
import { DELIVERY_HUBS, ASSETS } from '../data/content';
import {
  MapPin,
  Shield,
  Lock,
  Globe2,
  Clock,
  CheckCircle2,
  Building2,
  Layers,
} from 'lucide-react';

export const DeliveryHubs: React.FC = () => {
  const [activeCity, setActiveCity] = useState<string>(DELIVERY_HUBS[0].city);
  const [imageError, setImageError] = useState(false);

  const selectedHub =
    DELIVERY_HUBS.find((h) => h.city === activeCity) || DELIVERY_HUBS[0];

  return (
    <section id="hubs" className="py-16 md:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            <span>Engineering Presence in India</span>
            <span aria-hidden="true">·</span>
            <span>Delivery Hubs & Compliance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Four specialized technology campuses across India’s premier innovation corridors.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Purpose-built delivery facilities with biometric cleanrooms, enterprise infosec compliance, and overlapping shift schedules for global enterprises.
          </p>
        </div>

        {/* Hubs Tab Navigation (Buttons - interactive filter controls per §1.A) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {DELIVERY_HUBS.map((hub) => {
            const isSelected = hub.city === activeCity;
            return (
              <button
                key={hub.city}
                type="button"
                onClick={() => setActiveCity(hub.city)}
                className={`p-4 text-left rounded-lg border transition-all ${
                  isSelected
                    ? 'bg-slate-50 dark:bg-slate-900 border-blue-600 dark:border-blue-500 shadow-sm ring-1 ring-blue-600/20'
                    : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {hub.state}
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white">
                  {hub.city}
                </div>
                <div className="text-xs font-mono text-blue-600 dark:text-blue-400 tabular-nums mt-0.5">
                  {hub.engineersCount}+ Engineers
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Hub Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Hub Information (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {selectedHub.campusName}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {selectedHub.city} Center of Excellence
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Specialized in {selectedHub.specialization.toLowerCase()}. Housing senior architects and engineering squads with dedicated client team pods and isolated network VLANs.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 bg-white dark:bg-slate-950 rounded-lg border border-slate-200/80 dark:border-slate-800">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">
                    Campus Strength
                  </span>
                  <span className="text-xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
                    {selectedHub.engineersCount} Engineers
                  </span>
                </div>

                <div className="p-3 bg-white dark:bg-slate-950 rounded-lg border border-slate-200/80 dark:border-slate-800">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">
                    Active Global Engagements
                  </span>
                  <span className="text-xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
                    {selectedHub.keyClientsCount} Enterprises
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications - Clean unboxed text with separators (§1.A) */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Audited Facility Certifications & Standards
              </span>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-700 dark:text-slate-300 font-medium">
                {selectedHub.certifications.map((cert, idx) => (
                  <span key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>{cert}</span>
                    {idx < selectedHub.certifications.length - 1 && (
                      <span aria-hidden="true" className="text-slate-300 dark:text-slate-700 ml-2">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image / Cleanroom Infrastructure (5 cols) */}
          <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[320px]">
            {!imageError ? (
              <img
                src={ASSETS.cloudDatacenter}
                alt="IndusLogic enterprise infrastructure and secure server cleanroom in India"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-900 text-white p-6 text-center text-xs">
                Enterprise Cleanroom Infrastructure · Bengaluru
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                Enterprise Cleanroom Standards
              </span>
              <h4 className="text-lg font-bold mt-1">
                Air-Gapped Workstations & Zero-Exfiltration
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Biometric access, MDM encrypted hardware, and 24/7 SIEM monitoring for total intellectual property protection.
              </p>
            </div>
          </div>
        </div>

        {/* Global Timezone Overlap Chart */}
        <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Global Timezone Synchronization Matrix (IST UTC+5:30)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Our squads operate customized shift windows to ensure seamless daily collaboration with your onshore engineering teams.
              </p>
            </div>
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
              No Latency Communication · Slack / Teams / Jira Sync
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-slate-200/80 dark:border-slate-800 space-y-1">
              <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-blue-600" />
                <span>North America (EST / PST)</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                4 to 5 hours synchronous overlap daily for standups, architectural pairing, and PR reviews.
              </p>
              <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
                IST Evening / US Morning Shift
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-slate-200/80 dark:border-slate-800 space-y-1">
              <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>United Kingdom & Europe (GMT / CET)</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                6 to 7 hours near-complete afternoon alignment for uninterrupted sprint execution.
              </p>
              <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
                IST 1:00 PM – 9:00 PM Standard
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-slate-950 rounded-lg border border-slate-200/80 dark:border-slate-800 space-y-1">
              <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>Singapore & Australia (SGT / AEST)</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Full 8-hour co-located working day alignment for Asia-Pacific enterprise hubs.
              </p>
              <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
                IST 8:30 AM – 5:30 PM Alignment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
