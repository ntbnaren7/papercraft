"use client";

import { InstitutionalPaperView } from "@/components/paper/InstitutionalPaperView";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function StandalonePaperPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="no-print flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Workspace</span>
        </Link>
      </div>

      <InstitutionalPaperView />
    </div>
  );
}
