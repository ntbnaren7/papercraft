"use client";

import { usePaperStore } from "@/store/usePaperStore";
import { ArrowLeft, FileText, HelpCircle, Bell, Sparkles, ChevronDown } from "lucide-react";

export function Header() {
  const { activeNav, setActiveNav } = usePaperStore();

  const getBreadcrumbTitle = () => {
    switch (activeNav) {
      case "classroom":
        return "My Classroom";
      case "assignments":
        return "Assignments";
      case "exams":
        return "Exams";
      case "library":
        return "My Library";
      default:
        return "Assignments";
    }
  };

  return (
    <header className="no-print flex items-center justify-between gap-4 mb-6">
      {/* Left: Back Arrow + Breadcrumb Pill */}
      <div className="flex items-center gap-2.5">
        <button
          onClick={() => setActiveNav("dashboard")}
          className="w-9 h-9 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-xs transition-all active:scale-95"
          title="Go to Home"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2]" />
        </button>

        <div className="bg-white px-3.5 py-1.5 rounded-full border border-slate-200/80 text-xs font-semibold text-slate-700 flex items-center gap-1.5 shadow-xs">
          <FileText className="w-3.5 h-3.5 text-slate-400" />
          <span>{getBreadcrumbTitle()}</span>
        </div>
      </div>

      {/* Right: Actions, Notifications, User Profile */}
      <div className="flex items-center gap-2.5">
        {/* Help Circle Button */}
        <button
          className="w-9 h-9 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-xs transition-colors"
          title="Help & Guidelines"
        >
          <HelpCircle className="w-4 h-4" />
        </button>

        {/* Notifications Button with Red Indicator */}
        <button
          className="w-9 h-9 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-xs relative transition-colors"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 rounded-full bg-[#0EA5E9] absolute top-2 right-2 border-2 border-white" />
        </button>

        {/* Sparkles / Quick AI Action */}
        <button
          onClick={() => setActiveNav("assignments")}
          className="w-9 h-9 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-brand-500 shadow-xs transition-colors"
          title="AI Toolkit"
        >
          <Sparkles className="w-4 h-4" />
        </button>

        {/* User Profile Pill */}
        <div className="bg-white pl-1.5 pr-3 py-1 rounded-full border border-slate-200/80 flex items-center gap-2 shadow-xs cursor-pointer hover:bg-slate-50 transition-colors">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 text-white flex items-center justify-center text-xs font-bold overflow-hidden shadow-2xs">
            MR
          </div>
          <span className="text-xs font-bold text-slate-800">Madhur Rastogi</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 stroke-[2]" />
        </div>
      </div>
    </header>
  );
}
