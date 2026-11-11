"use client";

import Link from "next/link";
import { usePaperStore } from "@/store/usePaperStore";
import { FileText, Calendar, Clock, Award, Printer, ArrowUpRight, PlusCircle } from "lucide-react";

export default function PapersArchivePage() {
  const { savedPapers, createNewDraft } = usePaperStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h1 className="font-display text-2xl font-black text-slate-900 tracking-tight">
            Institutional Paper Archive
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse and retrieve previously generated examination papers for your courses.
          </p>
        </div>

        <Link
          href="/"
          onClick={createNewDraft}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 text-white text-xs font-bold hover:bg-brand-600 shadow-sm transition-all"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Create New Paper</span>
        </Link>
      </div>

      {savedPapers.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <FileText className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">No examination papers yet</h3>
          <p className="text-xs text-slate-500 mt-1">
            Generated papers will appear here for archival and printing.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {savedPapers.map((paper) => {
            const totalQuestions = paper.sections.reduce(
              (acc, sec) => acc + sec.questions.length,
              0
            );

            return (
              <div
                key={paper.id}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-brand-500/50 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                      {paper.metadata.courseCode || "CS302"}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {new Date(paper.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-slate-900 leading-snug group-hover:text-brand-600 transition-colors">
                    {paper.metadata.subject || "Untitled Examination Paper"}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 font-serif">
                    {paper.metadata.examTitle}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-slate-400" />
                      <span>{paper.metadata.maxMarks} Marks</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{paper.metadata.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-slate-400" />
                      <span>{totalQuestions} Questions</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{paper.metadata.semester}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-700 font-mono bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                    Grounding Verified
                  </span>

                  <Link
                    href="/"
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 hover:text-brand-600 transition-colors"
                  >
                    <span>Open in Workspace</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
