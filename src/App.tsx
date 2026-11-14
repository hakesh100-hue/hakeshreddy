import React, { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CinemaAtmosphere } from './components/CinemaAtmosphere';
import { TickerRibbon } from './components/TickerRibbon';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedCutSection } from './components/FeaturedCutSection';
import { ReelsSection } from './components/ReelsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { GoogleDriveVaultModal } from './components/GoogleDriveVaultModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDriveVaultOpen, setIsDriveVaultOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07070a] text-[#f4f4f6] font-['Space_Grotesk',sans-serif] selection:bg-[#e5c378] selection:text-black relative">
      {/* Top Gold Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Floating 35mm Projector Light Beam Atmosphere */}
      <CinemaAtmosphere />

      {/* Vintage Gold Cinema Marquee */}
      <TickerRibbon />

      {/* Classy Architectural Header */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        onOpenDriveVault={() => setIsDriveVaultOpen(true)}
      />

      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Separate Featured Cut Slot */}
        <FeaturedCutSection />

        {/* Visual Studies & Reels Grid */}
        <ReelsSection />

        {/* Story & Philosophy */}
        <AboutSection />

        {/* Contact Banner */}
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume / Curriculum Vitae Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      {/* Private Google Drive Vault Modal */}
      <GoogleDriveVaultModal 
        isOpen={isDriveVaultOpen}
        onClose={() => setIsDriveVaultOpen(false)}
      />
    </div>
  );
}

