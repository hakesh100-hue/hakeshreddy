import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  HardDrive, 
  ShieldCheck, 
  Lock, 
  Upload, 
  Search, 
  Trash2, 
  ExternalLink, 
  FileText, 
  RefreshCw, 
  LogOut,
  FolderLock,
  PlusCircle,
  AlertCircle
} from 'lucide-react';
import { 
  initAuth, 
  googleSignIn, 
  logout, 
  getAccessToken, 
  listDriveFiles, 
  uploadDriveTextFile, 
  deleteDriveFile, 
  DriveFile 
} from '../services/googleDriveService';
import { User } from 'firebase/auth';

interface GoogleDriveVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleDriveVaultModal: React.FC<GoogleDriveVaultModalProps> = ({ isOpen, onClose }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [needsAuth, setNeedsAuth] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [files, setFiles] = useState<DriveFile[]>([]);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // New script/note upload state
  const [isUploading, setIsUploading] = useState(false);
  const [newFileName, setNewFileName] = useState('');
  const [newFileContent, setNewFileContent] = useState('');
  const [showUploadForm, setShowUploadForm] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const unsubscribe = initAuth(
      (currentUser, accessToken) => {
        setUser(currentUser);
        setToken(accessToken);
        setNeedsAuth(false);
        fetchFiles(accessToken);
      },
      () => {
        setUser(null);
        setToken(null);
        setNeedsAuth(true);
        setFiles([]);
      }
    );
    return () => unsubscribe();
  }, [isOpen]);

  const fetchFiles = async (accessToken: string, query?: string) => {
    setLoadingFiles(true);
    setErrorMsg(null);
    try {
      const list = await listDriveFiles(accessToken, query);
      setFiles(list);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Failed to fetch Google Drive files.');
    } finally {
      setLoadingFiles(false);
    }
  };

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setErrorMsg(null);
    try {
      const result = await googleSignIn();
      setUser(result.user);
      setToken(result.accessToken);
      setNeedsAuth(false);
      fetchFiles(result.accessToken);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Google authentication failed. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setToken(null);
    setNeedsAuth(true);
    setFiles([]);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (token) {
      fetchFiles(token, searchQuery ? `name contains '${searchQuery}'` : undefined);
    }
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !newFileName.trim()) return;

    setIsUploading(true);
    setErrorMsg(null);
    try {
      const fileName = newFileName.endsWith('.txt') ? newFileName : `${newFileName}.txt`;
      await uploadDriveTextFile(token, fileName, newFileContent || 'Created by Hakesh Film Vault App');
      setSuccessMsg(`Successfully saved "${fileName}" to your private Google Drive!`);
      setNewFileName('');
      setNewFileContent('');
      setShowUploadForm(false);
      fetchFiles(token);
      setTimeout(() => setSuccessMsg(null), 4000);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Failed to upload file to Google Drive.');
    } finally {
      setIsUploading(false);
    }
  };

  // Mandatory user confirmation for destructive operations (deleting drive files)
  const handleDelete = async (file: DriveFile) => {
    const confirmed = window.confirm(
      `Are you sure you want to permanently delete "${file.name}" from your private Google Drive? This action cannot be undone.`
    );
    if (!confirmed || !token) return;

    setErrorMsg(null);
    try {
      await deleteDriveFile(token, file.id);
      setSuccessMsg(`Deleted "${file.name}" from Google Drive.`);
      fetchFiles(token);
      setTimeout(() => setSuccessMsg(null), 3500);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Failed to delete file from Google Drive.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md">
          {/* Backdrop click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#0d0d12] border border-[#e5c378]/35 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/[0.08] bg-[#111116] shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#e5c378]/10 border border-[#e5c378]/25 rounded-xl text-[#e5c378]">
                  <HardDrive size={20} />
                </div>
                <div>
                  <h2 className="font-['Cinzel',serif] text-sm sm:text-base font-medium text-white tracking-wide uppercase flex items-center gap-2">
                    <span>Private Google Drive Vault</span>
                    <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <ShieldCheck size={10} />
                      Owner-Only Access
                    </span>
                  </h2>
                  <p className="text-xs text-[#9a9aa5] font-mono mt-0.5">
                    Secure 1P Cloud Storage for Documentary Scripts, Call Sheets &amp; Production Logs
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {user && (
                  <button
                    onClick={handleLogout}
                    className="px-3 py-1.5 bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-[#b8b8c4] hover:text-white rounded-lg border border-white/[0.08] transition-colors flex items-center gap-1.5 cursor-pointer"
                    title="Sign out from Google Drive"
                  >
                    <LogOut size={13} />
                    <span className="hidden sm:inline">Sign Out</span>
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="p-2 text-[#9e9ea8] hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors cursor-pointer"
                  title="Close vault"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6 flex-1 text-left">

              {errorMsg && (
                <div className="bg-red-950/40 border border-red-500/30 rounded-xl p-3.5 text-xs text-red-200 flex items-start gap-2.5">
                  <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-medium">Error: </span> {errorMsg}
                  </div>
                </div>
              )}

              {successMsg && (
                <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-3.5 text-xs text-emerald-200 flex items-center gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                  <div className="flex-1">{successMsg}</div>
                </div>
              )}

              {needsAuth ? (
                /* Authentication Prompt View */
                <div className="py-12 px-4 text-center flex flex-col items-center justify-center space-y-6 bg-[#121218]/80 border border-white/[0.06] rounded-2xl">
                  <div className="w-16 h-16 rounded-2xl bg-[#e5c378]/10 border border-[#e5c378]/30 flex items-center justify-center text-[#e5c378] shadow-inner">
                    <FolderLock size={32} />
                  </div>

                  <div className="max-w-md space-y-2">
                    <h3 className="font-['Cinzel',serif] text-lg font-medium text-white tracking-wide">
                      Authenticate to Access Your Private Drive
                    </h3>
                    <p className="text-xs sm:text-sm text-[#a0a0ab] leading-relaxed">
                      Only Hakesh Reddy (owner) can access this secure Google Drive vault. Sign in with your Google Account to manage documentary production files, scripts, and media logs with strict end-to-end privacy.
                    </p>
                  </div>

                  {/* Official Sign in with Google Button */}
                  <button
                    onClick={handleLogin}
                    disabled={isLoggingIn}
                    className="gsi-material-button relative inline-flex items-center justify-center h-11 px-5 rounded-xl bg-white hover:bg-[#f8f9fa] active:bg-[#f1f3f4] text-black font-medium text-xs sm:text-sm font-['Space_Grotesk',sans-serif] tracking-wide shadow-md transition-all cursor-pointer disabled:opacity-70"
                  >
                    <div className="gsi-material-button-icon mr-3 flex items-center justify-center">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                        <path fill="none" d="M0 0h48v48H0z"></path>
                      </svg>
                    </div>
                    <span className="gsi-material-button-contents">
                      {isLoggingIn ? 'Connecting to Google Drive...' : 'Sign in with Google'}
                    </span>
                  </button>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#777782]">
                    <Lock size={12} className="text-[#e5c378]" />
                    <span>Token is stored exclusively in memory. Never cached to disk.</span>
                  </div>
                </div>
              ) : (
                /* Authenticated Vault Dashboard View */
                <div className="space-y-6">
                  {/* User Bar & Actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#121218]/90 border border-white/[0.06] p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      {user?.photoURL ? (
                        <img src={user.photoURL} alt={user.displayName || 'User'} className="w-10 h-10 rounded-full border border-[#e5c378]/40 object-cover" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-[#e5c378]/20 text-[#e5c378] flex items-center font-bold justify-center">
                          {user?.displayName?.[0] || 'H'}
                        </div>
                      )}
                      <div>
                        <div className="text-sm font-medium text-white flex items-center gap-2">
                          <span>{user?.displayName || 'K. Hakesh Reddy'}</span>
                          <span className="text-[10px] font-mono text-[#e5c378] bg-[#e5c378]/10 px-2 py-0.5 rounded border border-[#e5c378]/20">Verified Owner</span>
                        </div>
                        <div className="text-xs text-[#9a9aa5] font-mono">{user?.email || 'hakesh100@gmail.com'}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={() => setShowUploadForm(!showUploadForm)}
                        className="bg-[#e5c378] hover:bg-[#f3dc9e] text-black font-medium text-xs font-mono uppercase tracking-wider px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <PlusCircle size={14} />
                        <span>Upload Script/Note</span>
                      </button>

                      <button
                        onClick={() => token && fetchFiles(token, searchQuery ? `name contains '${searchQuery}'` : undefined)}
                        disabled={loadingFiles}
                        className="p-2 bg-white/[0.05] hover:bg-white/[0.1] text-[#b8b8c4] hover:text-white rounded-lg border border-white/[0.08] transition-colors cursor-pointer"
                        title="Refresh Drive Files"
                      >
                        <RefreshCw size={15} className={loadingFiles ? 'animate-spin text-[#e5c378]' : ''} />
                      </button>
                    </div>
                  </div>

                  {/* Upload Form Accordion */}
                  {showUploadForm && (
                    <motion.form
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      onSubmit={handleUploadSubmit}
                      className="bg-[#14141c] border border-[#e5c378]/30 rounded-xl p-4 sm:p-5 space-y-4 shadow-lg"
                    >
                      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                        <h4 className="font-['Cinzel',serif] text-xs font-medium text-[#e5c378] uppercase tracking-wider flex items-center gap-2">
                          <Upload size={14} />
                          <span>Add New Documentary Note or Script to Drive</span>
                        </h4>
                        <button
                          type="button"
                          onClick={() => setShowUploadForm(false)}
                          className="text-[#888894] hover:text-white text-xs cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-mono text-[#a0a0ab] mb-1">File Name (.txt / script)</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. IFP_50Hr_CallSheet_Scene1.txt"
                            value={newFileName}
                            onChange={(e) => setNewFileName(e.target.value)}
                            className="w-full bg-[#0a0a0e] border border-white/[0.1] rounded-lg px-3 py-2 text-xs text-white placeholder-[#555562] focus:outline-none focus:border-[#e5c378]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-[#a0a0ab] mb-1">Content / Notes</label>
                          <textarea
                            rows={3}
                            placeholder="Enter script notes, shot breakdown, or dialogue here..."
                            value={newFileContent}
                            onChange={(e) => setNewFileContent(e.target.value)}
                            className="w-full bg-[#0a0a0e] border border-white/[0.1] rounded-lg p-3 text-xs text-white placeholder-[#555562] focus:outline-none focus:border-[#e5c378]"
                          />
                        </div>

                        <div className="flex justify-end">
                          <button
                            type="submit"
                            disabled={isUploading}
                            className="bg-[#e5c378] hover:bg-[#f3dc9e] text-black font-medium text-xs font-mono uppercase tracking-wider px-5 py-2 rounded-lg transition-colors cursor-pointer disabled:opacity-50 flex items-center gap-2"
                          >
                            <Upload size={13} />
                            <span>{isUploading ? 'Uploading to Drive...' : 'Save to Google Drive'}</span>
                          </button>
                        </div>
                      </div>
                    </motion.form>
                  )}

                  {/* Search bar */}
                  <form onSubmit={handleSearch} className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#777782]" />
                      <input
                        type="text"
                        placeholder="Search your private Google Drive files..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#121218] border border-white/[0.08] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#666672] focus:outline-none focus:border-[#e5c378]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-white/[0.08] hover:bg-white/[0.15] text-xs font-mono text-white px-4 py-2.5 rounded-xl border border-white/[0.1] transition-colors cursor-pointer"
                    >
                      Search
                    </button>
                  </form>

                  {/* Files List */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#888894] px-1">
                      <span>YOUR DRIVE FILES ({files.length})</span>
                      <span>SECURE CLOUD STORAGE</span>
                    </div>

                    {loadingFiles ? (
                      <div className="py-16 text-center text-xs font-mono text-[#888894] flex flex-col items-center gap-3">
                        <RefreshCw size={24} className="animate-spin text-[#e5c378]" />
                        <span>Synchronizing with your private Google Drive...</span>
                      </div>
                    ) : files.length === 0 ? (
                      <div className="py-14 text-center bg-[#121218]/50 border border-white/[0.06] rounded-xl p-6 space-y-2">
                        <FileText size={28} className="mx-auto text-[#777782]" />
                        <h4 className="text-sm text-white font-medium">No files found in this view</h4>
                        <p className="text-xs text-[#888894]">Upload a script or note above to store it directly in your private drive.</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
                        {files.map((file) => (
                          <div 
                            key={file.id}
                            className="bg-[#121218] hover:bg-[#161620] border border-white/[0.06] hover:border-[#e5c378]/30 rounded-xl p-3.5 flex items-center justify-between gap-3 transition-all"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="p-2 rounded-lg bg-white/[0.04] text-[#e5c378] shrink-0">
                                <FileText size={16} />
                              </div>
                              <div className="min-w-0">
                                <h5 className="text-xs sm:text-sm font-medium text-white truncate">{file.name}</h5>
                                <div className="flex items-center gap-3 text-[11px] font-mono text-[#777782] mt-0.5">
                                  <span>{file.mimeType.split('.').pop()?.toUpperCase() || 'FILE'}</span>
                                  {file.modifiedTime && (
                                    <span>Modified {new Date(file.modifiedTime).toLocaleDateString()}</span>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              {file.webViewLink && (
                                <a
                                  href={file.webViewLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 bg-white/[0.05] hover:bg-white/[0.1] text-[#b8b8c4] hover:text-white rounded-lg transition-colors"
                                  title="Open in Google Drive"
                                >
                                  <ExternalLink size={14} />
                                </a>
                              )}
                              <button
                                onClick={() => handleDelete(file)}
                                className="p-2 bg-red-950/30 hover:bg-red-900/50 text-red-300 rounded-lg transition-colors cursor-pointer"
                                title="Delete file from Google Drive"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-3.5 border-t border-white/[0.08] bg-[#111116] flex items-center justify-between text-[11px] font-mono text-[#777782] shrink-0">
              <span className="flex items-center gap-1.5">
                <Lock size={12} className="text-[#e5c378]" />
                PRIVATE CLOUD VAULT · OAUTH SECURED
              </span>
              <span>K. HAKESH REDDY</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
