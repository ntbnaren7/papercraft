"use client";

import { useState } from "react";
import { MetadataForm } from "@/components/generator/MetadataForm";
import { DocumentUploader } from "@/components/generator/DocumentUploader";
import { TemplateSelector } from "@/components/generator/TemplateSelector";
import { InstitutionalPaperView } from "@/components/paper/InstitutionalPaperView";
import { usePaperStore } from "@/store/usePaperStore";
import { ArrowRight, RotateCcw, BookOpen } from "lucide-react";
import { QuestionBankDrawer } from "./QuestionBankDrawer";

export function PaperCraftWorkflow() {
  const { metadata, startGeneration, isGenerating, resetToSamplePaper } = usePaperStore();
  const [activeTab, setActiveTab] = useState<"workspace" | "preview">("workspace");
  const [desktopView, setDesktopView] = useState<"split" | "full-paper" | "setup-only">("split");
  const [isBankOpen, setIsBankOpen] = useState(false);

  const canGenerate = Boolean(metadata.subject && metadata.subject.trim().length > 0);

  return (
    <div className="space-y-6">
      {/* ── Studio Header & Primary Canvas Controls ── */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
              Question Paper Studio
            </h2>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-100 text-slate-600 border border-slate-200/80">
              R-2022 Autonomous
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Configure course parameters, verify syllabus alignment, and review physical A4 examination sheets.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 flex-wrap">
          {/* Desktop Canvas View Switcher */}
          <div className="hidden lg:flex items-center bg-slate-100/90 p-0.5 rounded-lg border border-slate-200/70 text-xs">
            <button
              onClick={() => setDesktopView("split")}
              className={`px-3 py-1 font-medium rounded-md transition-all ${
                desktopView === "split"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Split Studio
            </button>
            <button
              onClick={() => setDesktopView("full-paper")}
              className={`px-3 py-1 font-medium rounded-md transition-all ${
                desktopView === "full-paper"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Full Sheet
            </button>
            <button
              onClick={() => setDesktopView("setup-only")}
              className={`px-3 py-1 font-medium rounded-md transition-all ${
                desktopView === "setup-only"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Setup Only
            </button>
          </div>

          <button
            onClick={() => setIsBankOpen(true)}
            className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 flex items-center gap-1.5 transition-colors shadow-2xs"
            title="Browse official PSNA question pool for this course"
          >
            <BookOpen className="w-3.5 h-3.5 text-slate-500" />
            <span>Question Bank</span>
            <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-1 py-0.2 rounded">
              {metadata.courseCode || "Pool"}
            </span>
          </button>

          <button
            onClick={resetToSamplePaper}
            className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 flex items-center gap-1.5 transition-colors shadow-2xs"
            title="Reload baseline sample question paper"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            <span>Reset Demo</span>
          </button>
        </div>
      </div>

      {/* View Toggle for Responsive / Mobile */}
      <div className="no-print lg:hidden flex rounded-xl bg-white p-1 border border-slate-200 shadow-xs text-xs font-medium">
        <button
          onClick={() => setActiveTab("workspace")}
          className={`flex-1 py-1.5 rounded-lg transition-all ${
            activeTab === "workspace" ? "bg-slate-900 text-white shadow-xs" : "text-slate-600"
          }`}
        >
          1. Course & Parameters
        </button>
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex-1 py-1.5 rounded-lg transition-all ${
            activeTab === "preview" ? "bg-slate-900 text-white shadow-xs" : "text-slate-600"
          }`}
        >
          2. Examination Paper
        </button>
      </div>

      {/* Main Setup & Live Sheet Preview Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Form & Material Uploads */}
        <div
          className={`space-y-4 no-print ${
            desktopView === "full-paper"
              ? "hidden"
              : desktopView === "setup-only"
              ? "lg:col-span-12 max-w-3xl mx-auto w-full"
              : "lg:col-span-5"
          } ${activeTab === "preview" ? "hidden lg:block" : "block"}`}
        >
          {/* Metadata Parameters */}
          <MetadataForm />

          {/* Syllabus Reference Document */}
          <DocumentUploader />

          {/* Question Paper Pattern */}
          <TemplateSelector />

          {/* Generate Action Button */}
          <div className="pt-2 sticky bottom-4 z-20">
            <button
              onClick={() => {
                startGeneration().catch(() => {});
              }}
              disabled={!canGenerate || isGenerating}
              className={`w-full py-3 px-5 rounded-xl text-xs font-semibold text-white shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99] ${
                canGenerate && !isGenerating
                  ? "bg-slate-900 hover:bg-black cursor-pointer"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              {isGenerating ? (
                <>
                  <RotateCcw className="w-3.5 h-3.5 animate-spin text-slate-400" />
                  <span>Synthesizing Examination Paper...</span>
                </>
              ) : (
                <>
                  <span>Generate Examination Paper</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </>
              )}
            </button>

            {!canGenerate && (
              <p className="text-center text-[11px] text-slate-400 mt-1.5 font-normal">
                Enter a Subject / Course Name above to begin generation.
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Predefined Institutional Paper Preview */}
        <div
          className={`${
            desktopView === "full-paper"
              ? "lg:col-span-12 w-full"
              : desktopView === "setup-only"
              ? "hidden"
              : "lg:col-span-7"
          } ${activeTab === "workspace" ? "hidden lg:block" : "block"}`}
        >
          <InstitutionalPaperView />
        </div>
      </div>

      {/* ── Official Question Bank Drawer ── */}
      <QuestionBankDrawer
        isOpen={isBankOpen}
        onClose={() => setIsBankOpen(false)}
        initialCourseCode={metadata.courseCode || "MA2C21"}
      />
    </div>
  );
}
