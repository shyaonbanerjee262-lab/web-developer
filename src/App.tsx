/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { Estimator } from './components/Estimator';
import { ArchitectureVisualizer } from './components/ArchitectureVisualizer';
import { TalentBrowser } from './components/TalentBrowser';
import { CaseStudies } from './components/CaseStudies';
import { DeliveryHubs } from './components/DeliveryHubs';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RFPModal } from './components/RFPModal';
import { EngagementModel, TalentProfile, TimezoneOption } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isRfpOpen, setIsRfpOpen] = useState<boolean>(false);
  const [rfpInitialData, setRfpInitialData] = useState<{
    model?: EngagementModel;
    teamSize?: number;
    monthlyCost?: number;
    selectedTech?: string[];
    candidateCode?: string;
    candidateName?: string;
    currency?: 'INR' | 'USD';
  }>({});

  // Synchronize dark class on <html> (§1.F Dual-Theme Architecture)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleToggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const handleOpenConsultation = (data?: typeof rfpInitialData) => {
    setRfpInitialData(data || {});
    setIsRfpOpen(true);
  };

  const handleExploreEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProceedFromEstimator = (estimatedDetails: {
    model: EngagementModel;
    teamSize: number;
    monthlyCost: number;
    savings: number;
    selectedTech: string[];
    timezone: TimezoneOption;
    currency?: 'INR' | 'USD';
  }) => {
    setRfpInitialData({
      model: estimatedDetails.model,
      teamSize: estimatedDetails.teamSize,
      monthlyCost: estimatedDetails.monthlyCost,
      selectedTech: estimatedDetails.selectedTech,
      currency: estimatedDetails.currency || 'INR',
    });
    setIsRfpOpen(true);
  };

  const handleScheduleInterview = (profile: TalentProfile) => {
    setRfpInitialData({
      model: 'staff_augmentation',
      candidateCode: profile.code,
      candidateName: profile.name,
      monthlyCost: profile.dailyRateINR * 20,
      currency: 'INR',
    });
    setIsRfpOpen(true);
  };

  const handleSelectSolution = (solutionName: string) => {
    setRfpInitialData({
      model:
        solutionName === 'Dedicated Engineering Pods'
          ? 'dedicated_pod'
          : solutionName === 'Systems & ERP Integration'
          ? 'systems_integration'
          : 'app_development',
    });
    setIsRfpOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors selection:bg-blue-600 selection:text-white">
      {/* Top Bar Header (§2 Top Bar Contract) */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={handleToggleTheme}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onExploreEstimator={handleExploreEstimator}
        />

        {/* 2. Core Capabilities & Bento Layout */}
        <Solutions onSelectSolution={handleSelectSolution} />

        {/* 3. Interactive Pod Sizing & Pricing Estimator */}
        <Estimator onProceedToRFP={handleProceedFromEstimator} />

        {/* 4. Interactive Enterprise Systems Integration Topologies */}
        <ArchitectureVisualizer />

        {/* 5. Vetted Senior Indian Tech Talent Pool */}
        <TalentBrowser onScheduleInterview={handleScheduleInterview} />

        {/* 6. Enterprise Case Studies & Hard Quantitative Proof */}
        <CaseStudies />

        {/* 7. India Delivery Hubs, Infrastructure & Governance */}
        <DeliveryHubs />

        {/* 8. Attributable Executive Testimonials */}
        <Testimonials />

        {/* 9. Direct Consultation & Inquiry Section */}
        <ContactSection />
      </main>

      {/* 10. Quiet Corporate Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive Consultation / Scope Booking Modal */}
      <RFPModal
        isOpen={isRfpOpen}
        onClose={() => setIsRfpOpen(false)}
        initialData={rfpInitialData}
      />
    </div>
  );
}
