import React, { useState } from 'react';
import { TALENT_PROFILES } from '../data/content';
import { TalentProfile } from '../types';
import {
  Search,
  CheckCircle,
  Calendar,
  Award,
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  IndianRupee,
} from 'lucide-react';

interface TalentBrowserProps {
  onScheduleInterview: (profile: TalentProfile) => void;
}

export const TalentBrowser: React.FC<TalentBrowserProps> = ({
  onScheduleInterview,
}) => {
  const [filterRole, setFilterRole] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProfiles = TALENT_PROFILES.filter((profile) => {
    const matchesFilter =
      filterRole === 'all' ||
      (filterRole === 'architect' && profile.seniority === 'Principal Architect') ||
      (filterRole === 'backend' && (profile.seniority === 'Lead' || profile.role.includes('Cloud'))) ||
      (filterRole === 'fullstack' && profile.role.includes('Full-Stack')) ||
      (filterRole === 'data' && (profile.role.includes('Data') || profile.role.includes('Middleware')));

    const matchesSearch =
      searchQuery === '' ||
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.primaryStack.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      profile.code.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="talent" className="py-16 md:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
              <span>Verified Indian Tech Talent Pool</span>
              <span aria-hidden="true">·</span>
              <span>Top 1% Senior Engineers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
              Deploy battle-tested architects and engineers within 48 hours.
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Each engineer undergoes algorithmic technical vetting, system architecture evaluations, and security background screening before joining client squads.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack, role, or ID..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Filter Controls (Buttons - functional filter controls per §1.A) */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Specialists' },
            { id: 'architect', label: 'Principal Architects' },
            { id: 'backend', label: 'Lead Backend & Distributed Systems' },
            { id: 'fullstack', label: 'Staff Full-Stack' },
            { id: 'data', label: 'Data & Middleware Engineers' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilterRole(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filterRole === tab.id
                  ? 'bg-slate-900 text-white dark:bg-blue-600 dark:text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Talent Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm"
            >
              <div>
                {/* Header: ID & Seniority - Clean text with separators (§1.A) */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="font-mono font-semibold text-slate-700 dark:text-slate-300">
                    {profile.code}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span>{profile.seniority}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{profile.experienceYears}y exp</span>
                  </div>
                </div>

                {/* Candidate Name & Role */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {profile.name}
                </h3>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                  {profile.role}
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {profile.location}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {profile.availability}
                  </span>
                </div>

                {/* Primary Tech Stack - Clean unboxed text list (§1.A) */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Core Engineering Stacks
                  </span>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {profile.primaryStack.map((tech, idx) => (
                      <span key={idx}>
                        {tech}
                        {idx < profile.primaryStack.length - 1 && (
                          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700 ml-2">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recent Achievement */}
                <div className="mt-4 p-3 bg-white dark:bg-slate-950 rounded-lg border border-slate-200/70 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">
                    Recent Enterprise Milestone:
                  </span>
                  {profile.recentAchievement}
                </div>
              </div>

              {/* Bottom Actions & Rate */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block uppercase tracking-wider">
                    Est. Daily Rate
                  </span>
                  <span className="text-sm font-bold font-mono text-slate-900 dark:text-white tabular-nums flex items-center">
                    <IndianRupee className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mr-0.5 shrink-0" />
                    {profile.dailyRateINR.toLocaleString('en-IN')}
                    <span className="text-[11px] font-normal text-slate-400 ml-1">/ day</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onScheduleInterview(profile)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-md shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
                >
                  <span>Schedule Interview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProfiles.length === 0 && (
          <div className="p-12 text-center bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No matching profiles found for "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setFilterRole('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-blue-600 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
