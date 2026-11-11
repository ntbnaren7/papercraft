export type BloomLevel =
  | "Remember"
  | "Understand"
  | "Apply"
  | "Analyze"
  | "Evaluate"
  | "Create";

export interface ExamMetadata {
  institutionName: string;
  institutionSubHeader?: string;
  department: string;
  degree?: string;
  examTitle: string;
  subject: string;
  courseCode: string;
  qpCode?: string;
  semester: string;
  regulation?: string;
  duration: string;
  maxMarks: number;
  date: string;
  academicYear: string;
  commonTo?: string;
  registerNumber?: string;
  generalInstructions?: string[];
}

export interface GroundingSource {
  chunkId: string;
  unit: string;
  heading: string;
  excerpt: string;
  confidenceScore: number;
}

export interface QuestionSubPart {
  partLabel: string; // e.g. "(i)" or "(ii)"
  text: string;
  marks: number;
}

export interface PaperQuestion {
  id: string;
  questionNumber: number;
  choiceLabel?: string; // e.g. "(a)" or "(b)"
  subDivisionLabel?: string; // e.g. "A"
  text: string;
  marks: number;
  bloomLevel?: BloomLevel;
  courseOutcome?: string;
  subParts?: QuestionSubPart[];
  groundingSource?: GroundingSource;
  orQuestion?: {
    id: string;
    questionNumber?: number;
    choiceLabel?: string;
    subDivisionLabel?: string; // e.g. "B"
    text: string;
    marks: number;
    bloomLevel?: BloomLevel;
    courseOutcome?: string;
    subParts?: QuestionSubPart[];
    groundingSource?: GroundingSource;
  };
}

export interface PaperSection {
  sectionLabel: string; // e.g. "Part-A", "Part-B", "Part-C"
  title?: string;
  instructions: string; // e.g. "Answer All Questions."
  formulaSummary?: string; // e.g. "10 x 2 = 20 Marks", "5 x 13 = 65 Marks", "1 x 15 = 15 Marks"
  totalMarks: number;
  questions: PaperQuestion[];
}

export interface PatternSection {
  sectionLabel: string;
  title: string;
  instructions: string;
  formulaSummary?: string;
  questionCount: number;
  marksPerQuestion: number;
  hasInternalChoice: boolean;
}

export interface QuestionPattern {
  id: string;
  name: string;
  description: string;
  totalMarks: number;
  sections: PatternSection[];
}

export interface GeneratedPaper {
  id: string;
  metadata: ExamMetadata;
  patternId: string;
  sections: PaperSection[];
  createdAt: string;
  status: "draft" | "generated" | "reviewed" | "exported";
  sourceDocumentName?: string;
  sourceDocumentSize?: string;
}
