"use client";

import { usePaperStore } from "@/store/usePaperStore";
import { Loader2, CheckCircle2, FileSearch, Database, Cpu, FileText } from "lucide-react";

export function GenerationProgressModal() {
  const { isGenerating, generationStep, generationProgressPercent, generationLogs } = usePaperStore();

  if (!isGenerating) return null;

  const steps = [
    {
      num: 1,
      title: "Module 1: Document Processing",
      desc: "Extracting text and structure via PyMuPDF",
      icon: FileSearch,
    },
    {
      num: 2,
      title: "Module 2: Context Retrieval",
      desc: "Semantic chunking & vector embedding index",
      icon: Database,
    },
    {
      num: 3,
      title: "Module 3: Grounded Synthesis",
      desc: "Gemini generating context-constrained questions",
      icon: Cpu,
    },
    {
      num: 4,
      title: "Module 4: Paper Assembly",
      desc: "Injecting questions & marks into institutional template",
      icon: FileText,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 animate-in fade-in zoom-in duration-200">
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center mx-auto mb-3 shadow-inner">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
          <h2 className="font-display text-xl font-bold text-slate-900">
            Generating Context-Grounded Paper
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Grounded assessment generation in progress according to predefined institutional format
          </p>
        </div>

        {/* Overall Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs font-mono font-medium text-slate-500 mb-1.5">
            <span>Overall Pipeline Progress</span>
            <span className="font-bold text-slate-800">{generationProgressPercent}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${generationProgressPercent}%` }}
            />
          </div>
        </div>

        {/* Step Items */}
        <div className="space-y-3 mb-5">
          {steps.map((s) => {
            const isDone = generationStep > s.num;
            const isCurrent = generationStep === s.num;
            const Icon = s.icon;

            return (
              <div
                key={s.num}
                className={`flex items-start gap-3 p-2.5 rounded-lg border transition-all ${
                  isCurrent
                    ? "border-brand-500/50 bg-brand-50/30 shadow-2xs"
                    : isDone
                    ? "border-emerald-200/80 bg-emerald-50/20 text-slate-700"
                    : "border-slate-100 bg-slate-50/30 text-slate-400 opacity-60"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                    isDone
                      ? "bg-emerald-500 text-white"
                      : isCurrent
                      ? "bg-brand-500 text-white animate-pulse"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {isDone ? <CheckCircle2 className="w-4 h-4" /> : <Icon className="w-3.5 h-3.5" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-slate-900 leading-tight">
                      {s.title}
                    </p>
                    {isCurrent && (
                      <span className="text-[10px] font-mono font-semibold text-brand-600 uppercase animate-pulse">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Terminal / System Logs */}
        <div className="bg-slate-900 rounded-lg p-3 text-[11px] font-mono text-emerald-400 max-h-24 overflow-y-auto space-y-1">
          {generationLogs.map((log, i) => (
            <div key={i} className="leading-tight">
              <span className="text-slate-500">[{new Date().toLocaleTimeString()}]</span> {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
