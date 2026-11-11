"use client";

import { usePaperStore } from "@/store/usePaperStore";
import { QUESTION_PATTERNS } from "@/data/defaultPatterns";
import { Check } from "lucide-react";

export function TemplateSelector() {
  const { patternId, setPatternId, setMetadataField } = usePaperStore();

  const handleSelectPattern = (id: string, marks: number) => {
    setPatternId(id);
    setMetadataField("maxMarks", marks);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
      <div className="mb-4 pb-3 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-900 tracking-tight">
          Examination Pattern
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Deterministic section layouts and mark allocations matching institutional standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {QUESTION_PATTERNS.map((pattern) => {
          const isSelected = pattern.id === patternId;
          return (
            <div
              key={pattern.id}
              onClick={() => handleSelectPattern(pattern.id, pattern.totalMarks)}
              className={`relative border rounded-xl p-3.5 cursor-pointer transition-all ${
                isSelected
                  ? "border-slate-900 bg-slate-50/70 ring-1 ring-slate-900 shadow-2xs"
                  : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/40 bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <span className="text-xs font-semibold text-slate-900 leading-tight">
                  {pattern.name}
                </span>
                {isSelected ? (
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                ) : (
                  <span className="text-[10px] font-mono font-medium text-slate-400">
                    {pattern.totalMarks}M
                  </span>
                )}
              </div>

              <p className="text-[11px] text-slate-500 mb-2.5 line-clamp-2 leading-relaxed">
                {pattern.description}
              </p>

              <div className="space-y-1 pt-2 border-t border-slate-200/60">
                {pattern.sections.map((sec, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-[10px] text-slate-600 font-mono"
                  >
                    <span>{sec.sectionLabel}</span>
                    <span className="font-medium text-slate-700">
                      {sec.questionCount} Qs × {sec.marksPerQuestion}M
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
