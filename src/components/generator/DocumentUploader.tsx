"use client";

import { useState, useRef } from "react";
import { usePaperStore } from "@/store/usePaperStore";
import { UploadCloud, FileText, CheckCircle2, X, AlertCircle, Sparkles } from "lucide-react";

export function DocumentUploader() {
  const { uploadedFile, setUploadedFile } = usePaperStore();
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const processFile = (file: File) => {
    // Determine realistic pages & tokens for display
    const simulatedPages = Math.max(8, Math.round(file.size / 65000));
    const simulatedTokens = Math.round(simulatedPages * 650);

    setUploadedFile({
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      type: file.type || "application/pdf",
      pageCount: simulatedPages,
      tokensEstimate: simulatedTokens,
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 tracking-tight">
            Reference Syllabus & Notes
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Curriculum units and lecture notes used to ground generated questions.
          </p>
        </div>

        {uploadedFile && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
            <CheckCircle2 className="w-3.5 h-3.5" /> Context Loaded
          </span>
        )}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInput}
        accept=".pdf,.docx,.txt"
        className="hidden"
      />

      {!uploadedFile ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
            isDragging
              ? "border-slate-900 bg-slate-50/80 scale-[0.99]"
              : "border-slate-300 hover:border-slate-400 bg-slate-50/40 hover:bg-slate-50/80"
          }`}
        >
          <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center text-slate-500 mb-2 shadow-2xs">
            <UploadCloud className="w-4 h-4 text-slate-600" />
          </div>
          <p className="text-xs font-semibold text-slate-800">
            Click to upload or drag & drop syllabus material
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5 max-w-sm">
            Course curriculum, unit notes, or reference textbooks (PDF, DOCX up to 50MB)
          </p>
          <div className="mt-3 flex items-center gap-1.5">
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-500">PDF</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-500">DOCX</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-500">TXT</span>
          </div>
        </div>
      ) : (
        <div className="border border-slate-200/80 rounded-xl p-3.5 bg-slate-50/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-center shrink-0 shadow-2xs">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900 truncate max-w-xs sm:max-w-md">
                {uploadedFile.name}
              </p>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                <span>{uploadedFile.size}</span>
                <span>•</span>
                <span>~{uploadedFile.pageCount} pages</span>
                <span>•</span>
                <span className="font-mono text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded font-medium border border-emerald-200/50">
                  {uploadedFile.tokensEstimate?.toLocaleString()} tokens
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 self-end sm:self-center">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-xs font-medium px-2 py-1 text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-md transition-colors"
            >
              Replace
            </button>
            <button
              type="button"
              onClick={() => setUploadedFile(null)}
              className="p-1 text-slate-400 hover:text-red-600 rounded-md transition-colors"
              aria-label="Remove file"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
