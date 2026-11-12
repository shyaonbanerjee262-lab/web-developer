import React from 'react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          {/* Brand Info (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <a
              href="#"
              className="text-lg font-bold tracking-tight text-white inline-block"
            >
              Indus<span className="text-blue-500">Logic</span>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              India's premier enterprise application development and systems integration partner. Accelerating digital transformation, dedicated software engineering pods, and mission-critical cloud integrations for global businesses.
            </p>
            <div className="text-[11px] text-slate-500 space-y-0.5">
              <div>Delivery Hubs: Bengaluru · Hyderabad · Pune · Gurugram</div>
              <div>International Liaison: New York · London</div>
            </div>
          </div>

          {/* Solutions Column (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Engineering Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Dedicated Software Pods
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Enterprise App Modernization
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  Systems & ERP Integration
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  Event-Driven Cloud Streaming
                </a>
              </li>
              <li>
                <a href="#talent" className="hover:text-white transition-colors">
                  Senior Staff Augmentation
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Hubs & Standards (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Hubs & Compliance
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hubs" className="hover:text-white transition-colors">
                  Bengaluru Innovation Campus
                </a>
              </li>
              <li>
                <a href="#hubs" className="hover:text-white transition-colors">
                  Hyderabad Middleware Center
                </a>
              </li>
              <li>
                <a href="#hubs" className="hover:text-white transition-colors">
                  SOC 2 Type II Security
                </a>
              </li>
              <li>
                <a href="#hubs" className="hover:text-white transition-colors">
                  ISO 27001 & GDPR Governance
                </a>
              </li>
              <li>
                <a href="#hubs" className="hover:text-white transition-colors">
                  Timezone Synchronization Matrix
                </a>
              </li>
            </ul>
          </div>

          {/* Engagement (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Engage
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="hover:text-white transition-colors text-left"
                >
                  Schedule Consultation
                </button>
              </li>
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">
                  Scope & Pricing Calculator
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Client Case Studies
                </a>
              </li>
              <li>
                <a href="#talent" className="hover:text-white transition-colors">
                  Verified Talent Pool
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Corporate Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} IndusLogic Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#hubs" className="hover:text-slate-400">Security Whitepaper</a>
            <span>·</span>
            <a href="#contact" className="hover:text-slate-400">Privacy Policy</a>
            <span>·</span>
            <a href="#hubs" className="hover:text-slate-400">SOC 2 Type II Certified</a>
            <span>·</span>
            <a href="#contact" className="hover:text-slate-400">Terms of Engagement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
