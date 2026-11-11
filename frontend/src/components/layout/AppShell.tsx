"use client";

import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface AppShellProps {
  children: React.ReactNode;
  className?: string;
}

export function AppShell({ children, className = "" }: AppShellProps) {
  return (
    <div className={`min-h-screen bg-[#E5E9EF] p-3 sm:p-5 lg:p-6 font-sans ${className}`.trim()}>
      <div className="max-w-[1560px] mx-auto flex gap-5 min-h-[calc(100vh-48px)] items-stretch">
        <Sidebar />
        <main className="flex-1 bg-[#F4F6F8] rounded-[32px] p-6 lg:p-8 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col overflow-x-hidden">
          <Header />
          <div className="flex-1">{children}</div>
        </main>
      </div>
    </div>
  );
}
