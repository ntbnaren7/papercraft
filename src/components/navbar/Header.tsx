"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Layers, BookOpen, PlusCircle, Sparkles, Building2 } from "lucide-react";
import { usePaperStore } from "@/store/usePaperStore";

export function Header() {
  const pathname = usePathname();
  const { metadata, createNewDraft } = usePaperStore();

  const navLinks = [
    { href: "/", label: "Generator", icon: Sparkles },
    { href: "/papers", label: "Paper Archive", icon: FileText },
    { href: "/templates", label: "Institutional Templates", icon: Layers },
    { href: "/about", label: "Methodology", icon: BookOpen },
  ];

  return (
    <header className="no-print sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Left */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm group-hover:bg-brand-500 transition-colors">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900 leading-none group-hover:text-brand-600 transition-colors">
                PaperCraft
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-medium mt-0.5">
                Institutional Assessment Engine
              </span>
            </div>
          </Link>

          {/* Primary Navigation */}
          <nav className="hidden md:flex items-center gap-1 pl-4 border-l border-slate-200">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? "bg-slate-100 text-slate-900 font-semibold shadow-2xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-brand-500" : "text-slate-400"}`} />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Info & Actions */}
        <div className="flex items-center gap-3">
          {/* Institutional Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            <span className="max-w-[200px] truncate font-medium">
              {metadata.department || "Dept. of Computer Science"}
            </span>
          </div>

          <Link
            href="/"
            onClick={createNewDraft}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brand-500 text-white text-xs font-semibold hover:bg-brand-600 shadow-sm transition-all active:scale-95"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>New Paper</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
