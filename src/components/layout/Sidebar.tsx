"use client";

import Image from "next/image";
import { usePaperStore } from "@/store/usePaperStore";
import {
  LayoutDashboard,
  Users,
  FileText,
  Award,
  BookOpen,
  Settings,
} from "lucide-react";

export function Sidebar() {
  const { activeNav, setActiveNav, metadata } = usePaperStore();

  const navItems = [
    { id: "dashboard", label: "Home", icon: LayoutDashboard },
    { id: "classroom", label: "My Classroom", icon: Users },
    { id: "assignments", label: "Assignments", icon: FileText },
    { id: "exams", label: "Exams", icon: Award },
    { id: "library", label: "My Library", icon: BookOpen },
  ];

  return (
    <aside className="w-64 bg-white rounded-[28px] p-5 flex flex-col justify-between shrink-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/70 select-none sticky top-5 sm:top-6 h-[calc(100vh-48px)] z-30">
      {/* Top Section: Logo, CTA, Navigation */}
      <div className="space-y-6">
        {/* Logo */}
        <div className="flex items-center gap-3 px-2 pt-1">
          <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-sm">
            P
          </div>
          <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900 leading-none">
            PaperCraft
          </span>
        </div>

        {/* Action Button: AI Teacher's Toolkit (with blue outline, no star icon) */}
        <button
          onClick={() => setActiveNav("assignments")}
          className="w-full py-3 px-4 rounded-full bg-[#202226] text-white flex items-center justify-center text-xs font-bold tracking-wide border-2 border-[#0EA5E9] shadow-sm hover:bg-slate-800 transition-all active:scale-[0.98] group"
        >
          <span>AI Teacher&apos;s Toolkit</span>
        </button>

        {/* Navigation Links */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#F0F2F5] text-slate-900 font-bold shadow-2xs"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? "text-slate-900 stroke-[2.2]" : "text-slate-400 stroke-[1.8]"
                  }`}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section: Settings & Institutional School Badge */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <button
          onClick={() => setActiveNav("dashboard")}
          className="w-full flex items-center gap-3 px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
        >
          <Settings className="w-4 h-4 text-slate-400" />
          <span>Settings</span>
        </button>

        {/* Institutional School Badge */}
        <div className="bg-[#F4F6F8] rounded-2xl p-2.5 border border-slate-200/70 flex items-center gap-3 hover:bg-slate-100/70 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-2xs overflow-hidden p-1">
            <Image
              src="/images/psna_crest.png"
              alt="PSNA College Emblem"
              width={36}
              height={36}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="min-w-0 flex-1">
            <p
              className="text-xs font-bold text-slate-900 truncate leading-tight"
              title={metadata.institutionName || "PSNA College of Engineering and Technology"}
            >
              {metadata.institutionName || "PSNA College of Engineering & Tech"}
            </p>
            <p
              className="text-[10px] text-slate-500 truncate mt-0.5 font-medium"
              title={metadata.department || "Computer Science and Engineering"}
            >
              {metadata.department || "Computer Science and Engineering"}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
