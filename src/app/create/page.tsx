"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CreateRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <p className="text-xs text-slate-400 font-mono">Redirecting to PaperCraft Workspace...</p>
    </div>
  );
}
