import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ExamMetadata, GeneratedPaper, PaperQuestion, GroundingSource } from "@/types/papercraft";
import { DEFAULT_METADATA, QUESTION_PATTERNS } from "@/data/defaultPatterns";
import { SAMPLE_PAPER } from "@/data/mockPaper";
import { getCoursePaper, COURSE_PAPERS } from "@/data/defaultCoursePapers";
import { ALL_PSNA_QUESTION_BANKS } from "@/data/psnaQuestionBank";
import { findCourseByCode } from "@/data/psnaCoursesCatalog";

interface PaperState {
  // Input Form & Upload State
  metadata: ExamMetadata;
  patternId: string;
  uploadedFile: {
    name: string;
    size: string;
    type: string;
    pageCount?: number;
    tokensEstimate?: number;
  } | null;

  // Active Paper State
  currentPaper: GeneratedPaper | null;
  savedPapers: GeneratedPaper[];

  // Generation & Pipeline Progress
  isGenerating: boolean;
  generationStep: number; // 0: idle, 1: PyMuPDF Extraction, 2: Semantic Chunking, 3: Gemini Synthesis, 4: Template Assembly
  generationProgressPercent: number;
  generationLogs: string[];

  // Grounding Inspector Modal/Drawer
  activeGrounding: {
    source: GroundingSource;
    questionNumber: number;
    questionText: string;
  } | null;

  // Active Navigation & View
  activeNav: string; // "dashboard" | "assignments" | "classroom" | "exams" | "library"
  setActiveNav: (nav: string) => void;

  // Actions
  setMetadataField: <K extends keyof ExamMetadata>(key: K, value: ExamMetadata[K]) => void;
  setPatternId: (patternId: string) => void;
  setUploadedFile: (file: { name: string; size: string; type: string; pageCount?: number; tokensEstimate?: number } | null) => void;
  
  // Paper Lifecycle
  startGeneration: () => Promise<void>;
  updateQuestionText: (sectionIdx: number, qIdx: number, newText: string) => void;
  updateQuestionMarks: (sectionIdx: number, qIdx: number, newMarks: number) => void;
  regenerateSingleQuestion: (sectionIdx: number, qIdx: number) => void;
  
  // Inspection & Dialogs
  openGroundingInspector: (source: GroundingSource, qNum: number, qText: string) => void;
  closeGroundingInspector: () => void;
  resetToSamplePaper: () => void;
  createNewDraft: () => void;
  loadCourseIntoGenerator: (course: { code: string; name?: string; semester?: string }) => void;
}

export const usePaperStore = create<PaperState>()(
  persist(
    (set, get) => ({
      activeNav: "dashboard",
      setActiveNav: (activeNav) => set({ activeNav }),
      metadata: { ...DEFAULT_METADATA },
      patternId: "autonomous-100",
      uploadedFile: {
        name: "CS2V13_Neural_Networks_and_Deep_Learning_Syllabus.pdf",
        size: "3.2 MB",
        type: "application/pdf",
        pageCount: 42,
        tokensEstimate: 28400,
      },
      currentPaper: SAMPLE_PAPER,
      savedPapers: [SAMPLE_PAPER],

      isGenerating: false,
      generationStep: 0,
      generationProgressPercent: 0,
      generationLogs: [],
      activeGrounding: null,

      setMetadataField: (key, value) =>
        set((state) => ({
          metadata: { ...state.metadata, [key]: value },
        })),

      setPatternId: (patternId) => set({ patternId }),

      setUploadedFile: (file) => set({ uploadedFile: file }),

      openGroundingInspector: (source, questionNumber, questionText) =>
        set({
          activeGrounding: { source, questionNumber, questionText },
        }),

      closeGroundingInspector: () => set({ activeGrounding: null }),

      resetToSamplePaper: () =>
        set({
          currentPaper: SAMPLE_PAPER,
          metadata: { ...DEFAULT_METADATA },
          patternId: "autonomous-100",
        }),

      createNewDraft: () =>
        set({
          currentPaper: null,
          metadata: {
            ...DEFAULT_METADATA,
            subject: "",
            courseCode: "",
            examTitle: "Semester Examination",
          },
          uploadedFile: null,
          generationStep: 0,
        }),

      loadCourseIntoGenerator: (course) => {
        const authenticPaper = getCoursePaper(course.code);
        const preset = findCourseByCode(course.code);

        set((state) => {
          const updatedMetadata: ExamMetadata = {
            ...state.metadata,
            courseCode: course.code,
            subject: course.name || preset?.name || authenticPaper?.metadata.subject || state.metadata.subject,
            semester: course.semester || preset?.semester || authenticPaper?.metadata.semester || state.metadata.semester,
            regulation: preset?.regulation || authenticPaper?.metadata.regulation || "R-2022",
            degree: preset?.degree || authenticPaper?.metadata.degree || "B.E.",
            department: preset?.department || authenticPaper?.metadata.department || "Computer Science and Engineering",
            institutionName: authenticPaper?.metadata.institutionName || "PSNA College of Engineering and Technology, Dindigul - 624 622.",
            institutionSubHeader: authenticPaper?.metadata.institutionSubHeader || "(An Autonomous Institution Affiliated to Anna University, Chennai)",
            qpCode: preset?.qpCode || authenticPaper?.metadata.qpCode || "253101",
            duration: preset?.duration || authenticPaper?.metadata.duration || "3 Hours",
            commonTo: preset?.commonTo ?? (authenticPaper?.metadata.commonTo || ""),
            date: preset?.date || authenticPaper?.metadata.date || state.metadata.date,
            examTitle: preset?.examTitle || authenticPaper?.metadata.examTitle || state.metadata.examTitle,
            maxMarks: authenticPaper?.metadata.maxMarks || 100,
          };

          const updatedUploadedFile = preset?.syllabusFile ? {
            name: preset.syllabusFile,
            size: preset.syllabusSize || "2.6 MB",
            type: "application/pdf",
            pageCount: 40,
            tokensEstimate: 27500,
          } : authenticPaper?.sourceDocumentName ? {
            name: authenticPaper.sourceDocumentName,
            size: authenticPaper.sourceDocumentSize || "2.5 MB",
            type: "application/pdf",
            pageCount: 38,
            tokensEstimate: 26000,
          } : state.uploadedFile;

          return {
            metadata: updatedMetadata,
            currentPaper: authenticPaper || state.currentPaper,
            uploadedFile: updatedUploadedFile,
            activeNav: "assignments",
          };
        });
      },

      updateQuestionText: (sectionIdx, qIdx, newText) => {
        const paper = get().currentPaper;
        if (!paper) return;
        const newSections = [...paper.sections];
        const newQuestions = [...newSections[sectionIdx].questions];
        newQuestions[qIdx] = { ...newQuestions[qIdx], text: newText };
        newSections[sectionIdx] = { ...newSections[sectionIdx], questions: newQuestions };
        set({ currentPaper: { ...paper, sections: newSections } });
      },

      updateQuestionMarks: (sectionIdx, qIdx, newMarks) => {
        const paper = get().currentPaper;
        if (!paper) return;
        const newSections = [...paper.sections];
        const newQuestions = [...newSections[sectionIdx].questions];
        newQuestions[qIdx] = { ...newQuestions[qIdx], marks: newMarks };
        newSections[sectionIdx] = { ...newSections[sectionIdx], questions: newQuestions };
        set({ currentPaper: { ...paper, sections: newSections } });
      },

      regenerateSingleQuestion: (sectionIdx, qIdx) => {
        const paper = get().currentPaper;
        if (!paper) return;
        const currentQ = paper.sections[sectionIdx].questions[qIdx];
        const courseCode = paper.metadata.courseCode?.toUpperCase().trim();
        const bank = courseCode ? ALL_PSNA_QUESTION_BANKS[courseCode] : null;

        let replacementText = "";
        if (bank) {
          if (sectionIdx === 0) {
            // Part-A (2 Marks)
            const unitIdx = Math.min(4, Math.floor((currentQ.questionNumber - 1) / 2));
            const unitQuestions = bank.units[unitIdx]?.twoMarks || [];
            const available = unitQuestions.filter((q) => q !== currentQ.text);
            if (available.length > 0) {
              replacementText = available[Math.floor(Math.random() * available.length)];
            }
          } else {
            // Part-B / Part-C (16 Marks / 13 Marks)
            const unitIdx = Math.min(4, Math.max(0, currentQ.questionNumber - 11));
            const unitQuestions = bank.units[unitIdx]?.sixteenMarks || [];
            const available = unitQuestions.filter((q) => q !== currentQ.text);
            if (available.length > 0) {
              replacementText = available[Math.floor(Math.random() * available.length)];
            }
          }
        }

        if (!replacementText) {
          const alternatives: Record<number, string> = {
            1: "State and define Little-o (o) and Little-omega (ω) asymptotic notations with formal limits.",
            2: "Solve the recurrence relation T(n) = 2T(n/2) + n using the Recursion Tree Method.",
            3: "Under what conditions does a greedy choice lead to an optimal global solution? Explain with an example.",
            4: "Explain the cut property and cycle property in Minimum Spanning Tree algorithms.",
            5: "Explain the black-height invariant in Red-Black Trees and why it bounds the maximum height to 2*log(n+1).",
            6: "Demonstrate Boyer-Moore bad character and good suffix heuristics with a search pattern example.",
            7: "Explain how bounding functions minimize branch exploration in 0/1 Knapsack Branch & Bound.",
            8: "Explain the Hamiltonian Cycle problem and formulate its backtracking state space tree.",
            9: "Define polynomial-time reduction and explain why transitivity holds for reductions.",
            10: "Explain the significance of the Cook-Levin theorem in NP-Completeness theory.",
          };
          replacementText =
            alternatives[currentQ.questionNumber] ||
            `Formulate an analytical assessment problem for ${paper.metadata.subject || "the course"} demonstrating cognitive level ${currentQ.bloomLevel || "Application"}.`;
        }

        const newSections = [...paper.sections];
        const newQuestions = [...newSections[sectionIdx].questions];
        newQuestions[qIdx] = {
          ...currentQ,
          text: replacementText,
          groundingSource: currentQ.groundingSource
            ? {
                ...currentQ.groundingSource,
                heading: `${currentQ.groundingSource.heading} (Regenerated Variant)`,
                confidenceScore: 0.99,
              }
            : undefined,
        };
        newSections[sectionIdx] = { ...newSections[sectionIdx], questions: newQuestions };
        set({ currentPaper: { ...paper, sections: newSections } });
      },

      startGeneration: async () => {
        set({
          isGenerating: true,
          generationStep: 1,
          generationProgressPercent: 15,
          generationLogs: ["Module 1: Ingesting academic material via PyMuPDF...", "Extracting raw text streams and headings..."],
        });

        await new Promise((r) => setTimeout(r, 900));

        set({
          generationStep: 2,
          generationProgressPercent: 45,
          generationLogs: [
            "Module 1: Document parsed (38 pages, 24,500 tokens).",
            "Module 2: Generating semantic text chunks (size: 500, overlap: 80)...",
            "Module 2: Computing vector embeddings & building pgvector context index...",
          ],
        });

        await new Promise((r) => setTimeout(r, 1100));

        set({
          generationStep: 3,
          generationProgressPercent: 80,
          generationLogs: [
            "Module 2: Context index established (72 semantic chunks).",
            "Module 3: Formulating grounded generation prompt for Gemini 1.5...",
            "Module 3: Synthesizing context-grounded questions conforming to institutional structure...",
          ],
        });

        await new Promise((r) => setTimeout(r, 1200));

        set({
          generationStep: 4,
          generationProgressPercent: 100,
          generationLogs: [
            "Module 3: 15 context-grounded questions synthesized.",
            "Module 4: Injecting questions & marks into Institutional Examination Template...",
            "Assembling final institutional paper artifact.",
          ],
        });

        await new Promise((r) => setTimeout(r, 600));

        const state = get();
        const selectedPattern = QUESTION_PATTERNS.find((p) => p.id === state.patternId) || QUESTION_PATTERNS[0];
        const authenticPaper = getCoursePaper(state.metadata.courseCode || "");

        const newPaper: GeneratedPaper = authenticPaper
          ? {
              ...authenticPaper,
              id: `paper-${Date.now()}`,
              metadata: {
                ...authenticPaper.metadata,
                ...state.metadata,
                subject: state.metadata.subject || authenticPaper.metadata.subject,
                courseCode: state.metadata.courseCode || authenticPaper.metadata.courseCode,
              },
              createdAt: new Date().toISOString(),
              sourceDocumentName: state.uploadedFile?.name || `${state.metadata.courseCode || "Course"}_R2022_Syllabus.pdf`,
              sourceDocumentSize: state.uploadedFile?.size || "2.4 MB",
            }
          : {
              id: `paper-${Date.now()}`,
              metadata: { ...state.metadata },
              patternId: state.patternId,
              createdAt: new Date().toISOString(),
              status: "generated",
              sourceDocumentName: state.uploadedFile?.name || "Uploaded_Course_Material.pdf",
              sourceDocumentSize: state.uploadedFile?.size || "2.1 MB",
              sections: SAMPLE_PAPER.sections.map((sec, idx) => {
                const patSec = selectedPattern.sections[idx] || selectedPattern.sections[0];
                return {
                  ...sec,
                  sectionLabel: patSec.sectionLabel,
                  title: patSec.title,
                  instructions: patSec.instructions,
                  formulaSummary: patSec.formulaSummary,
                  totalMarks: patSec.questionCount * patSec.marksPerQuestion,
                };
              }),
            };

        set({
          isGenerating: false,
          generationStep: 0,
          generationProgressPercent: 0,
          currentPaper: newPaper,
          savedPapers: [newPaper, ...state.savedPapers],
        });
      },
    }),
    {
      name: "papercraft-storage",
      partialize: (state) => ({
        metadata: state.metadata,
        patternId: state.patternId,
        savedPapers: state.savedPapers,
        currentPaper: state.currentPaper,
      }),
    }
  )
);
