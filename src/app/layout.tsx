import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "@/styles/globals.css";
import { GroundingDrawer } from "@/components/paper/GroundingDrawer";
import { GenerationProgressModal } from "@/components/generator/GenerationProgressModal";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PaperCraft — Institutional Question Paper Generator",
  description:
    "PaperCraft transforms faculty-provided academic material into a structured question paper using AI, while preserving a predefined institutional examination format.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#E5E9EF] text-slate-800 antialiased selection:bg-brand-500 selection:text-white">
        {children}
        <GroundingDrawer />
        <GenerationProgressModal />
      </body>
    </html>
  );
}
