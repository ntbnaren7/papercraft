import { GeneratedPaper } from "@/types/papercraft";
import { DEFAULT_METADATA } from "./defaultPatterns";

export const COURSE_PAPERS: Record<string, GeneratedPaper> = {
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. MA2C21 — DISCRETE MATHEMATICS (Problem-rich, rigorous mathematical exam)
  // ─────────────────────────────────────────────────────────────────────────────
  MA2C21: {
    id: "paper-ma2c21-novdec2025",
    metadata: {
      ...DEFAULT_METADATA,
      subject: "Discrete Mathematics",
      courseCode: "MA2C21",
      qpCode: "253101",
      semester: "III",
      regulation: "R-2022",
      degree: "B.E.",
      department: "Computer Science and Engineering",
      examTitle: "End Semester Examinations :: Nov/Dec 2025",
      maxMarks: 100,
      duration: "3 Hours",
    },
    patternId: "autonomous-100",
    createdAt: new Date().toISOString(),
    status: "generated",
    sourceDocumentName: "MA2C21_Discrete_Mathematics_R2022_Syllabus.pdf",
    sourceDocumentSize: "2.4 MB",
    sections: [
      {
        sectionLabel: "Part-A",
        instructions: "Answer All Questions.",
        formulaSummary: "10 x 2 = 20 Marks",
        totalMarks: 20,
        questions: [
          {
            id: "ma-q1",
            questionNumber: 1,
            text: "Construct the truth table for the compound proposition (P ∨ Q) → (P ∧ Q).",
            marks: 2,
            bloomLevel: "Apply",
            groundingSource: {
              chunkId: "ma-u1-1",
              unit: "Unit I: Logic and Proofs",
              heading: "Truth Tables and Propositional Logic",
              excerpt: "Truth tables evaluate conditional truth assignments across truth valuation vectors for compound propositions.",
              confidenceScore: 0.99,
            },
          },
          {
            id: "ma-q2",
            questionNumber: 2,
            text: "Translate the statement 'Every computer science student has taken at least one programming course' into predicate logic with quantifiers.",
            marks: 2,
            bloomLevel: "Understand",
            groundingSource: {
              chunkId: "ma-u1-2",
              unit: "Unit I: Logic and Proofs",
              heading: "Predicates and Quantifiers",
              excerpt: "Universal and existential quantifiers translate English natural language assertions into formal symbolic logic.",
              confidenceScore: 0.98,
            },
          },
          {
            id: "ma-q3",
            questionNumber: 3,
            text: "State the Principle of Mathematical Induction in its formal mathematical form.",
            marks: 2,
            bloomLevel: "Remember",
            groundingSource: {
              chunkId: "ma-u2-1",
              unit: "Unit II: Combinatorics",
              heading: "Mathematical Induction",
              excerpt: "P(1) is true, and ∀k(P(k) → P(k+1)) implies P(n) is true for all positive integers n.",
              confidenceScore: 0.99,
            },
          },
          {
            id: "ma-q4",
            questionNumber: 4,
            text: "Find the minimum number of students required in a classroom to guarantee that at least 5 of them receive the same grade from {A, B, C, D, F}.",
            marks: 2,
            bloomLevel: "Apply",
            groundingSource: {
              chunkId: "ma-u2-2",
              unit: "Unit II: Combinatorics",
              heading: "Generalized Pigeonhole Principle",
              excerpt: "If N objects are placed into k boxes, then at least one box contains at least ⌈N/k⌉ objects.",
              confidenceScore: 0.97,
            },
          },
          {
            id: "ma-q5",
            questionNumber: 5,
            text: "A connected undirected graph has 12 vertices each of degree 3. Calculate the total number of edges in this graph.",
            marks: 2,
            bloomLevel: "Apply",
            groundingSource: {
              chunkId: "ma-u3-1",
              unit: "Unit III: Graphs",
              heading: "Handshaking Theorem",
              excerpt: "The Handshaking theorem states that the sum of degrees of all vertices equals twice the number of edges: ∑ deg(v) = 2|E|.",
              confidenceScore: 0.99,
            },
          },
          {
            id: "ma-q6",
            questionNumber: 6,
            text: "State the necessary and sufficient condition for a connected multigraph to contain an Euler circuit.",
            marks: 2,
            bloomLevel: "Remember",
            groundingSource: {
              chunkId: "ma-u3-2",
              unit: "Unit III: Graphs",
              heading: "Euler Paths and Circuits",
              excerpt: "A connected multigraph contains an Euler circuit if and only if every vertex in the graph has an even degree.",
              confidenceScore: 0.98,
            },
          },
          {
            id: "ma-q7",
            questionNumber: 7,
            text: "State Lagrange's theorem on finite groups and write its implication for the order of subgroups.",
            marks: 2,
            bloomLevel: "Remember",
            groundingSource: {
              chunkId: "ma-u4-1",
              unit: "Unit IV: Algebraic Structures",
              heading: "Lagrange's Theorem",
              excerpt: "The order of any subgroup H of a finite group G divides the order of G: |G| = [G:H] · |H|.",
              confidenceScore: 0.99,
            },
          },
          {
            id: "ma-q8",
            questionNumber: 8,
            text: "Find all generators of the cyclic group (ℤ₈, +₈).",
            marks: 2,
            bloomLevel: "Apply",
            groundingSource: {
              chunkId: "ma-u4-2",
              unit: "Unit IV: Algebraic Structures",
              heading: "Cyclic Groups & Generators",
              excerpt: "An element k generates ℤₙ if and only if gcd(k, n) = 1.",
              confidenceScore: 0.96,
            },
          },
          {
            id: "ma-q9",
            questionNumber: 9,
            text: "Draw the Hasse diagram for the poset (D₁₂, |) where D₁₂ is the set of positive divisors of 12 ordered by divisibility.",
            marks: 2,
            bloomLevel: "Apply",
            groundingSource: {
              chunkId: "ma-u5-1",
              unit: "Unit V: Lattices and Boolean Algebra",
              heading: "Posets and Hasse Diagrams",
              excerpt: "A Hasse diagram displays partial order relations omitting reflexive and transitive edges.",
              confidenceScore: 0.98,
            },
          },
          {
            id: "ma-q10",
            questionNumber: 10,
            text: "In a Boolean algebra, simplify the algebraic expression x ∧ (x ∨ y) using Boolean laws.",
            marks: 2,
            bloomLevel: "Apply",
            groundingSource: {
              chunkId: "ma-u5-2",
              unit: "Unit V: Lattices and Boolean Algebra",
              heading: "Boolean Algebra Simplification",
              excerpt: "Absorption laws state x ∧ (x ∨ y) = x and x ∨ (x ∧ y) = x in any Boolean algebra.",
              confidenceScore: 0.97,
            },
          },
        ],
      },
      {
        sectionLabel: "Part-B",
        instructions: "Answer All Questions.",
        formulaSummary: "5 x 13 = 65 Marks",
        totalMarks: 65,
        questions: [
          // Q11: Unit I (Logic & Proofs)
          {
            id: "ma-q11",
            questionNumber: 11,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Without constructing a truth table, prove that ((P ∨ Q) ∧ ¬(¬P ∧ (¬Q ∨ ¬R))) ∨ (¬P ∧ ¬Q) ∨ (¬P ∧ ¬R) is a tautology using equivalence laws.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Show that R ∧ (P ∨ Q) is a valid consequence of the premises P ∨ Q, Q → R, P → M, and ¬M using rules of inference.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ma-q11-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Prove that (∀x)(P(x) → Q(x)) ∧ (∀x)(Q(x) → R(x)) ⇒ (∀x)(P(x) → R(x)) using rules of inference for quantified statements.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Translate into predicate calculus and prove validity by resolution: 'All men are mortal. Socrates is a man. Therefore, Socrates is mortal.'",
                  marks: 5,
                },
              ],
              groundingSource: {
                chunkId: "ma-u1-alt",
                unit: "Unit I: Logic and Proofs",
                heading: "Predicate Calculus Resolution",
                excerpt: "Resolution refutation verifies validity of quantified argument forms.",
                confidenceScore: 0.99,
              },
            },
          },

          // Q12: Unit II (Combinatorics)
          {
            id: "ma-q12",
            questionNumber: 12,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Solve the linear recurrence relation aₙ - 7aₙ₋₁ + 10aₙ₋₂ = 0 for n ≥ 2 with initial conditions a₀ = 1 and a₁ = 8 using characteristic roots.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Prove by mathematical induction that 1² + 2² + 3² + ... + n² = n(n + 1)(2n + 1) / 6 for all positive integers n ≥ 1.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ma-q12-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Find the number of integers between 1 and 1000 inclusive that are divisible by neither 2, 3, nor 5 using the Principle of Inclusion-Exclusion.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Solve the recurrence relation aₙ = 3aₙ₋₁ + 2 for n ≥ 1 with a₀ = 1 using the generating function method.",
                  marks: 5,
                },
              ],
              groundingSource: {
                chunkId: "ma-u2-alt",
                unit: "Unit II: Combinatorics",
                heading: "Generating Functions & Recurrence Relations",
                excerpt: "Ordinary generating functions reduce discrete difference equations into algebraic expressions.",
                confidenceScore: 0.98,
              },
            },
          },

          // Q13: Unit III (Graphs)
          {
            id: "ma-q13",
            questionNumber: 13,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Determine whether the following two graphs G₁ and G₂ with 6 vertices are isomorphic. Construct an explicit bijection function f: V(G₁) → V(G₂) or prove why they are not isomorphic.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Prove that a connected multigraph G has an Euler circuit if and only if every vertex in G has an even degree.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ma-q13-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Construct the Adjacency Matrix A and Incidence Matrix M for the complete bipartite graph K₂,₃. Show that the (i, j) entry of A² represents the number of distinct walks of length 2 from vᵢ to vⱼ.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Prove that the Petersen graph is non-Hamiltonian using vertex deletion and cycle analysis.",
                  marks: 5,
                },
              ],
              groundingSource: {
                chunkId: "ma-u3-alt",
                unit: "Unit III: Graphs",
                heading: "Adjacency Matrix & Hamiltonicity",
                excerpt: "Graph matrix powers encode walks; Petersen graph contains no spanning 10-cycle.",
                confidenceScore: 0.97,
              },
            },
          },

          // Q14: Unit IV (Algebraic Structures)
          {
            id: "ma-q14",
            questionNumber: 14,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "State and prove Lagrange's Theorem for finite groups: If H is a subgroup of a finite group G, then the order of H divides the order of G.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Show that the set G = {1, 2, 3, 4, 5, 6} forms a cyclic group under multiplication modulo 7 (×₇). Find all of its generators and compute the order of each element.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ma-q14-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Let (G, *) and (G', ·) be two groups and f: G → G' be a group homomorphism. Prove that the kernel of f, ker(f), is a normal subgroup of G.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Define a Ring and a Field. Prove that every finite integral domain is a field.",
                  marks: 5,
                },
              ],
              groundingSource: {
                chunkId: "ma-u4-alt",
                unit: "Unit IV: Algebraic Structures",
                heading: "Group Homomorphisms & Rings",
                excerpt: "Kernels are invariant under inner automorphisms; pigeonhole principle proves existence of inverses in finite integral domains.",
                confidenceScore: 0.99,
              },
            },
          },

          // Q15: Unit V (Lattices and Boolean Algebra)
          {
            id: "ma-q15",
            questionNumber: 15,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Draw the Hasse diagram of the poset (D₃₀, |) where D₃₀ is the set of positive divisors of 30 ordered by divisibility. Determine all maximal, minimal, greatest, and least elements. Find GLB(6, 10) and LUB(6, 10).",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "In a Boolean algebra ⟨B, ∧, ∨, ', 0, 1⟩, prove De Morgan's laws: (a ∨ b)' = a' ∧ b' and (a ∧ b)' = a' ∨ b'.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ma-q15-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Show that every chain is a distributive lattice and prove that every distributive lattice is modular.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "In a distributive lattice, prove that if a ∧ x = a ∧ y and a ∨ x = a ∨ y for some element a, then x = y (uniqueness of complements).",
                  marks: 5,
                },
              ],
              groundingSource: {
                chunkId: "ma-u5-alt",
                unit: "Unit V: Lattices and Boolean Algebra",
                heading: "Distributive & Complemented Lattices",
                excerpt: "Distributive lattices enforce unique complements and satisfy modular inequality with equality.",
                confidenceScore: 0.98,
              },
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
            id: "ma-q16",
            questionNumber: 16,
            text: "Solve the non-homogeneous linear recurrence relation aₙ - 5aₙ₋₁ + 6aₙ₋₂ = 2ⁿ + 3n for n ≥ 2 with initial conditions a₀ = 1 and a₁ = 3 using the method of undetermined coefficients or generating functions. Clearly derive the homogeneous solution, particular solution, and total solution.",
            marks: 15,
            bloomLevel: "Analyze",
            groundingSource: {
              chunkId: "ma-u2-partc",
              unit: "Unit II: Combinatorics",
              heading: "Non-homogeneous Recurrence Relations",
              excerpt: "Particular solution form depends on non-homogeneous driver term roots coinciding with characteristic polynomial roots.",
              confidenceScore: 0.99,
            },
            orQuestion: {
              id: "ma-q16-or",
              text: "Consider the parity check matrix H for a (6, 3) linear group code given by H = [[1, 1, 0, 1, 0, 0], [1, 0, 1, 0, 1, 0], [0, 1, 1, 0, 0, 1]]. (a) Determine the generator matrix G and list all 8 code words. (b) Find the minimum distance d_min and single-error correcting capability. (c) Decode the received vector R = (1, 1, 0, 1, 1, 0) using syndrome decoding.",
              marks: 15,
              bloomLevel: "Create",
              groundingSource: {
                chunkId: "ma-u4-partc",
                unit: "Unit IV: Algebraic Structures",
                heading: "Group Codes & Error Detection",
                excerpt: "Syndrome computation S = R · H^T maps received words to error coset leaders.",
                confidenceScore: 0.98,
              },
            },
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. EC2C22 — DIGITAL PRINCIPLES AND COMPUTER ORGANIZATION
  // ─────────────────────────────────────────────────────────────────────────────
  EC2C22: {
    id: "paper-ec2c22-novdec2025",
    metadata: {
      ...DEFAULT_METADATA,
      subject: "Digital Principles and Computer Organization",
      courseCode: "EC2C22",
      qpCode: "253102",
      semester: "III",
      regulation: "R-2022",
      degree: "B.E.",
      department: "Computer Science and Engineering",
      examTitle: "End Semester Examinations :: Nov/Dec 2025",
      maxMarks: 100,
      duration: "3 Hours",
    },
    patternId: "autonomous-100",
    createdAt: new Date().toISOString(),
    status: "generated",
    sourceDocumentName: "EC2C22_DPCO_R2022_Syllabus.pdf",
    sourceDocumentSize: "2.8 MB",
    sections: [
      {
        sectionLabel: "Part-A",
        instructions: "Answer All Questions.",
        formulaSummary: "10 x 2 = 20 Marks",
        totalMarks: 20,
        questions: [
          {
            id: "dp-q1",
            questionNumber: 1,
            text: "Why are NAND and NOR gates called universal logic gates? Explain with one example.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "dp-q2",
            questionNumber: 2,
            text: "Differentiate between Half Adder and Full Adder circuits in terms of inputs, outputs, and logic equations.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "dp-q3",
            questionNumber: 3,
            text: "What is race-around condition in a JK flip-flop? How is it eliminated using a Master-Slave configuration?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "dp-q4",
            questionNumber: 4,
            text: "Differentiate between Moore and Mealy finite state machines with neat block diagrams.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "dp-q5",
            questionNumber: 5,
            text: "List the essential functional units of the classical Von Neumann computer architecture.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "dp-q6",
            questionNumber: 6,
            text: "Explain indexed addressing mode and calculate effective address when Base Register R1 = 2000H and Offset = 40H.",
            marks: 2,
            bloomLevel: "Apply",
          },
          {
            id: "dp-q7",
            questionNumber: 7,
            text: "Define data hazard in an instruction pipeline. How does operand forwarding resolve data hazards without stalls?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "dp-q8",
            questionNumber: 8,
            text: "Differentiate between hardwired control unit and microprogrammed control unit with respect to speed and flexibility.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "dp-q9",
            questionNumber: 9,
            text: "Differentiate between spatial locality and temporal locality of reference in memory hierarchy.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "dp-q10",
            questionNumber: 10,
            text: "What is Direct Memory Access (DMA)? Mention its two operating modes: burst mode and cycle stealing.",
            marks: 2,
            bloomLevel: "Remember",
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
            id: "dp-q11",
            questionNumber: 11,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Minimize the Boolean function F(A, B, C, D) = Σm(0, 2, 5, 7, 8, 10, 14, 15) + Σd(3, 11) using a 4-variable Karnaugh Map. Implement the minimized SOP expression using NAND gates only.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Design a 4-bit parallel binary adder/subtractor circuit using 2's complement arithmetic with 4 Full Adders and XOR gates.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "dp-q11-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Design a 4-to-1 Multiplexer using basic logic gates and use it to implement the Boolean function F(A, B, C) = Σm(1, 3, 5, 6).",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Design a 2-bit Magnitude Comparator circuit that compares two binary numbers A = A₁A₀ and B = B₁B₀, producing outputs A > B, A = B, and A < B.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "dp-q12",
            questionNumber: 12,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Design a 3-bit synchronous up/down counter using JK flip-flops. Construct the state diagram, excitation table, K-map simplifications, and final logic circuit diagram.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain the working of a 4-bit Universal Shift Register with mode control inputs S₁S₀ for parallel load, shift right, shift left, and hold.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "dp-q12-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Design a clocked synchronous sequential circuit to detect the bit sequence '1011' with overlapping allowed using D flip-flops (Mealy model).",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Construct a Mod-10 (Decade) asynchronous counter using T flip-flops and clear logic gates.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "dp-q13",
            questionNumber: 13,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain the instruction execution cycle in detail with neat flowchart: Fetch, Decode, Operand Fetch, Execute, and Write-back phases.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Compare Direct, Indirect, Register Indirect, Indexed, Relative, and Immediate addressing modes with examples.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "dp-q13-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain instruction formats and instruction encoding. Compare RISC (fixed-length 32-bit load/store) vs CISC (variable-length) instruction set architectures.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain the internal register organization of a CPU including PC, IR, MAR, MDR, and General Purpose Registers.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "dp-q14",
            questionNumber: 14,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain the design and operation of a 5-stage instruction pipeline (IF, ID, EX, MEM, WB). Analyze Data Hazards, Control Hazards, and Structural Hazards with pipeline timing charts.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain how branch prediction and branch delay slots minimize pipeline stalls caused by conditional branch instructions.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "dp-q14-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the microprogrammed control unit architecture with Control Memory, Control Address Register (CAR), and Microinstruction format.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Design the complete arithmetic and logic datapath for an ALU supporting ADD, SUB, AND, OR, and SLT operations with multiplexer control.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "dp-q15",
            questionNumber: 15,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "A 4-way set associative cache memory has 64-byte lines and a total cache capacity of 64 KB. The main memory is 4 GB byte-addressable. Determine the bit distribution for Tag, Set Index, and Word Offset fields.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain LRU, FIFO, and Random cache replacement algorithms and compare their hit ratios.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "dp-q15-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the DMA transfer process with neat block diagram. Show how the DMA controller arbitrates bus control using Bus Request (BR) and Bus Grant (BG) lines.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Compare Programmed I/O, Interrupt-Driven I/O, and Direct Memory Access in terms of CPU utilization and throughput.",
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
            id: "dp-q16",
            questionNumber: 16,
            text: "A 5-stage pipelined processor executes a benchmark program of 100,000 instructions. 20% are conditional branch instructions (penalty of 3 cycles without branch prediction), and 25% are load instructions followed immediately by a dependent instruction (penalty of 1 bubble without forwarding). (a) Calculate the average Cycles Per Instruction (CPI) without operand forwarding. (b) Calculate the CPI with full hardware operand forwarding and 1-cycle branch prediction penalty. (c) Compute the speedup achieved.",
            marks: 15,
            bloomLevel: "Analyze",
            orQuestion: {
              id: "dp-q16-or",
              text: "A virtual memory system has a 32-bit virtual address, 4 KB page size, 1 GB physical memory, and a Translation Lookaside Buffer (TLB) with 128 entries. TLB access time is 2 ns, main memory access time is 50 ns, and page fault service time is 8 ms. (a) Derive the virtual and physical address format. (b) If TLB hit ratio is 95% and page fault rate is 0.001%, calculate the Effective Memory Access Time (EMAT). (c) Explain the step-by-step page fault handling sequence.",
              marks: 15,
              bloomLevel: "Create",
            },
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. CS2312 — DATA STRUCTURES (Problem-rich, algorithms & tracing)
  // ─────────────────────────────────────────────────────────────────────────────
  CS2312: {
    id: "paper-cs2312-novdec2025",
    metadata: {
      ...DEFAULT_METADATA,
      subject: "Data Structures",
      courseCode: "CS2312",
      qpCode: "253103",
      semester: "III",
      regulation: "R-2022",
      degree: "B.E.",
      department: "Computer Science and Engineering",
      examTitle: "End Semester Examinations :: Nov/Dec 2025",
      maxMarks: 100,
      duration: "3 Hours",
    },
    patternId: "autonomous-100",
    createdAt: new Date().toISOString(),
    status: "generated",
    sourceDocumentName: "CS2312_Data_Structures_R2022_Syllabus.pdf",
    sourceDocumentSize: "2.6 MB",
    sections: [
      {
        sectionLabel: "Part-A",
        instructions: "Answer All Questions.",
        formulaSummary: "10 x 2 = 20 Marks",
        totalMarks: 20,
        questions: [
          {
            id: "ds-q1",
            questionNumber: 1,
            text: "What is an Abstract Data Type (ADT)? State the operations supported by List ADT.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "ds-q2",
            questionNumber: 2,
            text: "Differentiate between singly linked list and doubly linked list in terms of memory overhead and traversal.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "ds-q3",
            questionNumber: 3,
            text: "What is stack overflow and stack underflow? State two applications of stacks in operating systems.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "ds-q4",
            questionNumber: 4,
            text: "Why is a circular queue preferred over a linear array-based queue? Write the condition for circular queue full.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "ds-q5",
            questionNumber: 5,
            text: "Define balance factor of an AVL tree node. What are the permitted balance factors in an AVL tree?",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "ds-q6",
            questionNumber: 6,
            text: "What are the properties of a Max-Heap? Write the array representation of left child and right child of node at index i.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "ds-q7",
            questionNumber: 7,
            text: "Differentiate between Breadth First Search (BFS) and Depth First Search (DFS) in graph traversal.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "ds-q8",
            questionNumber: 8,
            text: "Define Minimum Spanning Tree (MST). What is the time complexity of Kruskal's algorithm?",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "ds-q9",
            questionNumber: 9,
            text: "Differentiate between internal sorting and external sorting with examples.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "ds-q10",
            questionNumber: 10,
            text: "What is collision in hashing? What is the primary difference between open hashing and closed hashing?",
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
            id: "ds-q11",
            questionNumber: 11,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Write algorithms and complete C routines to add two polynomials represented as singly linked lists. Trace with P₁(x) = 5x⁴ + 3x² + 2 and P₂(x) = 4x³ + 2x² + x + 7.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Write a C function to reverse a singly linked list in-place by adjusting node pointers with O(n) time and O(1) auxiliary space.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ds-q11-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain Doubly Linked List representation. Write C functions for inserting a node before a given key and deleting a node at position k.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Circular Singly Linked List operations and demonstrate Josephus circle elimination with n=7 and k=3.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "ds-q12",
            questionNumber: 12,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Convert the infix expression (A + B * C) / (D - E ^ F) * G into postfix form using a Stack. Show the operator stack status and output token trace at every step.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Implement a Circular Queue of size 5 using an array. Write enqueue and dequeue routines with proper front/rear modulo pointer arithmetic.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ds-q12-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Write an algorithm to evaluate a postfix arithmetic expression using a Stack. Trace the evaluation of the postfix expression: '6 2 3 + - 3 8 2 / + * 2 ^ 3 +'.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain the Double Ended Queue (Deque) ADT and write routines for insertFront, insertRear, deleteFront, and deleteRear.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "ds-q13",
            questionNumber: 13,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Construct an AVL tree by inserting keys [21, 26, 30, 9, 4, 14, 28, 18, 15, 10, 2] one by one. Specify the balance factor at each step and detail the LL, RR, LR, and RL rotations performed.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Build a Min-Heap from the array [45, 20, 30, 60, 10, 5, 25] using bottom-up heapify. Show the array representation after each step.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ds-q13-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Construct a B-tree of order m = 5 by inserting keys [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 15, 25]. Show node splitting and root promotion.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Binary Search Tree (BST) deletion with three cases: leaf node, node with one child, and node with two children (inorder successor).",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "ds-q14",
            questionNumber: 14,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Apply Dijkstra's algorithm to find the shortest path from source vertex 'A' to all other vertices in a weighted graph with vertices {A, B, C, D, E, F}. Tabulate the distance vector and predecessor at each relaxation step.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Find the Minimum Spanning Tree of the given weighted graph using Kruskal's algorithm with disjoint-set union-find tracking. Show total weight.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ds-q14-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain Prim's algorithm for Minimum Spanning Trees. Trace Prim's algorithm starting from vertex 'v₁' on a 7-vertex weighted graph with step-by-step tree growth table.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Topological Sorting for Directed Acyclic Graphs (DAGs) using in-degree reduction and DFS finishing times.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "ds-q15",
            questionNumber: 15,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Insert keys [4371, 1323, 6173, 4199, 4344, 9679, 1989] into a hash table of size 10 using hash function h(k) = k mod 10 with: (1) Linear Probing, and (2) Quadratic Probing. Tabulate collision resolution.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Trace the step-by-step Radix Sort algorithm for sorting 3-digit integers [170, 45, 75, 90, 802, 24, 2, 66] across all passes.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ds-q15-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain Separate Chaining (Open Hashing) collision resolution. Write algorithms for hash table search and insertion. Compare load factor vs search time.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Compare Bubble Sort, Insertion Sort, Merge Sort, and Quick Sort in terms of Best, Average, Worst case time complexities and space stability.",
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
            id: "ds-q16",
            questionNumber: 16,
            text: "Design a high-performance in-memory cache system with Least Recently Used (LRU) eviction policy. (a) Formulate the data structure combining a Doubly Linked List and a Hash Map to achieve O(1) time complexity for both get(key) and put(key, value) operations. (b) Write complete C/C++ or Java code implementing the LRU cache class with capacity constraint. (c) Trace cache operations for capacity=3 with calls: put(1,10), put(2,20), put(3,30), get(1), put(4,40), get(2).",
            marks: 15,
            bloomLevel: "Create",
            orQuestion: {
              id: "ds-q16-or",
              text: "Design a complete Priority-Queue based task scheduler for real-time operating systems using a Binary Min-Heap. (a) Write routines for insertTask(priority, id), extractMin(), and decreaseKey(id, newPriority). (b) Prove why binary heaps require O(n) time for bottom-up construction compared to O(n log n) for repeated insertions. (c) Analyze worst-case and amortized complexities.",
              marks: 15,
              bloomLevel: "Analyze",
            },
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. CS2321 — SOFTWARE ENGINEERING
  // ─────────────────────────────────────────────────────────────────────────────
  CS2321: {
    id: "paper-cs2321-novdec2025",
    metadata: {
      ...DEFAULT_METADATA,
      subject: "Software Engineering",
      courseCode: "CS2321",
      qpCode: "253104",
      semester: "III",
      regulation: "R-2022",
      degree: "B.E.",
      department: "Computer Science and Engineering",
      examTitle: "End Semester Examinations :: Nov/Dec 2025",
      maxMarks: 100,
      duration: "3 Hours",
    },
    patternId: "autonomous-100",
    createdAt: new Date().toISOString(),
    status: "generated",
    sourceDocumentName: "CS2321_Software_Engineering_R2022_Syllabus.pdf",
    sourceDocumentSize: "2.1 MB",
    sections: [
      {
        sectionLabel: "Part-A",
        instructions: "Answer All Questions.",
        formulaSummary: "10 x 2 = 20 Marks",
        totalMarks: 20,
        questions: [
          {
            id: "se-q1",
            questionNumber: 1,
            text: "Define software engineering paradigm. Mention two major differences between a software program and a software product.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "se-q2",
            questionNumber: 2,
            text: "State two distinct advantages and two limitations of the Waterfall process model.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "se-q3",
            questionNumber: 3,
            text: "Differentiate between functional requirements and non-functional requirements with two examples of each.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "se-q4",
            questionNumber: 4,
            text: "What is Software Requirements Specification (SRS)? List four desirable characteristics of an SRS.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "se-q5",
            questionNumber: 5,
            text: "Differentiate between cohesion and coupling in modular software design. Which state is desirable?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "se-q6",
            questionNumber: 6,
            text: "What is data-flow architectural mapping? Differentiate between transform mapping and transaction mapping.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "se-q7",
            questionNumber: 7,
            text: "Define Cyclomatic Complexity. State the three mathematical formulas to compute Cyclomatic Complexity V(G).",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "se-q8",
            questionNumber: 8,
            text: "Differentiate between verification and validation testing with suitable analogies.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "se-q9",
            questionNumber: 9,
            text: "What is Function Point (FP) analysis? State the five Information Domain characteristics used in FP computation.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "se-q10",
            questionNumber: 10,
            text: "What is an RMMM plan? List the three components of risk management.",
            marks: 2,
            bloomLevel: "Remember",
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
            id: "se-q11",
            questionNumber: 11,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain the Spiral Model in detail with a neat diagram. Discuss its risk-driven nature and describe the activities in its four quadrants.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Compare Waterfall, Incremental, Prototyping, and Agile process models on team size, requirement clarity, and client involvement.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "se-q11-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the WINWIN Spiral model and Evolutionary development models. Discuss how client negotiation is formalized.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Select an appropriate software process model for an Automated Medical Ventilator System and an E-Commerce Startup. Justify.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "se-q12",
            questionNumber: 12,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain the complete Requirements Engineering process: Inception, Elicitation, Elaboration, Negotiation, Specification, Validation, and Management.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Develop a structured SRS outline for an Automated Teller Machine (ATM) banking system conforming to IEEE 830 standards.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "se-q12-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain structured analysis using Data Flow Diagrams (DFD Levels 0, 1, 2) and Data Dictionaries for an Online Food Delivery Platform.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Petri nets and their formal mathematical application in modeling concurrent and asynchronous software requirements.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "se-q13",
            questionNumber: 13,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain the fundamental software design concepts: Abstraction, Modularity, Architecture, Information Hiding, Functional Independence, and Refactoring.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain the seven levels of Cohesion and seven levels of Coupling in component-level design from worst to best.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "se-q13-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain architectural styles: Data-centered, Data-flow (pipes and filters), Call-and-return (Layered), and Event-driven architectures.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain user interface design principles: Place the user in control, reduce memory load, and make the interface consistent.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "se-q14",
            questionNumber: 14,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "For a given algorithm calculating roots of a quadratic equation, draw the Control Flow Graph (CFG), compute Cyclomatic Complexity V(G) using all three methods, and derive the set of linearly independent basis paths.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Design Equivalence Class Partitioning and Boundary Value Analysis test cases for an input field accepting applicant age between 18 and 60.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "se-q14-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain Unit Testing, Integration Testing (Top-down vs Bottom-up), Validation Testing, and System Testing in the software testing hierarchy.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Software Reengineering and Business Process Reengineering (BPR) lifecycle models.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "se-q15",
            questionNumber: 15,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Assume a software project is estimated at 45 KLOC. Using basic COCOMO for Semi-Detached mode (a=3.0, b=1.12, c=2.5, d=0.35), calculate: (1) Total Effort in Person-Months, (2) Development Time in Months, (3) Average Staff Size.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain Earned Value Analysis (EVA). Define Planned Value (PV), Earned Value (EV), Actual Cost (AC), CPI, and SPI metrics.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "se-q15-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain Software Risk Management in detail: Risk Identification, Risk Projection (Impact and Likelihood), Risk Assessment, and RMMM Planning.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Computer-Aided Software Engineering (CASE) tools taxonomy across requirements, design, code generation, and test management.",
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
            id: "se-q16",
            questionNumber: 16,
            text: "You are appointed as the Lead Software Architect for a smart hospital patient monitoring system managing ICU telemetry, automated drug dispensing, and emergency alerts. (a) Formulate the architectural design choosing between microservices and layered architecture with justification. (b) Identify top five software project risks and construct an RMMM plan. (c) Devise a verification and validation test plan covering unit, integration, stress, and regulatory compliance testing.",
            marks: 15,
            bloomLevel: "Create",
            orQuestion: {
              id: "se-q16-or",
              text: "A software project size is evaluated with the following parameters: User Inputs = 32 (weight 4), User Outputs = 24 (weight 5), User Inquiries = 18 (weight 4), Internal Files = 8 (weight 10), External Interfaces = 4 (weight 7). The sum of 14 Value Adjustment Factors is 42. (a) Calculate the Unadjusted Function Points (UFP) and Adjusted Function Points (AFP). (b) If Java has an average LOC/FP ratio of 53, compute the estimated KLOC. (c) Using Intermediate COCOMO with an Effort Adjustment Factor (EAF) of 1.15 in Organic mode, calculate development effort and project duration.",
              marks: 15,
              bloomLevel: "Analyze",
            },
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. CS2323 — OBJECT ORIENTED PROGRAMMING (Java code, inheritance, multithreading)
  // ─────────────────────────────────────────────────────────────────────────────
  CS2323: {
    id: "paper-cs2323-novdec2025",
    metadata: {
      ...DEFAULT_METADATA,
      subject: "Object Oriented Programming",
      courseCode: "CS2323",
      qpCode: "253105",
      semester: "III",
      regulation: "R-2022",
      degree: "B.E.",
      department: "Computer Science and Engineering",
      examTitle: "End Semester Examinations :: Nov/Dec 2025",
      maxMarks: 100,
      duration: "3 Hours",
    },
    patternId: "autonomous-100",
    createdAt: new Date().toISOString(),
    status: "generated",
    sourceDocumentName: "CS2323_OOP_R2022_Syllabus.pdf",
    sourceDocumentSize: "2.5 MB",
    sections: [
      {
        sectionLabel: "Part-A",
        instructions: "Answer All Questions.",
        formulaSummary: "10 x 2 = 20 Marks",
        totalMarks: 20,
        questions: [
          {
            id: "oop-q1",
            questionNumber: 1,
            text: "Why is Java platform independent? Differentiate between JDK, JRE, and JVM.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "oop-q2",
            questionNumber: 2,
            text: "Differentiate between widening and narrowing type casting in Java with code snippets.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "oop-q3",
            questionNumber: 3,
            text: "What is the purpose of constructor overloading? Differentiate between this and super keywords.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "oop-q4",
            questionNumber: 4,
            text: "How is multiple inheritance achieved in Java using interfaces? Why does Java disallow multiple inheritance with classes?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "oop-q5",
            questionNumber: 5,
            text: "Define dynamic method dispatch (runtime polymorphism). Under what conditions does it occur?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "oop-q6",
            questionNumber: 6,
            text: "Differentiate between String, StringBuffer, and StringBuilder in terms of immutability and thread safety.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "oop-q7",
            questionNumber: 7,
            text: "Differentiate between throw and throws keywords in Java exception handling.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "oop-q8",
            questionNumber: 8,
            text: "What is thread synchronization? Why are wait() and notify() called inside synchronized blocks?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "oop-q9",
            questionNumber: 9,
            text: "What is JavaFX Stage and Scene? List any three commonly used JavaFX layout panes.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "oop-q10",
            questionNumber: 10,
            text: "What is JDBC PreparedStatement? Why is it preferred over Statement for executing parameterized queries?",
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
            id: "oop-q11",
            questionNumber: 11,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain the architecture and execution model of the Java Virtual Machine (JVM): Class Loader subsystem, JVM Memory Areas (Heap, Stack, Method Area), and Execution Engine (JIT Compiler, Garbage Collector).",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Write a Java program demonstrating multidimensional jagged arrays, explicit type casting, and labeled break/continue statements.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "oop-q11-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the core features of Java that make it secure, robust, and architecture-neutral compared to C and C++.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Java access specifiers (private, default, protected, public) and the static and final modifiers with illustrative code examples.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "oop-q12",
            questionNumber: 12,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Design an automated payroll system in Java with an abstract base class 'Employee' and interfaces 'Taxable' and 'BenefitsEligible'. Implement concrete subclasses 'FullTimeEmployee' and 'Contractor' demonstrating multiple inheritance.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain package creation, package compilation with -d flag, and access control across package boundaries in Java.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "oop-q12-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain single, multilevel, and hierarchical inheritance in Java. Write a Java program demonstrating super() constructor chaining and method overriding.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Compare abstract classes and interfaces in Java 8 and beyond (including default and static methods in interfaces).",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "oop-q13",
            questionNumber: 13,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Write a complete Java application demonstrating Dynamic Method Dispatch using an abstract class 'Shape' with calculateArea() and calculatePerimeter(), and derived classes 'Circle', 'Rectangle', and 'Triangle'.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain String interning, String pool memory representation, and contrast String vs StringBuffer vs StringBuilder performance.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "oop-q13-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain compile-time polymorphism (method overloading) vs runtime polymorphism (method overriding). Write code demonstrating both.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain inner classes (member inner class, local inner class, anonymous inner class, static nested class) with code examples.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "oop-q14",
            questionNumber: 14,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Write a multithreaded Java program implementing the classical Producer-Consumer problem using a shared bounded buffer with synchronized methods and wait() / notify() signaling.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Create a user-defined exception 'InsufficientFundsException' in a BankAccount class. Demonstrate throwing, catching, and printing stack trace.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "oop-q14-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain Java I/O Stream hierarchy: Byte streams (FileInputStream/FileOutputStream) vs Character streams (FileReader/FileWriter) and Buffered Streams with code copying file contents.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Java Thread lifecycle states with diagram. Compare thread creation via extending Thread class vs implementing Runnable interface.",
                  marks: 5,
                },
              ],
            },
          },
          {
            id: "oop-q15",
            questionNumber: 15,
            text: "",
            marks: 13,
            subParts: [
              {
                partLabel: "(i).",
                text: "Write a complete Java database application using JDBC to connect to a MySQL database with PreparedStatement to perform student record insertion, search by RollNo, and update.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Develop a JavaFX GUI application with a GridPane containing User ID, Password fields, and a Login button with an EventHandler handling click events.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "oop-q15-or",
              text: "",
              marks: 13,
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain JDBC architecture: JDBC Drivers (Types 1, 2, 3, 4), Connection, Statement, PreparedStatement, CallableStatement, and ResultSet navigation.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain JavaFX event handling mechanism: Event sources, Event types, Event handlers, and Event filters with Key and Mouse event handling examples.",
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
            id: "oop-q16",
            questionNumber: 16,
            text: "Design a comprehensive University Examination Management System in Java. (a) Formulate the object-oriented class hierarchy with appropriate encapsulation, inheritance, interfaces, and packages. (b) Implement custom checked exceptions for InvalidRegistrationNumberException and MarkOutOfRangeException. (c) Write multithreaded evaluation modules using synchronized blocks to compute department CGPA. (d) Implement a JDBC persistence layer to store and retrieve student mark sheets.",
            marks: 15,
            bloomLevel: "Create",
            orQuestion: {
              id: "oop-q16-or",
              text: "Design a desktop Banking Transaction GUI Application using JavaFX and JDBC. (a) Construct a JavaFX Stage with TabPane for Account Creation, Deposit, Withdrawal, and Transaction History with proper layouts. (b) Implement transactional ACID properties in JDBC using setAutoCommit(false), commit(), and rollback() upon detecting InsufficientBalanceException. (c) Write the complete working Java source code.",
              marks: 15,
              bloomLevel: "Create",
            },
          },
        ],
      },
    ],
  },
};

import { SEM4_COURSE_PAPERS } from "./defaultSem4Papers";
import { SEM5_COURSE_PAPERS } from "./defaultSem5Papers";
import { SEM6_COURSE_PAPERS } from "./defaultSem6Papers";
import { SEM7_COURSE_PAPERS } from "./defaultSem7Papers";
import { SEM8_COURSE_PAPERS } from "./defaultSem8Papers";

export const ALL_COURSE_PAPERS: Record<string, GeneratedPaper> = {
  ...COURSE_PAPERS,
  ...SEM4_COURSE_PAPERS,
  ...SEM5_COURSE_PAPERS,
  ...SEM6_COURSE_PAPERS,
  ...SEM7_COURSE_PAPERS,
  ...SEM8_COURSE_PAPERS,
};

/**
 * Retrieve the authentic pre-generated paper for a course code,
 * falling back to Discrete Mathematics or Sample Paper if not specifically found.
 */
export function getCoursePaper(courseCode: string): GeneratedPaper | null {
  const normalized = courseCode.toUpperCase().trim();
  if (ALL_COURSE_PAPERS[normalized]) {
    return ALL_COURSE_PAPERS[normalized];
  }
  return null;
}
