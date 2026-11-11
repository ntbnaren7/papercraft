import { GeneratedPaper } from "@/types/papercraft";
import { DEFAULT_METADATA } from "./defaultPatterns";

export const SEM7_COURSE_PAPERS: Record<string, GeneratedPaper> = {
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. GE2721 — HUMAN VALUES AND ETHICS
  // ─────────────────────────────────────────────────────────────────────────────
  GE2721: {
    id: "paper-ge2721-novdec2026",
    metadata: {
      ...DEFAULT_METADATA,
      subject: "Human Values and Ethics",
      courseCode: "GE2721",
      qpCode: "257101",
      semester: "VII",
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
    sourceDocumentName: "GE2721_Human_Values_and_Ethics_R2022_Syllabus.pdf",
    sourceDocumentSize: "2.1 MB",
    sections: [
      {
        sectionLabel: "Part-A",
        instructions: "Answer All Questions.",
        formulaSummary: "10 x 2 = 20 Marks",
        totalMarks: 20,
        questions: [
          {
            id: "hve-q1",
            questionNumber: 1,
            text: "Differentiate between integrity and honesty with an example from professional engineering life.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "hve-q2",
            questionNumber: 2,
            text: "Define empathy and explain why it is essential for effective engineering teamwork and leadership.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "hve-q3",
            questionNumber: 3,
            text: "Explain the Indian concept of secularism ('Sarva Dharma Sambhava') as equal respect for all faiths.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "hve-q4",
            questionNumber: 4,
            text: "What is meant by the disassociation of state from religion in a democratic constitutional order?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "hve-q5",
            questionNumber: 5,
            text: "Differentiate inductive reasoning and deductive reasoning in the scientific method.",
            marks: 2,
            bloomLevel: "Analyze",
          },
          {
            id: "hve-q6",
            questionNumber: 6,
            text: "Define scientific temper and explain how it prevents confirmation bias and superstition in society.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "hve-q7",
            questionNumber: 7,
            text: "Differentiate liberty and equality as foundational democratic virtues.",
            marks: 2,
            bloomLevel: "Analyze",
          },
          {
            id: "hve-q8",
            questionNumber: 8,
            text: "State the ethical principle of intergenerational justice in the context of environmental conservation.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "hve-q9",
            questionNumber: 9,
            text: "Define gender bias and give an example of implicit gender stereotyping in workplace recruitment.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "hve-q10",
            questionNumber: 10,
            text: "What are constitutional protections and why is affirmative action necessary to achieve substantive equity?",
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
          // Q11: Unit 1 — Human Values
          {
            id: "hve-q11a",
            questionNumber: 11,
            choiceLabel: "(a)",
            text: "Professional Integrity, Moral Courage, and Whistleblowing in Engineering:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Analyze an ethical dilemma where a lead software engineer discovers an unpatched critical safety vulnerability in an AI medical diagnostic device scheduled for commercial release. Contrast the competing demands of organizational loyalty vs professional integrity, and formulate the ethical justifications for whistleblowing using moral courage.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Differentiate positive discipline from punitive control. Explain how educational institutions and professional organizations cultivate self-discipline and character development.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "hve-q11b",
              questionNumber: 11,
              choiceLabel: "(b)",
              text: "Character Development, Empathy, and Responsible Freedom of Expression:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the role of family, educational institutions, and society in the formation of human values and character. Discuss how empathy transforms interpersonal relationships and prevents social conflicts.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Freedom of Expression as a fundamental human value. Discuss its ethical boundaries and explain why freedom of speech must be exercised responsibly to prevent defamation and social harm.",
                  marks: 5,
                },
              ],
            },
          },

          // Q12: Unit 2 — Secular Values
          {
            id: "hve-q12a",
            questionNumber: 12,
            choiceLabel: "(a)",
            text: "Indian Model of Secularism and Pluralistic National Integration:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain the Indian model of secularism ('Sarva Dharma Sambhava' - equal respect for all faiths) and contrast it with the Western model of strict wall-of-separation between church and state. Discuss how Articles 25-28 of the Indian Constitution balance religious freedom with social reform.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain how religious pluralism and secular values foster national integration and prevent communal polarization in a culturally diverse democracy.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "hve-q12b",
              questionNumber: 12,
              choiceLabel: "(b)",
              text: "Constitutional Non-Discrimination and Inclusive Workplace Policies:",
              marks: 13,
              bloomLevel: "Understand",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the constitutional mandate of non-discrimination (Articles 14, 15, and 16). Discuss how state neutrality and equal opportunity protect the rights and human dignity of religious minorities.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Formulate a comprehensive non-discriminatory diversity and inclusion policy for a multi-cultural engineering enterprise, detailing guidelines to prevent religious bias and harassment.",
                  marks: 5,
                },
              ],
            },
          },

          // Q13: Unit 3 — Scientific Ethics and Values
          {
            id: "hve-q13a",
            questionNumber: 13,
            choiceLabel: "(a)",
            text: "Scientific Method, Hypothesis Validation, and Dual-Use Technologies:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Differentiate inductive and deductive reasoning with illustrative examples from scientific breakthroughs. Detail the systematic cycle of hypothesis formulation, empirical testing, peer-review reproducibility, and falsifiability in the scientific method.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Discuss the ethical responsibilities of scientists in developing dual-use technologies (e.g., nuclear energy, CRISPR gene editing, autonomous lethal AI weapons). How should researchers balance scientific discovery with catastrophic societal risks?",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "hve-q13b",
              questionNumber: 13,
              choiceLabel: "(b)",
              text: "Scientific Temper, Empiricism, and Combating Pseudoscience:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the concept of 'Scientific Temper' as enshrined in Article 51A(h) of the Indian Constitution. Discuss how empiricism, skepticism, and evidence-based reasoning empower citizens to counter superstition and digital misinformation.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain confirmation bias and conflicts of interest in scientific research. Discuss the ethical mandate for open-science publishing and truthful communication of research limitations.",
                  marks: 5,
                },
              ],
            },
          },

          // Q14: Unit 4 — Democratic Issues and Values
          {
            id: "hve-q14a",
            questionNumber: 14,
            choiceLabel: "(a)",
            text: "Democratic Virtues, Digital Free Speech, and Algorithmic Polarization:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Critically examine the boundaries of Free Speech in the digital era. Contrast John Stuart Mill's harm principle with contemporary challenges of algorithmic echo chambers, deepfake disinformation, and hate speech on social media platforms. Formulate responsible legal and ethical remedies.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain the historical evolution of democratic values through the French Revolution (Liberty, Equality, Fraternity) and the Indian Freedom Struggle (Satyagraha, Ahimsa, Social Justice).",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "hve-q14b",
              questionNumber: 14,
              choiceLabel: "(b)",
              text: "Environmental Ethics, Intergenerational Justice, and Racial Equality:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain Environmental Ethics and the concept of Intergenerational Justice. Discuss the ethical dilemma between rapid industrialization and the preservation of natural ecosystems for unborn generations.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain how racial and social discrimination violate the foundational democratic principles of equality and human dignity. Discuss the role of international human rights conventions in upholding justice.",
                  marks: 5,
                },
              ],
            },
          },

          // Q15: Unit 5 — Social Ethics
          {
            id: "hve-q15a",
            questionNumber: 15,
            choiceLabel: "(a)",
            text: "Workplace Harassment Prevention (POSH) and Gender Equity Policies:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain the provisions of the Prevention of Sexual Harassment (POSH) Act, 2013 in India. Detail the constitution and responsibilities of the Internal Complaints Committee (ICC), inquiry timelines, and ethical measures for fostering a safe, dignified work environment.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Differentiate between equality and equity in social justice. Explain how affirmative action and social policies uplift historically disadvantaged communities without compromising merit.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "hve-q15b",
              questionNumber: 15,
              choiceLabel: "(b)",
              text: "Ethical Reasoning Frameworks and Technology-Induced Social Discrimination:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Compare three major normative ethical frameworks: Utilitarianism (consequence-based), Deontology (duty-based), and Virtue Ethics (character-based). Apply each framework to analyze a contemporary social problem of your choice.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain how artificial intelligence and automated algorithms can perpetuate digital discrimination and socioeconomic exclusion. Suggest ethical governance guidelines for algorithmic fairness.",
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
            id: "hve-q16a",
            questionNumber: 16,
            choiceLabel: "(a)",
            text: "Ethical Engineering Leadership Case Study: Safety Failure vs Commercial Deployment:",
            marks: 15,
            bloomLevel: "Create",
            subParts: [
              {
                partLabel: "(a)",
                text: "You are the Principal Systems Engineer for an Autonomous Vehicle project. During rigorous edge-case testing 3 weeks before a multimillion-dollar commercial launch, you discover that the sensor perception model fails in heavy rain, risking pedestrian collision in 2% of simulated test runs. Executive management pressures you to sign off on the safety clearance, arguing that competitors are launching first and updates can be pushed over-the-air later. (1) Identify all ethical principles and stakeholder obligations in conflict, (2) Evaluate the course of action using Utilitarian and Kantian Duty ethics, (3) Formulate your professional response to executive leadership, and (4) Outline an institutional whistleblower protocol and engineering safety review process protecting public welfare.",
                marks: 15,
              },
            ],
            orQuestion: {
              id: "hve-q16b",
              questionNumber: 16,
              choiceLabel: "(b)",
              text: "Corporate AI Ethics Governance and Social Discrimination Case Study:",
              marks: 15,
              bloomLevel: "Create",
              subParts: [
                {
                  partLabel: "(b)",
                  text: "A major enterprise tech corporation deploys an automated AI recruitment and predictive performance evaluation system across its nationwide offices. An independent audit reveals that the model systematically discounts resumes from female candidates and individuals from marginalized backgrounds by 32% due to historical training bias. (1) Formulate an immediate containment, rollback, and remediation strategy, (2) Apply constitutional principles of equality and non-discrimination to justify affirmative algorithm recalibration, and (3) Design an institutional Ethics and Algorithmic Audit Board featuring cross-functional oversight, transparency benchmarks, and ongoing human-in-the-loop review.",
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
