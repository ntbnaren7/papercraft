# PaperCraft

An institutional question paper generation and A4 proofing studio built with Next.js, TypeScript, and Tailwind CSS. PaperCraft separates question authoring and unit-bank curation from deterministic examination-sheet formatting so faculty can produce print-ready papers without layout drift.

## Origin & Institutional Context

PaperCraft was built as a side project for the faculty members of **PSNA College of Engineering and Technology, Dindigul, Tamil Nadu, India**, tailored around the institution's Autonomous **Regulation R-2022** examination format and course curriculum.

## Adapting PaperCraft for Your College

To configure PaperCraft for another college or university, update the institutional defaults, branding, and curriculum datasets below:

| Area | File(s) | What to Customize |
| :--- | :--- | :--- |
| **Institution & Exam Patterns** | `frontend/src/data/defaultPatterns.ts` | Update `DEFAULT_METADATA` (college name, subheader, degree, department, regulation, register number format) and `QUESTION_PATTERNS` (parts, mark splits, internal choice rules). |
| **College Emblem & Assets** | `frontend/public/images/`<br>`frontend/src/components/layout/Sidebar.tsx` | Replace `psna_crest.png` / `psna_logo.png` with your college crest and update the badge path or fallback labels in `Sidebar.tsx`. |
| **Curriculum & Course Presets** | `frontend/src/data/psnaCurriculum.ts`<br>`frontend/src/data/psnaCoursesCatalog.ts` | Replace `PSNA_CSE_CURRICULUM`, `ELECTIVE_COURSES`, and `PSNA_COURSE_PRESETS` with your department's semesters, course codes, QP codes, and syllabus titles. |
| **Question Banks & Sample Papers** | `frontend/src/data/psnaQuestionBank.ts`<br>`frontend/src/data/psnaSem*QuestionBank.ts`<br>`frontend/src/data/defaultCoursePapers.ts` | Populate unit-wise 2-mark questions, 13/15/16-mark descriptive questions, and course sample papers for your subjects. |
| **A4 Sheet Header & UI Labels** | `frontend/src/components/paper/InstitutionalPaperView.tsx`<br>`frontend/src/components/layout/Header.tsx` | Adjust the 16-cell Register Number grid, metadata rows, or profile display to match your controller of examinations layout. |

## Key Capabilities

- **Curriculum & Question Bank Browser**: Filter courses across Semesters I–VIII and professional elective verticals, and browse unit-wise `2M`, `13M`/`15M`/`16M`, and problem banks.
- **Deterministic Paper Patterns**: Built-in `autonomous-100` (10×2 + 5×13 + 1×15), `univ-100` (10×2 + 5×16), and `midterm-50` (5×2 + 4×10) templates with Either/Or internal choices.
- **Interactive A4 Studio**: Split, full-sheet, and 2-sheet side-by-side proofing views, zoom (`70%`–`120%`), inline question/mark editing, single-question regeneration from the unit bank, and blank/sample Register Number toggling.
- **Context Grounding Inspector**: View unit references, topic headings, source excerpts, and confidence scores per question.
- **Print & Export**: Native A4 portrait print-to-PDF styling (`@page` rules), plain-text copy, and client-side state persistence via Zustand.

## Tech Stack & Structure

- **Frontend**: Next.js 15 (App Router, standalone output), React 19, TypeScript, Tailwind CSS, Zustand, Lucide Icons, Socket.IO Client

```text
papercraft/
├── .gitignore
├── README.md
└── frontend/
    ├── Dockerfile
    ├── next.config.ts
    ├── package.json
    ├── public/images/          # Institutional crest, logo, empty-state assets
    └── src/
        ├── app/                # Routes: /, /papers, /templates, /about, /output/[id]
        ├── components/         # Dashboard, studio forms, A4 sheet view, drawers
        ├── data/               # Exam patterns, curriculum catalog, question banks
        ├── hooks/              # WebSocket hook (optional backend integration)
        ├── services/           # REST API client (optional backend integration)
        ├── store/              # Zustand stores (papercraft-storage persistence)
        ├── styles/             # Global & A4 @media print stylesheets
        └── types/              # TypeScript interfaces
```

## Setup Instructions

### Prerequisites

- **Node.js** `20+` and **npm** (or **Docker** for containerized runs)

### Local Development

```bash
git clone <your-repo-url>
cd papercraft/frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
cd papercraft/frontend
npm ci
npm run build
npm start
```

### Docker

```bash
docker build -t papercraft ./frontend
docker run -p 3000:3000 papercraft
```

### Optional Environment Variables

The standalone frontend works out of the box using the built-in curriculum and question bank datasets. If connecting an external backend service (`frontend/src/services/api.ts`, `frontend/src/hooks/useWebSocket.ts`), create `frontend/.env.local` (git-ignored):

```env
NEXT_PUBLIC_API_URL=http://localhost:5001/api
NEXT_PUBLIC_WS_URL=http://localhost:5001
```

