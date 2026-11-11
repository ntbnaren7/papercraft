"use client";

import { usePaperStore } from "@/store/usePaperStore";
import { Building2 } from "lucide-react";
import { CourseSelectorDropdown } from "./CourseSelectorDropdown";
import { findCourseByCode } from "@/data/psnaCoursesCatalog";

export function MetadataForm() {
  const { metadata, setMetadataField, loadCourseIntoGenerator } = usePaperStore();

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
      <div className="mb-4 pb-3 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-900 tracking-tight">
          Course & Examination Details
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Select any course from the curriculum to automatically populate official examination parameters.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {/* Course & Subject Rich Dropdown */}
        <div className="md:col-span-2">
          <CourseSelectorDropdown />
        </div>

        {/* Course Code */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Course Code <span className="text-slate-400">*</span>
          </label>
          <input
            type="text"
            value={metadata.courseCode}
            onChange={(e) => {
              const val = e.target.value.toUpperCase();
              setMetadataField("courseCode", val);
              const preset = findCourseByCode(val);
              if (preset) {
                loadCourseIntoGenerator({ code: preset.code, name: preset.name, semester: preset.semester });
              }
            }}
            placeholder="e.g. CS2V13"
            className="w-full px-3 py-2 text-xs bg-slate-50/40 hover:bg-white focus:bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10 font-medium text-slate-900 uppercase font-mono transition-colors"
          />
        </div>

        {/* QP Code (Unique Question Paper Code) */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            QP Code (Centered on Paper)
          </label>
          <input
            type="text"
            value={metadata.qpCode || ""}
            onChange={(e) => setMetadataField("qpCode", e.target.value)}
            placeholder="e.g. 251321"
            className="w-full px-3 py-2 text-xs bg-slate-50/40 hover:bg-white focus:bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10 font-medium text-slate-900 font-mono transition-colors"
          />
        </div>

        {/* Degree & Branch */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Degree (e.g. B.E. / B.Tech / M.E.)
          </label>
          <input
            type="text"
            value={metadata.degree || "B.E."}
            onChange={(e) => setMetadataField("degree", e.target.value)}
            placeholder="B.E."
            className="w-full px-3 py-2 text-xs bg-slate-50/40 hover:bg-white focus:bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10 text-slate-900 transition-colors"
          />
        </div>

        {/* Branch / Department */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Branch / Department
          </label>
          <input
            type="text"
            value={metadata.department}
            onChange={(e) => setMetadataField("department", e.target.value)}
            placeholder="e.g. Computer Science and Engineering"
            className="w-full px-3 py-2 text-xs bg-slate-50/40 hover:bg-white focus:bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10 text-slate-900 transition-colors"
          />
        </div>

        {/* Semester & Regulation */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Semester
          </label>
          <input
            type="text"
            value={metadata.semester}
            onChange={(e) => setMetadataField("semester", e.target.value)}
            placeholder="e.g. V"
            className="w-full px-3 py-2 text-xs bg-slate-50/40 hover:bg-white focus:bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10 text-slate-900 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Regulation (e.g. R-2022)
          </label>
          <input
            type="text"
            value={metadata.regulation || "R-2022"}
            onChange={(e) => setMetadataField("regulation", e.target.value)}
            placeholder="R-2022"
            className="w-full px-3 py-2 text-xs bg-slate-50/40 hover:bg-white focus:bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10 text-slate-900 transition-colors"
          />
        </div>

        {/* Date & Duration */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Date of Examination
          </label>
          <input
            type="text"
            value={metadata.date}
            onChange={(e) => setMetadataField("date", e.target.value)}
            placeholder="e.g. 10-01-2026"
            className="w-full px-3 py-2 text-xs bg-slate-50/40 hover:bg-white focus:bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10 text-slate-900 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Duration
          </label>
          <input
            type="text"
            value={metadata.duration}
            onChange={(e) => setMetadataField("duration", e.target.value)}
            placeholder="e.g. 3 Hours"
            className="w-full px-3 py-2 text-xs bg-slate-50/40 hover:bg-white focus:bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10 text-slate-900 transition-colors"
          />
        </div>

        {/* Common to IT note */}
        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Common Specialization Note (Optional)
          </label>
          <input
            type="text"
            value={metadata.commonTo || ""}
            onChange={(e) => setMetadataField("commonTo", e.target.value)}
            placeholder="e.g. ( Common to IT )"
            className="w-full px-3 py-2 text-xs bg-slate-50/40 hover:bg-white focus:bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/10 text-slate-900 transition-colors"
          />
        </div>

        {/* Institution Title & Subheader */}
        <div className="md:col-span-2 pt-3 border-t border-slate-100 space-y-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            Institutional Letterhead Customization
          </div>
          <div className="space-y-2">
            <input
              type="text"
              value={metadata.institutionName}
              onChange={(e) => setMetadataField("institutionName", e.target.value)}
              placeholder="e.g. PSNA College of Engineering and Technology, Dindigul - 624 622."
              className="w-full px-3 py-1.5 text-xs bg-slate-50/40 hover:bg-white focus:bg-white border border-slate-200 rounded-md focus:outline-none focus:border-slate-900 text-slate-800 transition-colors"
            />
            <input
              type="text"
              value={metadata.institutionSubHeader || ""}
              onChange={(e) => setMetadataField("institutionSubHeader", e.target.value)}
              placeholder="e.g. (An Autonomous Institution Affiliated to Anna University, Chennai)"
              className="w-full px-3 py-1.5 text-xs bg-slate-50/40 hover:bg-white focus:bg-white border border-slate-200 rounded-md focus:outline-none focus:border-slate-900 text-slate-600 italic transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
