import { CourseQuestionBank } from "./psnaQuestionBank";

export const SEMESTER_4_QUESTION_BANK: Record<string, CourseQuestionBank> = {
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. CS2411 — THEORY OF COMPUTATION
  // ─────────────────────────────────────────────────────────────────────────────
  CS2411: {
    code: "CS2411",
    name: "Theory of Computation",
    semester: "IV",
    isProblemHeavy: true,
    highPriorityTopics: [
      "NFA → DFA subset construction",
      "ε-NFA → DFA",
      "DFA minimization (table-filling)",
      "Regular expression → FA",
      "FA → regular expression",
      "Arden's theorem",
      "CFG construction",
      "Parse trees & ambiguity",
      "CFG → PDA",
      "CNF/GNF conversion",
      "Pumping lemma for regular and CFLs",
      "Turing machine construction",
      "Halting problem",
      "Rice's theorem",
      "Post Correspondence Problem (PCP)",
      "P vs NP / NP-completeness",
    ],
    units: [
      {
        unitNumber: 1,
        unitName: "Automata Fundamentals",
        twoMarks: [
          "Define alphabet.",
          "Define string.",
          "What is a language?",
          "Define finite automaton.",
          "What is a finite state system?",
          "Define deterministic finite automaton.",
          "Define nondeterministic finite automaton.",
          "What is an ε-NFA?",
          "Define transition function.",
          "What is an initial state?",
          "What is a final state?",
          "Define accepted string.",
          "What is an accepted language?",
          "Differentiate DFA and NFA.",
          "What is ε-transition?",
          "Define transition table.",
          "Define transition diagram.",
          "What is the extended transition function?",
          "What is the language accepted by a finite automaton?",
          "What is the equivalence of DFA and NFA?",
        ],
        sixteenMarks: [
          "Explain finite automata and their formal representation.",
          "Construct a DFA for a language over a given alphabet.",
          "Construct an NFA for a specified regular language.",
          "Explain the difference between DFA and NFA with suitable examples.",
          "Convert a given NFA into an equivalent DFA.",
          "Explain ε-NFA and construct an equivalent DFA.",
          "Convert an ε-NFA into an equivalent NFA without ε-transitions.",
          "Prove the equivalence between DFA and NFA.",
          "Construct finite automata accepting strings satisfying specified patterns.",
          "Explain transition functions and extended transition functions with examples.",
          "Design an automaton that accepts binary strings satisfying a given condition.",
          "Analyze a given finite automaton and determine the language accepted by it.",
        ],
        problems: [
          {
            marks: 13,
            statement: "Subset construction from NFA to DFA and pattern acceptance.",
            subParts: [
              { partLabel: "(i).", text: "Convert the given NFA M = ({q0, q1, q2}, {0, 1}, δ, q0, {q2}) with transitions δ(q0, 0)={q0, q1}, δ(q0, 1)={q0}, δ(q1, 1)={q2} into an equivalent DFA using subset construction. Show state transition table and transition diagram.", marks: 8 },
              { partLabel: "(ii).", text: "Design a DFA over alphabet Σ = {0, 1} that accepts all strings containing '011' as a substring.", marks: 5 }
            ]
          },
          {
            marks: 13,
            statement: "ε-NFA to DFA conversion and language specification.",
            subParts: [
              { partLabel: "(i).", text: "Convert the ε-NFA with states {p, q, r}, inputs {a, b, ε}, start state p, final state r, and transitions δ(p, ε)={q}, δ(p, a)={p}, δ(q, b)={q}, δ(q, ε)={r}, δ(r, a)={r} into an equivalent DFA.", marks: 8 },
              { partLabel: "(ii).", text: "Design a DFA that accepts strings over {a, b} having an even number of a's and an odd number of b's.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 2,
        unitName: "Regular Expressions and Languages",
        twoMarks: [
          "Define regular expression.",
          "What are the basic operators in regular expressions?",
          "Define regular language.",
          "What is the equivalence between FA and regular expressions?",
          "State Arden's theorem.",
          "What is automata minimization?",
          "Define closure property.",
          "What is closure under union?",
          "What is closure under concatenation?",
          "What is closure under Kleene star?",
          "What is a regular expression operator?",
          "Define Kleene closure.",
          "What is regular expression equivalence?",
          "Define automaton minimization.",
          "What is state equivalence?",
          "What is distinguishability of states?",
          "What is a minimal DFA?",
          "Define regular language closure.",
          "What is the pumping lemma for regular languages?",
          "What is the relationship between regular expressions and finite automata?",
        ],
        sixteenMarks: [
          "Explain regular expressions and their operators with examples.",
          "Construct a regular expression for a given language.",
          "Convert a regular expression into an equivalent finite automaton.",
          "Convert a finite automaton into an equivalent regular expression.",
          "Explain Arden's theorem and apply it to obtain regular expressions.",
          "Prove the equivalence between regular expressions and finite automata.",
          "Explain the closure properties of regular languages.",
          "Minimize a given DFA using state equivalence.",
          "Explain the procedure for DFA minimization with an example.",
          "Construct a minimal DFA for a given regular language.",
          "Solve regular-expression problems involving union, concatenation and Kleene closure.",
          "Analyze whether a given language can be represented by a regular expression.",
        ],
        problems: [
          {
            marks: 13,
            statement: "DFA minimization and Arden's Theorem.",
            subParts: [
              { partLabel: "(i).", text: "Minimize the following 6-state DFA using the Table-Filling (Myhill-Nerode) algorithm: States={A, B, C, D, E, F}, Alphabet={0, 1}, Start=A, Final={C, D, E}, with transitions δ(A,0)=B, δ(A,1)=C, δ(B,0)=A, δ(B,1)=D, δ(C,0)=E, δ(C,1)=F, δ(D,0)=E, δ(D,1)=F, δ(E,0)=E, δ(E,1)=F, δ(F,0)=F, δ(F,1)=F.", marks: 8 },
              { partLabel: "(ii).", text: "Find the regular expression for the finite automaton with states {q1, q2, q3} using Arden's theorem R = Q + RP.", marks: 5 }
            ]
          },
          {
            marks: 13,
            statement: "Pumping Lemma and Thompson's construction.",
            subParts: [
              { partLabel: "(i).", text: "Using the Pumping Lemma for regular languages, prove that L = {0ⁿ 1ⁿ | n ≥ 1} is not a regular language.", marks: 8 },
              { partLabel: "(ii).", text: "Construct an ε-NFA for the regular expression (0 + 1)* 01 (0 + 1)* using Thompson's construction.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 3,
        unitName: "Context Free Grammar and Languages",
        twoMarks: [
          "Define grammar.",
          "What is a formal grammar?",
          "Define context-free grammar.",
          "What is a production rule?",
          "Define terminal symbol.",
          "Define non-terminal symbol.",
          "What is a start symbol?",
          "Define derivation.",
          "What is a parse tree?",
          "Define leftmost derivation.",
          "Define rightmost derivation.",
          "What is an ambiguous grammar?",
          "Define ambiguous language.",
          "What is pushdown automaton?",
          "Define PDA.",
          "What is the stack of a PDA?",
          "Define instantaneous description of PDA.",
          "What language is accepted by a PDA?",
          "What is the equivalence between PDA and CFG?",
          "Differentiate regular grammar and context-free grammar.",
        ],
        sixteenMarks: [
          "Explain context-free grammar with suitable examples.",
          "Construct a CFG for a specified language.",
          "Explain derivations and parse trees with examples.",
          "Construct leftmost and rightmost derivations for a given grammar.",
          "Explain ambiguity in CFGs with suitable examples.",
          "Determine whether a given grammar is ambiguous.",
          "Explain pushdown automata and their formal representation.",
          "Construct a PDA for a given context-free language.",
          "Explain the language accepted by a PDA.",
          "Prove the equivalence between CFG and PDA.",
          "Convert a given CFG into an equivalent PDA.",
          "Design a CFG/PDA for a language involving balanced symbols or matching structures.",
        ],
        problems: [
          {
            marks: 13,
            statement: "Grammar ambiguity and Pushdown Automata design.",
            subParts: [
              { partLabel: "(i).", text: "Show that the grammar G with productions E → E + E | E * E | (E) | id is ambiguous by finding two different leftmost derivations and two distinct parse trees for string 'id + id * id'.", marks: 8 },
              { partLabel: "(ii).", text: "Design a Pushdown Automaton (PDA) accepting the language L = {w c wᴿ | w ∈ {a, b}*} by empty stack.", marks: 5 }
            ]
          },
          {
            marks: 13,
            statement: "CFG construction and PDA equivalence.",
            subParts: [
              { partLabel: "(i).", text: "Construct a Pushdown Automaton (PDA) accepting L = {aⁿ b²ⁿ | n ≥ 1} by final state. Give formal instantaneous descriptions for input 'aabbbb'.", marks: 8 },
              { partLabel: "(ii).", text: "Convert the CFG S → aABB | aAA, A → aBB | a, B → bBB | A into an equivalent PDA.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 4,
        unitName: "Properties of CFL and Turing Machine",
        twoMarks: [
          "Define Chomsky Normal Form.",
          "Define Greibach Normal Form.",
          "What is the pumping lemma for CFL?",
          "Define closure property of CFL.",
          "What is a Turing machine?",
          "Define tape alphabet.",
          "What is the transition function of a Turing machine?",
          "Define configuration of a Turing machine.",
          "What is the language of a Turing machine?",
          "Define recursively enumerable language.",
          "What is a Turing machine state?",
          "What is a multi-track Turing machine?",
          "What is storage in finite control?",
          "What is symbol checking in a Turing machine?",
          "What are subroutines in Turing machine design?",
          "Differentiate PDA and Turing machine.",
          "What is the blank symbol?",
          "What is a halting state?",
          "What is a deterministic Turing machine?",
          "What is the tape head?",
        ],
        sixteenMarks: [
          "Convert a CFG into Chomsky Normal Form.",
          "Convert a CFG into Greibach Normal Form.",
          "Explain the pumping lemma for context-free languages.",
          "Use the pumping lemma to prove that a given language is not context-free.",
          "Explain the closure properties of context-free languages.",
          "Explain the formal model of a Turing machine.",
          "Design a Turing machine for a specified language.",
          "Explain Turing machine programming techniques.",
          "Design a Turing machine using multiple tracks.",
          "Explain storage in finite control and symbol-checking techniques.",
          "Design a Turing machine using subroutine techniques.",
          "Compare finite automata, PDA and Turing machines in terms of computational power.",
        ],
        problems: [
          {
            marks: 13,
            statement: "Chomsky Normal Form and Turing Machine design.",
            subParts: [
              { partLabel: "(i).", text: "Convert the following CFG into Chomsky Normal Form (CNF): S → aSa | bSb | a | b | ε. Show step-by-step elimination of ε-productions, unit productions, and useless symbols.", marks: 8 },
              { partLabel: "(ii).", text: "Design a Turing Machine to accept the language L = {0ⁿ 1ⁿ | n ≥ 1}. Provide the formal transition table and instantaneous description trace for input '0011'.", marks: 5 }
            ]
          },
          {
            marks: 13,
            statement: "Pumping Lemma for CFL and complex Turing Machine.",
            subParts: [
              { partLabel: "(i).", text: "Design a Turing Machine M that computes the 1's complement of a given binary string on tape.", marks: 8 },
              { partLabel: "(ii).", text: "Using the Pumping Lemma for Context-Free Languages, prove that L = {aⁿ bⁿ cⁿ | n ≥ 1} is not context-free.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 5,
        unitName: "Undecidability",
        twoMarks: [
          "Define decidable language.",
          "Define undecidable language.",
          "What is a recursively enumerable language?",
          "What is a non-recursively enumerable language?",
          "Define undecidable problem.",
          "What is the halting problem?",
          "State Rice's theorem.",
          "What is Post's Correspondence Problem?",
          "Define Modified Post Correspondence Problem.",
          "What is a decidable problem?",
          "What is an undecidable problem about Turing machines?",
          "Define P class.",
          "Define NP class.",
          "What is polynomial-time computation?",
          "What is a polynomial-time problem?",
          "Define NP-hard problem.",
          "Define NP-complete problem.",
          "Differentiate P and NP.",
          "What is reducibility?",
          "What is computational complexity?",
        ],
        sixteenMarks: [
          "Explain decidability and undecidability with suitable examples.",
          "Explain recursively enumerable and non-recursively enumerable languages.",
          "Explain the halting problem and prove its undecidability.",
          "Explain undecidable problems concerning Turing machines.",
          "State and explain Rice's theorem.",
          "Explain Post's Correspondence Problem.",
          "Explain Modified Post's Correspondence Problem.",
          "Explain polynomial-time computation and class P.",
          "Explain class NP and its characteristics.",
          "Explain NP-hard and NP-complete problems.",
          "Compare P, NP, NP-hard and NP-complete classes.",
          "Explain problem reduction and its importance in proving computational complexity.",
        ],
        problems: [
          {
            marks: 13,
            statement: "Halting Problem and Post Correspondence Problem.",
            subParts: [
              { partLabel: "(i).", text: "State the Halting Problem of Turing Machines and prove that it is undecidable using a diagonalization argument.", marks: 8 },
              { partLabel: "(ii).", text: "Determine whether the following instance of Post's Correspondence Problem (PCP) has a solution: List A = (b, bab³, ba), List B = (b³, ba, a). If yes, find the match sequence.", marks: 5 }
            ]
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. CS2C12 — DATABASE MANAGEMENT SYSTEMS
  // ─────────────────────────────────────────────────────────────────────────────
  CS2C12: {
    code: "CS2C12",
    name: "Database Management Systems",
    semester: "IV",
    isProblemHeavy: true,
    highPriorityTopics: [
      "Relational algebra",
      "SQL query writing",
      "ER diagram",
      "ER → relational mapping",
      "Functional dependencies",
      "Normalization (3NF/BCNF)",
      "Conflict serializability",
      "2PL & Timestamp ordering",
      "Deadlock handling",
      "ARIES recovery",
      "B/B+ tree indexing",
      "Hashing",
      "Query optimization",
      "Distributed DB & CAP theorem",
      "NoSQL model selection",
    ],
    units: [
      {
        unitNumber: 1,
        unitName: "Relational Databases",
        twoMarks: [
          "Define DBMS.",
          "What is a database?",
          "What is a database system?",
          "Define data model.",
          "What is database architecture?",
          "Define three-schema architecture.",
          "What is data independence?",
          "Define relational model.",
          "What is a relation?",
          "Define tuple.",
          "Define attribute.",
          "What is a domain?",
          "Define primary key.",
          "Define candidate key.",
          "What is a foreign key?",
          "Define relational algebra.",
          "What is selection operation?",
          "What is projection operation?",
          "Define join.",
          "What is SQL?",
          "Define DDL.",
          "Define DML.",
          "What is embedded SQL?",
          "What is dynamic SQL?",
          "What is NoSQL?",
        ],
        sixteenMarks: [
          "Explain the purpose and advantages of database systems.",
          "Explain different views of data in a DBMS.",
          "Explain different data models.",
          "Explain database system architecture and the three-schema architecture.",
          "Explain the relational model and its fundamental concepts.",
          "Explain different types of keys with suitable examples.",
          "Explain relational algebra operations with examples.",
          "Explain SQL fundamentals with suitable queries.",
          "Write SQL queries involving selection, projection, joins and aggregation.",
          "Explain advanced SQL features.",
          "Explain embedded SQL and dynamic SQL.",
          "Compare relational databases and NoSQL databases.",
        ],
        problems: [
          {
            marks: 13,
            statement: "Relational Algebra and complex SQL queries.",
            subParts: [
              { partLabel: "(i).", text: "Consider the schema: Sailors(sid, sname, rating, age), Boats(bid, bname, color), Reserves(sid, bid, day). Write Relational Algebra expressions for: (1) Find names of sailors who reserved a red boat, (2) Find sailor IDs with rating ≥ 8 who have not reserved boat 103.", marks: 8 },
              { partLabel: "(ii).", text: "Write SQL queries for the same schema to find: (1) Sailors who reserved all boats, (2) Average age of sailors for each rating level having at least 2 sailors.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 2,
        unitName: "Database Design",
        twoMarks: [
          "Define ER model.",
          "What is an entity?",
          "Define entity set.",
          "What is an attribute?",
          "Define relationship.",
          "What is cardinality?",
          "Define participation constraint.",
          "What is an ER diagram?",
          "Define weak entity.",
          "What is an enhanced ER model?",
          "Define specialization.",
          "Define generalization.",
          "What is aggregation?",
          "Define functional dependency.",
          "What is normalization?",
          "Define 1NF.",
          "Define 2NF.",
          "Define 3NF.",
          "Define BCNF.",
          "What is denormalization?",
        ],
        sixteenMarks: [
          "Explain the ER model with suitable examples.",
          "Design an ER diagram for a given real-world application.",
          "Explain different types of attributes and relationships.",
          "Explain cardinality and participation constraints.",
          "Explain enhanced ER modeling with specialization and generalization.",
          "Convert an ER diagram into a relational schema.",
          "Explain functional dependencies with examples.",
          "Explain database anomalies and their causes.",
          "Explain first, second and third normal forms with examples.",
          "Explain BCNF and compare it with 3NF.",
          "Explain fourth and fifth normal forms.",
          "Normalize a given relational schema up to an appropriate normal form.",
        ],
        problems: [
          {
            marks: 13,
            statement: "Functional Dependency closure and Normalization to BCNF.",
            subParts: [
              { partLabel: "(i).", text: "Given relation R(A, B, C, D, E) with functional dependencies F = {A → BC, CD → E, B → D, E → A}: (1) Find all candidate keys of R, (2) Determine the highest normal form of R, (3) Decompose R into BCNF ensuring lossless join decomposition.", marks: 8 },
              { partLabel: "(ii).", text: "Design an ER diagram for a University Examination System with Entities: Student, Department, Course, and ExamResult with cardinality ratios.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 3,
        unitName: "Transactions",
        twoMarks: [
          "Define transaction.",
          "What are ACID properties?",
          "Define atomicity.",
          "Define consistency.",
          "Define isolation.",
          "Define durability.",
          "What is a schedule?",
          "Define serial schedule.",
          "What is serializability?",
          "Define conflict serializability.",
          "What is concurrency control?",
          "Define two-phase locking.",
          "What is timestamp ordering?",
          "Define multiversion concurrency control.",
          "What is deadlock?",
          "Define recovery.",
          "What is deferred update?",
          "What is immediate update?",
          "Define shadow paging.",
          "What is ARIES?",
        ],
        sixteenMarks: [
          "Explain transaction concepts and ACID properties.",
          "Explain schedules and different types of schedules.",
          "Determine whether a given schedule is conflict serializable.",
          "Explain concurrency problems in database systems.",
          "Explain two-phase locking protocol.",
          "Explain timestamp-based concurrency control.",
          "Explain multiversion concurrency control.",
          "Explain deadlock handling in database systems.",
          "Explain recovery concepts in DBMS.",
          "Compare deferred and immediate database update techniques.",
          "Explain shadow paging.",
          "Explain the ARIES recovery algorithm.",
        ],
        problems: [
          {
            marks: 13,
            statement: "Conflict serializability and Two-Phase Locking.",
            subParts: [
              { partLabel: "(i).", text: "Check whether the schedule S = r1(X), r2(Y), w1(X), r2(X), w2(Y), w2(X) is conflict serializable. Construct the precedence graph and determine the equivalent serial execution order.", marks: 8 },
              { partLabel: "(ii).", text: "Explain Strict Two-Phase Locking (Strict 2PL) and explain how it prevents cascading aborts.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 4,
        unitName: "Data Storage",
        twoMarks: [
          "Define RAID.",
          "What is file organization?",
          "Define record.",
          "What is a data dictionary?",
          "Define column-oriented storage.",
          "What is indexing?",
          "Define ordered index.",
          "What is a B-tree?",
          "What is a B+ tree?",
          "Differentiate B-tree and B+ tree.",
          "Define hashing.",
          "What is static hashing?",
          "What is dynamic hashing?",
          "Define hash bucket.",
          "What is collision?",
          "Define primary index.",
          "What is secondary index.",
          "Define dense index.",
          "Define sparse index.",
          "What is RAID striping?",
        ],
        sixteenMarks: [
          "Explain RAID levels and their applications.",
          "Explain different file organization techniques.",
          "Explain organization of records in files.",
          "Explain data dictionary storage.",
          "Explain column-oriented storage and its advantages.",
          "Explain indexing techniques in databases.",
          "Explain ordered indices with examples.",
          "Explain B-tree indexing and operations.",
          "Explain B+ tree indexing and operations.",
          "Compare B-tree and B+ tree.",
          "Explain static hashing with suitable examples.",
          "Explain dynamic hashing and compare it with static hashing.",
        ],
        problems: [
          {
            marks: 13,
            statement: "B+ Tree insertion and RAID level comparisons.",
            subParts: [
              { partLabel: "(i).", text: "Construct a B+ tree of order p = 4 by inserting keys [10, 20, 30, 40, 50, 60, 70, 80] one by one. Show the intermediate node splits and root updates.", marks: 8 },
              { partLabel: "(ii).", text: "Compare RAID 0, RAID 1, RAID 5, and RAID 10 in terms of disk storage efficiency, read/write performance, and fault tolerance.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 5,
        unitName: "Query Processing and Distributed Databases",
        twoMarks: [
          "Define query processing.",
          "What is query optimization?",
          "Define query execution plan.",
          "What is selection operation?",
          "What is join processing?",
          "Define cost estimation.",
          "What is heuristic query optimization?",
          "Define distributed database.",
          "What is distributed database architecture?",
          "Define distributed transaction.",
          "What is NoSQL?",
          "State CAP theorem.",
          "What is a document database?",
          "Define key-value store.",
          "What is a column-based database?",
          "What is a graph database?",
          "What is data fragmentation?",
          "What is distributed data storage?",
          "Define query optimizer.",
          "What is a distributed database system?",
        ],
        sixteenMarks: [
          "Explain query processing architecture.",
          "Explain algorithms for selection operations.",
          "Explain algorithms for join operations.",
          "Explain heuristic query optimization.",
          "Explain cost estimation in query processing.",
          "Explain distributed database architecture.",
          "Explain data storage in distributed databases.",
          "Explain distributed transaction processing.",
          "Explain NoSQL databases and their characteristics.",
          "Explain CAP theorem with suitable examples.",
          "Compare document, key-value, column-based and graph databases.",
          "Select an appropriate NoSQL database model for different application requirements.",
        ],
        problems: [
          {
            marks: 13,
            statement: "Heuristic query optimization tree and CAP Theorem.",
            subParts: [
              { partLabel: "(i).", text: "Given SQL query: SELECT S.sname FROM Student S, Enrolls E WHERE S.sid = E.sid AND E.course = 'CS2C12' AND S.cgpa > 8.5. Draw the initial relational algebra canonical tree and optimize it using heuristic query transformation rules (pushing projections and selections down).", marks: 8 },
              { partLabel: "(ii).", text: "Explain the CAP theorem and compare Consistency vs Availability in MongoDB vs Apache Cassandra.", marks: 5 }
            ]
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. CS2413 — COMPUTER NETWORKS
  // ─────────────────────────────────────────────────────────────────────────────
  CS2413: {
    code: "CS2413",
    name: "Computer Networks",
    semester: "IV",
    isProblemHeavy: true,
    highPriorityTopics: [
      "OSI/TCP-IP",
      "Encoding",
      "Multiplexing",
      "Switching",
      "CRC error detection",
      "HDLC/PPP",
      "Ethernet",
      "IPv4 addressing and subnetting",
      "ARP/ICMP",
      "RIP/OSPF",
      "IPv6",
      "TCP handshake",
      "Sliding window",
      "TCP congestion control",
      "DNS resolution",
      "HTTP/FTP/SSH/Telnet",
    ],
    units: [
      {
        unitNumber: 1,
        unitName: "Data Communication and Physical Layer",
        twoMarks: [
          "Define computer network.",
          "What is a protocol?",
          "Define network topology.",
          "What is LAN?",
          "What is MAN?",
          "What is WAN?",
          "Define protocol layering.",
          "What is TCP/IP protocol suite?",
          "What is OSI model?",
          "List the layers of the OSI model.",
          "What is data communication?",
          "Define signal.",
          "What is analog signal?",
          "What is digital signal?",
          "Define signal encoding.",
          "What is multiplexing?",
          "Define spread spectrum.",
          "What is transmission medium?",
          "Define circuit switching.",
          "Define packet switching.",
        ],
        sixteenMarks: [
          "Explain different types of computer networks.",
          "Explain protocol layering and its importance.",
          "Explain the OSI reference model with functions of each layer.",
          "Explain the TCP/IP protocol suite.",
          "Compare OSI and TCP/IP models.",
          "Explain data communication components and characteristics.",
          "Explain analog and digital signals.",
          "Explain different signal encoding techniques.",
          "Explain multiplexing techniques.",
          "Explain transmission media and compare guided and unguided media.",
          "Explain circuit switching and packet switching.",
          "Compare circuit-switched and packet-switched networks.",
        ],
        problems: [
          {
            marks: 13,
            statement: "Digital signal encoding and Shannon channel capacity.",
            subParts: [
              { partLabel: "(i).", text: "Draw the signal waveforms for the bit sequence 01001110 using: (1) NRZ-L, (2) NRZ-I, (3) Manchester, and (4) Differential Manchester encoding.", marks: 8 },
              { partLabel: "(ii).", text: "A channel has a bandwidth of 4 kHz and a signal-to-noise ratio (SNR) of 30 dB. Calculate the theoretical maximum channel capacity using Shannon's capacity formula.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 2,
        unitName: "Data-Link Layer & Media Access",
        twoMarks: [
          "Define data-link layer.",
          "What is link-layer addressing?",
          "Define DLC.",
          "What are data-link layer services?",
          "What is HDLC?",
          "Define PPP.",
          "What is error detection?",
          "Define error correction.",
          "What is Ethernet?",
          "Define MAC address.",
          "What is IEEE 802.11?",
          "Define wireless LAN.",
          "What is Bluetooth?",
          "What is a connecting device?",
          "Define parity check.",
          "What is CRC?",
          "Define checksum.",
          "What is Hamming distance?",
          "What is frame?",
          "What is MAC sublayer?",
        ],
        sixteenMarks: [
          "Explain data-link layer services.",
          "Explain link-layer addressing.",
          "Explain HDLC protocol.",
          "Explain PPP and its operation.",
          "Explain error detection techniques.",
          "Explain CRC with a suitable example.",
          "Explain error correction techniques.",
          "Explain Ethernet architecture and frame format.",
          "Explain IEEE 802.11 wireless LAN.",
          "Explain Bluetooth technology.",
          "Compare wired and wireless LANs.",
          "Explain different connecting devices used in computer networks.",
        ],
        problems: [
          {
            marks: 13,
            statement: "Cyclic Redundancy Check (CRC) calculation and Hamming Code.",
            subParts: [
              { partLabel: "(i).", text: "A bit stream 1101011011 is transmitted using the generator polynomial G(x) = x⁴ + x + 1. (1) Compute the transmitted frame using CRC polynomial division. (2) Show how the receiver verifies error-free transmission.", marks: 8 },
              { partLabel: "(ii).", text: "A 7-bit even parity Hamming code word received is 1011011. Determine whether there is an error. If yes, locate the error bit and find the correct data bits.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 3,
        unitName: "Network Layer",
        twoMarks: [
          "Define network layer.",
          "What are network layer services?",
          "Define IP.",
          "What is IPv4?",
          "Define IPv4 address.",
          "What is subnetting?",
          "Define CIDR.",
          "What is IP forwarding?",
          "Define ARP.",
          "What is RARP?",
          "Define ICMP.",
          "What is RIP?",
          "What is OSPF?",
          "Define unicast routing.",
          "What is multicasting?",
          "Define IPv6.",
          "What is an IPv6 address?",
          "Differentiate IPv4 and IPv6.",
          "What is routing?",
          "Define routing algorithm.",
        ],
        sixteenMarks: [
          "Explain IPv4 addressing and subnetting with examples.",
          "Explain forwarding of IP packets.",
          "Explain ARP and RARP.",
          "Explain ICMPv4 and its applications.",
          "Explain RIP routing protocol.",
          "Explain OSPF routing protocol.",
          "Compare RIP and OSPF.",
          "Explain unicast routing algorithms.",
          "Explain multicasting basics.",
          "Explain IPv6 addressing.",
          "Explain IPv6 protocol and its features.",
          "Compare IPv4 and IPv6 in detail.",
        ],
        problems: [
          {
            marks: 13,
            statement: "IPv4 Subnetting and Distance Vector Routing.",
            subParts: [
              { partLabel: "(i).", text: "An organization is assigned the network block 200.16.0.0/20. Allocate subnets for 4 departments requiring 1000, 500, 250, and 120 hosts respectively using Variable Length Subnet Masking (VLSM). Tabulate Subnet IDs, Subnet Masks, and Usable IP ranges.", marks: 8 },
              { partLabel: "(ii).", text: "Explain the Distance Vector Routing count-to-infinity problem and how Split Horizon and Poison Reverse resolve it.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 4,
        unitName: "Transport Layer",
        twoMarks: [
          "Define transport layer.",
          "What are transport-layer services?",
          "Define port number.",
          "What is UDP?",
          "What is TCP?",
          "Differentiate TCP and UDP.",
          "Define connection establishment.",
          "What is TCP three-way handshake?",
          "Define flow control.",
          "What is window management?",
          "Define sliding-window protocol.",
          "What is congestion?",
          "Define congestion control.",
          "What is congestion avoidance?",
          "What is TCP segment?",
          "Define sequence number.",
          "What is acknowledgement number?",
          "What is TCP window?",
          "What is retransmission?",
          "What is reliable transport?",
        ],
        sixteenMarks: [
          "Explain transport-layer services.",
          "Explain UDP and its characteristics.",
          "Explain TCP and its characteristics.",
          "Compare TCP and UDP.",
          "Explain TCP connection establishment using the three-way handshake.",
          "Explain TCP flow control.",
          "Explain sliding-window protocol.",
          "Explain TCP window management.",
          "Explain TCP congestion control.",
          "Explain congestion avoidance techniques.",
          "Explain reliable data transfer using TCP.",
          "Analyze TCP connection establishment and data transfer using a suitable sequence diagram.",
        ],
        problems: [
          {
            marks: 13,
            statement: "TCP Congestion Control and Three-Way Handshake.",
            subParts: [
              { partLabel: "(i).", text: "Explain TCP Reno congestion control phases: Slow Start, Congestion Avoidance, Fast Retransmit, and Fast Recovery. Plot the Congestion Window (cwnd) size against transmission rounds showing how threshold (ssthresh) adapts after triple duplicate ACKs vs timeout.", marks: 8 },
              { partLabel: "(ii).", text: "Illustrate the TCP Three-Way Handshake connection establishment and Four-Way FIN termination sequence diagrams with sequence/acknowledgment numbers.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 5,
        unitName: "Application Layer",
        twoMarks: [
          "Define application layer.",
          "What is WWW?",
          "Define HTTP.",
          "What is FTP?",
          "Define electronic mail.",
          "What is Telnet?",
          "Define SSH.",
          "What is DNS?",
          "Define SNMP.",
          "What is a web server?",
          "What is a web client?",
          "What is a URL?",
          "What is an HTTP request?",
          "What is an HTTP response?",
          "What is DNS name resolution?",
          "What is an FTP server?",
          "Differentiate Telnet and SSH.",
          "What is remote login?",
          "What is network management?",
          "What is SNMP used for?",
        ],
        sixteenMarks: [
          "Explain WWW and its architecture.",
          "Explain HTTP request-response communication.",
          "Explain FTP architecture and operation.",
          "Explain electronic mail architecture and protocols.",
          "Explain Telnet and its applications.",
          "Explain SSH and compare it with Telnet.",
          "Explain DNS architecture and name resolution.",
          "Explain SNMP and network management.",
          "Compare HTTP, FTP, Telnet, SSH, DNS and SNMP.",
          "Explain the role of application-layer protocols in the Internet.",
          "Trace the process of accessing a web page from DNS lookup to HTTP response.",
          "Explain how different application-layer protocols work together in a networked application.",
        ],
        problems: [
          {
            marks: 13,
            statement: "DNS recursive resolution and HTTP/1.1 vs HTTP/2.",
            subParts: [
              { partLabel: "(i).", text: "Explain DNS hierarchical domain tree architecture. Trace the step-by-step recursive vs iterative DNS resolution process when a client resolves the domain name 'www.psnacet.edu.in'.", marks: 8 },
              { partLabel: "(ii).", text: "Compare HTTP/1.0, HTTP/1.1 (persistent with pipelining), and HTTP/2 (binary framing and multiplexing).", marks: 5 }
            ]
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. CS2414 — DESIGN AND ANALYSIS OF ALGORITHM
  // ─────────────────────────────────────────────────────────────────────────────
  CS2414: {
    code: "CS2414",
    name: "Design and Analysis of Algorithm",
    semester: "IV",
    isProblemHeavy: true,
    highPriorityTopics: [
      "Asymptotic analysis",
      "Recurrence relations",
      "KMP string matching",
      "Rabin-Karp",
      "Bellman-Ford",
      "Floyd-Warshall",
      "Ford-Fulkerson",
      "Bipartite matching",
      "Merge sort / Quick sort",
      "Dynamic programming",
      "Optimal BST",
      "Activity selection",
      "Huffman coding",
      "N-Queens",
      "Subset Sum",
      "Graph coloring",
      "Branch & Bound",
      "TSP",
      "NP-completeness & reductions",
      "Approximation algorithms",
    ],
    units: [
      {
        unitNumber: 1,
        unitName: "Introduction",
        twoMarks: [
          "Define algorithm.",
          "What is algorithm analysis?",
          "Define time complexity.",
          "Define space complexity.",
          "What is asymptotic notation?",
          "Define Big-O notation.",
          "Define Big-Omega notation.",
          "Define Big-Theta notation.",
          "What is best-case analysis?",
          "What is worst-case analysis?",
          "What is average-case analysis?",
          "Define recurrence relation.",
          "What is pattern matching?",
          "Define naive string matching.",
          "What is Rabin-Karp algorithm?",
          "What is KMP algorithm?",
          "Define prefix function.",
          "What is a pattern?",
          "What is a text in string matching?",
          "What is asymptotic efficiency?",
        ],
        sixteenMarks: [
          "Explain algorithm analysis and its importance.",
          "Explain time and space complexity with examples.",
          "Explain Big-O, Big-Omega and Big-Theta notations.",
          "Analyze best-case, worst-case and average-case complexities.",
          "Solve recurrence relations using appropriate techniques.",
          "Explain the naive string-matching algorithm.",
          "Explain Rabin-Karp string-matching algorithm.",
          "Explain KMP string-matching algorithm.",
          "Compare naive, Rabin-Karp and KMP algorithms.",
          "Solve a pattern-matching problem using KMP.",
          "Analyze the time complexity of different pattern-matching algorithms.",
          "Determine the asymptotic complexity of given algorithms.",
        ],
        problems: [
          {
            marks: 13,
            statement: "Master Theorem recurrence solving and KMP prefix function.",
            subParts: [
              { partLabel: "(i).", text: "Compute the Knuth-Morris-Pratt (KMP) prefix function π table for the pattern P = 'ABABCABAB'. Trace the matching of P inside text T = 'ABABDABABCABABAB'.", marks: 8 },
              { partLabel: "(ii).", text: "Solve the recurrence relations: (1) T(n) = 4T(n/2) + n², (2) T(n) = 2T(n/2) + n log n using Master Theorem and explain which case applies.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 2,
        unitName: "Graph Algorithms",
        twoMarks: [
          "Define graph.",
          "What is biconnectivity?",
          "Define articulation point.",
          "What is an Euler circuit?",
          "Define shortest path.",
          "What is Bellman-Ford algorithm?",
          "What is Floyd-Warshall algorithm?",
          "Define flow network.",
          "What is network flow?",
          "Define Ford-Fulkerson method.",
          "What is maximum flow?",
          "Define bipartite graph.",
          "What is bipartite matching?",
          "Define maximum bipartite matching.",
          "What is an augmenting path?",
          "What is negative edge weight?",
          "What is all-pairs shortest path?",
          "What is single-source shortest path?",
          "What is a residual graph?",
          "What is minimum cut?",
        ],
        sixteenMarks: [
          "Explain biconnectivity and articulation points in graphs.",
          "Explain Euler circuits with suitable examples.",
          "Explain Bellman-Ford shortest-path algorithm.",
          "Solve a shortest-path problem using Bellman-Ford.",
          "Explain Floyd-Warshall algorithm.",
          "Solve an all-pairs shortest-path problem using Floyd-Warshall.",
          "Compare Bellman-Ford and Floyd-Warshall algorithms.",
          "Explain flow networks and maximum-flow problems.",
          "Explain Ford-Fulkerson method with an example.",
          "Explain residual networks and augmenting paths.",
          "Explain maximum bipartite matching.",
          "Solve a graph problem involving maximum flow or bipartite matching.",
        ],
        problems: [
          {
            marks: 13,
            statement: "Floyd-Warshall and Bellman-Ford shortest paths.",
            subParts: [
              { partLabel: "(i).", text: "Apply the Floyd-Warshall all-pairs shortest-path algorithm to a 4-vertex directed graph with edge weights: (1,2)=3, (1,4)=7, (2,1)=8, (2,3)=2, (3,1)=5, (3,4)=1, (4,1)=2. Tabulate distance matrices D(0), D(1), D(2), D(3), D(4).", marks: 8 },
              { partLabel: "(ii).", text: "Trace Bellman-Ford algorithm on a 5-vertex graph containing a negative weight edge. Show how negative-weight cycles are detected.", marks: 5 }
            ]
          },
          {
            marks: 13,
            statement: "Ford-Fulkerson maximum flow algorithm.",
            subParts: [
              { partLabel: "(i).", text: "Find the maximum flow from source s to sink t in the given flow network using the Ford-Fulkerson method. Show residual networks and augmenting paths at each iteration.", marks: 8 },
              { partLabel: "(ii).", text: "State and prove the Max-Flow Min-Cut Theorem.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 3,
        unitName: "Algorithm Design Techniques",
        twoMarks: [
          "Define divide and conquer.",
          "What is merge sort?",
          "What is quick sort?",
          "Define dynamic programming.",
          "What are overlapping subproblems?",
          "What is optimal substructure?",
          "Define multistage graph.",
          "What is an optimal binary search tree?",
          "Define greedy technique.",
          "What is activity-selection problem?",
          "Define optimal merge pattern.",
          "What is Huffman coding?",
          "Define greedy-choice property.",
          "What is dynamic programming table?",
          "What is recursion in divide-and-conquer?",
          "Define pivot in quick sort.",
          "What is the merge operation?",
          "What is a Huffman tree?",
          "What is an optimal solution?",
          "Differentiate greedy and dynamic programming.",
        ],
        sixteenMarks: [
          "Explain divide-and-conquer methodology.",
          "Explain merge sort with complexity analysis.",
          "Explain quick sort with complexity analysis.",
          "Compare merge sort and quick sort.",
          "Explain dynamic programming and its principles.",
          "Solve the multistage graph problem using dynamic programming.",
          "Explain optimal binary search trees.",
          "Explain greedy strategy and its properties.",
          "Solve the activity-selection problem using the greedy method.",
          "Explain optimal merge pattern.",
          "Construct a Huffman tree for a given set of frequencies.",
          "Compare divide-and-conquer, dynamic programming and greedy techniques.",
        ],
        problems: [
          {
            marks: 13,
            statement: "Huffman coding and Optimal Binary Search Tree.",
            subParts: [
              { partLabel: "(i).", text: "Given character probabilities: A: 0.35, B: 0.10, C: 0.20, D: 0.20, E: 0.15. (1) Construct the optimal Huffman coding tree. (2) Determine the variable-length prefix code for each character. (3) Compute the average code length.", marks: 8 },
              { partLabel: "(ii).", text: "Construct an Optimal Binary Search Tree (OBST) for keys (k1, k2, k3) with search probabilities p = (0.5, 0.1, 0.05) and dummy keys q = (0.15, 0.1, 0.05, 0.05) using dynamic programming.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 4,
        unitName: "State Space Search Algorithms",
        twoMarks: [
          "Define backtracking.",
          "What is a state space tree?",
          "Define N-Queens problem.",
          "What is the Hamiltonian circuit problem?",
          "Define subset-sum problem.",
          "What is graph coloring?",
          "Define branch and bound.",
          "What is an assignment problem?",
          "Define knapsack problem.",
          "What is Travelling Salesman Problem?",
          "What is a promising node?",
          "What is a non-promising node?",
          "Define bounding function.",
          "What is pruning?",
          "Differentiate backtracking and branch-and-bound.",
          "What is a feasible solution?",
          "What is a state space representation?",
          "What is an implicit state-space tree?",
          "What is a live node?",
          "What is a dead node?",
        ],
        sixteenMarks: [
          "Explain the backtracking technique with a state-space tree.",
          "Solve the N-Queens problem using backtracking.",
          "Solve the Hamiltonian circuit problem using backtracking.",
          "Solve the subset-sum problem using backtracking.",
          "Solve graph coloring using backtracking.",
          "Explain branch-and-bound technique.",
          "Solve the assignment problem using branch and bound.",
          "Solve the knapsack problem using branch and bound.",
          "Solve the Travelling Salesman Problem using branch and bound.",
          "Compare backtracking and branch-and-bound.",
          "Construct the state-space tree for a given problem.",
          "Explain pruning and bounding strategies in state-space search.",
        ],
        problems: [
          {
            marks: 13,
            statement: "4-Queens backtracking and 0/1 Knapsack Branch & Bound.",
            subParts: [
              { partLabel: "(i).", text: "Solve the 4-Queens problem using Backtracking. Draw the complete state space tree showing all promising and pruned non-promising paths.", marks: 8 },
              { partLabel: "(ii).", text: "Solve the 0/1 Knapsack problem for items with weights w = (4, 7, 5, 3) and values v = (40, 42, 25, 12) with knapsack capacity W = 10 using Branch and Bound.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 5,
        unitName: "NP-Complete and Approximation Algorithm",
        twoMarks: [
          "Define tractable problem.",
          "Define intractable problem.",
          "What is a polynomial-time algorithm?",
          "Define P class.",
          "Define NP class.",
          "What is NP-hard?",
          "What is NP-complete?",
          "Define polynomial-time reduction.",
          "What is problem reduction?",
          "Define bin-packing problem.",
          "What is 3-CNF?",
          "Define approximation algorithm.",
          "What is approximation ratio?",
          "What is the TSP?",
          "What is a decision problem?",
          "What is a verification algorithm?",
          "Differentiate NP-hard and NP-complete.",
          "What is a certificate in NP?",
          "What is an optimization problem?",
          "What is an approximation solution?",
        ],
        sixteenMarks: [
          "Explain tractable and intractable problems.",
          "Explain P and NP classes.",
          "Explain NP-hard and NP-complete problems.",
          "Explain polynomial-time reduction with examples.",
          "Explain the concept of NP-completeness.",
          "Explain the bin-packing problem.",
          "Explain 3-CNF and its role in complexity theory.",
          "Explain approximation algorithms and approximation ratios.",
          "Explain the approximation approach to the Travelling Salesman Problem.",
          "Compare exact and approximation algorithms.",
          "Explain how polynomial-time reductions are used to establish NP-completeness.",
          "Analyze a given computational problem and classify it as P, NP, NP-hard or NP-complete.",
        ],
        problems: [
          {
            marks: 13,
            statement: "Polynomial reduction and Vertex Cover approximation.",
            subParts: [
              { partLabel: "(i).", text: "Prove that Vertex Cover is NP-complete by demonstrating a polynomial-time reduction from 3-SAT: 3-SAT ≤p Vertex Cover.", marks: 8 },
              { partLabel: "(ii).", text: "Explain the 2-approximation algorithm for the Vertex Cover problem and prove that its approximation ratio is at most 2.", marks: 5 }
            ]
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. IT2C25 — INTRODUCTION TO OPERATING SYSTEMS
  // ─────────────────────────────────────────────────────────────────────────────
  IT2C25: {
    code: "IT2C25",
    name: "Introduction to Operating Systems",
    semester: "IV",
    isProblemHeavy: true,
    highPriorityTopics: [
      "OS architecture",
      "System calls",
      "Process states",
      "CPU scheduling numericals",
      "IPC",
      "Semaphores",
      "Dining Philosophers",
      "Deadlock characterization",
      "Banker's algorithm avoidance",
      "Paging & Segmentation",
      "Page replacement numericals (FIFO/LRU/Optimal)",
      "Virtual memory & thrashing",
      "Disk scheduling numericals (SSTF/SCAN/C-SCAN)",
      "File allocation methods",
      "Virtual machines & Hypervisors",
      "Docker containers",
      "Android vs iOS",
    ],
    units: [
      {
        unitNumber: 1,
        unitName: "Operating System Overview",
        twoMarks: [
          "Define operating system.",
          "What are the objectives of an OS?",
          "List the major functions of an operating system.",
          "What is an OS kernel?",
          "Define system call.",
          "What is a system program?",
          "Define virtual machine.",
          "What is OS structure?",
          "Define OS operation.",
          "What is OS generation?",
          "What is system boot?",
          "What is UEFI?",
          "What is legacy boot?",
          "Define process.",
          "What is a command interpreter?",
          "What is resource management?",
          "What is protection in an OS?",
          "What is an OS service?",
          "What is bootstrapping?",
          "What is the purpose of system calls?",
        ],
        sixteenMarks: [
          "Explain the objectives and functions of an operating system.",
          "Explain the evolution of operating systems.",
          "Explain different operating-system structures.",
          "Explain operating-system operations.",
          "Explain system calls and different categories of system calls.",
          "Explain system programs and their role.",
          "Explain virtual machines and their role in operating systems.",
          "Explain OS generation.",
          "Explain the complete system boot process.",
          "Compare UEFI and legacy boot mechanisms.",
          "Explain the basic elements of a computer system and the role of the OS.",
          "Explain the services provided by an operating system to users and programs.",
        ]
      },
      {
        unitNumber: 2,
        unitName: "Process Management",
        twoMarks: [
          "Define process.",
          "What is process management?",
          "Define process state.",
          "What is process scheduling?",
          "Define PCB.",
          "What is context switching?",
          "Define inter-process communication.",
          "What is CPU scheduling?",
          "Define multithreading.",
          "What are multithreading models?",
          "Define critical section.",
          "What is a semaphore?",
          "Define process synchronization.",
          "What is the Dining Philosophers problem?",
          "Define deadlock.",
          "What are the necessary conditions for deadlock?",
          "Define deadlock prevention.",
          "What is deadlock avoidance?",
          "Define deadlock detection.",
          "What is deadlock recovery?",
        ],
        sixteenMarks: [
          "Explain process states and process operations.",
          "Explain process scheduling and scheduling criteria.",
          "Explain different CPU scheduling algorithms.",
          "Solve CPU scheduling problems using FCFS, SJF, Priority and Round Robin.",
          "Explain inter-process communication mechanisms.",
          "Explain multithreading models.",
          "Explain the critical-section problem.",
          "Explain semaphores and their applications.",
          "Explain the Dining Philosophers problem and solutions.",
          "Explain deadlock characterization and necessary conditions.",
          "Explain deadlock prevention, avoidance, detection and recovery.",
          "Compare different approaches for handling deadlocks.",
        ],
        problems: [
          {
            marks: 13,
            statement: "CPU Scheduling algorithms and Banker's Algorithm.",
            subParts: [
              { partLabel: "(i).", text: "Consider 5 processes P1, P2, P3, P4, P5 arriving at time 0, 1, 2, 3, 4 with burst times 10, 1, 2, 1, 5 ms. Draw Gantt charts and compute average turnaround time and waiting time for: (1) SJF Preemptive (SRTF), and (2) Round Robin (quantum = 2 ms).", marks: 8 },
              { partLabel: "(ii).", text: "In a system with 5 processes (P0-P4) and 3 resource types (A:10, B:5, C:7), given Allocation, Max, and Available matrices, apply Banker's Safety Algorithm to find if the system is in a safe state.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 3,
        unitName: "Memory Management",
        twoMarks: [
          "Define memory management.",
          "What is main memory?",
          "Define swapping.",
          "What is contiguous memory allocation?",
          "Define paging.",
          "What is segmentation?",
          "Define virtual memory.",
          "What is demand paging?",
          "Define page fault.",
          "What is page replacement?",
          "Define frame.",
          "What is thrashing?",
          "Define kernel memory allocation.",
          "What is a page table?",
          "Define logical address.",
          "Define physical address.",
          "What is internal fragmentation?",
          "What is external fragmentation?",
          "What is a translation lookaside buffer?",
          "What is memory allocation?",
        ],
        sixteenMarks: [
          "Explain contiguous memory allocation.",
          "Explain swapping and its advantages/disadvantages.",
          "Explain paging with suitable diagrams.",
          "Explain segmentation with suitable examples.",
          "Compare paging and segmentation.",
          "Explain virtual memory.",
          "Explain demand paging and page-fault handling.",
          "Solve page-replacement problems using FIFO, LRU and Optimal algorithms.",
          "Explain frame allocation techniques.",
          "Explain thrashing and methods for controlling it.",
          "Explain kernel memory allocation.",
          "Analyze different memory-management schemes and compare their performance.",
        ],
        problems: [
          {
            marks: 13,
            statement: "Page Replacement algorithms and Address Translation.",
            subParts: [
              { partLabel: "(i).", text: "Given the reference string 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1 and 3 page frames, calculate total page faults and trace page frames for: (1) FIFO, (2) Optimal, and (3) LRU replacement.", marks: 8 },
              { partLabel: "(ii).", text: "Explain Two-Level Paging address translation mechanism with a neat block diagram showing page directory, page table, and offset.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 4,
        unitName: "I/O Systems",
        twoMarks: [
          "Define mass storage.",
          "What is disk scheduling?",
          "Define file system.",
          "What is a file?",
          "Define file access method.",
          "What is a directory?",
          "Define disk structure.",
          "What is file allocation?",
          "Define free-space management.",
          "What is I/O hardware?",
          "Define application I/O interface.",
          "What is kernel I/O subsystem?",
          "Define sequential access.",
          "What is direct access?",
          "Define contiguous allocation.",
          "What is linked allocation?",
          "Define indexed allocation.",
          "What is disk scheduling?",
          "What is file metadata?",
          "What is a file descriptor?",
        ],
        sixteenMarks: [
          "Explain mass-storage systems.",
          "Explain disk scheduling algorithms with examples.",
          "Solve disk scheduling problems using FCFS, SSTF, SCAN and C-SCAN.",
          "Explain file concepts and file attributes.",
          "Explain different file access methods.",
          "Explain file-system structure.",
          "Explain directory structure.",
          "Explain file allocation methods.",
          "Compare contiguous, linked and indexed allocation.",
          "Explain free-space management techniques.",
          "Explain I/O hardware and application I/O interfaces.",
          "Explain the kernel I/O subsystem and Linux file system.",
        ],
        problems: [
          {
            marks: 13,
            statement: "Disk Head Scheduling algorithms.",
            subParts: [
              { partLabel: "(i).", text: "A disk drive has 200 cylinders (0 to 199). The request queue is {98, 183, 37, 122, 14, 124, 65, 67}. The current head position is at cylinder 53 moving towards larger cylinders. Calculate the total head movement for: (1) SSTF, (2) SCAN, and (3) C-SCAN.", marks: 8 },
              { partLabel: "(ii).", text: "Compare contiguous, linked, and indexed file allocation methods with respect to random access speed and external fragmentation.", marks: 5 }
            ]
          }
        ]
      },
      {
        unitNumber: 5,
        unitName: "Virtual Machines and Mobile OS",
        twoMarks: [
          "Define virtual machine.",
          "What are the features of virtual machines?",
          "Define virtualization.",
          "What is a hypervisor?",
          "Define Type-1 hypervisor.",
          "Define Type-2 hypervisor.",
          "What are the building blocks of virtualization?",
          "What is hardware virtualization?",
          "Define container.",
          "What is Docker?",
          "Define mobile operating system.",
          "What is Android?",
          "What is iOS?",
          "Differentiate VM and container.",
          "What is containerization?",
          "What is an OS-level virtual machine?",
          "What is a virtual machine monitor?",
          "What is server virtualization?",
          "What are the advantages of virtualization?",
          "What are the limitations of virtualization?",
        ],
        sixteenMarks: [
          "Explain virtual machines and their features.",
          "Explain the building blocks of virtual machines.",
          "Explain different types of virtual machines.",
          "Explain virtualization and its types.",
          "Explain Type-1 and Type-2 hypervisors.",
          "Compare different virtualization techniques.",
          "Explain Docker containers and containerization.",
          "Compare virtual machines and containers.",
          "Explain different types of operating systems used in virtualized environments.",
          "Explain Android operating-system architecture.",
          "Explain iOS architecture and characteristics.",
          "Compare Android and iOS operating systems.",
        ],
        problems: [
          {
            marks: 13,
            statement: "Virtualization hypervisors and Android Architecture.",
            subParts: [
              { partLabel: "(i).", text: "Explain the architecture of Android OS in detail with a diagram: Linux Kernel, Hardware Abstraction Layer (HAL), Android Runtime (ART/Dalvik), Native C/C++ Libraries, Application Framework, and System Apps.", marks: 8 },
              { partLabel: "(ii).", text: "Compare Type-1 (Bare-Metal) vs Type-2 (Hosted) Hypervisors and contrast Virtual Machines with Docker Containers in terms of isolation, startup overhead, and resource sharing.", marks: 5 }
            ]
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. GE2421 — ENVIRONMENTAL SCIENCES AND SUSTAINABILITY
  // ─────────────────────────────────────────────────────────────────────────────
  GE2421: {
    code: "GE2421",
    name: "Environmental Sciences and Sustainability",
    semester: "IV",
    isProblemHeavy: false,
    highPriorityTopics: [
      "Ecosystem structure & energy flow",
      "Biodiversity hotspots",
      "Conservation (in-situ vs ex-situ)",
      "Pollution control (water/air/soil/noise)",
      "Solid, hazardous, and e-waste management",
      "Environmental Impact Assessment (EIA)",
      "Renewable energy (Hydrogen, Tidal, Geothermal)",
      "Sustainable development goals",
      "Climate change & mitigation",
      "Carbon credits & carbon footprint",
      "Zero waste & circular economy",
      "ISO 14000 series",
      "Life Cycle Assessment (LCA)",
      "Green buildings & green materials",
      "Sustainable transportation & urbanization",
    ],
    units: [
      {
        unitNumber: 1,
        unitName: "Environment and Biodiversity",
        twoMarks: [
          "Define environment.",
          "What is environmental science?",
          "State the scope of environmental science.",
          "Why is public awareness about the environment important?",
          "Define ecosystem.",
          "What are the components of an ecosystem?",
          "Define energy flow.",
          "What is ecological succession?",
          "Define biodiversity.",
          "What is genetic diversity?",
          "Define species diversity.",
          "What is ecosystem diversity?",
          "Why is India called a mega-diversity nation?",
          "What is a biodiversity hotspot?",
          "Define habitat loss.",
          "What is wildlife poaching?",
          "What is human-wildlife conflict?",
          "Define endemic species.",
          "Define endangered species.",
          "Differentiate in-situ and ex-situ conservation.",
        ],
        sixteenMarks: [
          "Explain the scope and importance of environmental science.",
          "Explain the structure and functions of an ecosystem.",
          "Explain energy flow through an ecosystem.",
          "Explain ecological succession.",
          "Explain biodiversity and its different levels.",
          "Explain genetic, species and ecosystem diversity.",
          "Explain the values of biodiversity.",
          "Explain India as a mega-diversity nation.",
          "Explain biodiversity hotspots and their significance.",
          "Explain major threats to biodiversity.",
          "Explain habitat loss, poaching and human-wildlife conflicts.",
          "Explain in-situ and ex-situ biodiversity conservation methods.",
        ]
      },
      {
        unitNumber: 2,
        unitName: "Environmental Pollution",
        twoMarks: [
          "Define environmental pollution.",
          "Define water pollution.",
          "State causes of water pollution.",
          "What are the effects of water pollution?",
          "Define soil pollution.",
          "Define air pollution.",
          "Define noise pollution.",
          "What is solid-waste management?",
          "Define hazardous waste.",
          "What is e-waste?",
          "Define OHASMS.",
          "What is environmental impact assessment?",
          "What are environmental protection acts?",
          "Define pollutant.",
          "What is a primary pollutant?",
          "What is a secondary pollutant.",
          "Define noise pollution.",
          "What is occupational health and safety?",
          "What is waste segregation?",
          "What is EIA?",
        ],
        sixteenMarks: [
          "Explain the causes, effects and preventive measures of water pollution.",
          "Explain soil pollution and its control measures.",
          "Explain air pollution, its sources, effects and prevention.",
          "Explain noise pollution and its control measures.",
          "Explain solid-waste management.",
          "Explain hazardous-waste management.",
          "Explain e-waste management and its environmental impact.",
          "Explain Occupational Health and Safety Management System.",
          "Explain major environmental protection acts.",
          "Explain Environmental Impact Assessment and its importance.",
          "Compare different forms of environmental pollution and their control strategies.",
          "Develop an integrated pollution-management strategy for an industrial region.",
        ]
      },
      {
        unitNumber: 3,
        unitName: "Renewable Sources of Energy",
        twoMarks: [
          "Define renewable energy.",
          "What is energy management?",
          "Define energy conservation.",
          "Why are new energy sources required?",
          "Define hydrogen energy.",
          "What is ocean energy?",
          "Define tidal energy.",
          "What is tidal energy conversion?",
          "Define geothermal energy.",
          "What is a geothermal power plant?",
          "State advantages of hydrogen energy.",
          "What are ocean energy resources?",
          "Define tidal power.",
          "What is geothermal heat?",
          "What are non-renewable energy sources?",
          "Differentiate renewable and non-renewable energy.",
          "What are alternative energy sources?",
          "What is energy efficiency?",
          "What is hydrogen fuel?",
          "State applications of renewable energy.",
        ],
        sixteenMarks: [
          "Explain the need for new energy sources.",
          "Explain energy management and conservation.",
          "Explain different new and renewable energy sources.",
          "Explain hydrogen energy and its applications.",
          "Explain ocean energy resources.",
          "Explain tidal energy conversion systems.",
          "Explain geothermal energy and its origin.",
          "Explain geothermal power plants with suitable diagrams.",
          "Compare hydrogen, ocean, tidal and geothermal energy.",
          "Explain the environmental advantages of renewable energy.",
          "Discuss the role of renewable energy in sustainable development.",
          "Propose a renewable-energy solution for a suitable regional application.",
        ]
      },
      {
        unitNumber: 4,
        unitName: "Sustainability and Management",
        twoMarks: [
          "Define sustainable development.",
          "What is sustainability?",
          "State the need for sustainable development.",
          "What are the challenges of sustainability?",
          "What is GDP?",
          "Define economic sustainability.",
          "Define social sustainability.",
          "What are sustainability indicators?",
          "What are Millennium Development Goals?",
          "Define climate change.",
          "What is global environmental change?",
          "What are regional environmental issues?",
          "What are local environmental issues?",
          "Define carbon credit.",
          "Define carbon footprint.",
          "What is environmental management?",
          "What is industrial environmental management?",
          "What is an intervention area?",
          "What are sustainability targets?",
          "What is climate mitigation?",
        ],
        sixteenMarks: [
          "Explain sustainable development, its concept, needs and challenges.",
          "Explain the economic and social dimensions of sustainability.",
          "Explain sustainability measures and indicators.",
          "Explain Millennium Development Goals and their environmental relevance.",
          "Explain sustainability targets and intervention areas.",
          "Explain climate change and its causes.",
          "Discuss global, regional and local environmental issues.",
          "Explain possible solutions for major climate-change problems.",
          "Explain carbon credits and their role in environmental management.",
          "Explain carbon footprint and methods to reduce it.",
          "Explain environmental management in industries with a suitable case study.",
          "Discuss how engineering and technology can contribute to sustainable development.",
        ]
      },
      {
        unitNumber: 5,
        unitName: "Sustainability Practices",
        twoMarks: [
          "Define zero waste.",
          "What are the 3Rs?",
          "Define circular economy.",
          "What is ISO 14000?",
          "Define life-cycle assessment.",
          "What is material life-cycle assessment?",
          "Define sustainable habitat.",
          "What is a green building?",
          "Define green material.",
          "What is energy efficiency?",
          "Define sustainable transportation.",
          "What is sustainable energy?",
          "Define carbon cycle.",
          "What is carbon emission?",
          "Define carbon sequestration.",
          "What is green engineering?",
          "Define sustainable urbanization.",
          "What are socio-economic changes?",
          "What are technological changes?",
          "What is resource efficiency?",
        ],
        sixteenMarks: [
          "Explain zero-waste management and the 3R concept.",
          "Explain circular economy and compare it with the linear economy.",
          "Explain ISO 14000 series and its environmental significance.",
          "Explain material life-cycle assessment.",
          "Explain sustainable habitat and its major components.",
          "Explain green buildings and green-building practices.",
          "Explain green materials and their applications.",
          "Explain energy efficiency in sustainable development.",
          "Explain sustainable transportation systems.",
          "Explain carbon cycle, emissions and carbon sequestration.",
          "Explain green engineering and its principles.",
          "Explain sustainable urbanization and the role of socio-economic and technological change.",
        ]
      }
    ]
  }
};
