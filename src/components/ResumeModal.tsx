import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  FileText, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Instagram, 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  HeartHandshake, 
  UserCheck 
} from 'lucide-react';
import { downloadResumePDF } from '../utils/generateResumePdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    try {
      downloadResumePDF();
      setDownloaded(true);
      setTimeout(() => {
        setDownloading(false);
        setTimeout(() => setDownloaded(false), 2500);
      }, 600);
    } catch (e) {
      console.error(e);
      setDownloading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 overflow-y-auto bg-black/85 backdrop-blur-md">
          {/* Backdrop Click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-[#0d0d12] border border-[#e5c378]/35 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]"
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 border-b border-white/[0.08] bg-[#111116] shrink-0">
              <div className="flex items-center gap-2.5">
                <FileText size={16} className="text-[#e5c378]" />
                <span className="font-['Cinzel',serif] text-sm uppercase tracking-wider text-white font-medium">
                  Curriculum Vitae / Resume
                </span>
                <span className="text-[10px] font-mono text-[#e5c378] bg-[#e5c378]/10 px-2 py-0.5 rounded-full border border-[#e5c378]/20">
                  STANDARD A4 PDF
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Instant Download Button */}
                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className="bg-[#e5c378] hover:bg-[#f3dc9e] text-black font-medium text-xs font-mono uppercase tracking-[0.12em] px-3.5 sm:px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm cursor-pointer disabled:opacity-75"
                >
                  {downloaded ? (
                    <>
                      <Check size={14} className="stroke-[2.5]" />
                      <span>Downloaded!</span>
                    </>
                  ) : downloading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      >
                        <Download size={14} />
                      </motion.div>
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Download size={14} />
                      <span>Download PDF</span>
                    </>
                  )}
                </button>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 text-[#9e9ea8] hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors cursor-pointer"
                  title="Close resume"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Scrollable Document Content */}
            <div className="p-6 sm:p-9 overflow-y-auto space-y-7 text-left font-['Space_Grotesk',sans-serif]">
              
              {/* ================================================= */}
              {/* 1. CONTACT INFORMATION                            */}
              {/* ================================================= */}
              <div className="border-b border-white/[0.08] pb-5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                  <div>
                    <h1 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-medium text-white tracking-wide uppercase">
                      K. Hakesh Reddy
                    </h1>
                    <p className="text-xs sm:text-sm font-mono tracking-widest text-[#e5c378] uppercase mt-1">
                      Documentary Filmmaker &amp; Film Director
                    </p>
                  </div>

                  {/* Contact Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs font-mono text-[#9b9ba8]">
                    <div className="flex items-center gap-2">
                      <Mail size={12} className="text-[#e5c378] shrink-0" />
                      <a href="mailto:hakesh100@gmail.com" className="hover:text-[#e5c378] transition-colors truncate">
                        hakesh100@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={12} className="text-[#e5c378] shrink-0" />
                      <a href="tel:+916360171737" className="hover:text-[#e5c378] transition-colors">
                        +91 63601 71737
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-[#e5c378] shrink-0" />
                      <span>Bengaluru, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe size={12} className="text-[#e5c378] shrink-0" />
                      <span className="text-[#e5c378]">hakesh.int</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ================================================= */}
              {/* 2. PROFESSIONAL SUMMARY                           */}
              {/* ================================================= */}
              <div>
                <h2 className="font-['Cinzel',serif] text-xs font-medium uppercase tracking-[0.2em] text-[#e5c378] mb-2.5 flex items-center gap-2">
                  <UserCheck size={14} className="text-[#e5c378]" />
                  <span>Professional Summary</span>
                </h2>
                <div className="bg-[#121218]/90 border border-white/[0.06] rounded-xl p-4 sm:p-5">
                  <p className="text-xs sm:text-sm text-[#b8b8c4] leading-relaxed font-normal">
                    Results-driven <strong className="text-white font-medium">Documentary Filmmaker and Film Director</strong> whose creative foundation has been built through college filmmaking projects and competitive film festivals, including the <strong className="text-[#e5c378] font-medium">India Film Project (IFP 50-Hour Challenge)</strong> and <strong className="text-[#e5c378] font-medium">35mm film challenges</strong>. Proven ability to direct under extreme time limits, conduct sensitive on-ground non-actor interviews, and stage authentic observational cinema using natural available light. Seeking directorial commissions and non-fiction collaborations to tell meaningful, visually rhythmic human stories.
                  </p>
                </div>
              </div>

              {/* ================================================= */}
              {/* 3. WORK EXPERIENCE (Reverse-Chronological)        */}
              {/* ================================================= */}
              <div>
                <h2 className="font-['Cinzel',serif] text-xs font-medium uppercase tracking-[0.2em] text-[#e5c378] mb-3 flex items-center gap-2">
                  <Briefcase size={14} className="text-[#e5c378]" />
                  <span>Work Experience &amp; Key Projects</span>
                </h2>

                <div className="space-y-4">
                  {/* IFP & 35mm Film Competitions */}
                  <div className="bg-[#121218]/90 border border-white/[0.06] rounded-xl p-4 sm:p-5 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/[0.05] pb-2.5">
                      <div>
                        <h3 className="text-sm sm:text-base font-medium text-white font-['Cinzel',serif]">
                          Film Director &amp; Film Production Lead
                        </h3>
                        <p className="text-xs text-[#a0a0ab]">
                          IFP (India Film Project 50-Hour Challenge) &amp; 35mm Film Competitions
                        </p>
                      </div>
                      <span className="text-xs font-mono text-[#e5c378] shrink-0 font-medium">
                        2024 – 2026
                      </span>
                    </div>

                    <ul className="text-xs sm:text-[13px] text-[#a5a5b0] space-y-2 list-disc pl-4 leading-relaxed font-normal">
                      <li>
                        <strong className="text-[#dcdce5] font-medium">Competed in the nationally acclaimed IFP (India Film Project) 50-Hour Filmmaking Challenge</strong>, successfully scripting, directing, shooting, and cutting a complete film under strict 50-hour countdown constraints.
                      </li>
                      <li>
                        <strong className="text-[#dcdce5] font-medium">Directed short documentary visual studies for 35mm film challenges</strong>, earning recognition for distinct visual pacing, lighting geometry, and observational depth.
                      </li>
                      <li>
                        <strong className="text-[#dcdce5] font-medium">Led end-to-end film production operations</strong>, coordinating on-ground unit logistics, equipment rigging, rapid crisis management, and zero-latency post-production workflows.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ================================================= */}
              {/* 4. EDUCATION                                      */}
              {/* ================================================= */}
              <div>
                <h2 className="font-['Cinzel',serif] text-xs font-medium uppercase tracking-[0.2em] text-[#e5c378] mb-3 flex items-center gap-2">
                  <GraduationCap size={14} className="text-[#e5c378]" />
                  <span>Education</span>
                </h2>

                <div className="bg-[#121218]/90 border border-white/[0.06] rounded-xl p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/[0.05] pb-2">
                    <div>
                      <h3 className="text-sm sm:text-base font-medium text-white font-['Cinzel',serif]">
                        B.Sc. in Digital Filmmaking
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#e5c378] bg-[#e5c378]/10 px-2.5 py-1 rounded border border-[#e5c378]/25 shrink-0 font-medium">
                      Currently in 5th Semester
                    </span>
                  </div>
                  <p className="text-xs text-[#9a9aa5] mt-2.5 leading-relaxed">
                    Jain (Deemed-to-be University)  ·  Bengaluru, India
                  </p>
                  <p className="text-xs italic text-[#777782] mt-1">
                    Core Coursework: Non-Fiction &amp; Documentary Cinema Directing, Digital Cinematography, Screenplay Architecture, Environmental Audio Capture, Film Production.
                  </p>
                </div>
              </div>

              {/* ================================================= */}
              {/* 5. SKILLS (Dedicated Hard & Soft Skills)          */}
              {/* ================================================= */}
              <div>
                <h2 className="font-['Cinzel',serif] text-xs font-medium uppercase tracking-[0.2em] text-[#e5c378] mb-3 flex items-center gap-2">
                  <Wrench size={14} className="text-[#e5c378]" />
                  <span>Skills &amp; Competencies</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Hard Skills */}
                  <div className="bg-[#121218]/90 border border-white/[0.06] rounded-xl p-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#e5c378] uppercase tracking-wider mb-2.5">
                      <Wrench size={13} />
                      <span>Hard Skills &amp; Filmmaking Craft</span>
                    </div>
                    <ul className="text-xs text-[#c5c5d0] space-y-1.5 list-disc pl-4 leading-relaxed font-normal">
                      <li>Documentary &amp; Non-Fiction Film Direction</li>
                      <li>On-Ground Film Production &amp; Unit Coordination</li>
                      <li>Digital Cinematography &amp; Natural Light Framing</li>
                      <li>Screenwriting, Story Treatments &amp; Shot Breakdowns</li>
                    </ul>
                  </div>

                  {/* Soft Skills */}
                  <div className="bg-[#121218]/90 border border-white/[0.06] rounded-xl p-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#e5c378] uppercase tracking-wider mb-2.5">
                      <HeartHandshake size={13} />
                      <span>Soft &amp; Directorial Skills</span>
                    </div>
                    <ul className="text-xs text-[#c5c5d0] space-y-1.5 list-disc pl-4 leading-relaxed font-normal">
                      <li>Fast-Turnaround Execution (IFP 50-Hr &amp; 35mm Challenges)</li>
                      <li>Subject Research &amp; Candid Documentary Interviewing</li>
                      <li>On-Set Crew Leadership &amp; Talent Direction</li>
                      <li>Visual Storytelling, Pacing &amp; Narrative Rhythm</li>
                      <li>Collaborative Teamwork in Collegiate Film Units</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Bottom Sticky Action Bar */}
            <div className="p-4 sm:px-7 border-t border-white/[0.08] bg-[#111116] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <span className="text-[11px] font-mono text-[#777782] tracking-wider uppercase">
                DIGITAL PORTFOLIO: HAKESH.INT · 5 ESSENTIAL SECTIONS VERIFIED
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className="w-full sm:w-auto bg-[#e5c378] hover:bg-[#f3dc9e] text-black font-medium text-xs font-mono uppercase tracking-[0.14em] px-6 py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Download size={14} />
                  <span>{downloaded ? 'Downloaded Successfully!' : 'Download Complete Resume (PDF)'}</span>
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
