"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { usePaperStore } from "@/store/usePaperStore";
import {
  PSNA_COURSE_PRESETS,
  CoursePreset,
} from "@/data/psnaCoursesCatalog";
import {
  Search,
  ChevronDown,
  Check,
  BookOpen,
  Sparkles,
  FileCheck2,
  X,
  Edit2,
  ArrowRight,
} from "lucide-react";

export function CourseSelectorDropdown() {
  const { metadata, loadCourseIntoGenerator, setMetadataField } = usePaperStore();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSem, setSelectedSem] = useState<string>("all");
  const [isManualEditMode, setIsManualEditMode] = useState(false);
  const [justSelectedCourse, setJustSelectedCourse] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Auto-focus search input when opened
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Current matched course preset
  const activeCoursePreset = useMemo(() => {
    const code = (metadata?.courseCode || "").toUpperCase().trim();
    const subj = (metadata?.subject || "").toLowerCase().trim();
    return PSNA_COURSE_PRESETS.find(
      (c) =>
        (code && c.code.toUpperCase() === code) ||
        (subj && c.name.toLowerCase() === subj)
    );
  }, [metadata?.courseCode, metadata?.subject]);

  // Filtered courses based on semester and search query
  const filteredCourses = useMemo(() => {
    return PSNA_COURSE_PRESETS.filter((course) => {
      const matchesSem = selectedSem === "all" ? true : course.semester === selectedSem;
      if (!matchesSem) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        course.code.toLowerCase().includes(q) ||
        course.name.toLowerCase().includes(q) ||
        course.category.toLowerCase().includes(q) ||
        course.qpCode.includes(q)
      );
    });
  }, [selectedSem, searchQuery]);

  // Semester counts for filter tabs
  const semCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PSNA_COURSE_PRESETS.length };
    PSNA_COURSE_PRESETS.forEach((c) => {
      counts[c.semester] = (counts[c.semester] || 0) + 1;
    });
    return counts;
  }, []);

  const handleSelectCourse = (course: CoursePreset) => {
    loadCourseIntoGenerator({
      code: course.code,
      name: course.name,
      semester: course.semester,
    });
    setIsManualEditMode(false);
    setIsOpen(false);
    setSearchQuery("");
    setJustSelectedCourse(course.code);
    setTimeout(() => setJustSelectedCourse(null), 3000);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* ── Label & Mode Toggle ── */}
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-xs font-medium text-slate-700 flex items-center gap-1.5">
          <span>Subject / Course Name</span>
          <span className="text-slate-400">*</span>
          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-sky-50 text-sky-700 border border-sky-200/60 font-normal">
            PSNA R-2022 Curriculum
          </span>
        </label>

        <button
          type="button"
          onClick={() => {
            setIsManualEditMode(!isManualEditMode);
            if (!isManualEditMode) setIsOpen(false);
          }}
          className="text-[11px] font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
        >
          <Edit2 className="w-3 h-3 text-slate-400" />
          <span>{isManualEditMode ? "Pick from Curriculum" : "Type Custom Name"}</span>
        </button>
      </div>

      {/* ── Manual Text Input Mode ── */}
      {isManualEditMode ? (
        <div className="relative">
          <input
            type="text"
            value={metadata.subject}
            onChange={(e) => setMetadataField("subject", e.target.value)}
            placeholder="e.g. Advanced Distributed Systems"
            className="w-full px-3 py-2 text-xs bg-slate-50/40 hover:bg-white focus:bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10 font-medium text-slate-900 transition-colors"
          />
        </div>
      ) : (
        /* ── Rich UI/UX Trigger Button ── */
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full p-2.5 rounded-xl border bg-white hover:bg-slate-50/80 cursor-pointer transition-all flex items-center justify-between gap-3 text-left shadow-2xs group ${
            isOpen
              ? "border-slate-900 ring-2 ring-slate-900/10 bg-slate-50/50"
              : "border-slate-200/90 hover:border-slate-300"
          }`}
        >
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            {/* Course Code Chip */}
            <span className="shrink-0 font-mono text-[11px] font-bold px-2 py-1 rounded-md bg-slate-900 text-white shadow-2xs">
              {metadata.courseCode || "CS2V13"}
            </span>

            {/* Subject Title & Semester Info */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-900 truncate">
                  {metadata.subject || "Neural Networks and Deep Learning"}
                </span>
                <span className="shrink-0 text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-medium">
                  Sem {metadata.semester || "V"}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 truncate mt-0.5">
                QP: {metadata.qpCode || "251321"} • {metadata.duration || "3 Hours"} • {metadata.degree || "B.E."} {metadata.department}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <span className="hidden sm:inline text-[11px] text-slate-400 group-hover:text-slate-600 font-medium">
              Browse 19 Courses
            </span>
            <div className="w-6 h-6 rounded-md bg-slate-100 group-hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors">
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </div>
      )}

      {/* ── Auto-Fill Success Notice ── */}
      {justSelectedCourse && (
        <div className="mt-1.5 p-2 rounded-lg bg-emerald-50 border border-emerald-200/80 text-[11px] text-emerald-800 flex items-center gap-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
          <FileCheck2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>
            <strong>{justSelectedCourse}</strong> selected: Course Code, QP Code, Semester, Duration & physical examination paper updated automatically!
          </span>
        </div>
      )}

      {/* ── Rich Popover Dropdown Menu ── */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xl p-3.5 animate-in fade-in zoom-in-95 duration-150">
          {/* Header */}
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-slate-600" />
                <h4 className="text-xs font-bold text-slate-900">
                  Select Official PSNA Curriculum Course
                </h4>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Choosing a course automatically fills all exam fields & loads the verified paper.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Box */}
          <div className="relative mb-2.5">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by course code, title, or keyword (e.g. CS2512, Compiler, Math)..."
              className="w-full pl-8 pr-8 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:bg-white text-slate-900 placeholder:text-slate-400 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Semester Filter Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 mb-2 no-scrollbar border-b border-slate-100 text-[11px]">
            <button
              type="button"
              onClick={() => setSelectedSem("all")}
              className={`px-2 py-0.5 rounded-full font-medium shrink-0 transition-colors ${
                selectedSem === "all"
                  ? "bg-slate-900 text-white shadow-2xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All ({semCounts.all})
            </button>
            {["III", "IV", "V", "VI", "VII", "VIII"].map((sem) => (
              <button
                key={sem}
                type="button"
                onClick={() => setSelectedSem(sem)}
                className={`px-2 py-0.5 rounded-full font-medium shrink-0 transition-colors ${
                  selectedSem === sem
                    ? "bg-slate-900 text-white shadow-2xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Sem {sem} ({semCounts[sem] || 0})
              </button>
            ))}
          </div>

          {/* Course List */}
          <div className="max-h-[300px] overflow-y-auto space-y-1.5 pr-1">
            {filteredCourses.length === 0 ? (
              <div className="py-8 text-center text-slate-400 text-xs">
                No courses match "{searchQuery}". Try searching by course code or subject.
              </div>
            ) : (
              filteredCourses.map((course) => {
                const isSelected =
                  Boolean(metadata?.courseCode) &&
                  (metadata.courseCode || "").toUpperCase().trim() === course.code.toUpperCase();

                return (
                  <div
                    key={course.code}
                    onClick={() => handleSelectCourse(course)}
                    className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                      isSelected
                        ? "bg-slate-50 border-slate-900 ring-1 ring-slate-900 shadow-2xs"
                        : "bg-white hover:bg-slate-50/70 border-slate-200/80 hover:border-slate-300"
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      {/* Top Badges */}
                      <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                        <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-slate-900 text-white">
                          {course.code}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-medium">
                          Sem {course.semester}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 text-slate-500">
                          QP: {course.qpCode}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-sky-50 text-sky-700 border border-sky-200/60 font-medium">
                          {course.category}
                        </span>
                      </div>

                      {/* Course Title */}
                      <h5 className="text-xs font-bold text-slate-900 leading-tight">
                        {course.name}
                      </h5>

                      {/* Specs */}
                      <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-2 flex-wrap">
                        <span>{course.duration}</span>
                        <span>•</span>
                        <span>100 Marks</span>
                        <span>•</span>
                        <span>{course.units} Units</span>
                        {course.commonTo && (
                          <>
                            <span>•</span>
                            <span className="italic text-slate-500 font-medium">
                              {course.commonTo}
                            </span>
                          </>
                        )}
                      </p>
                    </div>

                    {/* Right Select State */}
                    <div className="shrink-0 pt-1">
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-slate-200 text-slate-400 group-hover:text-slate-900 flex items-center justify-center">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Helper Note */}
          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>Deterministic R-2022 PSNA Curriculum</span>
            <span className="font-mono">{filteredCourses.length} of 19 courses</span>
          </div>
        </div>
      )}
    </div>
  );
}
