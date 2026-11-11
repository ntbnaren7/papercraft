"use client";

import { QUESTION_PATTERNS } from "@/data/defaultPatterns";
import { Layers, ShieldCheck, FileCheck, CheckCircle2, Building2 } from "lucide-react";

export default function TemplatesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-200 text-slate-700 uppercase">
            Institutional Standards
          </span>
        </div>
        <h1 className="font-display text-2xl font-black text-slate-900 tracking-tight">
          Predefined Examination Templates
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
          PaperCraft enforces strict institutional separation: the LLM is restricted to synthesizing question text and marks, while the deterministic template controls all examination formatting, borders, sections, and headers.
        </p>
      </div>

      {/* Pattern Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {QUESTION_PATTERNS.map((pat) => (
          <div
            key={pat.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 font-mono font-bold text-xs">
                  {pat.totalMarks} Marks
                </span>
                <span className="text-[11px] font-mono text-slate-400">#PATTERN-{pat.id.toUpperCase()}</span>
              </div>

              <h2 className="font-display font-bold text-lg text-slate-900 mb-2">
                {pat.name}
              </h2>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed font-serif">
                {pat.description}
              </p>

              {/* Section Breakdown */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Section Blueprint
                </span>
                {pat.sections.map((sec, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-100 space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                      <span>{sec.sectionLabel}: {sec.title}</span>
                      <span className="font-mono text-brand-600">
                        {sec.questionCount * sec.marksPerQuestion}M
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-serif italic">
                      {sec.instructions}
                    </p>
                    <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400 pt-1">
                      <span>{sec.questionCount} Questions</span>
                      <span>•</span>
                      <span>{sec.marksPerQuestion} Marks Each</span>
                      {sec.hasInternalChoice && (
                        <>
                          <span>•</span>
                          <span className="text-emerald-700 font-semibold">Internal Choice (OR)</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Institutional Policy Compliant</span>
            </div>
          </div>
        ))}
      </div>

      {/* Institutional Architecture Note */}
      <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase">
            <Building2 className="w-4 h-4" />
            <span>Deterministic Layout Architecture</span>
          </div>
          <h3 className="font-display text-lg font-bold text-white">
            Why Predefined Institutional Templates?
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-serif">
            Directly delegating layout formatting to LLMs causes unpredictable markdown, irregular margin drift, and non-standard tables. PaperCraft renders questions into rigid institutional layouts, ensuring every printed paper adheres perfectly to university examination controller guidelines.
          </p>
        </div>

        <div className="shrink-0">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            A4 Print Specification Certified
          </span>
        </div>
      </div>
    </div>
  );
}
