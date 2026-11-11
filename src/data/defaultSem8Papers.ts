import { GeneratedPaper } from "@/types/papercraft";
import { DEFAULT_METADATA } from "./defaultPatterns";

export const SEM8_COURSE_PAPERS: Record<string, GeneratedPaper> = {
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. CS2891 — PROJECT WORK / INTERNSHIP (Viva Voce & Defense Instrument)
  // ─────────────────────────────────────────────────────────────────────────────
  CS2891: {
    id: "paper-cs2891-mayjun2026",
    metadata: {
      ...DEFAULT_METADATA,
      subject: "Project Work / Internship",
      courseCode: "CS2891",
      qpCode: "258101",
      semester: "VIII",
      regulation: "R-2022",
      degree: "B.E.",
      department: "Computer Science and Engineering",
      examTitle: "End Semester Examinations :: Project Work & Viva Voce :: April/May 2026",
      maxMarks: 100,
      duration: "Project Defense",
    },
    patternId: "autonomous-100",
    createdAt: new Date().toISOString(),
    status: "generated",
    sourceDocumentName: "CS2891_Project_Work_Internship_R2022_Syllabus.pdf",
    sourceDocumentSize: "1.8 MB",
    sections: [
      {
        sectionLabel: "Part-A",
        instructions: "Answer All Questions.",
        formulaSummary: "10 x 2 = 20 Marks",
        totalMarks: 20,
        questions: [
          {
            id: "pw-q1",
            questionNumber: 1,
            text: "State the formal problem statement of your project and summarize the core motivation behind it.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "pw-q2",
            questionNumber: 2,
            text: "Justify the selection of your frontend, backend, and database technology stack over alternatives.",
            marks: 2,
            bloomLevel: "Analyze",
          },
          {
            id: "pw-q3",
            questionNumber: 3,
            text: "What key non-functional requirements (latency, throughput, uptime) are satisfied by your system?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "pw-q4",
            questionNumber: 4,
            text: "Explain your database schema design and justify the choice of relational vs NoSQL document storage.",
            marks: 2,
            bloomLevel: "Analyze",
          },
          {
            id: "pw-q5",
            questionNumber: 5,
            text: "Name the core algorithm implemented in your system and state its time and space complexity.",
            marks: 2,
            bloomLevel: "Apply",
          },
          {
            id: "pw-q6",
            questionNumber: 6,
            text: "What unit testing framework was utilized and what code coverage percentage was achieved?",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "pw-q7",
            questionNumber: 7,
            text: "What security mechanisms (authentication, input sanitization, data encryption) protect user assets?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "pw-q8",
            questionNumber: 8,
            text: "How does your system handle failure when a primary backend dependency or database service goes offline?",
            marks: 2,
            bloomLevel: "Apply",
          },
          {
            id: "pw-q9",
            questionNumber: 9,
            text: "Describe one significant technical roadblock encountered during development and how it was resolved.",
            marks: 2,
            bloomLevel: "Analyze",
          },
          {
            id: "pw-q10",
            questionNumber: 10,
            text: "Detail your individual personal technical contribution to the project architecture and repository.",
            marks: 2,
            bloomLevel: "Evaluate",
          },
        ],
      },
      {
        sectionLabel: "Part-B",
        instructions: "Answer All Questions. Each Question carries 13 Marks.",
        formulaSummary: "5 x 13 = 65 Marks",
        totalMarks: 65,
        questions: [
          // Q11: System Architecture and Methodology
          {
            id: "pw-q11a",
            questionNumber: 11,
            choiceLabel: "(a)",
            text: "System Architecture Design, Dataflow, and Component Modeling:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain the end-to-end architecture of your proposed system with a comprehensive architectural block diagram detailing the client presentation layer, API gateway, application services, database cluster, and third-party integrations.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Trace the complete dataflow and execution sequence of a primary user transaction through all architectural tiers using an illustrative sequence diagram.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "pw-q11b",
              questionNumber: 11,
              choiceLabel: "(b)",
              text: "Literature Survey, Research Gaps, and Proposed Solution Novelty:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Present a critical review of at least five peer-reviewed IEEE/ACM papers related to your project domain. Classify the state-of-the-art methodologies, identify specific limitations, and justify your proposed technical approach.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Contrast your system with existing commercial tools or published models in terms of functional scope, algorithmic efficiency, and implementation cost.",
                  marks: 5,
                },
              ],
            },
          },

          // Q12: Database & Algorithm Implementation
          {
            id: "pw-q12a",
            questionNumber: 12,
            choiceLabel: "(a)",
            text: "Database Schema Architecture, Normalization, and Query Optimization:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Present your complete database design: illustrate the Entity-Relationship (ER) diagram, justify relational table structures normalized up to 3NF/BCNF, or present your NoSQL collection schema with indexing strategies for high-volume queries.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain how database transactions maintain ACID properties, and describe your caching strategy (e.g., Redis) for frequently accessed datasets.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "pw-q12b",
              questionNumber: 12,
              choiceLabel: "(b)",
              text: "Algorithmic Implementation, Complexity Analysis, and Scalability:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the core algorithms implemented in your system. Provide pseudo-code, derive their time and space complexity, and discuss edge cases handled during algorithmic execution.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Evaluate the scalability of your system: explain how load balancing, horizontal pod autoscaling, or asynchronous message queuing prevent bottlenecks under 10x traffic spikes.",
                  marks: 5,
                },
              ],
            },
          },

          // Q13: Testing, Quality Assurance, and DevOps Deployment
          {
            id: "pw-q13a",
            questionNumber: 13,
            choiceLabel: "(a)",
            text: "Testing Methodologies, Verification, and Edge-Case Validation:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Formulate your comprehensive testing strategy: detail Unit Testing with mock dependencies, Integration Testing across API endpoints, System Stress Testing under concurrent loads, and Security Vulnerability scanning.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Tabulate five critical test cases with Test ID, Description, Input Data, Expected Output, Actual Result, and Pass/Fail status. Highlight at least one boundary edge case that required code refactoring.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "pw-q13b",
              questionNumber: 13,
              choiceLabel: "(b)",
              text: "Containerization, Cloud Deployment, and CI/CD Automation:",
              marks: 13,
              bloomLevel: "Create",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain your deployment architecture: detail Docker containerization, multi-stage builds, environment variable management, cloud infrastructure provisioning (AWS/GCP/Azure), and database replication.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Outline your automated CI/CD pipeline using GitHub Actions or Jenkins: detail commit hooks, automated unit test runs, static code analysis, Docker image tagging, and zero-downtime deployment.",
                  marks: 5,
                },
              ],
            },
          },

          // Q14: Industry Internship / Corporate Practice Defense
          {
            id: "pw-q14a",
            questionNumber: 14,
            choiceLabel: "(a)",
            text: "Industry Internship Deliverable, Agile Methodology, and Engineering Standards:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Present the technical deliverable developed during your industry internship: explain the business requirements, enterprise architectural constraints, technology stack integration, and quantifiable production impact.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain the Agile/Scrum engineering lifecycle followed during the internship: detail daily standups, sprint planning, Jira ticket tracking, pull request code reviews, and sprint retrospectives.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "pw-q14b",
              questionNumber: 14,
              choiceLabel: "(b)",
              text: "Technical Roadblock Resolution and Professional Skill Acquisition:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Describe a complex production bug or architectural bottleneck you encountered during your internship. Explain the diagnostic tools used, root cause analysis, implemented fix, and peer code review feedback.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Reflect on how your industry internship bridged the gap between academic computer science theory and production-grade software engineering, noting three key industry practices adopted.",
                  marks: 5,
                },
              ],
            },
          },

          // Q15: Results, Empirical Evaluation, and Societal Impact
          {
            id: "pw-q15a",
            questionNumber: 15,
            choiceLabel: "(a)",
            text: "Experimental Results, Performance Benchmarks, and Error Analysis:",
            marks: 13,
            bloomLevel: "Evaluate",
            subParts: [
              {
                partLabel: "(i).",
                text: "Present the empirical evaluation of your system: tabulate quantitative performance metrics (response time, throughput, accuracy, F1-score) and compare them graphically against benchmark models or baseline systems.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Perform a detailed error analysis: discuss false positives/negatives, system behavior under degraded network conditions, and user experience bottlenecks.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "pw-q15b",
              questionNumber: 15,
              choiceLabel: "(b)",
              text: "Societal Relevance, Engineering Ethics, and Future Extensibility:",
              marks: 13,
              bloomLevel: "Evaluate",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Discuss the societal, environmental, and economic implications of your project. Explain how your software adheres to data privacy standards (GDPR/DPDP), accessibility guidelines, and engineering ethics.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Outline a clear future roadmap: what feature enhancements, algorithm optimizations, or commercial deployment steps would you pursue if extended for six additional months?",
                  marks: 5,
                },
              ],
            },
          },
        ],
      },
      {
        sectionLabel: "Part-C",
        instructions: "Answer All Questions. Question carries 15 Marks.",
        formulaSummary: "1 x 15 = 15 Marks",
        totalMarks: 15,
        questions: [
          {
            id: "pw-q16a",
            questionNumber: 16,
            choiceLabel: "(a)",
            text: "Comprehensive Capstone Defense and System Demonstration:",
            marks: 15,
            bloomLevel: "Create",
            subParts: [
              {
                partLabel: "(a)",
                text: "Defend your complete capstone project before the External Examination Board: (1) Deliver an executive summary justifying problem novelty and commercial viability, (2) Defend architectural resilience during a live failure simulation (database disconnect / corrupted payload), (3) Demonstrate working prototype execution across core user workflows, (4) Present empirical benchmark validation against established baselines, and (5) State your personal individual contribution, lines of code authored, and engineering leadership.",
                marks: 15,
              },
            ],
            orQuestion: {
              id: "pw-q16b",
              questionNumber: 16,
              choiceLabel: "(b)",
              text: "Enterprise Industry Internship Technical Defense:",
              marks: 15,
              bloomLevel: "Create",
              subParts: [
                {
                  partLabel: "(b)",
                  text: "Defend your Industry Internship technical deliverable before the Examination Panel: (1) Detail the commercial problem statement and enterprise product ecosystem, (2) Present the technical architecture of the feature or microservice you engineered, (3) Demonstrate automated test suites, CI/CD pipeline integration, and production telemetry metrics, (4) Explain compliance with corporate security, licensing, and code standards, and (5) Synthesize how the industrial experience elevates your professional engineering capability.",
                  marks: 15,
                },
              ],
            },
          },
        ],
      },
    ],
  },
};
