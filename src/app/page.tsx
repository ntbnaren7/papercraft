"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { OverviewDashboard } from "@/components/dashboard/OverviewDashboard";
import { PaperCraftWorkflow } from "@/components/dashboard/PaperCraftWorkflow";
import { usePaperStore } from "@/store/usePaperStore";
import { Home, Sparkles } from "lucide-react";

export default function AppHome() {
  const { activeNav, setActiveNav } = usePaperStore();

  return (
    <div className="min-h-screen bg-[#E5E9EF] p-3 sm:p-5 lg:p-6 font-sans">
      <div className="max-w-[1560px] mx-auto flex gap-5 min-h-[calc(100vh-48px)] items-start">
        {/* Left Sidebar (Desktop) */}
        <Sidebar />

        {/* Right Main Content Card */}
        <main className="flex-1 bg-[#F4F6F8] rounded-[32px] p-6 lg:p-8 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col overflow-x-hidden">
          {/* Top Header */}
          <Header />

          {/* Quick View Mode Switcher Pill */}
          <div className="no-print flex items-center justify-between mb-6 pb-3 border-b border-slate-200/70">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveNav("dashboard")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeNav === "dashboard"
                    ? "bg-[#202226] text-white shadow-xs"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
              >
                <Home className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Home &amp; Curriculum</span>
              </button>

              <button
                onClick={() => setActiveNav("assignments")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeNav === "assignments"
                    ? "bg-[#202226] text-white shadow-xs"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                <span>Question Paper Generator</span>
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>V0 Context Engine Ready</span>
            </div>
          </div>

          {/* Dynamic Content View */}
          <div className="flex-1">
            {activeNav === "assignments" ? (
              <PaperCraftWorkflow />
            ) : (
              <OverviewDashboard />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
