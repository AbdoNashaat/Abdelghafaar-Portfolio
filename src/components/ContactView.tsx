import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Copy,
  Check,
  Calendar,
  Lock,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Clock,
  Phone,
  Mail,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

interface ContactViewProps {
  onOpenQuickInquiry?: () => void;
}

export const ContactView: React.FC<ContactViewProps> = () => {
  const [cairoTime, setCairoTime] = useState<string>('--:--:--');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Simplified Form State (Non-technical friendly)
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [calModalOpen, setCalModalOpen] = useState(false);

  // Live Cairo Clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Cairo',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        setCairoTime(formatter.format(now));
      } catch (e) {
        setCairoTime('14:30:00');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-16 gap-12 md:gap-16">
      {/* Top Headline & Welcoming Tone */}
      <section className="flex flex-col gap-4 max-w-4xl">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span className="text-xs font-mono uppercase tracking-wider text-[#c4c7c8]">
            Get In Touch // Direct Collaboration
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-none font-sans">
          Let's collaborate on something extraordinary.
        </h1>

        <p className="text-base sm:text-lg text-[#c7c6c6] max-w-2xl mt-1 leading-relaxed">
          Have an idea, project, or role to discuss? Reach out below. I welcome conversations with founders, product leaders, agencies, and teams seeking full-stack engineering and systems expertise.
        </p>
      </section>

      {/* Main Operational Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Access & Telemetry (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Availability Status Card */}
          <div className="bg-[#1c1b1b] p-6 rounded-xl border border-[#444748]/50 flex flex-col gap-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-[#c4c7c8] tracking-wider">
                Availability Status
              </span>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#353534] border border-[#444748]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                <span className="text-[10px] font-mono uppercase text-white font-medium">
                  Active
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-lg font-medium text-white font-sans">
                Open for New Engagements
              </span>
              <p className="text-xs sm:text-sm text-[#c4c7c8] leading-relaxed">
                Currently open for freelance consulting, full-stack contracts, and permanent roles. Typical response time is under 24 hours.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-[#201f1f] p-3 rounded border border-[#444748]/30">
                <span className="text-[10px] font-mono uppercase text-[#8e9192] block">
                  Avg. Response
                </span>
                <span className="text-sm font-mono text-white font-medium mt-0.5 inline-block">
                  Within 24h
                </span>
              </div>

              <div className="bg-[#201f1f] p-3 rounded border border-[#444748]/30">
                <span className="text-[10px] font-mono uppercase text-[#8e9192] block">
                  Client Satisfaction
                </span>
                <span className="text-sm font-mono text-white font-medium mt-0.5 inline-block">
                  99.8% CSAT
                </span>
              </div>
            </div>
          </div>

          {/* Coordinates & Live Timezone Sensor (Cairo) */}
          <div className="bg-[#1c1b1b] p-6 rounded-xl border border-[#444748]/50 flex flex-col gap-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-[#c4c7c8] tracking-wider">
                Base of Operations
              </span>
              <Clock className="w-4 h-4 text-[#8e9192]" />
            </div>

            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xl font-medium text-white font-sans block">
                  Cairo, Egypt
                </span>
                <span className="text-xs font-mono text-[#c4c7c8] uppercase tracking-wider">
                  Eastern European Time • UTC+2/3
                </span>
              </div>

              <div className="text-right">
                <span className="text-base font-mono text-white font-semibold tabular-nums block">
                  {cairoTime} CAI
                </span>
                <span className="text-[10px] font-mono text-[#8e9192] block">
                  Live Station Time
                </span>
              </div>
            </div>
          </div>

          {/* Direct Email & Phone Channels */}
          <div className="bg-[#1c1b1b] p-6 rounded-xl border border-[#444748]/50 flex flex-col gap-4 shadow-sm">
            <span className="text-xs font-mono uppercase text-[#c4c7c8] tracking-wider">
              Direct Contact Details
            </span>

            {/* Email */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#201f1f] p-3 rounded border border-[#444748]/40">
              <div className="flex items-center gap-2.5 min-w-0 pl-1">
                <Mail className="w-4 h-4 text-[#8e9192] shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white truncate select-all">
                  {personalInfo.email}
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="shrink-0 flex items-center justify-center gap-1.5 bg-[#3a3939] hover:bg-[#353534] text-white text-xs font-mono uppercase px-3 py-1.5 rounded transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#10b981]" />
                    <span className="text-[#10b981]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#8e9192]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#201f1f] p-3 rounded border border-[#444748]/40">
              <div className="flex items-center gap-2.5 min-w-0 pl-1">
                <Phone className="w-4 h-4 text-[#8e9192] shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white truncate select-all">
                  {personalInfo.phone}
                </span>
              </div>

              <button
                onClick={handleCopyPhone}
                type="button"
                className="shrink-0 flex items-center justify-center gap-1.5 bg-[#3a3939] hover:bg-[#353534] text-white text-xs font-mono uppercase px-3 py-1.5 rounded transition-colors cursor-pointer"
                title="Copy phone to clipboard"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#10b981]" />
                    <span className="text-[#10b981]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#8e9192]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Discovery Session (30-min Calibration) */}
          <div className="bg-[#1c1b1b] p-6 rounded-xl border border-[#444748]/50 flex flex-col justify-between gap-4 shadow-sm">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-white" />
                <span className="text-xs font-mono uppercase text-white tracking-wider">
                  Discovery Call
                </span>
              </div>
              <h3 className="text-lg font-medium text-white font-sans mt-0.5">
                Book 30-min Intro
              </h3>
              <p className="text-xs sm:text-sm text-[#c7c6c6] leading-relaxed">
                Prefer to talk directly? Schedule a friendly 30-minute video or phone conversation to discuss requirements.
              </p>
            </div>

            <button
              onClick={() => setCalModalOpen(true)}
              className="group flex items-center justify-between w-full bg-[#201f1f] hover:bg-[#2a2a2a] p-3.5 rounded border border-[#444748]/40 transition-colors text-white cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#353534] flex items-center justify-center">
                  <Clock className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xs font-mono text-[#c4c7c8] group-hover:text-white">
                  Pick a Convenient Slot
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-[#8e9192] group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Verified Network Registry */}
          <div className="bg-[#1c1b1b] p-6 rounded-xl border border-[#444748]/50 flex flex-col gap-3 shadow-sm">
            <span className="text-xs font-mono uppercase text-[#c4c7c8] tracking-wider">
              Professional Profiles
            </span>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-[#201f1f] hover:bg-[#2a2a2a] text-[#c4c7c8] hover:text-white transition-colors border border-[#444748]/30"
              >
                <span className="text-xs font-mono uppercase">GitHub</span>
                <ExternalLink className="w-3 h-3 text-[#8e9192]" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-[#201f1f] hover:bg-[#2a2a2a] text-[#c4c7c8] hover:text-white transition-colors border border-[#444748]/30"
              >
                <span className="text-xs font-mono uppercase">LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-[#8e9192]" />
              </a>

              <a
                href="https://read.cv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-[#201f1f] hover:bg-[#2a2a2a] text-[#c4c7c8] hover:text-white transition-colors border border-[#444748]/30"
              >
                <span className="text-xs font-mono uppercase">Read.cv</span>
                <ExternalLink className="w-3 h-3 text-[#8e9192]" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-[#201f1f] hover:bg-[#2a2a2a] text-[#c4c7c8] hover:text-white transition-colors border border-[#444748]/30"
              >
                <span className="text-xs font-mono uppercase">Twitter / X</span>
                <ExternalLink className="w-3 h-3 text-[#8e9192]" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Simplified, Stakeholder-Friendly Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#1c1b1b] p-6 sm:p-8 rounded-xl border border-[#444748]/50 shadow-md flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#c4c7c8]">
                Contact Form
              </span>
              <span className="text-xs font-mono uppercase text-[#8e9192]">
                Direct Message
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white font-sans">
              Send a Message
            </h2>
            <p className="text-xs sm:text-sm text-[#c7c6c6] leading-relaxed">
              Fill in your details below and I will get back to you promptly. No technical jargon required.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Full Name & Work Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono uppercase text-[#c4c7c8]" htmlFor="client-name">
                  Your Name *
                </label>
                <input
                  id="client-name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. John Doe or Sarah Jenkins"
                  className="w-full bg-[#201f1f] text-white placeholder-[#8e9192]/60 px-4 py-3 rounded text-sm outline-none focus:bg-[#2a2a2a] border border-[#444748]/50 focus:border-white transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono uppercase text-[#c4c7c8]" htmlFor="client-email">
                  Your Email *
                </label>
                <input
                  id="client-email"
                  type="email"
                  required
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-[#201f1f] text-white placeholder-[#8e9192]/60 px-4 py-3 rounded text-sm outline-none focus:bg-[#2a2a2a] border border-[#444748]/50 focus:border-white transition-colors"
                />
              </div>
            </div>

            {/* Organization / Company & Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono uppercase text-[#c4c7c8]" htmlFor="client-company">
                  Company / Organization (Optional)
                </label>
                <input
                  id="client-company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Acme Corp or Studio"
                  className="w-full bg-[#201f1f] text-white placeholder-[#8e9192]/60 px-4 py-3 rounded text-sm outline-none focus:bg-[#2a2a2a] border border-[#444748]/50 focus:border-white transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono uppercase text-[#c4c7c8]" htmlFor="client-subject">
                  Subject (Optional)
                </label>
                <input
                  id="client-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. New Web App, Consultation, or Hiring"
                  className="w-full bg-[#201f1f] text-white placeholder-[#8e9192]/60 px-4 py-3 rounded text-sm outline-none focus:bg-[#2a2a2a] border border-[#444748]/50 focus:border-white transition-colors"
                />
              </div>
            </div>

            {/* Scope / Message textarea */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase text-[#c4c7c8]" htmlFor="project-message">
                  How can I help you? *
                </label>
                <span className="text-xs font-mono text-[#8e9192]">
                  {message.length} / 1200
                </span>
              </div>
              <textarea
                id="project-message"
                rows={6}
                required
                maxLength={1200}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your product, timeline, current challenges, or whatever you have in mind..."
                className="w-full bg-[#201f1f] text-white placeholder-[#8e9192]/60 p-4 rounded text-sm outline-none focus:bg-[#2a2a2a] border border-[#444748]/50 focus:border-white resize-none transition-colors leading-relaxed"
              />
            </div>

            {/* Command Bar: Privacy note & Transmit Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-[#c4c7c8] text-xs font-mono">
                <Lock className="w-3.5 h-3.5 text-white" />
                <span>Your information is kept strictly confidential</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-white hover:bg-neutral-200 text-[#131313] font-medium text-sm px-8 py-3.5 rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dynamic Success Confirmation Banner */}
            {isSubmitted && (
              <div className="p-4 rounded bg-[#201f1f] border border-white/60 text-white flex items-start gap-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white font-sans">
                    Message Sent Successfully
                  </span>
                  <span className="text-xs text-[#c4c7c8] mt-0.5 leading-relaxed">
                    Thank you, {fullName || 'there'}. I have received your message and will respond to {workEmail} within 24 hours.
                  </span>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Non-Technical Friendly Inquiries FAQ */}
      <section className="flex flex-col gap-6 pt-8 border-t border-[#444748]/40">
        <div className="flex flex-col gap-1 max-w-xl">
          <span className="text-xs font-mono uppercase tracking-wider text-[#c4c7c8]">
            FAQ // Working Together
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white font-sans">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#1c1b1b] p-6 rounded-xl border border-[#444748]/50 flex flex-col gap-3 shadow-sm">
            <div className="w-7 h-7 rounded bg-[#201f1f] border border-[#444748]/50 flex items-center justify-center text-white text-xs font-mono font-semibold">
              01
            </div>
            <h3 className="text-lg font-semibold text-white font-sans">
              How do we start?
            </h3>
            <p className="text-xs sm:text-sm text-[#c7c6c6] leading-relaxed">
              We typically start with a brief introductory call or email to understand your goals, timeline, and expectations. From there, I outline clear milestones and a proposed scope.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1c1b1b] p-6 rounded-xl border border-[#444748]/50 flex flex-col gap-3 shadow-sm">
            <div className="w-7 h-7 rounded bg-[#201f1f] border border-[#444748]/50 flex items-center justify-center text-white text-xs font-mono font-semibold">
              02
            </div>
            <h3 className="text-lg font-semibold text-white font-sans">
              Project Timelines
            </h3>
            <p className="text-xs sm:text-sm text-[#c7c6c6] leading-relaxed">
              Short focused deliverables and prototypes typically take 1–3 weeks, while comprehensive web applications and ERP solutions span 4–8 weeks with continuous progress updates.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1c1b1b] p-6 rounded-xl border border-[#444748]/50 flex flex-col gap-3 shadow-sm">
            <div className="w-7 h-7 rounded bg-[#201f1f] border border-[#444748]/50 flex items-center justify-center text-white text-xs font-mono font-semibold">
              03
            </div>
            <h3 className="text-lg font-semibold text-white font-sans">
              Collaboration & Communication
            </h3>
            <p className="text-xs sm:text-sm text-[#c7c6c6] leading-relaxed">
              I collaborate smoothly via Slack, Microsoft Teams, WhatsApp, or email, presenting work visually and in plain English so non-technical stakeholders stay in full control.
            </p>
          </div>
        </div>
      </section>

      {/* Cal.com Scheduling Calibration Modal */}
      {calModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#1c1b1b] border border-[#444748] rounded-xl max-w-lg w-full p-6 flex flex-col gap-6 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-[#444748]/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-white" />
                <h3 className="text-lg font-semibold text-white font-sans">
                  Book 30-min Introductory Call
                </h3>
              </div>
              <button
                onClick={() => setCalModalOpen(false)}
                className="text-[#8e9192] hover:text-white text-sm font-mono cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#c4c7c8] leading-relaxed">
              Direct calendar reservation with Abdelghafaar Nashaat (Cairo, UTC+2). Select a preferred slot below or reach out via email:
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-3 rounded bg-[#201f1f] border border-[#444748]/40 hover:border-white transition-colors cursor-pointer text-center">
                <div className="text-white font-medium">Tomorrow</div>
                <div className="text-[#8e9192] mt-0.5">14:00 – 14:30 CAI</div>
              </div>
              <div className="p-3 rounded bg-[#201f1f] border border-[#444748]/40 hover:border-white transition-colors cursor-pointer text-center">
                <div className="text-white font-medium">Thursday</div>
                <div className="text-[#8e9192] mt-0.5">16:00 – 16:30 CAI</div>
              </div>
              <div className="p-3 rounded bg-[#201f1f] border border-[#444748]/40 hover:border-white transition-colors cursor-pointer text-center">
                <div className="text-white font-medium">Next Monday</div>
                <div className="text-[#8e9192] mt-0.5">11:00 – 11:30 CAI</div>
              </div>
              <div className="p-3 rounded bg-[#201f1f] border border-[#444748]/40 hover:border-white transition-colors cursor-pointer text-center">
                <div className="text-white font-medium">Next Tuesday</div>
                <div className="text-[#8e9192] mt-0.5">15:00 – 15:30 CAI</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#444748]/40">
              <a
                href={`mailto:${personalInfo.email}?subject=Introductory%20Call%20Request`}
                className="text-xs font-mono text-white underline underline-offset-4"
              >
                Send calendar invite by email
              </a>
              <button
                onClick={() => setCalModalOpen(false)}
                className="bg-white text-[#131313] px-4 py-2 rounded text-xs font-mono font-medium hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
