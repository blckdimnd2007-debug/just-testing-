import React, { useState } from 'react';
import { X, Upload, CheckCircle2, FileText, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface RfpModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: any;
}

export const RfpModal: React.FC<RfpModalProps> = ({ isOpen, onClose, initialData }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: initialData?.type || 'Commercial',
    approxSqFt: initialData?.sqFt || '120,000',
    locationCoordinates: initialData?.location || 'Chennai, India',
    targetTimeline: initialData?.timelineTarget || 'Standard',
    budgetBracket: '$10M - $25M (₹80Cr - ₹200Cr)',
    notes: ''
  });

  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).map((f) => f.name);
      setUploadedFiles((prev) => [...prev, ...files]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `RFP-KAV-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className={`relative w-full max-w-3xl max-h-[92vh] border shadow-2xl flex flex-col overflow-hidden transition-colors ${
        isLight
          ? 'bg-[#FFFFFF] border-[#E2E2DC] text-[#0E0E0E]'
          : 'bg-[#0E1017] border-[#252C3D] text-[#F7F7F6]'
      }`}>
        {/* Header */}
        <div className={`p-4 sm:p-6 border-b flex items-center justify-between ${
          isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#141722] border-[#222838]'
        }`}>
          <div className="flex items-center space-x-3">
            <div className={`w-2 h-2 ${isLight ? 'bg-[#0E0E0E]' : 'bg-[#FFFFFF]'}`} />
            <div className="text-xs sm:text-sm font-technical font-bold tracking-wider uppercase">
              FORMAL REQUEST FOR PROPOSAL (RFP) & DRAWING SUBMISSION
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 transition-colors border cursor-pointer ${
              isLight
                ? 'border-[#D0D0CA] text-[#666F80] hover:text-[#0E0E0E] hover:border-[#0E0E0E]'
                : 'border-[#262E3E] text-[#8A92A6] hover:text-[#FFFFFF] hover:border-[#FFFFFF]'
            }`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-grow text-xs font-technical">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="inline-flex p-4 bg-emerald-500/10 border border-emerald-500/40 rounded-full text-emerald-500">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading uppercase">
                RFP TRANSMISSION CONFIRMED
              </h3>

              <div className={`p-4 border max-w-md mx-auto text-left space-y-2 ${
                isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#141722] border-[#222838]'
              }`}>
                <div className="flex justify-between">
                  <span className={isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}>REFERENCE IDENTIFIER:</span>
                  <span className="font-bold">{referenceId}</span>
                </div>
                <div className="flex justify-between">
                  <span className={isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}>ASSIGNED DIVISION:</span>
                  <span>Commercial Estimating & BIM</span>
                </div>
                <div className="flex justify-between">
                  <span className={isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}>GUARANTEED RESPONSE:</span>
                  <span className="text-emerald-500 font-bold">WITHIN 48 BUSINESS HOURS</span>
                </div>
              </div>

              <p className={`text-sm max-w-md mx-auto leading-relaxed ${
                isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'
              }`}>
                Our Chief Estimator and Structural BIM Lead will review your site parameters
                and prepare a preliminary Guaranteed Maximum Price framework.
              </p>

              <button
                onClick={handleReset}
                className={`px-8 py-3.5 font-bold tracking-[0.2em] uppercase transition-all cursor-pointer shadow-md ${
                  isLight
                    ? 'bg-[#0E0E0E] text-[#FFFFFF] hover:bg-[#282B33]'
                    : 'bg-[#FFFFFF] text-[#0A0B0E] hover:bg-[#E3D9CC]'
                }`}
              >
                CLOSE PORTAL
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className={`p-4 border text-[11px] leading-relaxed ${
                isLight
                  ? 'bg-[#F7F7F5] border-[#E2E2DC] text-[#4A5162]'
                  : 'bg-[#141722] border-[#222838] text-[#8C95A7]'
              }`}>
                <span className={`font-bold block mb-1 ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                  CONFIDENTIALITY & NON-DISCLOSURE NOTE:
                </span>
                All engineering drawings, site coordinates, and commercial files are protected
                under institutional non-disclosure. Submissions are reviewed exclusively by KAVIAR licensed partners.
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-[10px] uppercase tracking-wider mb-1 ${
                    isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'
                  }`}>
                    FULL NAME & TITLE *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Arjun Sundaram, VP Development"
                    className={`w-full p-3 border focus:outline-none transition-colors ${
                      isLight
                        ? 'bg-[#FFFFFF] border-[#D0D0CA] text-[#0E0E0E] focus:border-[#0E0E0E]'
                        : 'bg-[#141722] border-[#252C3C] text-[#FFFFFF] focus:border-[#FFFFFF]'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-[10px] uppercase tracking-wider mb-1 ${
                    isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'
                  }`}>
                    CORPORATE / INVESTOR WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@enterprise.com"
                    className={`w-full p-3 border focus:outline-none transition-colors ${
                      isLight
                        ? 'bg-[#FFFFFF] border-[#D0D0CA] text-[#0E0E0E] focus:border-[#0E0E0E]'
                        : 'bg-[#141722] border-[#252C3C] text-[#FFFFFF] focus:border-[#FFFFFF]'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-[10px] uppercase tracking-wider mb-1 ${
                    isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'
                  }`}>
                    ORGANIZATION / FIRM *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Horizon Real Estate Fund"
                    className={`w-full p-3 border focus:outline-none transition-colors ${
                      isLight
                        ? 'bg-[#FFFFFF] border-[#D0D0CA] text-[#0E0E0E] focus:border-[#0E0E0E]'
                        : 'bg-[#141722] border-[#252C3C] text-[#FFFFFF] focus:border-[#FFFFFF]'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-[10px] uppercase tracking-wider mb-1 ${
                    isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'
                  }`}>
                    DIRECT PHONE / WHATSAPP
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98400 XXXXX"
                    className={`w-full p-3 border focus:outline-none transition-colors ${
                      isLight
                        ? 'bg-[#FFFFFF] border-[#D0D0CA] text-[#0E0E0E] focus:border-[#0E0E0E]'
                        : 'bg-[#141722] border-[#252C3C] text-[#FFFFFF] focus:border-[#FFFFFF]'
                    }`}
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t ${
                isLight ? 'border-[#EAEAE8]' : 'border-[#1E2330]'
              }`}>
                <div>
                  <label className={`block text-[10px] uppercase tracking-wider mb-1 ${
                    isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'
                  }`}>
                    PROJECT CLASSIFICATION
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className={`w-full p-3 border focus:outline-none transition-colors ${
                      isLight
                        ? 'bg-[#FFFFFF] border-[#D0D0CA] text-[#0E0E0E] focus:border-[#0E0E0E]'
                        : 'bg-[#141722] border-[#252C3C] text-[#FFFFFF] focus:border-[#FFFFFF]'
                    }`}
                  >
                    <option value="Commercial">Commercial Tower / IT Campus</option>
                    <option value="Residential">Luxury Residential / Villa Estate</option>
                    <option value="Industrial">Industrial Manufacturing / Logistics</option>
                    <option value="Infrastructure">Civil Infrastructure & Bridges</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-[10px] uppercase tracking-wider mb-1 ${
                    isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'
                  }`}>
                    APPROX SCALE (SQ.FT)
                  </label>
                  <input
                    type="text"
                    value={formData.approxSqFt}
                    onChange={(e) => setFormData({ ...formData, approxSqFt: e.target.value })}
                    placeholder="e.g. 150,000 Sq.Ft"
                    className={`w-full p-3 border focus:outline-none transition-colors ${
                      isLight
                        ? 'bg-[#FFFFFF] border-[#D0D0CA] text-[#0E0E0E] focus:border-[#0E0E0E]'
                        : 'bg-[#141722] border-[#252C3C] text-[#FFFFFF] focus:border-[#FFFFFF]'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-[10px] uppercase tracking-wider mb-1 ${
                    isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'
                  }`}>
                    BUDGET BRACKET
                  </label>
                  <select
                    value={formData.budgetBracket}
                    onChange={(e) => setFormData({ ...formData, budgetBracket: e.target.value })}
                    className={`w-full p-3 border focus:outline-none transition-colors ${
                      isLight
                        ? 'bg-[#FFFFFF] border-[#D0D0CA] text-[#0E0E0E] focus:border-[#0E0E0E]'
                        : 'bg-[#141722] border-[#252C3C] text-[#FFFFFF] focus:border-[#FFFFFF]'
                    }`}
                  >
                    <option>&lt; $5M (&lt; ₹40Cr)</option>
                    <option>$5M - $15M (₹40Cr - ₹120Cr)</option>
                    <option>$15M - $50M (₹120Cr - ₹400Cr)</option>
                    <option>&gt; $50M (&gt; ₹400Cr)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={`block text-[10px] uppercase tracking-wider mb-1 ${
                  isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'
                }`}>
                  SITE ADDRESS / GPS COORDINATES
                </label>
                <input
                  type="text"
                  value={formData.locationCoordinates}
                  onChange={(e) => setFormData({ ...formData, locationCoordinates: e.target.value })}
                  placeholder="e.g. 12°58'23&quot;N 80°14'54&quot;E / OMR Corridor, Chennai"
                  className={`w-full p-3 border focus:outline-none transition-colors ${
                    isLight
                      ? 'bg-[#FFFFFF] border-[#D0D0CA] text-[#0E0E0E] focus:border-[#0E0E0E]'
                      : 'bg-[#141722] border-[#252C3C] text-[#FFFFFF] focus:border-[#FFFFFF]'
                  }`}
                />
              </div>

              {/* Upload CAD / PDF */}
              <div>
                <label className={`block text-[10px] uppercase tracking-wider mb-2 ${
                  isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'
                }`}>
                  UPLOAD ARCHITECTURAL / STRUCTURAL CAD OR PDF (DWG, DXF, PDF, ZIP)
                </label>
                <label className={`border-2 border-dashed p-6 flex flex-col items-center justify-center cursor-pointer transition-colors block ${
                  isLight
                    ? 'border-[#D0D0CA] hover:border-[#0E0E0E] bg-[#F7F7F5]'
                    : 'border-[#2E3547] hover:border-[#FFFFFF] bg-[#141722]'
                }`}>
                  <Upload className={`w-8 h-8 mb-2 ${isLight ? 'text-[#777E90]' : 'text-[#7D8597]'}`} />
                  <span className="text-xs font-bold">
                    DRAG & DROP CAD FILES OR BROWSE
                  </span>
                  <span className={`text-[10px] mt-1 ${isLight ? 'text-[#888E9E]' : 'text-[#70788C]'}`}>
                    Supports AutoCAD (.dwg, .dxf), Revit (.rvt), PDF blueprints up to 100MB
                  </span>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>

                {uploadedFiles.length > 0 && (
                  <div className="mt-3 space-y-1.5">
                    {uploadedFiles.map((file, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center justify-between p-2 border text-[11px] ${
                          isLight
                            ? 'bg-[#F7F7F5] border-[#E0E0DA]'
                            : 'bg-[#161922] border-[#252C3C]'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <FileText className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{file}</span>
                        </div>
                        <span className={isLight ? 'text-[#777E90]' : 'text-[#7D8597]'}>ATTACHED</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className={`pt-4 border-t flex items-center justify-between ${
                isLight ? 'border-[#EAEAE8]' : 'border-[#1E2330]'
              }`}>
                <div className={`text-[10px] ${isLight ? 'text-[#888E9E]' : 'text-[#70788C]'}`}>
                  * BINDING ESTIMATES TRANSMITTED WITHIN 48 HOURS
                </div>
                <button
                  type="submit"
                  className={`py-3.5 px-8 font-bold text-xs font-technical tracking-[0.2em] uppercase transition-all cursor-pointer flex items-center space-x-2 shadow-md ${
                    isLight
                      ? 'bg-[#0E0E0E] text-[#FFFFFF] hover:bg-[#282B33]'
                      : 'bg-[#FFFFFF] text-[#0A0B0E] hover:bg-[#E3D9CC]'
                  }`}
                >
                  <span>TRANSMIT FORMAL RFP</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
