import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { X, ArrowRight, CheckCircle2, Lock } from 'lucide-react';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 1600);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-[#1c1b1b] border border-[#444748] rounded-xl max-w-lg w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl animate-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-[#444748]/50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <span className="text-xs font-mono uppercase text-[#c4c7c8] tracking-wider">
              Quick Inquiry Dispatch
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#8e9192] hover:text-white p-1 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold text-white font-sans">
            Direct Transmission to Abdelghafaar
          </h3>
          <p className="text-xs sm:text-sm text-[#c4c7c8]">
            Need a rapid architecture assessment, freelance contract, or technical interview? Send a note directly to <span className="text-white font-mono">{personalInfo.email}</span>.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-5 rounded bg-[#201f1f] border border-white text-white flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold font-sans">Dispatched Successfully</span>
              <span className="text-xs text-[#c4c7c8]">We will follow up shortly.</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-mono uppercase text-[#c4c7c8]">
                Your Work Email *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full bg-[#201f1f] text-white placeholder-[#8e9192]/60 px-4 py-2.5 rounded text-sm outline-none border border-[#444748]/50 focus:border-white transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-mono uppercase text-[#c4c7c8]">
                Brief Scope / Note *
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe project requirements, tech stack (e.g., PostgreSQL, Node.js, React 19), or consulting scope..."
                className="w-full bg-[#201f1f] text-white placeholder-[#8e9192]/60 p-3 rounded text-sm outline-none border border-[#444748]/50 focus:border-white resize-none transition-colors"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#8e9192]">
                <Lock className="w-3 h-3 text-white" />
                <span>Direct Secure Channel</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white hover:bg-neutral-200 text-[#131313] font-medium text-xs font-mono uppercase px-5 py-2.5 rounded transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
