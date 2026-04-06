export const education: Education[] = [
  {
    school: "McGill University",
    time: "Winter 2023 - Winter 2026",
    degree: "B.A.Sc., Cognitive Science: Computer Science and Linguistics",
    conc: "Minor in Statistics",
    location: "Montreal, QC",
    courses: [
      "COMP 251 Algorithms and Data Structures",
      "LING 201 Introduction to Linguistics",
      "LING 371 Semantics",
      "MATH 240 Discrete Structures",
      "MATH 323 Probability",
      "PSYC 213 Cognition"
    ]
  }
];

export const experiences: Experience[] = [
  {
    company: "bKash",
    time: "May 2025 - August 2025",
    title: "Software Engineering Intern",
    location: "Dhaka, Bangladesh",
    summary: "Developed RESTful APIs and automated test suites for a microservices-based mobile banking platform.",
    bullets: [
      "Developed and integrated RESTful APIs in Java and SQL to enhance financial data processing pipelines for the bKash mobile banking application, supporting a microservices-based backend architecture.",
      "Automated test suites using JUnit to validate API functionality and improve software reliability, reducing manual testing overhead through systematic debugging and regression coverage."
    ]
  },
  {
    company: "McGill University",
    time: "September 2025 - April 2026",
    title: "Course Assistant, MATH 240 (Discrete Structures) & MATH 323 (Probability)",
    location: "Montreal, QC",
    summary: "Led tutorials and grading across two consecutive terms for ~330 students.",
    bullets: [
      "Led weekly tutorials and graded assignments for ~330 students via Crowdmark, across two consecutive terms covering discrete structures and probability theory.",
      "Provided targeted feedback to strengthen analytical reasoning while coordinating with instructors to maintain grading standards and lesson consistency."
    ]
  },
  {
    company: "Rawnak's Bakery",
    time: "June 2022 - Present",
    title: "Founder and Manager",
    location: "Dhaka, Bangladesh and Montreal, QC",
    summary: "Founded and scaled a home-based bakery with data-driven operations.",
    bullets: [
      "Founded and scaled a home-based bakery, achieving consistent revenue growth through innovative digital marketing and customer engagement strategies.",
      "Leveraged sales and operational data to optimize inventory, streamline workflows, and manage end-to-end operations - from product development to financial planning - ensuring high customer satisfaction."
    ]
  },
  {
    company: "City Bank",
    time: "June 2024 - August 2024",
    title: "Data Science Intern",
    location: "Dhaka, Bangladesh",
    summary: "Built and deployed ML models for customer targeting and behavioral analytics.",
    bullets: [
      "Built and deployed a predictive machine learning model with Scikit-learn and PyTorch to identify high-value customers, boosting deposit-targeting efficiency by 15%.",
      "Designed and executed ETL pipelines using Pandas, spaCy, and NLTK to extract, clean, and transform structured and unstructured data; applied Seaborn visualization to surface behavioral patterns improving customer targeting."
    ]
  },
  {
    company: "Marie Stopes",
    time: "May 2023 - August 2023",
    title: "Business & Data Analytics Intern",
    location: "Dhaka, Bangladesh",
    summary: "Created dashboards and reports to drive data-informed marketing strategies.",
    bullets: [
      "Performed data mining on client experience datasets using Python and Excel (VBA) to uncover engagement trends and service gaps, informing data-driven marketing strategies.",
      "Developed interactive Power BI and Tableau dashboards backed by structured reporting layers to visualize insights and guide evidence-based decisions, improving client retention and campaign performance."
    ]
  }
];

export interface Education {
  school: string;
  time: string;
  degree: string;
  conc : string;
  location?: string;
  description?: string;
  courses: string [];
}

export interface Skill {
  title: string;
  description: string;
}

export interface Experience {
  company: string;
  time: string;
  title: string;
  location: string;
  summary?: string;
  bullets: string[];
}

export function isExperience(element: Experience | Education): element is Experience {
  return 'title' in element && 'company' in element;
}

export function isEducation(element: Education | Experience): element is Education {
  return 'school' in element && 'degree' in element;
}
