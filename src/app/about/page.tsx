"use client";

import { BookOpen, Cpu, Database, FileCheck, Layers, ShieldCheck, Sparkles, Award } from "lucide-react";

export default function AboutMethodologyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Paper Header */}
      <div className="text-center space-y-3 pb-8 border-b border-slate-200">
        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-brand-50 text-brand-700 border border-brand-200 uppercase">
          IEEE / Scopus Research Specification
        </span>
        <h1 className="font-serif font-black text-2xl sm:text-3xl text-slate-900 leading-tight">
          PaperCraft: An AI-Assisted System for Context-Grounded Question Paper Generation
        </h1>
        <p className="text-xs sm:text-sm font-mono text-slate-500 max-w-xl mx-auto">
          Context Retrieval • Large Language Models • Academic Assessment • Institutional Templates
        </p>
      </div>

      {/* Abstract Callout */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-3">
        <h2 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider font-mono flex items-center gap-2">
          <Award className="w-4 h-4 text-brand-500" />
          Research Abstract
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif text-justify">
          The preparation of academic question papers is a time-consuming task requiring faculty members to analyze course materials, formulate appropriate questions, assign marks, and adhere strictly to institutional examination formats. Although general-purpose Large Language Models enable automated question generation, unconstrained generation frequently results in irrelevant, unsupported, or contextually inaccurate questions. <strong>PaperCraft</strong> addresses this by separating content generation from document formatting. The system ingests faculty-provided academic documents (syllabi, notes, textbooks), retrieves context via dense embeddings, generates questions grounded strictly in the retrieved material, and places questions deterministically into a predefined institutional question-paper template.
        </p>
      </div>

      {/* 4 Core Modules */}
      <div className="space-y-4">
        <h2 className="font-display font-bold text-lg text-slate-900">
          Four Primary System Modules
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
              M1
            </div>
            <h3 className="font-display font-bold text-sm text-slate-900">
              Module 1: Document Processing
            </h3>
            <p className="text-xs text-slate-600 font-serif leading-relaxed">
              Accepts PDF, DOCX, and course notes. Employs <strong>PyMuPDF</strong> for high-fidelity text extraction, heading extraction, table filtering, and content segmentation without layout loss.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
              M2
            </div>
            <h3 className="font-display font-bold text-sm text-slate-900">
              Module 2: Context Retrieval
            </h3>
            <p className="text-xs text-slate-600 font-serif leading-relaxed">
              Divides extracted material into semantic segments, computes dense vector representations, and executes semantic similarity search to assemble an accurate context package for each unit.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">
              M3
            </div>
            <h3 className="font-display font-bold text-sm text-slate-900">
              Module 3: Grounded Question Generation
            </h3>
            <p className="text-xs text-slate-600 font-serif leading-relaxed">
              Prompts Gemini with strictly bounded context packages. Formulates structured question candidates containing cognitive Bloom level classifications, mark allocations, and citation tags.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">
              M4
            </div>
            <h3 className="font-display font-bold text-sm text-slate-900">
              Module 4: Institutional Paper Assembly
            </h3>
            <p className="text-xs text-slate-600 font-serif leading-relaxed">
              Injects questions into a deterministic institutional template. Preserves examination headers, sections, internal choice brackets, formatting, and page breaks without LLM formatting drift.
            </p>
          </div>
        </div>
      </div>

      {/* Experimental Evaluation Matrix */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <h2 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider font-mono">
          Proposed Evaluation Dimensions
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 border-b border-slate-200 font-mono text-slate-700">
              <tr>
                <th className="p-3">Evaluation Metric</th>
                <th className="p-3">Conventional Manual Method</th>
                <th className="p-3">PaperCraft AI-Assisted System</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-serif">
              <tr>
                <td className="p-3 font-semibold text-slate-900">Preparation Time</td>
                <td className="p-3 text-slate-600">3.5 – 6.0 Hours per paper</td>
                <td className="p-3 text-emerald-700 font-semibold font-mono">&lt; 15 Minutes (Review Phase)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Question Relevance</td>
                <td className="p-3 text-slate-600">Dependent on faculty fatigue</td>
                <td className="p-3 text-emerald-700 font-semibold font-mono">&gt; 96% Syllabus-grounded</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Context Grounding Evidence</td>
                <td className="p-3 text-slate-600">Manual cross-referencing</td>
                <td className="p-3 text-emerald-700 font-semibold font-mono">100% Citation Source Traceable</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Institutional Format Accuracy</td>
                <td className="p-3 text-slate-600">Varies per typist / word template</td>
                <td className="p-3 text-emerald-700 font-semibold font-mono">100% Deterministic Template Adherence</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
