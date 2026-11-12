import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Shield, ArrowRight, Download, Clock, IndianRupee } from 'lucide-react';
import { EngagementModel } from '../types';

interface RFPModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    model?: EngagementModel;
    teamSize?: number;
    monthlyCost?: number;
    selectedTech?: string[];
    candidateCode?: string;
    candidateName?: string;
    currency?: 'INR' | 'USD';
  };
}

export const RFPModal: React.FC<RFPModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [engagementType, setEngagementType] = useState<EngagementModel>(
    initialData?.model || 'dedicated_pod'
  );
  const [timeline, setTimeline] = useState('immediate');
  const [budget, setBudget] = useState('25k_50k');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  useEffect(() => {
    if (initialData?.model) {
      setEngagementType(initialData.model);
    }
    if (initialData?.candidateCode) {
      setNotes(
        `Request to interview senior engineer ${initialData.candidateName} (${initialData.candidateCode}).`
      );
    }
  }, [initialData]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!workEmail.trim()) {
      newErrors.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail)) {
      newErrors.workEmail = 'Please provide a valid email address';
    }
    if (!companyName.trim()) newErrors.companyName = 'Company name is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const generatedRef = `IND-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefNumber(generatedRef);
    setIsSubmitted(true);
  };

  const handleDownloadScope = () => {
    const content = `INDUSLOGIC ENTERPRISE ENGINEERING SCOPE
Reference: ${refNumber}
Date: ${new Date().toLocaleDateString()}
Client: ${fullName} (${companyName})
Work Email: ${workEmail}
Engagement Model: ${engagementType}
Timeline: ${timeline}
Budget Bracket: ${budget}
Notes: ${notes || 'Standard Enterprise Discovery'}
Status: Assigned to Principal Solutions Architect (Bengaluru Hub)
SLA Response Time: < 4 business hours`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `IndusLogic-Scope-${refNumber}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 my-8 transition-colors">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-1">
              <span>Technical Discovery & Scope</span>
              <span aria-hidden="true">·</span>
              <span>Confidential NDA Guaranteed</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Schedule Enterprise Technical Discovery
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 mb-6">
              Connect directly with an Enterprise Principal Architect from our Bengaluru Center to review your architecture, backlog, and timeline.
            </p>

            {initialData?.monthlyCost && (
              <div className="mb-5 p-3 rounded-lg bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500 dark:text-slate-400">Configured Squad:</span>
                  <span className="font-semibold text-slate-900 dark:text-white ml-1">
                    {initialData.teamSize} Engineers
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">Est. Investment:</span>
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 tabular-nums ml-1 inline-flex items-center">
                    {initialData.currency === 'USD' ? (
                      <>${initialData.monthlyCost.toLocaleString('en-US')}</>
                    ) : (
                      <>
                        <IndianRupee className="w-3.5 h-3.5 mr-0.5 inline shrink-0" />
                        {initialData.monthlyCost.toLocaleString('en-IN')}
                      </>
                    )}
                    <span className="text-[11px] font-normal text-slate-500 ml-1">/ mo</span>
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-3 py-2 text-xs rounded-lg border bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.fullName
                        ? 'border-red-500'
                        : 'border-slate-200 dark:border-slate-800'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-500 mt-0.5 block">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Corporate Work Email *
                  </label>
                  <input
                    type="email"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="sarah@enterprise.com"
                    className={`w-full px-3 py-2 text-xs rounded-lg border bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.workEmail
                        ? 'border-red-500'
                        : 'border-slate-200 dark:border-slate-800'
                    }`}
                  />
                  {errors.workEmail && (
                    <span className="text-[11px] text-red-500 mt-0.5 block">
                      {errors.workEmail}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Global Logistics"
                    className={`w-full px-3 py-2 text-xs rounded-lg border bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.companyName
                        ? 'border-red-500'
                        : 'border-slate-200 dark:border-slate-800'
                    }`}
                  />
                  {errors.companyName && (
                    <span className="text-[11px] text-red-500 mt-0.5 block">
                      {errors.companyName}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Target Deployment Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="immediate">Immediate (&lt; 2 Weeks)</option>
                    <option value="1_month">Within 1 Month</option>
                    <option value="quarter">Next Quarter Planning</option>
                    <option value="exploratory">Exploratory / Architectural R&D</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Primary Delivery Requirement
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'dedicated_pod', label: 'Dedicated Engineering Squad' },
                    { id: 'systems_integration', label: 'ERP & Systems Integration' },
                    { id: 'app_development', label: 'Custom App Development' },
                    { id: 'staff_augmentation', label: 'Senior Staff Augmentation' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setEngagementType(item.id as EngagementModel)}
                      className={`p-2.5 text-left rounded-lg border transition-all ${
                        engagementType === item.id
                          ? 'border-blue-600 bg-blue-50/60 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Architecture Notes / High-Level Requirements (Optional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Looking to integrate SAP S/4HANA with AWS microservices, or ramp up 4 senior Go engineers for payment switch..."
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
                >
                  <span>Submit Discovery Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 mt-2">
                  <Shield className="w-3.5 h-3.5 text-blue-600" />
                  <span>Strict NDA Protected · Zero-Spam Guarantee</span>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="py-6 text-center space-y-5">
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Discovery Request Confirmed
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                Thank you, {fullName}.
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-md mx-auto">
                Your request has been routed to our Bengaluru Solutions Architecture Lead. We will contact you at <strong className="text-slate-900 dark:text-white">{workEmail}</strong> within 4 business hours.
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-500">Tracking Reference:</span>
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                  {refNumber}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Assigned Delivery Center:</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  Bengaluru Technology Hub
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Guaranteed Response SLA:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  &lt; 4 Business Hours
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleDownloadScope}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200 dark:border-slate-700"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Scope Summary</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
