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
    company: "McGill University",
    time: "January 2026 - April 2026",
    title: "Course Assistant, MATH 323 (Probability)",
    location: "Montreal, QC",
    summary: "Leading tutorials and grading for a large-scale Statistics core course.",
    bullets: [
      
    ]
  },

  {
    company: "McGill University",
    time: "September 2025 - December 2025",
    title: "Course Assistant, MATH 240 (Discrete Structures)",
    location: "Montreal, QC",
    summary: "Leading tutorials and grading for a large-scale CS core course.",
    bullets: [
      "Led weekly tutorials and graded assignments for ~330 students via Crowdmark, ensuring fairness and accuracy across topics like logic, proof techniques, combinatorics, and graph theory.",
      "Provided targeted feedback to strengthen students' analytical reasoning while coordinating with the instructor to maintain grading standards and lesson consistency in a large-scale CS core course."
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
    title: "Summer Data Science Intern",
    location: "Dhaka, Bangladesh",
    summary: "Built and deployed ML models for customer targeting and behavioral analytics.",
    bullets: [
      "Built and deployed a predictive machine learning model with Scikit-learn and PyTorch to identify high-value customers, boosting deposit-targeting efficiency by 15%.",
      "Applied Pandas, spaCy, and NLTK to process structured and unstructured data using Seaborn visualizations to reveal behavioral patterns that improved customer targeting."
    ]
  },
  {
    company: "Marie Stopes",
    time: "May 2023 - August 2023",
    title: "Business & Data Analytics Intern",
    location: "Dhaka, Bangladesh",
    summary: "Created dashboards and reports to drive data-informed marketing strategies.",
    bullets: [
      "Analyzed client experience datasets using Python, Excel (VBA), Power BI, and Tableau to uncover engagement trends and service gaps, informing data-driven marketing strategies.",
      "Created interactive dashboards and reports to visualize insights and guide evidence-based decisions, improving client retention and overall campaign performance."
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
