"use client";

import { useState } from "react";
import Image from "next/image";
import { usePaperStore } from "@/store/usePaperStore";
import {
  PSNA_CSE_CURRICULUM,
  ELECTIVE_COURSES,
  ALL_CURRICULUM_COURSES,
  ELECTIVE_VERTICALS,
  CurriculumCourse,
} from "@/data/psnaCurriculum";
import { ALL_PSNA_QUESTION_BANKS } from "@/data/psnaQuestionBank";
import { QuestionBankDrawer } from "./QuestionBankDrawer";
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Search,
  GraduationCap,
  Layers,
  ChevronDown,
  ChevronUp,
  FileText,
  RotateCcw,
  Printer,
  Compass,
  X,
  Calculator,
} from "lucide-react";

export function OverviewDashboard() {
  const { setActiveNav, currentPaper, resetToSamplePaper, loadCourseIntoGenerator } =
    usePaperStore();

  const [selectedSemester, setSelectedSemester] = useState<number | "all" | "electives">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCourseCode, setExpandedCourseCode] = useState<string | null>("CS2V13");
  const [isQuestionBankOpen, setIsQuestionBankOpen] = useState(false);
  const [activeBankCourseCode, setActiveBankCourseCode] = useState("MA2C21");

  // All courses including all core semesters and professional electives
  const allCourses: CurriculumCourse[] = ALL_CURRICULUM_COURSES;

  // Filter courses based on semester and search query
  const filteredCourses = allCourses.filter((course) => {
    const matchesSemester =
      selectedSemester === "all"
        ? true
        : selectedSemester === "electives"
        ? course.category === "elective"
        : course.semesterNum === selectedSemester;

    const matchesSearch =
      searchQuery.trim() === "" ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.units.some((u) => u.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (course.vertical && course.vertical.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesSemester && matchesSearch;
  });

  const handleGenerateForCourse = (course: CurriculumCourse) => {
    loadCourseIntoGenerator({
      code: course.code,
      name: course.name,
      semester: course.semester,
    });
  };

  const toggleCourseExpand = (code: string) => {
    setExpandedCourseCode((prev) => (prev === code ? null : code));
  };

  return (
    <div className="space-y-8 pb-12">
      {/* ───────────────────────────────────────────────────────────── */}
      {/* 1. HERO EMPTY STATE CARD: "NO PAPERS GENERATED YET"           */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-[32px] p-6 lg:p-8 border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.03)] relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 3D Minimal Clay Empty State Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[24px] overflow-hidden border border-sky-100 shadow-sm bg-gradient-to-b from-sky-50/50 to-white">
              <Image
                src="/images/no_papers_empty_state.jpg"
                alt="No question papers generated yet - clean exam desk"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Copy & Primary Actions */}
          <div className="lg:col-span-7 space-y-4">
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-tight">
              No Question Papers Generated Yet
            </h1>

            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
              Your examination repository is currently blank. Generate your first
              end-semester examination paper using syllabus notes and AI context retrieval,
              or select any course from the official <strong>PSNA R-2022 curriculum</strong> below
              to begin instantly.
            </p>

            <div className="flex items-center gap-3 pt-2 flex-wrap">
              {/* Primary Generate Button (Clean solid black without neon border) */}
              <button
                onClick={() => setActiveNav("assignments")}
                className="px-6 py-3.5 rounded-full bg-[#202226] text-white text-xs font-bold font-display uppercase tracking-wider hover:bg-slate-800 shadow-sm flex items-center gap-2 transition-all active:scale-95 group"
              >
                <span>Generate Question Paper</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* View Syllabus Jump Button */}
              <a
                href="#curriculum-browser"
                className="px-5 py-3 rounded-full bg-[#E0F2FE] hover:bg-[#BAE6FD] text-[#0284C7] text-xs font-bold transition-all flex items-center gap-2 border border-[#BAE6FD]"
              >
                <BookOpen className="w-4 h-4" />
                <span>View PSNA R-2022 Syllabus</span>
              </a>

              {/* Browse Official Question Bank */}
              <button
                onClick={() => {
                  setActiveBankCourseCode("MA2C21");
                  setIsQuestionBankOpen(true);
                }}
                className="px-4 py-3 rounded-full bg-sky-50 hover:bg-sky-100 text-[#0284C7] text-xs font-semibold border border-sky-200 transition-colors flex items-center gap-1.5"
                title="Browse official PSNA question pool for Semester III courses"
              >
                <BookOpen className="w-4 h-4" />
                <span>Browse PSNA Question Bank</span>
              </button>

              {/* Quick Demo Paper Loader */}
              <button
                onClick={resetToSamplePaper}
                className="px-4 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors flex items-center gap-1.5"
                title="Loads the 100-Marks CS2V13 Neural Networks sample paper from your photos"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                <span>Load Sample CS2V13 Paper</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 2. PSNA R-2022 B.E. CSE CURRICULUM BROWSER                   */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div id="curriculum-browser" className="space-y-4 pt-2">
        {/* Section Header */}
        <div className="bg-white rounded-[24px] p-5 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-slate-500 font-medium">
                PSNA B.E. Computer Science and Engineering (R-2022)
              </span>
            </div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              Curriculum & 5-Unit Theory Course Directory
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Click &quot;Generate Paper&quot; on any course to immediately prefill Course Code, Subject, and Semester into PaperCraft.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search course code or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/20 focus:border-[#0EA5E9] text-slate-900"
            />
          </div>
        </div>

        {/* Semester Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          <button
            type="button"
            onClick={() => setSelectedSemester("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all ${
              selectedSemester === "all"
                ? "bg-[#202226] text-white shadow-xs"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            All Semesters ({allCourses.length})
          </button>

          {PSNA_CSE_CURRICULUM.map((sem) => (
            <button
              key={sem.semesterNum}
              type="button"
              onClick={() => setSelectedSemester(sem.semesterNum)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all ${
                selectedSemester === sem.semesterNum
                  ? "bg-[#202226] text-white shadow-xs"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              Sem {sem.semester.replace("Semester ", "")} ({sem.courses.length})
            </button>
          ))}

          <button
            type="button"
            onClick={() => setSelectedSemester("electives")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all ${
              selectedSemester === "electives"
                ? "bg-[#0284C7] text-white shadow-xs"
                : "bg-[#E0F2FE] text-[#0284C7] hover:bg-[#BAE6FD] border border-[#BAE6FD]"
            }`}
          >
            ✦ Electives &amp; Verticals ({ELECTIVE_COURSES.length})
          </button>
        </div>

        {/* Filter Feedback Status Bar */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
          <div className="flex items-center gap-2">
            <span>
              Showing <strong className="text-slate-900">{filteredCourses.length}</strong> courses in{" "}
              <strong className="text-slate-900">
                {selectedSemester === "all"
                  ? "All Semesters"
                  : selectedSemester === "electives"
                  ? "Professional Electives & Verticals"
                  : `Semester ${selectedSemester}`}
              </strong>
              {searchQuery.trim() && (
                <span> matching &ldquo;{searchQuery}&rdquo;</span>
              )}
            </span>
          </div>

          {(selectedSemester !== "all" || searchQuery.trim() !== "") && (
            <button
              type="button"
              onClick={() => {
                setSelectedSemester("all");
                setSearchQuery("");
              }}
              className="text-[#0284C7] hover:underline font-semibold flex items-center gap-1"
            >
              <X className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCourses.map((course) => {
            const isExpanded = expandedCourseCode === course.code;

            return (
              <div
                key={course.code}
                className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs hover:border-[#0EA5E9]/60 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-[#0284C7] bg-[#E0F2FE] px-2.5 py-0.5 rounded-md border border-[#BAE6FD]">
                      {course.code}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 font-semibold">
                      Semester {course.semester}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="font-display font-bold text-sm text-slate-900 leading-snug group-hover:text-[#0284C7] transition-colors">
                    {course.name}
                  </h3>

                  {/* Category Note */}
                  <div className="mt-1 flex items-center gap-1.5">
                    {course.category === "elective" ? (
                      <span className="text-[10px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                        {course.vertical || "Professional Elective"}
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        Core Theory (5 Units)
                      </span>
                    )}
                  </div>

                  {/* Expandable 5-Unit Breakdown */}
                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5 animate-in fade-in duration-200">
                      <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Syllabus Units:
                      </p>
                      {course.units.map((unit, uIdx) => (
                        <div
                          key={uIdx}
                          className="text-[11px] font-serif text-slate-700 bg-slate-50/80 px-2 py-1 rounded border border-slate-100 flex items-start gap-1.5"
                        >
                          <span className="text-[10px] font-mono font-bold text-sky-600 shrink-0">
                            U{uIdx + 1}
                          </span>
                          <span className="line-clamp-2 leading-tight">{unit.replace(/^Unit [IVXLCDM]+:\s*/, "")}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => toggleCourseExpand(course.code)}
                    className="text-[11px] font-medium text-slate-500 hover:text-slate-800 flex items-center gap-0.5 transition-colors"
                  >
                    <span>{isExpanded ? "Hide Units" : "View 5 Units"}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3 h-3" />
                    ) : (
                      <ChevronDown className="w-3 h-3" />
                    )}
                  </button>

                  {ALL_PSNA_QUESTION_BANKS[course.code] && (
                    <button
                      onClick={() => {
                        setActiveBankCourseCode(course.code);
                        setIsQuestionBankOpen(true);
                      }}
                      className="px-2.5 py-1.5 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200 text-[11px] font-semibold hover:bg-sky-100 transition-all flex items-center gap-1"
                      title={`Browse PSNA Question Pool for ${course.name}`}
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>Question Pool</span>
                    </button>
                  )}

                  <button
                    onClick={() => handleGenerateForCourse(course)}
                    className="px-3 py-1.5 rounded-full bg-[#202226] text-white text-[11px] font-semibold hover:bg-[#0284C7] transition-all flex items-center gap-1 shadow-xs"
                    title={`Generate question paper for ${course.name}`}
                  >
                    <Sparkles className="w-3 h-3 text-[#38BDF8]" />
                    <span>Generate Paper</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500 text-xs">
            No courses found matching &quot;{searchQuery}&quot;. Try searching with another code or keyword.
          </div>
        )}
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 4. SIX PROFESSIONAL ELECTIVE VERTICALS ACCORDION              */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-[28px] p-6 border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-50 text-purple-700 border border-purple-200 uppercase tracking-wider">
                PSNA R-2022 Regulation
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Semesters V, VI & VII Professional Electives
              </span>
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900">
              The 6 Computer Science & Engineering Verticals
            </h3>
            <p className="text-xs text-slate-500">
              Students choose specialized verticals starting from Semester V. All verticals follow the standardized 100-mark physical examination layout.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          {ELECTIVE_VERTICALS.map((vert, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-xl p-3.5 border border-slate-200 hover:border-sky-300 transition-colors"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[10px] font-mono font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded">
                  {vert.codePrefix}
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-medium">
                  Vertical {idx + 1}
                </span>
              </div>
              <h4 className="font-bold text-xs text-slate-900 mb-2">
                {vert.name}
              </h4>
              <ul className="space-y-1">
                {vert.courses.map((c, cIdx) => (
                  <li
                    key={cIdx}
                    className="text-[11px] text-slate-600 flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky-500 shrink-0" />
                    <span className="truncate">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Official Question Bank Drawer ── */}
      <QuestionBankDrawer
        isOpen={isQuestionBankOpen}
        onClose={() => setIsQuestionBankOpen(false)}
        initialCourseCode={activeBankCourseCode}
      />
    </div>
  );
}
