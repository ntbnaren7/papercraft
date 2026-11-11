"use client";

import { useState } from "react";
import { PaperQuestion } from "@/types/papercraft";
import { usePaperStore } from "@/store/usePaperStore";
import { ShieldCheck, RefreshCw, Edit2, Check, Sparkles } from "lucide-react";

interface QuestionRowProps {
  question: PaperQuestion;
  sectionIndex: number;
  questionIndex: number;
}

export function QuestionRow({ question, sectionIndex, questionIndex }: QuestionRowProps) {
  const { updateQuestionText, updateQuestionMarks, regenerateSingleQuestion, openGroundingInspector } =
    usePaperStore();

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(question.text);
  const [editMarks, setEditMarks] = useState(question.marks);

  const handleSaveEdit = () => {
    updateQuestionText(sectionIndex, questionIndex, editText);
    updateQuestionMarks(sectionIndex, questionIndex, editMarks);
    setIsEditing(false);
  };

  return (
    <div className="group relative py-2.5 px-2 -mx-2 rounded-lg hover:bg-slate-50/70 transition-colors border-b border-slate-100/70 last:border-b-0 page-break-inside-avoid">
      <div className="flex items-start justify-between gap-4">
        {/* Question Text & Numbering */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2.5">
            <span className="font-mono font-bold text-slate-900 text-sm shrink-0 w-6 pt-0.5">
              {question.questionNumber}.
            </span>

            {isEditing ? (
              <div className="flex-1 space-y-2">
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="w-full text-sm font-serif p-2.5 border border-brand-500 rounded-lg focus:outline-none bg-white text-slate-900 leading-relaxed resize-y"
                  rows={3}
                />
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={editMarks}
                    onChange={(e) => setEditMarks(Number(e.target.value))}
                    className="w-20 px-2 py-1 text-xs border border-slate-300 rounded font-mono"
                    placeholder="Marks"
                  />
                  <button
                    onClick={handleSaveEdit}
                    className="px-3 py-1 bg-brand-500 text-white rounded text-xs font-semibold flex items-center gap-1 hover:bg-brand-600"
                  >
                    <Check className="w-3.5 h-3.5" /> Save
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-2 py-1 text-slate-500 text-xs hover:text-slate-800"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-1">
                <p className="text-sm font-serif text-slate-900 leading-relaxed select-text">
                  {question.text}
                </p>

                {/* Sub-Badges & Grounding Citation */}
                <div className="flex flex-wrap items-center gap-2 mt-1.5 no-print">
                  {question.groundingSource && (
                    <button
                      type="button"
                      onClick={() =>
                        openGroundingInspector(question.groundingSource!, question.questionNumber, question.text)
                      }
                      className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100/70 transition-colors"
                      title="Inspect retrieved source excerpt"
                    >
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>{question.groundingSource.unit}</span>
                      <span className="text-emerald-500">
                        • {Math.round(question.groundingSource.confidenceScore * 100)}%
                      </span>
                    </button>
                  )}

                  {question.bloomLevel && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      Bloom: {question.bloomLevel}
                    </span>
                  )}

                  {question.courseOutcome && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      {question.courseOutcome}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Marks on Right & Faculty Quick Actions */}
        <div className="flex items-center gap-2 shrink-0 pt-0.5">
          {/* Marks display */}
          <span className="font-mono text-xs font-bold text-slate-900 bg-slate-100/80 px-2 py-0.5 rounded border border-slate-200/60">
            [{question.marks} {question.marks === 1 ? "Mark" : "Marks"}]
          </span>

          {/* Action Buttons (Hidden on Print) */}
          <div className="no-print flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setIsEditing(true)}
              className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded transition-colors"
              title="Edit question text / marks"
            >
              <Edit2 className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => regenerateSingleQuestion(sectionIndex, questionIndex)}
              className="p-1 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded transition-colors"
              title="Regenerate alternative question"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Internal Choice ("OR" Question) */}
      {question.orQuestion && (
        <div className="mt-3 pl-8 pr-2 pt-2 border-t border-dashed border-slate-200">
          <div className="text-center my-1">
            <span className="font-mono font-bold text-xs text-slate-500 uppercase tracking-widest px-3 py-0.5 bg-slate-100 rounded-full border border-slate-200/80">
              — OR —
            </span>
          </div>

          <div className="flex items-start justify-between gap-4 mt-2">
            <div className="flex-1">
              <p className="text-sm font-serif text-slate-900 leading-relaxed select-text">
                {question.orQuestion.text}
              </p>

              {question.orQuestion.groundingSource && (
                <div className="flex items-center gap-2 mt-1.5 no-print">
                  <button
                    type="button"
                    onClick={() =>
                      openGroundingInspector(
                        question.orQuestion!.groundingSource!,
                        question.questionNumber,
                        question.orQuestion!.text
                      )
                    }
                    className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100/70 transition-colors"
                  >
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>{question.orQuestion.groundingSource.unit}</span>
                  </button>
                </div>
              )}
            </div>

            <span className="font-mono text-xs font-bold text-slate-900 bg-slate-100/80 px-2 py-0.5 rounded border border-slate-200/60 shrink-0">
              [{question.orQuestion.marks} Marks]
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
