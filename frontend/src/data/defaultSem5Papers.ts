import { GeneratedPaper } from "@/types/papercraft";
import { DEFAULT_METADATA } from "./defaultPatterns";

export const SEM5_COURSE_PAPERS: Record<string, GeneratedPaper> = {
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. CS2C11 — ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING
  // ─────────────────────────────────────────────────────────────────────────────
  CS2C11: {
    id: "paper-cs2c11-novdec2026",
    metadata: {
      ...DEFAULT_METADATA,
      subject: "Artificial Intelligence and Machine Learning",
      courseCode: "CS2C11",
      qpCode: "255101",
      semester: "V",
      regulation: "R-2022",
      degree: "B.E.",
      department: "Computer Science and Engineering",
      examTitle: "End Semester Examinations :: Nov/Dec 2026",
      maxMarks: 100,
      duration: "3 Hours",
    },
    patternId: "autonomous-100",
    createdAt: new Date().toISOString(),
    status: "generated",
    sourceDocumentName: "CS2C11_AI_and_ML_R2022_Syllabus.pdf",
    sourceDocumentSize: "2.6 MB",
    sections: [
      {
        sectionLabel: "Part-A",
        instructions: "Answer All Questions.",
        formulaSummary: "10 x 2 = 20 Marks",
        totalMarks: 20,
        questions: [
          {
            id: "aiml-q1",
            questionNumber: 1,
            text: "State the evaluation function used in A* search and define the condition under which a heuristic is admissible.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "aiml-q2",
            questionNumber: 2,
            text: "Explain how alpha and beta values are updated during adversarial minimax game tree search.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "aiml-q3",
            questionNumber: 3,
            text: "Convert the English assertion 'Every computer engineer can program' into a First Order Predicate Logic (FOPL) formula.",
            marks: 2,
            bloomLevel: "Apply",
          },
          {
            id: "aiml-q4",
            questionNumber: 4,
            text: "Differentiate forward chaining and backward chaining inference strategies in deductive systems.",
            marks: 2,
            bloomLevel: "Analyze",
          },
          {
            id: "aiml-q5",
            questionNumber: 5,
            text: "Why is the logistic sigmoid function preferred over standard linear regression for binary classification tasks?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "aiml-q6",
            questionNumber: 6,
            text: "State the conditional independence assumption of the Naive Bayes classifier and explain why Laplace smoothing is necessary.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "aiml-q7",
            questionNumber: 7,
            text: "Compare Bagging and Boosting ensemble techniques with respect to their impact on model bias and variance.",
            marks: 2,
            bloomLevel: "Analyze",
          },
          {
            id: "aiml-q8",
            questionNumber: 8,
            text: "Define Core Point, Border Point, and Noise in the DBSCAN density-based clustering algorithm.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "aiml-q9",
            questionNumber: 9,
            text: "Define the discount factor (γ) in a Markov Decision Process (MDP) and state its mathematical role in infinite-horizon rewards.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "aiml-q10",
            questionNumber: 10,
            text: "Explain the exploration-exploitation dilemma in reinforcement learning and name one common heuristic to resolve it.",
            marks: 2,
            bloomLevel: "Understand",
          },
        ],
      },
      {
        sectionLabel: "Part-B",
        instructions: "Answer All Questions. Each Question carries 13 Marks.",
        formulaSummary: "5 x 13 = 65 Marks",
        totalMarks: 65,
        questions: [
          // Q11: Unit 1
          {
            id: "aiml-q11a",
            questionNumber: 11,
            choiceLabel: "(a)",
            text: "A* Search path tracing and Alpha-Beta pruning game tree evaluation:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Trace the A* Search algorithm to find the optimal path from Start state S to Goal state G. Given edge costs: S-A=2, S-B=4, A-C=3, A-D=5, B-D=2, B-E=4, C-G=6, D-G=3, E-G=5. Heuristic estimates: h(S)=7, h(A)=6, h(B)=4, h(C)=5, h(D)=3, h(E)=4, h(G)=0. Tabulate OPEN and CLOSED lists at each expansion step and compute the total path cost.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Given a 2-ply Minimax game tree with root MAX and terminal leaf utility values from left to right: [3, 5], [6, 9], [1, 2], [0, -1]. Apply Alpha-Beta pruning, determine the root minimax value, and identify all branches pruned.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "aiml-q11b",
              questionNumber: 11,
              choiceLabel: "(b)",
              text: "Uninformed vs informed search strategies and local optimization:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Formulate the 8-Puzzle problem by defining its state space, initial state, goal state, successor function, and path cost. Compare the performance of BFS, DFS, and Uniform Cost Search in solving this problem.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Hill Climbing search and analyze why it suffers from local maxima, ridges, and plateaux. Explain how Simulated Annealing overcomes local extrema using a temperature cooling schedule.",
                  marks: 5,
                },
              ],
            },
          },

          // Q12: Unit 2
          {
            id: "aiml-q12a",
            questionNumber: 12,
            choiceLabel: "(a)",
            text: "First-Order Logic Clausal Form conversion and Resolution Refutation:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Consider the following statements:\n1. Every student who works hard passes the examinations.\n2. John is a student.\n3. John works hard.\n(a) Convert these statements into First Order Predicate Logic formulas.\n(b) Transform them into Conjunctive Normal Form (CNF) clauses.\n(c) Using Resolution Refutation, formally prove that 'John passes the examinations'.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Write a Prolog knowledge base defining parent(X, Y), male(X), and female(X). Construct recursive rules for ancestor(X, Y) and sibling(X, Y), and trace the execution for the query ?- ancestor(john, bob).",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "aiml-q12b",
              questionNumber: 12,
              choiceLabel: "(b)",
              text: "Knowledge representation systems and forward chaining inference:",
              marks: 13,
              bloomLevel: "Understand",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain Forward Chaining inference with a formal algorithm. Given a knowledge base with rules R1: A ∧ B → C, R2: C ∧ D → E, R3: E → F, and known initial facts {A, B, D}, demonstrate the step-by-step forward inference to derive fact F.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Ontological Engineering in AI knowledge systems. Discuss how categories, objects, inheritance, and default reasoning are structured in semantic networks and frames.",
                  marks: 5,
                },
              ],
            },
          },

          // Q13: Unit 3
          {
            id: "aiml-q13a",
            questionNumber: 13,
            choiceLabel: "(a)",
            text: "Naive Bayes classification and Decision Tree Information Gain calculations:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "A medical diagnosis dataset has 14 instances with features: Fever (High/Low), Cough (Yes/No), and Target Class: Flu (Yes: 9, No: 5). Given:\n- Flu=Yes: Fever=High(6), Cough=Yes(7)\n- Flu=No: Fever=High(1), Cough=Yes(2)\nUsing Naive Bayes classification with Laplace smoothing, compute the posterior probabilities P(Flu=Yes | X) and P(Flu=No | X) to classify a new patient with X = (Fever=High, Cough=No).",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "A training dataset S has 10 samples (6 Positive, 4 Negative). An attribute A splits S into subset S1 (4 Positive, 1 Negative) and subset S2 (2 Positive, 3 Negative). Calculate the Entropy H(S) and the Information Gain IG(S, A).",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "aiml-q13b",
              questionNumber: 13,
              choiceLabel: "(b)",
              text: "Support Vector Machines and Simple Linear Regression:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain Support Vector Machines (SVM) for linearly separable binary classification. Formulate the maximum margin optimization problem, define support vectors, and explain how Mercer kernel functions (Polynomial, RBF) project non-linear data into higher-dimensional feature spaces.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Derive the Ordinary Least Squares (OLS) closed-form formulas for slope (β1) and intercept (β0) in Simple Linear Regression y = β0 + β1*x by minimizing the sum of squared errors.",
                  marks: 5,
                },
              ],
            },
          },

          // Q14: Unit 4
          {
            id: "aiml-q14a",
            questionNumber: 14,
            choiceLabel: "(a)",
            text: "K-Means Clustering iterations and DBSCAN density classification:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Perform K-Means clustering for k=2 on the eight 2D data points: P1(2, 10), P2(2, 5), P3(8, 4), P4(5, 8), P5(7, 5), P6(6, 4), P7(1, 2), P8(4, 9). Initial centroids are C1 = P1(2, 10) and C2 = P4(5, 8). Perform two complete iterations using Euclidean distance, showing cluster assignments and updated centroids after each step.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain the DBSCAN clustering algorithm. Given parameters Eps = 2.0 and MinPts = 4, explain how core points, border points, and noise points are determined. Contrast DBSCAN with K-Means when dealing with non-spherical clusters and noise.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "aiml-q14b",
              questionNumber: 14,
              choiceLabel: "(b)",
              text: "Ensemble learning techniques and Gaussian Mixture Models:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the AdaBoost boosting algorithm in detail. Formulate how sample weights are initialized, how weak classifier error is computed, how hypothesis weights are assigned, and how training sample weights are updated sequentially.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Gaussian Mixture Models (GMM) and the Expectation-Maximization (EM) algorithm. Detail the mathematical calculations performed in the Expectation step (E-step) and Maximization step (M-step).",
                  marks: 5,
                },
              ],
            },
          },

          // Q15: Unit 5
          {
            id: "aiml-q15a",
            questionNumber: 15,
            choiceLabel: "(a)",
            text: "Markov Decision Processes and Value Iteration in Reinforcement Learning:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Define a Markov Decision Process (MDP) as a 5-tuple (S, A, P, R, γ). State the Bellman Optimality Equation for state values V*(s) and action values Q*(s, a). Explain the Value Iteration algorithm with convergence guarantees.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain the Q-Learning algorithm. Provide the Q-value update rule using Temporal Difference error, explain why Q-learning is an off-policy algorithm, and describe how an ε-greedy policy ensures exploration.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "aiml-q15b",
              questionNumber: 15,
              choiceLabel: "(b)",
              text: "Passive vs Active Reinforcement Learning and Policy Improvement:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Compare Passive Reinforcement Learning and Active Reinforcement Learning. Explain Direct Utility Estimation, Adaptive Dynamic Programming (ADP), and Temporal Difference learning TD(0) for passive policy evaluation.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Formulate the Multi-Armed Bandit problem as a fundamental reinforcement learning framework. Compare greedy, ε-greedy, and Upper Confidence Bound (UCB) action-selection strategies.",
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
            id: "aiml-q16a",
            questionNumber: 16,
            choiceLabel: "(a)",
            text: "End-to-End AI and Machine Learning System Design for Autonomous Medical Diagnosis:",
            marks: 15,
            bloomLevel: "Create",
            subParts: [
              {
                partLabel: "(a)",
                text: "Design an end-to-end AI & Machine Learning pipeline for an Autonomous Medical Diagnostic Assistant that takes patient symptoms, vitals, and lab test values as inputs. Formulate: (1) Supervised classifier selection (SVM vs Random Forest) with evaluation metrics (Precision, Recall, ROC-AUC), (2) FOPL clinical knowledge base with resolution reasoning for drug-allergy interactions, and (3) Reinforcement learning policy for sequential treatment recommendation with state, action, and reward formulations.",
                marks: 15,
              },
            ],
            orQuestion: {
              id: "aiml-q16b",
              questionNumber: 16,
              choiceLabel: "(b)",
              text: "Intelligent Fraud Detection Engine and Ethical AI Governance:",
              marks: 15,
              bloomLevel: "Create",
              subParts: [
                {
                  partLabel: "(b)",
                  text: "Design an Intelligent Fraud Detection Engine for banking transactions: (1) Unsupervised anomaly detection using DBSCAN / Isolation Forests for unlabelled novel fraud patterns, (2) Supervised Ensemble model (XGBoost / Stacking) with class imbalance handling (SMOTE, precision-recall AUC), and (3) Ethical AI considerations including model explainability (SHAP values) and algorithmic fairness across demographic groups.",
                  marks: 15,
                },
              ],
            },
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. CS2512 — COMPILER DESIGN
  // ─────────────────────────────────────────────────────────────────────────────
  CS2512: {
    id: "paper-cs2512-novdec2026",
    metadata: {
      ...DEFAULT_METADATA,
      subject: "Compiler Design",
      courseCode: "CS2512",
      qpCode: "255102",
      semester: "V",
      regulation: "R-2022",
      degree: "B.E.",
      department: "Computer Science and Engineering",
      examTitle: "End Semester Examinations :: Nov/Dec 2026",
      maxMarks: 100,
      duration: "3 Hours",
    },
    patternId: "autonomous-100",
    createdAt: new Date().toISOString(),
    status: "generated",
    sourceDocumentName: "CS2512_Compiler_Design_R2022_Syllabus.pdf",
    sourceDocumentSize: "2.4 MB",
    sections: [
      {
        sectionLabel: "Part-A",
        instructions: "Answer All Questions.",
        formulaSummary: "10 x 2 = 20 Marks",
        totalMarks: 20,
        questions: [
          {
            id: "cd-q1",
            questionNumber: 1,
            text: "Differentiate between a Compiler and an Interpreter with respect to execution efficiency and error reporting.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "cd-q2",
            questionNumber: 2,
            text: "Explain the role of sentinels in optimizing input buffering during lexical analysis.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "cd-q3",
            questionNumber: 3,
            text: "Eliminate immediate left recursion from the grammar: A -> Aα | β.",
            marks: 2,
            bloomLevel: "Apply",
          },
          {
            id: "cd-q4",
            questionNumber: 4,
            text: "Define handle and viable prefix in the context of bottom-up shift-reduce parsing.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "cd-q5",
            questionNumber: 5,
            text: "Differentiate synthesized attributes and inherited attributes in Syntax-Directed Definitions (SDDs).",
            marks: 2,
            bloomLevel: "Analyze",
          },
          {
            id: "cd-q6",
            questionNumber: 6,
            text: "What is Backpatching and why is it preferred during one-pass intermediate code generation for Boolean expressions?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "cd-q7",
            questionNumber: 7,
            text: "Draw the structure of an Activation Record (Stack Frame) and explain the purpose of the dynamic link.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "cd-q8",
            questionNumber: 8,
            text: "State the rules for identifying leaders when partitioning Three-Address Code into basic blocks.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "cd-q9",
            questionNumber: 9,
            text: "Differentiate constant folding and constant propagation with suitable one-line examples.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "cd-q10",
            questionNumber: 10,
            text: "What is an induction variable in a loop and how does strength reduction optimize operations on it?",
            marks: 2,
            bloomLevel: "Understand",
          },
        ],
      },
      {
        sectionLabel: "Part-B",
        instructions: "Answer All Questions. Each Question carries 13 Marks.",
        formulaSummary: "5 x 13 = 65 Marks",
        totalMarks: 65,
        questions: [
          // Q11: Unit 1
          {
            id: "cd-q11a",
            questionNumber: 11,
            choiceLabel: "(a)",
            text: "Phases of compilation and DFA token recognition:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Trace and illustrate the exact outputs of all phases of a compiler for the assignment statement: position = initial + rate * 60, where initial, rate, and position are float variables. Clearly display the symbol table entries.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Design a Transition Diagram and Deterministic Finite Automaton (DFA) to recognize relational operators (<, <=, =, <>, >, >=) and unsigned numeric constants (integer and float) in a lexical analyzer.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "cd-q11b",
              questionNumber: 11,
              choiceLabel: "(b)",
              text: "Lexical Analyzer Generator (Lex) and input buffering:",
              marks: 13,
              bloomLevel: "Understand",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the structure of a Lex specification file (Declarations, Rules, Auxiliary functions). Write a complete Lex program to count the number of lines, words, vowels, consonants, and digits in an input text file.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain the two-buffer input buffering scheme. Show how using sentinels reduces the two-test-per-character loop into a single test in the lexical analyzer.",
                  marks: 5,
                },
              ],
            },
          },

          // Q12: Unit 2
          {
            id: "cd-q12a",
            questionNumber: 12,
            choiceLabel: "(a)",
            text: "LL(1) Parsing Table Construction and Predictive Parsing:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Given the expression grammar: E -> E + T | T, T -> T * F | F, F -> ( E ) | id. (a) Eliminate immediate left recursion, (b) Compute FIRST and FOLLOW sets for all non-terminals, and (c) Construct the predictive LL(1) parsing table M[A, a].",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Trace the moves made by the LL(1) predictive parser on the input string w = id + id * id showing Stack contents, Input buffer, and Output productions applied at each step.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "cd-q12b",
              questionNumber: 12,
              choiceLabel: "(b)",
              text: "Bottom-Up LR Parsing and SLR(1) Parsing Table Construction:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Given the augmented grammar: S' -> S, S -> L = R | R, L -> * R | id, R -> L. Construct the canonical collection of LR(0) items and build the SLR(1) parsing table. Identify any shift-reduce or reduce-reduce conflicts.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Compare SLR(1), CLR(1), and LALR(1) parsers with respect to state space size, parsing power, and handling of lookahead tokens.",
                  marks: 5,
                },
              ],
            },
          },

          // Q13: Unit 3
          {
            id: "cd-q13a",
            questionNumber: 13,
            choiceLabel: "(a)",
            text: "Three-Address Code representations and Syntax-Directed Definitions:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Generate Three-Address Code (TAC) and represent it in (a) Quadruples, (b) Triples, and (c) Indirect Triples for the arithmetic expression: x = (a + b) * (-c) + (a + b) / d.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Construct a Syntax-Directed Definition (SDD) for a desk calculator that evaluates arithmetic expressions with +, *, and parentheses, and draw the annotated parse tree for 3 * 5 + 4.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "cd-q13b",
              questionNumber: 13,
              choiceLabel: "(b)",
              text: "Boolean expression translation and Backpatching:",
              marks: 13,
              bloomLevel: "Understand",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain Backpatching in one-pass intermediate code generation. Write the semantic rules for translating Boolean expressions using truelist, falselist, and nextlist for: if (a < b and c < d) x = 1 else x = 0.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain static type checking. Formulate the type checking rules for array dereferencing (A[i]), function calls (f(x)), and pointer dereferencing (*p).",
                  marks: 5,
                },
              ],
            },
          },

          // Q14: Unit 4
          {
            id: "cd-q14a",
            questionNumber: 14,
            choiceLabel: "(a)",
            text: "Basic Blocks, Control Flow Graphs, and DAG representations:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Partition the following Three-Address Code into Basic Blocks and construct the Control Flow Graph (CFG):\n(1) i = 1\n(2) j = 1\n(3) t1 = 10 * i\n(4) t2 = t1 + j\n(5) a[t2] = 0\n(6) j = j + 1\n(7) if j <= 10 goto (3)\n(8) i = i + 1\n(9) if i <= 10 goto (2)\n(10) goto End",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Construct a Directed Acyclic Graph (DAG) for the basic block:\n1. d = b * c\n2. e = a + b\n3. b = b * c\n4. a = e - d\nShow common subexpression elimination and dead-code elimination using the constructed DAG.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "cd-q14b",
              questionNumber: 14,
              choiceLabel: "(b)",
              text: "Runtime storage organization and code generation:",
              marks: 13,
              bloomLevel: "Understand",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the runtime memory layout of a compiled program (Code, Static, Heap, Stack). Detail activation records, control links, access links, and parameter passing mechanisms (call-by-value vs call-by-reference).",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain register allocation and assignment using register descriptors and address descriptors. Illustrate target code generation for the statement x = (a + b) - (c + d) using 2 registers.",
                  marks: 5,
                },
              ],
            },
          },

          // Q15: Unit 5
          {
            id: "cd-q15a",
            questionNumber: 15,
            choiceLabel: "(a)",
            text: "Loop Optimization and Strength Reduction:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain loop optimization techniques: loop-invariant code motion, induction variable elimination, and strength reduction. Given the loop: for (i=0; i<n; i++) { A[i] = 10 * i + B[i]; }, demonstrate the step-by-step strength reduction replacing multiplication with addition.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain Data-Flow Analysis for Reaching Definitions. State the Transfer Function and Confluence equations (GEN, KILL, IN, OUT) and explain how reaching definitions help identify uninitialized variables.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "cd-q15b",
              questionNumber: 15,
              choiceLabel: "(b)",
              text: "Principal sources of code optimization and peephole optimization:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain machine-independent optimizations: Common Subexpression Elimination, Dead-Code Elimination, Copy Propagation, and Algebraic Simplification with suitable intermediate code snippets.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Peephole Optimization. Discuss redundant-load elimination, unreachable code elimination, flow-of-control optimization, and algebraic strength reduction in target machine code.",
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
            id: "cd-q16a",
            questionNumber: 16,
            choiceLabel: "(a)",
            text: "Comprehensive Front-to-Back Compiler Pipeline Translation:",
            marks: 15,
            bloomLevel: "Create",
            subParts: [
              {
                partLabel: "(a)",
                text: "For the source language while-loop: while (i <= 10) { A[i] = B[i] * 4 + 2; i = i + 1; } execute the full compiler backend pipeline: (1) Generate Three-Address Code with explicit conditional jumps, (2) Partition into Basic Blocks and construct the Control Flow Graph (CFG), (3) Apply loop optimization (identify induction variables and apply strength reduction), and (4) Generate target assembly instructions for a 2-register architecture (R0, R1) tracking register descriptors.",
                marks: 15,
              },
            ],
            orQuestion: {
              id: "cd-q16b",
              questionNumber: 16,
              choiceLabel: "(b)",
              text: "LR Parsing Design and Error Recovery Architecture:",
              marks: 15,
              bloomLevel: "Create",
              subParts: [
                {
                  partLabel: "(b)",
                  text: "Given the arithmetic expression grammar with relational operators: E -> E + E | E * E | ( E ) | id. (1) Demonstrate that the grammar is ambiguous, (2) Construct the canonical collection of LR(1) items resolving precedence and associativity, (3) Build the LALR(1) parsing table by merging identical cores, and (4) Formulate an error recovery mechanism using panic-mode and phrase-level recovery for syntax errors during compilation.",
                  marks: 15,
                },
              ],
            },
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. CS2C14 — FOUNDATIONS OF DATA SCIENCE
  // ─────────────────────────────────────────────────────────────────────────────
  CS2C14: {
    id: "paper-cs2c14-novdec2026",
    metadata: {
      ...DEFAULT_METADATA,
      subject: "Foundations of Data Science",
      courseCode: "CS2C14",
      qpCode: "255104",
      semester: "V",
      regulation: "R-2022",
      degree: "B.E.",
      department: "Computer Science and Engineering",
      examTitle: "End Semester Examinations :: Nov/Dec 2026",
      maxMarks: 100,
      duration: "3 Hours",
    },
    patternId: "autonomous-100",
    createdAt: new Date().toISOString(),
    status: "generated",
    sourceDocumentName: "CS2C14_Foundations_of_Data_Science_R2022_Syllabus.pdf",
    sourceDocumentSize: "2.5 MB",
    sections: [
      {
        sectionLabel: "Part-A",
        instructions: "Answer All Questions.",
        formulaSummary: "10 x 2 = 20 Marks",
        totalMarks: 20,
        questions: [
          {
            id: "fds-q1",
            questionNumber: 1,
            text: "Differentiate structured, semi-structured, and unstructured data with real-world examples.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "fds-q2",
            questionNumber: 2,
            text: "State the primary objective of Exploratory Data Analysis (EDA) in the Data Science process.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "fds-q3",
            questionNumber: 3,
            text: "Define standard z-score and explain how it identifies outliers in a normally distributed dataset.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "fds-q4",
            questionNumber: 4,
            text: "Differentiate homoscedasticity and heteroscedasticity in residual analysis.",
            marks: 2,
            bloomLevel: "Analyze",
          },
          {
            id: "fds-q5",
            questionNumber: 5,
            text: "What does the coefficient of determination (R²) quantify in a simple linear regression model?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "fds-q6",
            questionNumber: 6,
            text: "State the linearity and independence assumptions in Ordinary Least Squares (OLS) regression.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "fds-q7",
            questionNumber: 7,
            text: "Differentiate Type I error (α) and Type II error (β) in statistical hypothesis testing.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "fds-q8",
            questionNumber: 8,
            text: "State the decision rule for a two-tailed z-test at a 5% significance level (α = 0.05).",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "fds-q9",
            questionNumber: 9,
            text: "What is array vectorization in NumPy and why is it faster than standard Python loops?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "fds-q10",
            questionNumber: 10,
            text: "Differentiate a Pandas Series and a Pandas DataFrame.",
            marks: 2,
            bloomLevel: "Understand",
          },
        ],
      },
      {
        sectionLabel: "Part-B",
        instructions: "Answer All Questions. Each Question carries 13 Marks.",
        formulaSummary: "5 x 13 = 65 Marks",
        totalMarks: 65,
        questions: [
          // Q11: Unit 1
          {
            id: "fds-q11a",
            questionNumber: 11,
            choiceLabel: "(a)",
            text: "Data Science Process workflow and Data Preparation:",
            marks: 13,
            bloomLevel: "Understand",
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain the complete Data Science process workflow in detail: (1) Setting research goal, (2) Data retrieval, (3) Data preparation & cleaning, (4) Exploratory Data Analysis, (5) Model building & evaluation, and (6) Presenting findings.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain Data Warehousing multi-tier architecture (Bottom, Middle, Top tier) and differentiate OLAP multidimensional analysis from Data Mining functionalities.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "fds-q11b",
              questionNumber: 11,
              choiceLabel: "(b)",
              text: "Big Data facets and Data Mining challenges:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Discuss the facets of Big Data (Volume, Velocity, Variety, Veracity, Value) and explain the role of modern data storage and processing frameworks in handling them.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain major Data Mining functionalities: Characterization, Association rule mining, Classification, and Clustering. Discuss scalability and privacy issues in mining large repositories.",
                  marks: 5,
                },
              ],
            },
          },

          // Q12: Unit 2
          {
            id: "fds-q12a",
            questionNumber: 12,
            choiceLabel: "(a)",
            text: "Descriptive Statistics and Pearson Correlation calculation:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Given the study hours (X) and test marks (Y) for 6 engineering students:\nX = [2, 4, 5, 6, 8, 11]\nY = [18, 22, 24, 28, 34, 44]\n(a) Compute the Pearson correlation coefficient r showing all intermediate summation values (ΣX, ΣY, ΣX², ΣY², ΣXY).\n(b) Interpret the strength and direction of the linear correlation.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "For the numerical dataset: [12, 18, 14, 15, 22, 19, 25, 17, 16, 22], calculate the Sample Mean, Median, Sample Variance, and Standard Deviation. Identify potential outliers using the Interquartile Range (IQR = Q3 - Q1).",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "fds-q12b",
              questionNumber: 12,
              choiceLabel: "(b)",
              text: "Normal distribution, z-scores, and graphical data representations:",
              marks: 13,
              bloomLevel: "Understand",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the standard normal distribution curve and the empirical rule (68-95-99.7%). If an exam score is normally distributed with mean μ = 70 and σ = 10, calculate the percentage of students scoring between 50 and 80 using standard z-scores.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Compare Histograms, Scatter Plots, and Box Plots with respect to the types of data distributions, relationships, and anomalies they effectively visualize.",
                  marks: 5,
                },
              ],
            },
          },

          // Q13: Unit 3
          {
            id: "fds-q13a",
            questionNumber: 13,
            choiceLabel: "(a)",
            text: "Least-Squares Simple Linear Regression and model diagnostics:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Using the Least Squares method, fit a simple linear regression equation Y = β0 + β1*X for the paired observations:\nX = [1, 2, 3, 4, 5]\nY = [3, 5, 7, 9, 11]\n(a) Calculate slope β1 and intercept β0.\n(b) Predict the value of Y when X = 7.\n(c) Compute the Coefficient of Determination R².",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain the role of residual plots in linear regression. Describe how patterns in residual plots detect non-linearity, heteroscedasticity, and outliers.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "fds-q13b",
              questionNumber: 13,
              choiceLabel: "(b)",
              text: "Multiple Linear Regression and Gauss-Markov assumptions:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Formulate the Multiple Linear Regression model Y = β0 + β1*X1 + β2*X2 + ... + βp*Xp + ε in matrix notation. Explain the Ordinary Least Squares parameter estimation β = (X^T X)^(-1) X^T Y and discuss the issue of multicollinearity.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Standard Error of Estimate and adjusted R². Why is adjusted R² preferred over unadjusted R² when comparing models with different numbers of predictors?",
                  marks: 5,
                },
              ],
            },
          },

          // Q14: Unit 4
          {
            id: "fds-q14a",
            questionNumber: 14,
            choiceLabel: "(a)",
            text: "Hypothesis Testing with Z-Test and Confidence Interval estimation:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "A manufacturer claims that the mean lifetime of LED bulbs is μ = 5000 hours with a known population standard deviation σ = 200 hours. An independent testing laboratory examines a random sample of n = 64 bulbs and finds a sample mean x̄ = 4940 hours. At a 5% level of significance (α = 0.05, critical z = ±1.96), test whether the manufacturer's claim is supported. State H0, H1, calculate test statistic z, and conclude.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Construct a 95% Confidence Interval for the true population mean lifetime based on the sample data in (i). Explain what happens to the confidence interval width if the sample size is quadrupled to n = 256.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "fds-q14b",
              questionNumber: 14,
              choiceLabel: "(b)",
              text: "Inferential statistics principles and Iris dataset case study:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the Central Limit Theorem and its foundational importance in inferential statistics. Explain sampling distribution of the mean, standard error (SE = σ / √n), and why normality holds for n ≥ 30.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Design an inferential statistical study on Fisher's Iris dataset: formulate a two-sample hypothesis test to determine whether Sepal Length differs significantly between Iris setosa and Iris versicolor.",
                  marks: 5,
                },
              ],
            },
          },

          // Q15: Unit 5
          {
            id: "fds-q15a",
            questionNumber: 15,
            choiceLabel: "(a)",
            text: "Data Manipulation with Pandas and Visualizations with Matplotlib:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Write a complete Python script using Pandas to: (1) Load a CSV file 'students.csv', (2) Detect and fill missing values in 'Score' with the column median, (3) Filter students with Attendance >= 75%, (4) Group by 'Department' and compute mean Score and student count, and (5) Export summary to 'dept_summary.csv'.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain Matplotlib figure and subplot architecture. Write Python code to plot a 2x1 grid showing a Histogram of scores on top and a Scatter Plot of Study Hours vs Scores at the bottom.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "fds-q15b",
              questionNumber: 15,
              choiceLabel: "(b)",
              text: "NumPy array computations and Python data science ecosystem:",
              marks: 13,
              bloomLevel: "Understand",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain NumPy array creation, universal functions (ufuncs), broadcasting rules, and slicing. Demonstrate with code how 2D matrices are multiplied, transposed, and normalized along columns without explicit Python loops.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain the integration of NumPy, Pandas, Scipy, and Matplotlib into the unified Python Data Science stack. Discuss performance benefits of C-level vectorized routines.",
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
            id: "fds-q16a",
            questionNumber: 16,
            choiceLabel: "(a)",
            text: "Comprehensive Exploratory Data Analysis & Inferential Modeling Case Study:",
            marks: 15,
            bloomLevel: "Create",
            subParts: [
              {
                partLabel: "(a)",
                text: "Formulate a complete Exploratory Data Analysis and Inferential Statistics pipeline for the UCI Wine Quality / Iris dataset: (1) Outline data cleansing procedures including outlier detection using IQR and z-scores, (2) Formulate a two-sample hypothesis test comparing chemical attributes between high-quality and low-quality wine classes, (3) Build a Multiple Linear Regression model predicting quality score and explain residual diagnostics, and (4) Provide a Python code architecture utilizing Pandas, NumPy, and Matplotlib for the entire workflow.",
                marks: 15,
              },
            ],
            orQuestion: {
              id: "fds-q16b",
              questionNumber: 16,
              choiceLabel: "(b)",
              text: "Predictive Analytics and Customer Churn Data Science Architecture:",
              marks: 15,
              bloomLevel: "Create",
              subParts: [
                {
                  partLabel: "(b)",
                  text: "Design an end-to-end Predictive Analytics solution for predicting customer churn in a telecommunications dataset: (1) Formulate feature engineering on usage duration, monthly charges, and service tickets, (2) Apply correlation matrix analysis to detect multicollinearity, (3) Contrast Logistic Regression and Decision Tree models using Precision, Recall, F1-Score, and ROC-AUC curve, and (4) Write the production-grade Python script executing preprocessing, model training, and visual evaluation.",
                  marks: 15,
                },
              ],
            },
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. CS2513 — OBJECT ORIENTED ANALYSIS AND DESIGN
  // ─────────────────────────────────────────────────────────────────────────────
  CS2513: {
    id: "paper-cs2513-novdec2026",
    metadata: {
      ...DEFAULT_METADATA,
      subject: "Object Oriented Analysis and Design",
      courseCode: "CS2513",
      qpCode: "255103",
      semester: "V",
      regulation: "R-2022",
      degree: "B.E.",
      department: "Computer Science and Engineering",
      examTitle: "End Semester Examinations :: Nov/Dec 2026",
      maxMarks: 100,
      duration: "3 Hours",
    },
    patternId: "autonomous-100",
    createdAt: new Date().toISOString(),
    status: "generated",
    sourceDocumentName: "CS2513_OOAD_R2022_Syllabus.pdf",
    sourceDocumentSize: "2.3 MB",
    sections: [
      {
        sectionLabel: "Part-A",
        instructions: "Answer All Questions.",
        formulaSummary: "10 x 2 = 20 Marks",
        totalMarks: 20,
        questions: [
          {
            id: "ooad-q1",
            questionNumber: 1,
            text: "Differentiate Object-Oriented Analysis (OOA) and Object-Oriented Design (OOD).",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "ooad-q2",
            questionNumber: 2,
            text: "Differentiate <<include>> and <<extend>> relationships in a UML Use Case diagram with an example.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "ooad-q3",
            questionNumber: 3,
            text: "Differentiate Aggregation and Composition in UML Class diagrams with appropriate notation.",
            marks: 2,
            bloomLevel: "Analyze",
          },
          {
            id: "ooad-q4",
            questionNumber: 4,
            text: "What is an Association Class? Give a real-world scenario where an association class is required.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "ooad-q5",
            questionNumber: 5,
            text: "Differentiate UML Sequence Diagrams and Communication Diagrams.",
            marks: 2,
            bloomLevel: "Analyze",
          },
          {
            id: "ooad-q6",
            questionNumber: 6,
            text: "Define Guard Condition and Composite State in a UML State Machine diagram.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "ooad-q7",
            questionNumber: 7,
            text: "Explain High Cohesion and Low Coupling in the context of GRASP design principles.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "ooad-q8",
            questionNumber: 8,
            text: "State the intent and applicability of the Singleton Design Pattern.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "ooad-q9",
            questionNumber: 9,
            text: "Define Software Baseline in Software Configuration Management (SCM).",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "ooad-q10",
            questionNumber: 10,
            text: "What is a DevOps Deployment Pipeline and how does it integrate Continuous Integration (CI) and Continuous Delivery (CD)?",
            marks: 2,
            bloomLevel: "Understand",
          },
        ],
      },
      {
        sectionLabel: "Part-B",
        instructions: "Answer All Questions. Each Question carries 13 Marks.",
        formulaSummary: "5 x 13 = 65 Marks",
        totalMarks: 65,
        questions: [
          // Q11: Unit 1
          {
            id: "ooad-q11a",
            questionNumber: 11,
            choiceLabel: "(a)",
            text: "Unified Process and Use Case Modelling for NextGen POS System:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Construct a comprehensive Use Case Diagram for the NextGen Point of Sale (POS) system. Identify primary and secondary actors (Cashier, Customer, Store Manager, Tax Calculator API), main use cases (Process Sale, Process Return, Manage Inventory), and explicit <<include>> and <<extend>> dependencies.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Write a fully dressed use case specification for 'Process Sale' including Scope, Level, Primary Actor, Preconditions, Success Guarantee, Main Success Scenario, and Extension branches.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ooad-q11b",
              questionNumber: 11,
              choiceLabel: "(b)",
              text: "Unified Process phases and Object-Oriented principles:",
              marks: 13,
              bloomLevel: "Understand",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the four phases of the Unified Process (Inception, Elaboration, Construction, Transition). Discuss the major milestones and iterative workflows associated with each phase.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain the foundational pillars of Object Orientation: Abstraction, Encapsulation, Modularity, Hierarchy, and Polymorphism with clear UML representations.",
                  marks: 5,
                },
              ],
            },
          },

          // Q12: Unit 2
          {
            id: "ooad-q12a",
            questionNumber: 12,
            choiceLabel: "(a)",
            text: "Domain Modelling and Class Diagram Design:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Design a complete UML Class Diagram for an Online Shopping and Order Processing System. Include classes (Customer, Order, OrderItem, Product, Payment, Shipment) with attributes, operations, visibility markers (+, -, #), multiplicities (1..*, 0..1), and illustrate aggregation vs composition.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain the Category-List method and Noun-Phrase identification strategy for discovering conceptual classes in a Domain Model. Illustrate with an example from a Hospital Management System.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ooad-q12b",
              questionNumber: 12,
              choiceLabel: "(b)",
              text: "Advanced Class Modeling, Packages, and Generalization:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain Generalization and Specialization in UML. Discuss abstract classes, multiple inheritance issues, and how interface realization is modeled in UML.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain UML Packages, Stereotypes, and Tagged Values. Illustrate how layered architectural subsystems (UI, Domain, Data Access) are organized into UML package diagrams.",
                  marks: 5,
                },
              ],
            },
          },

          // Q13: Unit 3
          {
            id: "ooad-q13a",
            questionNumber: 13,
            choiceLabel: "(a)",
            text: "Interaction Modelling with Sequence and State-Machine Diagrams:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Construct a detailed UML Sequence Diagram for the 'Make Payment / Withdraw Cash' scenario in an ATM Banking System. Include lifelines (User, ATM UI, TransactionController, Account, BankNetwork), synchronous messages, return values, and an alt combined fragment handling insufficient balance.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Draw a UML State-Machine Diagram for an E-Commerce Order lifecycle. Model states (Created, Pending Payment, Paid, Processing, Shipped, Delivered, Cancelled) with transition events, guard conditions, and actions.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ooad-q13b",
              questionNumber: 13,
              choiceLabel: "(b)",
              text: "Communication Diagrams and Activity Diagrams with Swimlanes:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Design a UML Activity Diagram for an Airline Flight Reservation System using Swimlanes (Passenger, Booking System, Payment Gateway). Include decision branches, concurrent fork/join bars, and object flows.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain UML Communication Diagrams. Convert a sequence of messages from a sequence diagram into a communication diagram and compare the two notations.",
                  marks: 5,
                },
              ],
            },
          },

          // Q14: Unit 4
          {
            id: "ooad-q14a",
            questionNumber: 14,
            choiceLabel: "(a)",
            text: "GRASP Responsibility Assignment and GoF Design Patterns:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain the five fundamental GRASP patterns: Creator, Information Expert, Low Coupling, High Cohesion, and Controller. Demonstrate how applying the Controller pattern prevents tight coupling between UI forms and domain logic.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain the Observer and Factory Method Design Patterns. Draw their UML class diagrams and explain how they decouple object creation and event notifications.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ooad-q14b",
              questionNumber: 14,
              choiceLabel: "(b)",
              text: "Architectural styles and Object-Oriented Software Testing:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain Layered Architecture and Client-Server Architectural styles in OO system design. Discuss advantages and design trade-offs of 3-tier architectures.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Object-Oriented Testing strategies: Class-level testing, Integration testing using drivers and stubs, System testing, and Regression testing.",
                  marks: 5,
                },
              ],
            },
          },

          // Q15: Unit 5
          {
            id: "ooad-q15a",
            questionNumber: 15,
            choiceLabel: "(a)",
            text: "Software Configuration Management and DevOps Deployment Pipeline:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain Software Configuration Management (SCM) activities: Configuration Item identification, Baseline control, Version control (Git branching models), and Change Control Board (CCB) procedures.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain the architecture of a modern DevOps CI/CD Deployment Pipeline. Detail automated commit hooks, static code analysis, unit testing, container build, and artifact repository storage.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ooad-q15b",
              questionNumber: 15,
              choiceLabel: "(b)",
              text: "Cloud Platforms and Automated Deployment in Software Engineering:",
              marks: 13,
              bloomLevel: "Understand",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain Cloud as a Platform for software development and automated release management. Contrast Blue-Green deployment and Canary release strategies.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Discuss the role of Continuous Monitoring and Feedback loops in DevOps. Explain how metrics like MTTR (Mean Time to Recover) and deployment frequency assess operational maturity.",
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
            id: "ooad-q16a",
            questionNumber: 16,
            choiceLabel: "(a)",
            text: "Comprehensive OO Architecture and DevOps CI/CD Pipeline Case Study:",
            marks: 15,
            bloomLevel: "Create",
            subParts: [
              {
                partLabel: "(a)",
                text: "For an Enterprise Healthcare Patient Monitoring System: (1) Formulate a 3-tier Layered Architecture (UI, Domain Services, Persistence), (2) Specify the GRASP Controller and Factory Pattern design for real-time patient alert generation, (3) Model a detailed Sequence Diagram for 'Trigger Emergency Cardiac Alert', and (4) Design an end-to-end DevOps CI/CD pipeline incorporating Git version control, Jenkins build automation, SonarQube static code analysis, JUnit automated testing, Docker container packaging, and Kubernetes deployment.",
                marks: 15,
              },
            ],
            orQuestion: {
              id: "ooad-q16b",
              questionNumber: 16,
              choiceLabel: "(b)",
              text: "Omnichannel Retail POS System Design & Continuous Deployment Architecture:",
              marks: 15,
              bloomLevel: "Create",
              subParts: [
                {
                  partLabel: "(b)",
                  text: "Design a complete Object-Oriented Software Architecture for an Omnichannel Retail POS System: (1) Construct a domain model class diagram with at least 8 classes capturing inventory, pricing, coupons, and orders, (2) Apply the Strategy Pattern for flexible payment processing (CreditCard, UPI, Cash) and Observer Pattern for customer SMS notification, and (3) Formulate an automated testing and deployment pipeline ensuring zero-downtime releases.",
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
