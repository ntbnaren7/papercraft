"use client";

import { useState } from "react";
import { usePaperStore } from "@/store/usePaperStore";
import { Printer, Copy, Check, Download, ShieldCheck, FileDown } from "lucide-react";

export function ExportToolbar() {
  const { currentPaper } = usePaperStore();
  const [copied, setCopied] = useState(false);

  if (!currentPaper) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const { metadata, sections } = currentPaper;
    let paperText = `Register Number: ${metadata.registerNumber || "________________"}\n\n`;
    paperText += `${metadata.institutionName}\n`;
    if (metadata.institutionSubHeader) paperText += `${metadata.institutionSubHeader}\n`;
    paperText += `${metadata.examTitle}\n\n`;

    paperText += `${metadata.degree || "B.E."} ${metadata.department}    Max. Marks : ${metadata.maxMarks}\n`;
    paperText += `Semester: ${metadata.semester}    ${metadata.qpCode || ""}    ${metadata.regulation || "R-2022"}    Date : ${metadata.date}\n`;
    paperText += `${metadata.courseCode} ${metadata.subject}    Time : ${metadata.duration}\n`;
    if (metadata.commonTo) paperText += `${metadata.commonTo}\n`;
    paperText += `\n`;

    sections.forEach((sec) => {
      paperText += `--- ${sec.sectionLabel}: ${sec.instructions} ${sec.formulaSummary || ""} ---\n\n`;
      sec.questions.forEach((q) => {
        if (sec.sectionLabel === "Part-A") {
          paperText += `${q.questionNumber}   ${q.text}    ${q.marks}\n`;
        } else {
          paperText += `${q.questionNumber} ${q.subDivisionLabel || "A"} ${q.text}    ${q.marks}\n`;
          if (q.subParts) {
            q.subParts.forEach((sp) => {
              paperText += `      ${sp.partLabel} ${sp.text}    ${sp.marks}\n`;
            });
          }
          if (q.orQuestion) {
            paperText += `       OR\n`;
            paperText += `   ${q.orQuestion.subDivisionLabel || "B"} ${q.orQuestion.text}    ${q.orQuestion.marks}\n`;
            if (q.orQuestion.subParts) {
              q.orQuestion.subParts.forEach((sp) => {
                paperText += `      ${sp.partLabel} ${sp.text}    ${sp.marks}\n`;
              });
            }
          }
        }
      });
      paperText += `\n`;
    });

    navigator.clipboard.writeText(paperText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="no-print bg-white rounded-2xl border border-slate-200/90 p-4 shadow-xs flex flex-wrap items-center justify-between gap-3 mb-6">
      {/* Left Grounding Guarantee Badge */}
      <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono font-bold text-xs border border-emerald-200/80">
          <ShieldCheck className="w-3.5 h-3.5" /> Context Grounded
        </span>
        <span className="hidden sm:inline text-slate-300">•</span>
        <span className="hidden sm:inline text-slate-500 font-mono text-xs">
          QP Code: {currentPaper.metadata.qpCode || "251321"} ({currentPaper.metadata.regulation || "R-2022"})
        </span>
      </div>

      {/* Right Action Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleCopyText}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-500" />
              <span>Copy Raw Text</span>
            </>
          )}
        </button>

        <button
          onClick={handlePrint}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black text-white text-xs font-semibold hover:bg-slate-800 shadow-sm transition-all active:scale-95"
          title="Print or save as print-ready A4 PDF"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print / Export PDF</span>
        </button>
      </div>
    </div>
  );
}
