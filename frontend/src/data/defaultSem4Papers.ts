import { GeneratedPaper } from "@/types/papercraft";
import { DEFAULT_METADATA } from "./defaultPatterns";

export const SEM4_COURSE_PAPERS: Record<string, GeneratedPaper> = {
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. CS2411 — THEORY OF COMPUTATION (Problem-rich, Automata & Formal Grammars)
  // ─────────────────────────────────────────────────────────────────────────────
  CS2411: {
    id: "paper-cs2411-mayjun2026",
    metadata: {
      ...DEFAULT_METADATA,
      subject: "Theory of Computation",
      courseCode: "CS2411",
      qpCode: "254101",
      semester: "IV",
      regulation: "R-2022",
      degree: "B.E.",
      department: "Computer Science and Engineering",
      examTitle: "End Semester Examinations :: April/May 2026",
      maxMarks: 100,
      duration: "3 Hours",
    },
    patternId: "autonomous-100",
    createdAt: new Date().toISOString(),
    status: "generated",
    sourceDocumentName: "CS2411_Theory_of_Computation_R2022_Syllabus.pdf",
    sourceDocumentSize: "2.3 MB",
    sections: [
      {
        sectionLabel: "Part-A",
        instructions: "Answer All Questions.",
        formulaSummary: "10 x 2 = 20 Marks",
        totalMarks: 20,
        questions: [
          {
            id: "toc-q1",
            questionNumber: 1,
            text: "Differentiate between DFA and NFA with respect to their transition functions.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "toc-q2",
            questionNumber: 2,
            text: "Design a DFA over Σ = {0, 1} that accepts all strings ending with '01'.",
            marks: 2,
            bloomLevel: "Apply",
          },
          {
            id: "toc-q3",
            questionNumber: 3,
            text: "State Arden's Theorem for regular expressions.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "toc-q4",
            questionNumber: 4,
            text: "Write the regular expression for strings over {a, b} containing an even number of a's.",
            marks: 2,
            bloomLevel: "Apply",
          },
          {
            id: "toc-q5",
            questionNumber: 5,
            text: "Define an ambiguous context-free grammar with one example.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "toc-q6",
            questionNumber: 6,
            text: "Differentiate between acceptance by empty stack and acceptance by final state in a Pushdown Automaton.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "toc-q7",
            questionNumber: 7,
            text: "State the Pumping Lemma for Context-Free Languages.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "toc-q8",
            questionNumber: 8,
            text: "Define Chomsky Normal Form (CNF) and Greibach Normal Form (GNF).",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "toc-q9",
            questionNumber: 9,
            text: "What is the Halting Problem of Turing Machines? Is it decidable?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "toc-q10",
            questionNumber: 10,
            text: "Differentiate between classes P and NP.",
            marks: 2,
            bloomLevel: "Understand",
          },
        ],
      },
      {
        sectionLabel: "Part-B",
        instructions: "Answer All Questions.",
        formulaSummary: "5 x 13 = 65 Marks",
        totalMarks: 65,
        questions: [
          {
            id: "toc-q11",
            questionNumber: 11,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Convert the following NFA with states {q0, q1, q2}, alphabet {0, 1}, start state q0, final state {q2}, and transitions δ(q0, 0)={q0, q1}, δ(q0, 1)={q0}, δ(q1, 1)={q2} into an equivalent DFA using subset construction.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Construct a DFA over {0, 1} that accepts the language L = {w | w contains both '00' and '11' as substrings}.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "toc-q11-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Convert the ε-NFA with transitions δ(p, ε)={q}, δ(p, a)={p}, δ(q, b)={q}, δ(q, ε)={r}, δ(r, a)={r} into an equivalent DFA. Show ε-closure computation for each state.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Design a DFA that accepts binary strings representing numbers divisible by 3.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "toc-q12",
            questionNumber: 12,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Minimize the 6-state DFA with states {A, B, C, D, E, F}, start state A, final states {C, D, E}, and transitions δ(A,0)=B, δ(A,1)=C, δ(B,0)=A, δ(B,1)=D, δ(C,0)=E, δ(C,1)=F, δ(D,0)=E, δ(D,1)=F, δ(E,0)=E, δ(E,1)=F, δ(F,0)=F, δ(F,1)=F using the Table-Filling (Myhill-Nerode) algorithm.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Using the Pumping Lemma for regular languages, prove that L = {0ⁿ 1ⁿ | n ≥ 1} is not regular.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "toc-q12-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Find the regular expression corresponding to the finite automaton with states {q1, q2, q3} using Arden's theorem R = Q + RP.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Convert the regular expression r = (a + b)* ab into an equivalent ε-NFA using Thompson's construction.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "toc-q13",
            questionNumber: 13,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Show that the grammar E → E + E | E * E | (E) | id is ambiguous by finding two different leftmost derivations and two distinct parse trees for string 'id + id * id'.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Design a Pushdown Automaton (PDA) accepting the language L = {w c wᴿ | w ∈ {a, b}*} by empty stack.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "toc-q13-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Construct a Pushdown Automaton (PDA) accepting L = {aⁿ b²ⁿ | n ≥ 1} by final state. Give formal instantaneous descriptions for input 'aabbbb'.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Convert the CFG S → aABB | aAA, A → aBB | a, B → bBB | A into an equivalent PDA.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "toc-q14",
            questionNumber: 14,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Convert the following CFG into Chomsky Normal Form (CNF): S → aSa | bSb | a | b | ε. Show step-by-step elimination of ε-productions, unit productions, and useless symbols.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Using the Pumping Lemma for Context-Free Languages, prove that L = {aⁿ bⁿ cⁿ | n ≥ 1} is not context-free.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "toc-q14-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Design a Turing Machine to accept the language L = {0ⁿ 1ⁿ | n ≥ 1}. Provide the formal transition table and instantaneous description trace for input '0011'.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Design a Turing Machine that computes the 1's complement of a given binary string on tape.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "toc-q15",
            questionNumber: 15,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "State the Halting Problem of Turing Machines and prove that it is undecidable using a diagonalization argument.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Determine whether the following instance of Post's Correspondence Problem (PCP) has a solution: List A = (b, bab³, ba), List B = (b³, ba, a). If yes, find the matching sequence.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "toc-q15-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "State and prove Rice's Theorem for recursively enumerable languages. Discuss its implications for automated program analysis.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain polynomial-time reductions and show how 3-SAT reduces to the Independent Set problem.",
                  marks: 5,
                },
              ],
            },
          },
        ],
      },
      {
        sectionLabel: "Part-C",
        instructions: "Answer All Questions.",
        formulaSummary: "1 x 15 = 15 Marks",
        totalMarks: 15,
        questions: [
          {
            id: "toc-q16",
            questionNumber: 16,
            text: "Design a complete deterministic single-tape Turing Machine M that accepts the language of palindromes L = {w wᴿ | w ∈ {0, 1}*}. (a) Formulate the state transition diagram and formal 7-tuple definition. (b) Trace the instantaneous descriptions for the input strings '1001' and '1010'. (c) Prove why this language cannot be recognized by any deterministic pushdown automaton (DPDA) accepting by empty stack.",
            marks: 15,
            bloomLevel: "Create",
            orQuestion: {
              id: "toc-q16-or",
              text: "A programming language parser design requires testing whether grammars are unambiguous. (a) Given grammar S → if E then S | if E then S else S | other, prove ambiguity using dangling-else examples. (b) Transform the grammar into an equivalent unambiguous grammar. (c) Construct the Chomsky Normal Form (CNF) for the unambiguous grammar and apply the CYK algorithm to parse 'if E then other else other'.",
              marks: 15,
              bloomLevel: "Analyze",
            },
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. CS2414 — DESIGN AND ANALYSIS OF ALGORITHM
  // ─────────────────────────────────────────────────────────────────────────────
  CS2414: {
    id: "paper-cs2414-mayjun2026",
    metadata: {
      ...DEFAULT_METADATA,
      subject: "Design and Analysis of Algorithm",
      courseCode: "CS2414",
      qpCode: "254102",
      semester: "IV",
      regulation: "R-2022",
      degree: "B.E.",
      department: "Computer Science and Engineering",
      examTitle: "End Semester Examinations :: April/May 2026",
      maxMarks: 100,
      duration: "3 Hours",
    },
    patternId: "autonomous-100",
    createdAt: new Date().toISOString(),
    status: "generated",
    sourceDocumentName: "CS2414_DAA_R2022_Syllabus.pdf",
    sourceDocumentSize: "2.7 MB",
    sections: [
      {
        sectionLabel: "Part-A",
        instructions: "Answer All Questions.",
        formulaSummary: "10 x 2 = 20 Marks",
        totalMarks: 20,
        questions: [
          {
            id: "daa-q1",
            questionNumber: 1,
            text: "Define Big-O (O) and Big-Omega (Ω) asymptotic notations with formal mathematical limit definitions.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "daa-q2",
            questionNumber: 2,
            text: "Solve the recurrence relation T(n) = 4T(n/2) + n² using Master Theorem.",
            marks: 2,
            bloomLevel: "Apply",
          },
          {
            id: "daa-q3",
            questionNumber: 3,
            text: "What is an articulation point in a connected graph? State its role in biconnectivity.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "daa-q4",
            questionNumber: 4,
            text: "State the principle of optimality in Dynamic Programming.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "daa-q5",
            questionNumber: 5,
            text: "Why does Dijkstra's shortest path algorithm fail on graphs with negative edge weights?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "daa-q6",
            questionNumber: 6,
            text: "What is the greedy choice property in Huffman coding?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "daa-q7",
            questionNumber: 7,
            text: "Differentiate between Backtracking and Branch & Bound state-space search paradigms.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "daa-q8",
            questionNumber: 8,
            text: "Define 4-Queens problem and write the implicit bounding function to check column conflicts.",
            marks: 2,
            bloomLevel: "Apply",
          },
          {
            id: "daa-q9",
            questionNumber: 9,
            text: "Define NP-Hard and NP-Complete computational complexity classes.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "daa-q10",
            questionNumber: 10,
            text: "What is an approximation ratio ρ(n) for an approximation algorithm?",
            marks: 2,
            bloomLevel: "Understand",
          },
        ],
      },
      {
        sectionLabel: "Part-B",
        instructions: "Answer All Questions.",
        formulaSummary: "5 x 13 = 65 Marks",
        totalMarks: 65,
        questions: [
          {
            id: "daa-q11",
            questionNumber: 11,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Compute the Knuth-Morris-Pratt (KMP) prefix function π table for the pattern P = 'ABABCABAB'. Trace the matching of P inside text T = 'ABABDABABCABABAB'.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain the Rabin-Karp string matching algorithm with rolling hash functions. Analyze the worst-case and average-case time complexities.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "daa-q11-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain Merge Sort algorithm. Set up the recurrence relation for its running time and prove that its worst-case complexity is O(n log n).",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Solve the recurrence relation T(n) = 2T(n/2) + n log n using the Recursion Tree method.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "daa-q12",
            questionNumber: 12,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Apply the Floyd-Warshall all-pairs shortest-path algorithm to a 4-vertex directed graph with edge weights: (1,2)=3, (1,4)=7, (2,1)=8, (2,3)=2, (3,1)=5, (3,4)=1, (4,1)=2. Tabulate distance matrices D(0), D(1), D(2), D(3), D(4).",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain the Bellman-Ford shortest-path algorithm and show how it detects negative-weight cycles in a graph.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "daa-q12-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Find the maximum flow from source s to sink t in the given flow network using the Ford-Fulkerson method. Show residual networks and augmenting paths at each iteration.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Maximum Bipartite Matching and formulate it as a maximum-flow problem on a network.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "daa-q13",
            questionNumber: 13,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Given character probabilities: A: 0.35, B: 0.10, C: 0.20, D: 0.20, E: 0.15. (1) Construct the optimal Huffman coding tree. (2) Determine the variable-length prefix code for each character. (3) Compute the average code length.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Solve the Activity Selection Problem using the greedy approach for activities with start times s = (1, 3, 0, 5, 8, 5) and finish times f = (2, 4, 6, 7, 9, 9).",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "daa-q13-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Construct an Optimal Binary Search Tree (OBST) for keys (k1, k2, k3) with search probabilities p = (0.5, 0.1, 0.05) and dummy keys q = (0.15, 0.1, 0.05, 0.05) using dynamic programming.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain the Multistage Graph shortest path problem using forward and backward dynamic programming equations.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "daa-q14",
            questionNumber: 14,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Solve the 4-Queens problem using Backtracking. Draw the complete state space tree showing all promising and pruned non-promising paths.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Solve the Subset Sum problem for set S = {3, 5, 6, 7} and target sum d = 15 using Backtracking.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "daa-q14-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Solve the 0/1 Knapsack problem for items with weights w = (4, 7, 5, 3) and values v = (40, 42, 25, 12) with knapsack capacity W = 10 using Branch and Bound with bounding function calculation.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain the Assignment Problem using Branch and Bound with a cost reduction matrix.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "daa-q15",
            questionNumber: 15,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Prove that Vertex Cover is NP-complete by demonstrating a polynomial-time reduction from 3-SAT: 3-SAT ≤p Vertex Cover.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain the 2-approximation algorithm for the Vertex Cover problem and prove that its approximation ratio is at most 2.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "daa-q15-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the Travelling Salesperson Problem (TSP) using 2-approximation with Minimum Spanning Trees satisfying triangular inequality.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain the Cook-Levin Theorem and discuss why the Boolean Satisfiability (SAT) problem is the foundational NP-complete problem.",
                  marks: 5,
                },
              ],
            },
          },
        ],
      },
      {
        sectionLabel: "Part-C",
        instructions: "Answer All Questions.",
        formulaSummary: "1 x 15 = 15 Marks",
        totalMarks: 15,
        questions: [
          {
            id: "daa-q16",
            questionNumber: 16,
            text: "Design an algorithmic pipeline for an automated logistics delivery routing system. (a) Formulate the problem as a Travelling Salesperson Problem (TSP) on an asymmetric weighted graph with 5 distribution hubs. (b) Solve the problem using Branch & Bound with reduced cost matrices, constructing the search tree with lower bounds. (c) Compare the exact Branch & Bound solution against a greedy nearest-neighbor heuristic.",
            marks: 15,
            bloomLevel: "Create",
            orQuestion: {
              id: "daa-q16-or",
              text: "A cloud provider needs to allocate computational tasks to virtual servers under memory constraints. (a) Formulate the Bin Packing problem and prove that it is NP-hard. (b) Trace Next Fit, First Fit, Best Fit, and First Fit Decreasing (FFD) heuristics on items [0.4, 0.8, 0.2, 0.25, 0.7, 0.1, 0.6] with unit bin capacity 1.0. (c) Prove that First Fit Decreasing uses at most 11/9 OPT + 6/9 bins.",
              marks: 15,
              bloomLevel: "Analyze",
            },
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. IT2C25 — INTRODUCTION TO OPERATING SYSTEMS
  // ─────────────────────────────────────────────────────────────────────────────
  IT2C25: {
    id: "paper-it2c25-mayjun2026",
    metadata: {
      ...DEFAULT_METADATA,
      subject: "Introduction to Operating Systems",
      courseCode: "IT2C25",
      qpCode: "254103",
      semester: "IV",
      regulation: "R-2022",
      degree: "B.E.",
      department: "Computer Science and Engineering",
      examTitle: "End Semester Examinations :: April/May 2026",
      maxMarks: 100,
      duration: "3 Hours",
    },
    patternId: "autonomous-100",
    createdAt: new Date().toISOString(),
    status: "generated",
    sourceDocumentName: "IT2C25_Operating_Systems_R2022_Syllabus.pdf",
    sourceDocumentSize: "2.4 MB",
    sections: [
      {
        sectionLabel: "Part-A",
        instructions: "Answer All Questions.",
        formulaSummary: "10 x 2 = 20 Marks",
        totalMarks: 20,
        questions: [
          {
            id: "os-q1",
            questionNumber: 1,
            text: "Differentiate between user mode and kernel mode in operating system dual-mode operation.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "os-q2",
            questionNumber: 2,
            text: "What is a Process Control Block (PCB)? List four key fields contained in a PCB.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "os-q3",
            questionNumber: 3,
            text: "What is context switching? Why is context switching overhead considered non-productive CPU time?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "os-q4",
            questionNumber: 4,
            text: "State the four necessary conditions for deadlock to occur in an operating system.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "os-q5",
            questionNumber: 5,
            text: "What is Belady's Anomaly in page replacement? Which page replacement algorithm exhibits it?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "os-q6",
            questionNumber: 6,
            text: "Differentiate between internal fragmentation and external fragmentation in memory management.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "os-q7",
            questionNumber: 7,
            text: "What is thrashing? How does the working-set model prevent thrashing?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "os-q8",
            questionNumber: 8,
            text: "What are the three essential components of disk access time?",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "os-q9",
            questionNumber: 9,
            text: "Differentiate between Type-1 (Bare Metal) and Type-2 (Hosted) hypervisors.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "os-q10",
            questionNumber: 10,
            text: "How do Docker containers differ fundamentally from virtual machines?",
            marks: 2,
            bloomLevel: "Understand",
          },
        ],
      },
      {
        sectionLabel: "Part-B",
        instructions: "Answer All Questions.",
        formulaSummary: "5 x 13 = 65 Marks",
        totalMarks: 65,
        questions: [
          {
            id: "os-q11",
            questionNumber: 11,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain the system boot process in detail from power-on to user login. Compare legacy BIOS with UEFI boot mechanisms.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain different categories of System Calls provided by an operating system with examples in UNIX/Linux.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "os-q11-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain Monolithic, Microkernel, Layered, and Hybrid operating system architectures with neat diagrams.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain the role and architecture of Virtual Machine Monitors (VMMs) in operating system design.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "os-q12",
            questionNumber: 12,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Consider 5 processes P1, P2, P3, P4, P5 arriving at time 0, 1, 2, 3, 4 with burst times 10, 1, 2, 1, 5 ms. Draw Gantt charts and compute average turnaround time and waiting time for: (1) SJF Preemptive (SRTF), and (2) Round Robin (quantum = 2 ms).",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "In a system with 5 processes (P0-P4) and 3 resource types (A:10, B:5, C:7), given Allocation, Max, and Available matrices, apply Banker's Safety Algorithm to find if the system is in a safe state.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "os-q12-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the Dining Philosophers Problem and provide a deadlock-free synchronization solution using counting semaphores.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain multithreading models: Many-to-One, One-to-One, and Many-to-Many models with advantages and limitations.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "os-q13",
            questionNumber: 13,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Given the reference string 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1 and 3 page frames, calculate total page faults and trace page frames for: (1) FIFO, (2) Optimal, and (3) LRU replacement.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain Two-Level Paging address translation mechanism with a neat block diagram showing page directory, page table, and offset.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "os-q13-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain Segmentation with paging hardware support. Show logical address translation to physical address using segment table and page table.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Buddy System memory allocation and Slab Allocation techniques in the Linux kernel.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "os-q14",
            questionNumber: 14,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "A disk drive has 200 cylinders (0 to 199). The request queue is {98, 183, 37, 122, 14, 124, 65, 67}. The current head position is at cylinder 53 moving towards larger cylinders. Calculate the total head movement for: (1) SSTF, (2) SCAN, and (3) C-SCAN.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Compare contiguous, linked, and indexed file allocation methods with respect to random access speed and external fragmentation.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "os-q14-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain free-space management techniques: Bit vector, Linked list, Grouping, and Counting with space overhead calculations.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain the Linux Virtual File System (VFS) architecture and inode structure.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "os-q15",
            questionNumber: 15,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain the architecture of Android OS in detail with a diagram: Linux Kernel, Hardware Abstraction Layer (HAL), Android Runtime (ART/Dalvik), Native C/C++ Libraries, Application Framework, and System Apps.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Compare Type-1 (Bare-Metal) vs Type-2 (Hosted) Hypervisors and contrast Virtual Machines with Docker Containers in terms of isolation, startup overhead, and resource sharing.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "os-q15-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain iOS architecture: Core OS layer, Core Services layer, Media layer, and Cocoa Touch layer. Compare security mechanisms in iOS vs Android.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain containerization concepts in Docker: Images, Containers, Namespaces, Cgroups, and Union File Systems.",
                  marks: 5,
                },
              ],
            },
          },
        ],
      },
      {
        sectionLabel: "Part-C",
        instructions: "Answer All Questions.",
        formulaSummary: "1 x 15 = 15 Marks",
        totalMarks: 15,
        questions: [
          {
            id: "os-q16",
            questionNumber: 16,
            text: "Design a complete real-time memory management and process scheduling subsystem for an autonomous vehicle telemetry unit. (a) Formulate the real-time scheduling algorithm combining Rate Monotonic Scheduling (RMS) and Earliest Deadline First (EDF) for 3 periodic tasks T1(period 20ms, burst 5ms), T2(period 50ms, burst 10ms), and T3(period 100ms, burst 20ms). (b) Design a zero-copy Inter-Process Communication (IPC) shared memory buffer with POSIX mutex locks and condition variables. (c) Devise a page-locking (pinning) strategy to prevent page faults during critical maneuvers.",
            marks: 15,
            bloomLevel: "Create",
            orQuestion: {
              id: "os-q16-or",
              text: "A cloud virtual machine cluster experiences severe thrashing under heavy web workloads. (a) Analyze the root causes using page-fault frequency and working-set size metrics. (b) Implement a demand paging policy combining Least Recently Used with second-chance clock algorithm. (c) Construct a mathematical model determining the optimal number of frames allocated to each virtual machine to maximize system throughput.",
              marks: 15,
              bloomLevel: "Analyze",
            },
          },
        ],
      },
    ],
  },
};
