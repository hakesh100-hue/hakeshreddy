import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Mail, Phone, MapPin, Film, Sparkles, Download, FileText } from 'lucide-react';
import { downloadResumePDF } from '../utils/generateResumePdf';

interface ContactSectionProps {
  onOpenResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'hakesh100@gmail.com';
  const phoneNumber = '+91 63601 71737';
  const rawPhone = '+916360171737';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const infoItems = [
    { label: 'DIRECTOR', value: 'K. Hakesh Reddy', icon: Film },
    { label: 'DIRECT EMAIL', value: emailAddress, isEmail: true, href: `mailto:${emailAddress}`, icon: Mail },
    { label: 'PHONE / DIRECT', value: phoneNumber, isPhone: true, href: `tel:${rawPhone}`, icon: Phone },
    { label: 'BASE LOCATION', value: 'Bengaluru, India', icon: MapPin },
  ];

  return (
    <section className="mb-24 relative z-10">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-br from-[#111116] via-[#0d0d12] to-[#08080b] border border-[#e5c378]/30 rounded-2xl py-12 sm:py-16 px-6 sm:px-12 text-center relative overflow-hidden shadow-xl"
        >
          {/* Subtle warm center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[220px] bg-[#e5c378]/5 blur-[120px] pointer-events-none rounded-full"></div>

          {/* Refined Kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-mono font-normal uppercase tracking-[0.25em] text-[#e5c378] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e5c378]"></span>
            <span>CONTACT &amp; DIRECTOR INFO</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#e5c378]"></span>
          </div>

          <h2 className="font-['Cinzel',serif] text-2xl sm:text-4xl md:text-5xl font-normal uppercase text-[#f5f5f7] mb-3.5 tracking-[0.04em] leading-tight">
            Director Information &amp; Contact
          </h2>
          
          <p className="font-['Cormorant_Garamond',serif] italic font-normal text-base sm:text-lg text-[#a5a5b0] max-w-[560px] mx-auto mb-10 leading-relaxed">
            Open for documentary film commissions, directorial collaborations, story treatments, and on-ground production.
          </p>

          {/* Structured Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10 text-left">
            {infoItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#14141c]/90 border border-white/[0.07] hover:border-[#e5c378]/35 rounded-xl p-4 transition-colors duration-200"
                >
                  <div className="flex items-center gap-2 mb-2 text-[#e5c378] text-xs font-mono">
                    <Icon size={13} className="shrink-0" />
                    <span className="tracking-[0.16em] uppercase text-[10px] text-[#888894]">{item.label}</span>
                  </div>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="text-xs sm:text-sm font-medium text-white hover:text-[#e5c378] transition-colors truncate block underline decoration-white/20 underline-offset-2"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-xs sm:text-sm font-medium text-white truncate">
                      {item.value}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xl mx-auto mb-6">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${emailAddress}`}
              className="w-full sm:w-auto bg-[#e5c378] hover:bg-[#f3dc9e] text-black font-medium text-xs uppercase tracking-[0.14em] px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Mail size={13} strokeWidth={2} />
              <span>Send Direct Email</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={copyEmail}
              className="w-full sm:w-auto bg-[#14141a] hover:bg-[#1c1c24] text-white border border-[#e5c378]/25 hover:border-[#e5c378] font-normal text-xs font-mono uppercase tracking-[0.14em] px-5 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
              title="Copy direct email address"
            >
              {copied ? <Check size={13} className="text-[#e5c378]" /> : <Mail size={13} className="text-[#e5c378]" />}
              <span>{copied ? 'Copied' : 'Copy Email'}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => downloadResumePDF()}
              className="w-full sm:w-auto bg-[#181822] hover:bg-[#20202e] text-[#e5c378] border border-[#e5c378]/35 hover:border-[#e5c378] font-normal text-xs font-mono uppercase tracking-[0.14em] px-5 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              title="Download K. Hakesh Reddy Resume PDF"
            >
              <Download size={13} />
              <span>Download CV (PDF)</span>
            </motion.button>

            {onOpenResume && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenResume}
                className="w-full sm:w-auto bg-transparent hover:bg-white/[0.05] text-[#b5b5c0] hover:text-white border border-white/[0.1] hover:border-white/20 font-normal text-xs font-mono uppercase tracking-[0.14em] px-4 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                title="View full resume on screen"
              >
                <FileText size={13} className="text-[#e5c378]" />
                <span>View CV</span>
              </motion.button>
            )}
          </div>

          {/* Direct Inquiries Display */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-[#888894] tracking-wider">
            <div>
              EMAIL: <a href={`mailto:${emailAddress}`} className="text-white hover:text-[#e5c378] underline underline-offset-4 transition-colors font-medium">{emailAddress}</a>
            </div>
            <span className="hidden sm:inline text-white/20">·</span>
            <div>
              PHONE: <a href={`tel:${rawPhone}`} className="text-white hover:text-[#e5c378] underline underline-offset-4 transition-colors font-medium">{phoneNumber}</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
