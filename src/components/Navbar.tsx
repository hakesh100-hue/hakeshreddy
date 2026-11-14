import React from 'react';
import { Download, FileText, HardDrive } from 'lucide-react';
import { downloadResumePDF } from '../utils/generateResumePdf';

interface NavbarProps {
  onOpenResume?: () => void;
  onOpenDriveVault?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenDriveVault }) => {
  return (
    <nav className="border-b border-white/[0.06] py-4 bg-[#07070a]/90 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-[1160px] mx-auto px-6 flex items-center justify-between">
        <div className="font-['Cinzel',serif] text-lg sm:text-xl font-medium tracking-[0.2em] uppercase text-white select-none">
          HAKESH<span className="text-[#e5c378]">.INT</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {onOpenDriveVault && (
            <button
              onClick={onOpenDriveVault}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-[#e5c378] bg-[#e5c378]/10 hover:bg-[#e5c378]/20 border border-[#e5c378]/30 transition-all flex items-center gap-1.5 cursor-pointer"
              title="Open Private Google Drive Vault"
            >
              <HardDrive size={13} />
              <span className="hidden md:inline">Drive</span>
              <span>Vault</span>
            </button>
          )}

          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-[#d8d8e2] hover:text-[#e5c378] hover:bg-white/[0.05] border border-white/[0.08] hover:border-[#e5c378]/40 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <FileText size={12} className="text-[#e5c378]" />
              <span className="hidden sm:inline">View</span>
              <span>Resume</span>
            </button>
          )}

          <button
            onClick={() => downloadResumePDF()}
            className="px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider bg-[#e5c378] hover:bg-[#f3dc9e] text-black font-medium transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
            title="Download K. Hakesh Reddy Resume PDF"
          >
            <Download size={12} />
            <span>PDF</span>
            <span className="hidden sm:inline">Download</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

