"use client";

import { useState } from "react";
import { usePaperStore } from "@/store/usePaperStore";
import { PaperQuestion } from "@/types/papercraft";
import {
  ShieldCheck,
  Edit3,
  Check,
  RefreshCw,
  ZoomIn,
  ZoomOut,
  Printer,
  Columns,
  Rows,
  FileCheck2,
  Copy,
  FileText,
} from "lucide-react";

export function InstitutionalPaperView() {
  const {
    currentPaper,
    updateQuestionText,
    updateQuestionMarks,
    regenerateSingleQuestion,
    openGroundingInspector,
  } = usePaperStore();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [editMarks, setEditMarks] = useState(0);
  const [zoomScale, setZoomScale] = useState<number>(100);
  const [layoutMode, setLayoutMode] = useState<"stacked" | "side-by-side">("stacked");
  const [showSampleRegNo, setShowSampleRegNo] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  if (!currentPaper) return null;

  const { metadata, sections } = currentPaper;

  // 16-cell Register Number box digits
  const rawRegNumber = metadata.registerNumber || "2303921310421139";
  const regDigits = showSampleRegNo
    ? rawRegNumber.padEnd(16, " ").slice(0, 16).split("")
    : Array(16).fill("");

  const handleStartEdit = (qId: string, currentText: string, currentMarks: number) => {
    setEditingId(qId);
    setEditText(currentText);
    setEditMarks(currentMarks);
  };

  const handleSaveEdit = (sIdx: number, qIdx: number) => {
    updateQuestionText(sIdx, qIdx, editText);
    updateQuestionMarks(sIdx, qIdx, editMarks);
    setEditingId(null);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
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

    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(paperText).catch(() => {});
      }
    } catch {
      // Ignore clipboard permission rejections
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Determine if this is the 3-part Autonomous paper (Part-A, Part-B, Part-C)
  const isAutonomousPattern = sections.length >= 3 && sections[0].questions.length >= 10;

  // Split questions across Page 1 and Page 2 for authentic physical pagination
  // Page 1: Part-A (Q1-Q10 = 20M) + Part-B first 3 questions (Q11-Q13 = 39M) -> 59 Marks
  // Page 2: Part-B remaining questions (Q14-Q15 = 26M) + Part-C (Q16 = 15M) -> 41 Marks
  const page1PartA = sections[0];
  const page1PartBQuestions = sections[1]?.questions.slice(0, 3) || [];

  const page2PartBQuestions = sections[1]?.questions.slice(3) || [];
  const page2PartC = sections[2] || null;

  const totalPages = isAutonomousPattern ? 2 : 1;

  // Render question row for Part-A (compact, single line / concise)
  const renderPartAQuestion = (q: PaperQuestion, qIdx: number) => {
    const isEditing = editingId === q.id;

    return (
      <div
        key={q.id || qIdx}
        className="group relative hover:bg-slate-50/70 p-0.5 -mx-1 rounded transition-colors"
      >
        <div className="flex items-start justify-between gap-3 text-[12.5px] leading-[1.38]">
          <div className="flex items-start gap-2 flex-1 min-w-0">
            <span className="w-5 shrink-0 text-left font-exam-paper font-normal">
              {q.questionNumber}
            </span>

            {isEditing ? (
              <div className="flex-1 space-y-1.5 no-print">
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="w-full text-xs font-exam-paper p-1.5 border border-slate-400 rounded bg-white text-black resize-y"
                  rows={2}
                />
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={editMarks}
                    onChange={(e) => setEditMarks(Number(e.target.value))}
                    className="w-14 px-1.5 py-0.5 text-xs border border-slate-300 rounded font-exam-paper"
                  />
                  <button
                    onClick={() => handleSaveEdit(0, qIdx)}
                    className="px-2 py-0.5 bg-black text-white text-[10px] rounded flex items-center gap-1 font-sans font-semibold"
                  >
                    <Check className="w-3 h-3" /> Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="px-2 py-0.5 text-slate-500 text-[10px] font-sans"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-1">
                <p className="font-exam-paper text-justify text-black">
                  {q.text}
                </p>
              </div>
            )}
          </div>

          {/* Right Marks Column */}
          <div className="w-7 shrink-0 text-right font-exam-paper pr-1.5 font-normal">
            {q.marks}
          </div>

          {/* Action buttons (Hidden on Print, visible on row hover) */}
          {!isEditing && (
            <div className="no-print opacity-0 group-hover:opacity-100 flex items-center gap-0.5 shrink-0 absolute right-9 top-0 bg-white shadow-xs px-1 py-0.5 rounded-md border border-slate-200">
              {q.groundingSource && (
                <button
                  type="button"
                  onClick={() =>
                    openGroundingInspector(q.groundingSource!, q.questionNumber, q.text)
                  }
                  className="p-1 hover:text-emerald-700 hover:bg-emerald-50 text-slate-400 rounded transition-colors"
                  title={`Inspect Grounding: ${q.groundingSource.unit}`}
                >
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                </button>
              )}
              <button
                onClick={() => handleStartEdit(q.id, q.text, q.marks)}
                className="p-1 hover:text-slate-900 hover:bg-slate-100 text-slate-400 rounded transition-colors"
                title="Edit question"
              >
                <Edit3 className="w-3 h-3" />
              </button>
              <button
                onClick={() => regenerateSingleQuestion(0, qIdx)}
                className="p-1 hover:text-slate-900 hover:bg-slate-100 text-slate-400 rounded transition-colors"
                title="Regenerate alternative question"
              >
                <RefreshCw className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render question for Part-B & Part-C (with either/or choices and potential subparts)
  const renderDescriptiveQuestion = (
    q: PaperQuestion,
    sIdx: number,
    qIdx: number
  ) => {
    const isEditing = editingId === q.id;

    return (
      <div
        key={q.id || qIdx}
        className="group relative hover:bg-slate-50/70 p-1 -mx-1 rounded transition-colors text-[12.5px] leading-[1.38]"
      >
        {/* Choice A */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-2 flex-1 min-w-0">
            {/* Question Number */}
            <span className="w-5 shrink-0 text-left font-exam-paper font-normal">
              {q.questionNumber}
            </span>

            {/* Sub-division Label (A) */}
            <span className="w-4 shrink-0 font-exam-paper font-normal">
              {q.subDivisionLabel || "A"}
            </span>

            {isEditing ? (
              <div className="flex-1 space-y-1.5 no-print">
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="w-full text-xs font-exam-paper p-1.5 border border-slate-400 rounded bg-white text-black resize-y"
                  rows={2}
                />
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={editMarks}
                    onChange={(e) => setEditMarks(Number(e.target.value))}
                    className="w-14 px-1.5 py-0.5 text-xs border border-slate-300 rounded font-exam-paper"
                  />
                  <button
                    onClick={() => handleSaveEdit(sIdx, qIdx)}
                    className="px-2 py-0.5 bg-black text-white text-[10px] rounded flex items-center gap-1 font-sans font-semibold"
                  >
                    <Check className="w-3 h-3" /> Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="px-2 py-0.5 text-slate-500 text-[10px] font-sans"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-1 min-w-0">
                {/* Optional parent text if any */}
                {q.text && q.text.trim().length > 0 && (
                  <p className="font-exam-paper text-justify text-black mb-1">
                    {q.text}
                  </p>
                )}

                {/* Subparts (e.g. 14 A: (i). 8 marks, (ii). 5 marks) */}
                {q.subParts && q.subParts.length > 0 ? (
                  <div className="space-y-1">
                    {q.subParts.map((sp, spIdx) => (
                      <div
                        key={spIdx}
                        className="flex items-start justify-between gap-3"
                      >
                        <div className="flex items-start gap-1.5 flex-1 min-w-0">
                          <span className="font-exam-paper shrink-0 font-normal w-7">
                            {sp.partLabel}
                          </span>
                          <p className="font-exam-paper text-justify flex-1 text-black">
                            {sp.text}
                          </p>
                        </div>
                        <span className="font-exam-paper shrink-0 w-7 text-right pr-1.5 font-normal">
                          {sp.marks}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            )}
          </div>

          {/* Right Marks Column for single question (no subparts) */}
          {(!q.subParts || q.subParts.length === 0) && (
            <div className="w-7 shrink-0 text-right font-exam-paper pr-1.5 font-normal">
              {q.marks}
            </div>
          )}

          {/* Action buttons (Hidden on Print) */}
          {!isEditing && (
            <div className="no-print opacity-0 group-hover:opacity-100 flex items-center gap-0.5 shrink-0 absolute right-9 top-0 bg-white shadow-xs px-1 py-0.5 rounded-md border border-slate-200">
              {q.groundingSource && (
                <button
                  type="button"
                  onClick={() =>
                    openGroundingInspector(q.groundingSource!, q.questionNumber, q.text)
                  }
                  className="p-1 hover:text-emerald-700 hover:bg-emerald-50 text-slate-400 rounded transition-colors"
                  title={`Inspect Grounding: ${q.groundingSource.unit}`}
                >
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                </button>
              )}
              <button
                onClick={() => handleStartEdit(q.id, q.text, q.marks)}
                className="p-1 hover:text-slate-900 hover:bg-slate-100 text-slate-400 rounded transition-colors"
                title="Edit question"
              >
                <Edit3 className="w-3 h-3" />
              </button>
              <button
                onClick={() => regenerateSingleQuestion(sIdx, qIdx)}
                className="p-1 hover:text-slate-900 hover:bg-slate-100 text-slate-400 rounded transition-colors"
                title="Regenerate alternative question"
              >
                <RefreshCw className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* OR Choice */}
        {q.orQuestion && (
          <div className="mt-1 group/or relative hover:bg-slate-50/70 p-0.5 -mx-0.5 rounded transition-colors">
            <div className="text-center my-0.5 font-exam-paper font-bold text-[12px] tracking-wider text-black">
              OR
            </div>

            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2 flex-1 min-w-0">
                {/* Empty Question Number space to align with choice A */}
                <span className="w-5 shrink-0" />

                {/* Sub-division Label (B) */}
                <span className="w-4 shrink-0 font-exam-paper font-normal">
                  {q.orQuestion.subDivisionLabel || "B"}
                </span>

                <div className="flex-1 min-w-0">
                  <p className="font-exam-paper text-justify text-black">
                    {q.orQuestion.text}
                  </p>

                  {/* Subparts in Choice B if any */}
                  {q.orQuestion.subParts && q.orQuestion.subParts.length > 0 && (
                    <div className="mt-1 space-y-1">
                      {q.orQuestion.subParts.map((sp, spIdx) => (
                        <div
                          key={spIdx}
                          className="flex items-start justify-between gap-3"
                        >
                          <div className="flex items-start gap-1.5 flex-1 min-w-0">
                            <span className="font-exam-paper shrink-0 font-normal w-7">
                              {sp.partLabel}
                            </span>
                            <p className="font-exam-paper text-justify flex-1 text-black">
                              {sp.text}
                            </p>
                          </div>
                          <span className="font-exam-paper shrink-0 w-7 text-right pr-1.5 font-normal">
                            {sp.marks}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Marks Column for Choice B */}
              {(!q.orQuestion.subParts || q.orQuestion.subParts.length === 0) && (
                <div className="w-7 shrink-0 text-right font-exam-paper pr-1.5 font-normal">
                  {q.orQuestion.marks}
                </div>
              )}

              {/* Action buttons for Choice B (Hidden on Print) */}
              {q.orQuestion.groundingSource && (
                <div className="no-print opacity-0 group-hover/or:opacity-100 flex items-center gap-0.5 shrink-0 absolute right-9 top-0 bg-white shadow-xs px-1 py-0.5 rounded-md border border-slate-200">
                  <button
                    type="button"
                    onClick={() =>
                      openGroundingInspector(
                        q.orQuestion!.groundingSource!,
                        q.questionNumber,
                        q.orQuestion!.text
                      )
                    }
                    className="p-1 hover:text-emerald-700 hover:bg-emerald-50 text-slate-400 rounded transition-colors"
                    title={`Inspect Grounding: ${q.orQuestion.groundingSource.unit}`}
                  >
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* ── Single Unified Desk Control Bar ── */}
      <div className="no-print bg-white rounded-2xl px-4 py-2.5 border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-3">
        {/* Left: Document Spec & Mode Toggles */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60">
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            <span>{totalPages} Physical Pages</span>
            <span className="text-slate-300">•</span>
            <span className="font-semibold text-slate-900">{metadata.maxMarks || 100} Marks</span>
          </div>

          {/* Side-by-Side vs Stacked Switcher */}
          {totalPages > 1 && (
            <div className="inline-flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200/60 text-xs">
              <button
                onClick={() => setLayoutMode("stacked")}
                className={`px-2.5 py-0.5 rounded-full font-medium transition-all flex items-center gap-1.5 ${
                  layoutMode === "stacked"
                    ? "bg-white text-slate-900 shadow-2xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
                title="Vertical Document View"
              >
                <Rows className="w-3.5 h-3.5" />
                <span>Stacked</span>
              </button>
              <button
                onClick={() => setLayoutMode("side-by-side")}
                className={`px-2.5 py-0.5 rounded-full font-medium transition-all flex items-center gap-1.5 ${
                  layoutMode === "side-by-side"
                    ? "bg-white text-slate-900 shadow-2xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
                title="Side-by-Side Proofing View"
              >
                <Columns className="w-3.5 h-3.5" />
                <span>2 Sheets</span>
              </button>
            </div>
          )}

          {/* Toggle Sample Register Number */}
          <button
            onClick={() => setShowSampleRegNo(!showSampleRegNo)}
            className="px-2.5 py-1 text-xs rounded-full border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            title="Toggle between blank candidate boxes and sample registration digits"
          >
            <FileCheck2 className="w-3.5 h-3.5 text-slate-400" />
            <span>{showSampleRegNo ? "Reg No: Sample" : "Reg No: Blank"}</span>
          </button>
        </div>

        {/* Right: Zoom & Export Actions */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Zoom Controls */}
          <div className="hidden sm:flex items-center bg-slate-100 border border-slate-200/70 rounded-full px-1 py-0.5">
            <button
              onClick={() => setZoomScale((prev) => Math.max(70, prev - 10))}
              className="p-1 text-slate-500 hover:text-slate-800 rounded-full transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomScale(100)}
              className="text-[11px] font-mono font-medium text-slate-600 px-1.5 hover:text-black"
              title="Reset to 100%"
            >
              {zoomScale}%
            </button>
            <button
              onClick={() => setZoomScale((prev) => Math.min(120, prev + 10))}
              className="p-1 text-slate-500 hover:text-slate-800 rounded-full transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Copy Text */}
          <button
            onClick={handleCopyText}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Text</span>
              </>
            )}
          </button>

          {/* Export / Print PDF */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-black shadow-xs transition-all active:scale-[0.98]"
            title="Print or export as official A4 PDF"
          >
            <Printer className="w-3.5 h-3.5 text-slate-300" />
            <span>Export PDF</span>
          </button>
        </div>
      </div>

      {/* ── Visual Exam Paper Desk Backdrop ── */}
      <div className="w-full overflow-x-auto pb-8 pt-2">
        <div
          className="transition-transform duration-200 origin-top min-w-fit mx-auto"
          style={{ transform: `scale(${zoomScale / 100})` }}
        >
          <div
            className={
              layoutMode === "side-by-side" && totalPages > 1
                ? "grid grid-cols-1 xl:grid-cols-2 gap-8 items-start justify-center max-w-[1650px] mx-auto"
                : "flex flex-col items-center justify-start space-y-8"
            }
          >
            {/* ======================================================== */}
            {/* ── PHYSICAL A4 SHEET 1 (Page 1 of 2) ─────────────────── */}
            {/* ======================================================== */}
            <div id="exam-page-1" className="a4-sheet font-exam-paper">
              <div>
                {/* 16-cell Register Number Box (Top Right) */}
                <div className="flex justify-end items-center gap-2 mb-2">
                  <span className="text-[13px] font-exam-paper text-black font-normal">
                    Register Number
                  </span>
                  <div className="flex border border-black divide-x divide-black bg-white">
                    {regDigits.map((digit, idx) => (
                      <div
                        key={idx}
                        className="w-[18px] h-[22px] flex items-center justify-center text-[12px] font-mono text-black font-semibold select-none"
                      >
                        {digit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Institutional Header Block */}
                <div className="text-center space-y-0.5 pb-1">
                  <h1 className="font-exam-paper font-bold text-[15px] sm:text-[16px] text-black tracking-normal leading-snug">
                    {metadata.institutionName ||
                      "PSNA College of Engineering and Technology, Dindigul - 624 622."}
                  </h1>

                  {metadata.institutionSubHeader && (
                    <p className="font-exam-paper italic text-[13px] text-black">
                      {metadata.institutionSubHeader}
                    </p>
                  )}

                  <h2 className="font-exam-paper font-bold text-[13.5px] text-black pt-0.5">
                    {metadata.examTitle ||
                      "End Semester Examinations :: Nov/Dec 2025"}
                  </h2>
                </div>

                {/* Course Metadata Matrix Block (Exact 3-Row Layout) */}
                <div className="mt-1 text-[12.5px] font-exam-paper text-black leading-relaxed">
                  {/* Row 1 */}
                  <div className="flex justify-between items-baseline">
                    <div className="flex items-baseline gap-3">
                      <span className="w-16 shrink-0">{metadata.degree || "B.E."}</span>
                      <span>{metadata.department || "Computer Science and Engineering"}</span>
                    </div>
                    <div className="text-right">
                      <span>Max. Marks : </span>
                      <span>{metadata.maxMarks || 100}</span>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex justify-between items-baseline mt-0.5">
                    <div className="flex items-baseline gap-3 w-48">
                      <span className="w-16 shrink-0">Semester:</span>
                      <span>{metadata.semester || "V"}</span>
                    </div>
                    <div className="text-center font-bold text-[14px] flex-1">
                      {metadata.qpCode || "251321"}
                    </div>
                    <div className="flex items-baseline justify-end gap-3 w-48 text-right">
                      <span className="font-bold">{metadata.regulation || "R-2022"}</span>
                      <span>Date : {metadata.date || "10-01-2026"}</span>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="flex justify-between items-baseline mt-0.5">
                    <div className="flex items-baseline gap-3">
                      <span className="w-16 shrink-0 font-bold">
                        {metadata.courseCode || "CS2V13"}
                      </span>
                      <span>
                        {metadata.subject || "Neural Networks and Deep Learning"}
                      </span>
                    </div>
                    <div className="text-right">
                      <span>Time : {metadata.duration || "3 Hours"}</span>
                    </div>
                  </div>

                  {/* Common Specialization Note */}
                  {metadata.commonTo && (
                    <div className="text-center font-exam-paper font-semibold text-[12px] my-1.5">
                      {metadata.commonTo}
                    </div>
                  )}
                </div>

                {/* ── Part-A: Answer All Questions. 10 x 2 = 20 Marks ── */}
                <div className="mt-2.5 space-y-1">
                  <div className="text-center font-exam-paper font-bold text-[13px] text-black flex items-center justify-center gap-8 mb-0.5">
                    <span>{page1PartA.sectionLabel}: {page1PartA.instructions}</span>
                    {page1PartA.formulaSummary && (
                      <span>{page1PartA.formulaSummary}</span>
                    )}
                  </div>

                  {/* Column Header: Marks */}
                  <div className="flex justify-end text-[12px] font-exam-paper font-bold pr-1.5 -mb-0.5">
                    <span>Marks</span>
                  </div>

                  {/* Part-A Questions (Q1 to Q10) */}
                  <div className="space-y-1">
                    {page1PartA.questions.map((q, qIdx) =>
                      renderPartAQuestion(q, qIdx)
                    )}
                  </div>
                </div>

                {/* ── Part-B (First 3 Questions on Page 1: Q11, Q12, Q13) ── */}
                {isAutonomousPattern && sections[1] && (
                  <div className="mt-3.5 space-y-1.5">
                    <div className="text-center font-exam-paper font-bold text-[13px] text-black flex items-center justify-center gap-8 mb-1">
                      <span>{sections[1].sectionLabel}: {sections[1].instructions}</span>
                      {sections[1].formulaSummary && (
                        <span>{sections[1].formulaSummary}</span>
                      )}
                    </div>

                    <div className="space-y-2">
                      {page1PartBQuestions.map((q, qIdx) =>
                        renderDescriptiveQuestion(q, 1, qIdx)
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Sheet 1 Footer */}
              <div className="pt-3 text-center font-exam-paper text-[12px] text-black">
                Page 1 of {totalPages}
              </div>
            </div>

            {/* ======================================================== */}
            {/* ── PHYSICAL A4 SHEET 2 (Page 2 of 2) ─────────────────── */}
            {/* ======================================================== */}
            {totalPages > 1 && (
              <div id="exam-page-2" className="a4-sheet font-exam-paper">
                <div>
                  {/* Part-B Continued (Q14, Q15) */}
                  <div className="space-y-2.5">
                    {page2PartBQuestions.map((q, qIdx) =>
                      renderDescriptiveQuestion(q, 1, qIdx + 3)
                    )}
                  </div>

                  {/* Part-C: Answer All Questions. 1 x 15 = 15 Marks (Q16) */}
                  {page2PartC && (
                    <div className="mt-5 space-y-2">
                      <div className="text-center font-exam-paper font-bold text-[13px] text-black flex items-center justify-center gap-8 mb-2">
                        <span>{page2PartC.sectionLabel}: {page2PartC.instructions}</span>
                        {page2PartC.formulaSummary && (
                          <span>{page2PartC.formulaSummary}</span>
                        )}
                      </div>

                      <div className="space-y-2">
                        {page2PartC.questions.map((q, qIdx) =>
                          renderDescriptiveQuestion(q, 2, qIdx)
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Sheet 2 Footer */}
                <div className="pt-3 text-center font-exam-paper text-[12px] text-black">
                  Page 2 of {totalPages}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
