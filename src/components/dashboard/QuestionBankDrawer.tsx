"use client";

import { useState, useEffect } from "react";
import {
  ALL_PSNA_QUESTION_BANKS,
  CourseQuestionBank,
} from "@/data/psnaQuestionBank";
import {
  X,
  Copy,
  Check,
  Search,
  BookOpen,
  Sparkles,
  Flame,
  Calculator,
  ArrowRight,
  Filter,
} from "lucide-react";
import { usePaperStore } from "@/store/usePaperStore";

interface QuestionBankDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourseCode?: string;
}

export function QuestionBankDrawer({
  isOpen,
  onClose,
  initialCourseCode = "MA2C21",
}: QuestionBankDrawerProps) {
  const { loadCourseIntoGenerator } = usePaperStore();
  const [selectedCourseCode, setSelectedCourseCode] = useState<string>(
    initialCourseCode || "MA2C21"
  );
  const [selectedSemFilter, setSelectedSemFilter] = useState<"all" | "III" | "IV" | "V" | "VI" | "VII" | "VIII">("all");
  const [selectedUnit, setSelectedUnit] = useState<number | "all">("all");
  const [selectedType, setSelectedType] = useState<"all" | "2m" | "16m" | "problems">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  useEffect(() => {
    if (initialCourseCode && ALL_PSNA_QUESTION_BANKS[initialCourseCode]) {
      setSelectedCourseCode(initialCourseCode);
    }
  }, [initialCourseCode]);

  if (!isOpen) return null;

  const activeBank: CourseQuestionBank =
    ALL_PSNA_QUESTION_BANKS[selectedCourseCode] ||
    ALL_PSNA_QUESTION_BANKS["MA2C21"];

  const handleCopy = (text: string, id: string) => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
    } catch {
      // Ignore clipboard permission errors
    }
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleLoadPaper = () => {
    loadCourseIntoGenerator({
      code: activeBank.code,
      name: activeBank.name,
      semester: activeBank.semester,
    });
    onClose();
  };

  // Filter courses by semester
  const availableCourses = Object.values(ALL_PSNA_QUESTION_BANKS).filter((c) =>
    selectedSemFilter === "all" ? true : c.semester === selectedSemFilter
  );

  // Filter questions
  const filteredUnits = activeBank.units.filter((u) =>
    selectedUnit === "all" ? true : u.unitNumber === selectedUnit
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-3xl bg-white h-full shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-300">
        {/* ── Top Header ── */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-sky-100 text-[#0284C7] uppercase">
                  Official PSNA Question Bank
                </span>
                <span className="text-xs text-slate-400 font-mono">•</span>
                <span className="text-xs text-slate-500 font-medium">Semester {activeBank.semester}</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                {activeBank.code} — {activeBank.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLoadPaper}
              className="px-3.5 py-1.5 rounded-full bg-[#0284C7] text-white text-xs font-bold hover:bg-[#0369A1] transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Load Into Exam Paper</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Semester and Course Switcher Bar ── */}
        <div className="px-5 py-2.5 border-b border-slate-100 flex flex-col gap-2 bg-white shrink-0">
          {/* Semester Filter Tabs */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 shrink-0">Semester:</span>
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                onClick={() => setSelectedSemFilter("all")}
                className={`px-2.5 py-0.5 text-xs font-bold rounded-md transition-all ${
                  selectedSemFilter === "all" ? "bg-white text-slate-900 shadow-2xs" : "text-slate-500"
                }`}
              >
                All (19 Courses)
              </button>
              <button
                onClick={() => setSelectedSemFilter("III")}
                className={`px-2.5 py-0.5 text-xs font-bold rounded-md transition-all ${
                  selectedSemFilter === "III" ? "bg-white text-sky-800 shadow-2xs" : "text-slate-500"
                }`}
              >
                Sem III (5)
              </button>
              <button
                onClick={() => setSelectedSemFilter("IV")}
                className={`px-2.5 py-0.5 text-xs font-bold rounded-md transition-all ${
                  selectedSemFilter === "IV" ? "bg-white text-sky-800 shadow-2xs" : "text-slate-500"
                }`}
              >
                Sem IV (6)
              </button>
              <button
                onClick={() => setSelectedSemFilter("V")}
                className={`px-2.5 py-0.5 text-xs font-bold rounded-md transition-all ${
                  selectedSemFilter === "V" ? "bg-white text-sky-800 shadow-2xs" : "text-slate-500"
                }`}
              >
                Sem V (4)
              </button>
              <button
                onClick={() => setSelectedSemFilter("VI")}
                className={`px-2.5 py-0.5 text-xs font-bold rounded-md transition-all ${
                  selectedSemFilter === "VI" ? "bg-white text-sky-800 shadow-2xs" : "text-slate-500"
                }`}
              >
                Sem VI (2)
              </button>
              <button
                onClick={() => setSelectedSemFilter("VII")}
                className={`px-2.5 py-0.5 text-xs font-bold rounded-md transition-all ${
                  selectedSemFilter === "VII" ? "bg-white text-sky-800 shadow-2xs" : "text-slate-500"
                }`}
              >
                Sem VII (1)
              </button>
              <button
                onClick={() => setSelectedSemFilter("VIII")}
                className={`px-2.5 py-0.5 text-xs font-bold rounded-md transition-all ${
                  selectedSemFilter === "VIII" ? "bg-white text-sky-800 shadow-2xs" : "text-slate-500"
                }`}
              >
                Sem VIII (Viva)
              </button>
            </div>
          </div>

          {/* Courses Horizontal Scroll */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-0.5">
            {availableCourses.map((c) => {
              const isSelected = selectedCourseCode === c.code;
              return (
                <button
                  key={c.code}
                  onClick={() => {
                    setSelectedCourseCode(c.code);
                    setSelectedUnit("all");
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-bold shrink-0 transition-all ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <span>{c.code}</span>
                  <span className="ml-1 opacity-75 font-normal">({c.name.split(" ")[0]})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── High Priority Topics Banner ── */}
        <div className="px-5 py-3 bg-amber-50/70 border-b border-amber-100/80 flex items-start gap-2.5 shrink-0">
          <Flame className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 flex-1">
            <span className="font-bold">High Priority PSNA Exam Topics: </span>
            <span className="text-amber-800 leading-relaxed">
              {activeBank.highPriorityTopics.join(" • ")}
            </span>
          </div>
        </div>

        {/* ── Filters & Search ── */}
        <div className="p-4 border-b border-slate-100 bg-white space-y-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. recurrence, K-map, induction, thread)..."
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              />
            </div>

            {/* Type selector */}
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-xl border border-slate-200">
              <button
                onClick={() => setSelectedType("all")}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                  selectedType === "all" ? "bg-white text-slate-900 shadow-2xs" : "text-slate-600"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedType("2m")}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                  selectedType === "2m" ? "bg-white text-slate-900 shadow-2xs" : "text-slate-600"
                }`}
              >
                2 Marks
              </button>
              <button
                onClick={() => setSelectedType("16m")}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                  selectedType === "16m" ? "bg-white text-slate-900 shadow-2xs" : "text-slate-600"
                }`}
              >
                16 Marks
              </button>
              <button
                onClick={() => setSelectedType("problems")}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all flex items-center gap-1 ${
                  selectedType === "problems" ? "bg-white text-emerald-800 shadow-2xs" : "text-slate-600"
                }`}
              >
                <Calculator className="w-3 h-3 text-emerald-600" />
                <span>Problems</span>
              </button>
            </div>
          </div>

          {/* Unit selection pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-0.5">
            <button
              onClick={() => setSelectedUnit("all")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold shrink-0 transition-all ${
                selectedUnit === "all"
                  ? "bg-[#0EA5E9] text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All Units (1-5)
            </button>
            {activeBank.units.map((u) => (
              <button
                key={u.unitNumber}
                onClick={() => setSelectedUnit(u.unitNumber)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium shrink-0 transition-all ${
                  selectedUnit === u.unitNumber
                    ? "bg-[#0EA5E9] text-white font-bold"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Unit {u.unitNumber}: {u.unitName}
              </button>
            ))}
          </div>
        </div>

        {/* ── Question Pool List ── */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {filteredUnits.map((unit) => {
            const twoMarks = unit.twoMarks.filter(
              (q) =>
                (selectedType === "all" || selectedType === "2m") &&
                (searchQuery === "" || q.toLowerCase().includes(searchQuery.toLowerCase()))
            );

            const sixteenMarks = unit.sixteenMarks.filter(
              (q) =>
                (selectedType === "all" || selectedType === "16m") &&
                (searchQuery === "" || q.toLowerCase().includes(searchQuery.toLowerCase()))
            );

            const problems = (unit.problems || []).filter(
              (p) =>
                (selectedType === "all" || selectedType === "problems") &&
                (searchQuery === "" ||
                  p.statement.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  p.subParts?.some((sp) => sp.text.toLowerCase().includes(searchQuery.toLowerCase())))
            );

            const totalInUnit = twoMarks.length + sixteenMarks.length + problems.length;
            if (totalInUnit === 0) return null;

            return (
              <div key={unit.unitNumber} className="space-y-4">
                {/* Unit Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-slate-900 text-white text-xs flex items-center justify-center font-mono">
                      {unit.unitNumber}
                    </span>
                    <span>{unit.unitName}</span>
                  </h3>
                  <span className="text-[11px] text-slate-500 font-mono font-medium">
                    {totalInUnit} questions shown
                  </span>
                </div>

                {/* Analytical & Numerical Problems (for Maths / Problem-heavy) */}
                {problems.length > 0 && (
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                      <Calculator className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Calculated Problems &amp; Proofs (13 / 16 Marks)</span>
                    </div>
                    {problems.map((prob, pIdx) => {
                      const id = `prob-${unit.unitNumber}-${pIdx}`;
                      const isCopied = copiedIndex === id;
                      const fullText = prob.subParts
                        ? prob.subParts.map((sp) => `${sp.partLabel} ${sp.text} (${sp.marks} Marks)`).join("\n")
                        : prob.statement;

                      return (
                        <div
                          key={id}
                          className="bg-emerald-50/50 rounded-xl p-3 border border-emerald-200/80 hover:border-emerald-300 transition-all group"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-1.5 flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                                  {prob.marks} Marks Problem
                                </span>
                                <span className="text-xs font-medium text-slate-700">
                                  {prob.statement}
                                </span>
                              </div>
                              {prob.subParts && (
                                <div className="space-y-1 pl-3 border-l-2 border-emerald-300">
                                  {prob.subParts.map((sp, spIdx) => (
                                    <div key={spIdx} className="text-xs text-slate-800 flex items-start gap-2">
                                      <span className="font-bold text-emerald-900 shrink-0">{sp.partLabel}</span>
                                      <span className="flex-1">{sp.text}</span>
                                      <span className="font-mono text-[10px] text-emerald-700 font-bold shrink-0">
                                        [{sp.marks}M]
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                            <button
                              onClick={() => handleCopy(fullText, id)}
                              className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white border border-emerald-200 text-emerald-800 hover:bg-emerald-100 flex items-center gap-1 shrink-0 transition-colors"
                              title="Copy problem"
                            >
                              {isCopied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                              <span>{isCopied ? "Copied" : "Copy"}</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* 2 Marks Questions */}
                {twoMarks.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      2 Marks Questions ({twoMarks.length})
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {twoMarks.map((qText, qIdx) => {
                        const id = `2m-${unit.unitNumber}-${qIdx}`;
                        const isCopied = copiedIndex === id;
                        return (
                          <div
                            key={id}
                            className="bg-white rounded-xl p-2.5 border border-slate-200/90 hover:border-sky-300 hover:bg-sky-50/20 transition-all flex items-start justify-between gap-3 group"
                          >
                            <div className="flex items-start gap-2.5 flex-1 min-w-0">
                              <span className="font-mono text-xs text-slate-400 font-semibold shrink-0 mt-0.5">
                                {qIdx + 1}.
                              </span>
                              <p className="text-xs text-slate-800 font-medium leading-relaxed">
                                {qText}
                              </p>
                            </div>
                            <button
                              onClick={() => handleCopy(qText, id)}
                              className="opacity-0 group-hover:opacity-100 px-2 py-0.5 rounded-lg text-[11px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1 shrink-0 transition-all"
                              title="Copy question"
                            >
                              {isCopied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                              <span>{isCopied ? "Copied" : "Copy"}</span>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 16 Marks Questions */}
                {sixteenMarks.length > 0 && (
                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      16 Marks Descriptive Questions ({sixteenMarks.length})
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {sixteenMarks.map((qText, qIdx) => {
                        const id = `16m-${unit.unitNumber}-${qIdx}`;
                        const isCopied = copiedIndex === id;
                        return (
                          <div
                            key={id}
                            className="bg-white rounded-xl p-3 border border-slate-200/90 hover:border-sky-300 hover:bg-sky-50/20 transition-all flex items-start justify-between gap-3 group"
                          >
                            <div className="flex items-start gap-2.5 flex-1 min-w-0">
                              <span className="font-mono text-xs text-slate-400 font-semibold shrink-0 mt-0.5">
                                {qIdx + 1}.
                              </span>
                              <p className="text-xs text-slate-800 font-medium leading-relaxed">
                                {qText}
                              </p>
                            </div>
                            <button
                              onClick={() => handleCopy(qText, id)}
                              className="opacity-0 group-hover:opacity-100 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1 shrink-0 transition-all"
                              title="Copy question"
                            >
                              {isCopied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                              <span>{isCopied ? "Copied" : "Copy"}</span>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Bottom Action Footer ── */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Total in {activeBank.code}:</span>{" "}
            {activeBank.units.reduce(
              (acc, u) => acc + u.twoMarks.length + u.sixteenMarks.length + (u.problems?.length || 0),
              0
            )}{" "}
            questions in pool
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
            >
              Close
            </button>
            <button
              onClick={handleLoadPaper}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-xs flex items-center gap-1.5"
            >
              <span>Load {activeBank.code} Paper</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
