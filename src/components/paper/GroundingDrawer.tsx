"use client";

import { usePaperStore } from "@/store/usePaperStore";
import { X, ShieldCheck, Quote, BookOpen, ExternalLink, Sparkles } from "lucide-react";

export function GroundingDrawer() {
  const { activeGrounding, closeGroundingInspector } = usePaperStore();

  if (!activeGrounding) return null;

  const { source, questionNumber, questionText } = activeGrounding;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-900/40 backdrop-blur-xs no-print">
      <div
        className="w-full max-w-md h-full bg-white shadow-2xl border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Context Grounding Inspector</h3>
              <p className="text-[11px] text-slate-500 font-mono">Question {questionNumber} Evidence</p>
            </div>
          </div>

          <button
            onClick={closeGroundingInspector}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {/* Question Preview */}
          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80">
            <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1">
              Generated Question {questionNumber}
            </span>
            <p className="text-xs font-semibold text-slate-800 leading-relaxed">
              {questionText}
            </p>
          </div>

          {/* Grounding Metadata */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Source Material Unit:</span>
              <span className="font-semibold text-slate-800">{source.unit}</span>
            </div>
            <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Topic / Section Heading:</span>
              <span className="font-semibold text-slate-800">{source.heading}</span>
            </div>
            <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Grounding Confidence:</span>
              <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                {(source.confidenceScore * 100).toFixed(1)}% match
              </span>
            </div>
          </div>

          {/* Source Excerpt */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-2">
              <Quote className="w-4 h-4 text-brand-500" />
              Retrieved Academic Excerpt
            </div>
            <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200/70 text-xs text-slate-700 leading-relaxed font-serif italic relative">
              &ldquo;{source.excerpt}&rdquo;
            </div>
            <p className="text-[11px] text-slate-400 mt-1.5">
              Extracted from {source.chunkId} during Module 2 semantic retrieval.
            </p>
          </div>

          {/* Research Insight Callout */}
          <div className="p-3.5 rounded-xl bg-slate-900 text-slate-200 text-xs leading-relaxed space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-white text-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Research Verification Guarantee</span>
            </div>
            <p className="text-slate-400 text-[11px]">
              PaperCraft restricts Gemini to formulate questions strictly from retrieved source chunks, preventing factual hallucinations and un-taught topic drift.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={closeGroundingInspector}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            Done Reviewing
          </button>
        </div>
      </div>
    </div>
  );
}
