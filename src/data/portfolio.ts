import generatedProjects from "./projects.generated.json";

/**
 * All portfolio content lives here — edit this file to update the site.
 */
export const profile = {
  name: "Thomas Vu",
  roles: ["Data Analyst", "Power BI · SQL · Excel"],
  tagline:
    "I turn raw business data into clean models, clear Power BI dashboards and recommendations managers can act on.",
  email: "otbibi@gmail.com",
  location: "Perth, WA, Australia",
  /** Hero slideshow photos in /public/photos (all 3:4 so none are cropped) */
  photos: [
    { src: "/photos/thomas-poster.jpg", alt: "Thomas presenting the Curtin Law School data poster" },
    { src: "/photos/thomas-graduation.jpg", alt: "Thomas at his Curtin University graduation" },
    { src: "/photos/thomas-graduation-lawn.jpg", alt: "Thomas in his graduation gown on the Curtin lawn" },
  ],
  resumeUrl: "https://drive.google.com/uc?export=download&id=1iXi4VcUD_iKJsvdW8XV-JE3c-oyhl9_e",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/thomas-minh-vu" },
    { label: "GitHub", href: "https://github.com/QuangMinhV/Thomas-s_portfolio" },
  ],
};

export const about = [
  "I'm a Data Analyst in Perth with a Master of Commerce (Information Systems) from Curtin University. I clean and model data in Power Query and SQL Server, build Power BI reports with DAX, and finish every project with specific recommendations rather than just charts.",
  "Before analytics I worked in logistics sales, customs declarations and data entry in Hai Phong, Vietnam. Those roles taught me to check every figure against its source document and to report clearly to managers, habits I bring to every dataset.",
  "I'm looking for an entry-level or graduate Data Analyst role in Perth.",
];

// 149,116 coffee + 51,290 RFM + 48,620 pizza + 45,607 payroll + 12,000 Curtin + 9,216 hospital = 315,849
export const stats = [
  { value: "315K+", label: "Rows of data cleaned and analysed" },
  { value: "$35.1K", label: "Underpaid wages uncovered in one audit" },
  { value: "MCom", label: "Information Systems, Curtin" },
];

export type Project = {
  title: string;
  desc: string;
  tools: string[];
  /** Badge on the image; also drives the filter buttons */
  categories: string[];
  kind: "Personal" | "Academic" | string;
  date: string;
  image: string;
  href?: string;
};

/**
 * Projects come from the Thomas-s_portfolio GitHub repo: every folder with a project.json
 * is fetched at build time by scripts/fetch-projects.mjs. Projects that are not on GitHub
 * are listed here.
 */
const localProjects: Project[] = [
  {
    title: "Curtin Law School Feeder Schools",
    desc: "Integrated 12,000+ enrolment records into a Power BI report with 15+ DAX measures to find underrepresented schools for outreach.",
    tools: ["Power BI", "Excel", "Power Query"],
    categories: ["Power BI"],
    kind: "Academic",
    date: "11/2025",
    image: "/projects/curtin.jpg",
  },
];

const sortKey = (date: string) => {
  const [m, y] = date.split("/").map(Number);
  return (y || 0) * 100 + (m || 0);
};

export const projects: Project[] = [...(generatedProjects as Project[]), ...localProjects].sort(
  (a, b) => sortKey(b.date) - sortKey(a.date),
);

export type SkillLevel = "Proficient" | "Working" | "Basic";

export const skills: { name: string; icon: string; level: SkillLevel; detail: string }[] = [
  { name: "Power BI", icon: "BarChart3", level: "Proficient", detail: "Dashboards, field parameters, drill-through" },
  { name: "DAX", icon: "Sigma", level: "Proficient", detail: "CALCULATE, time intelligence, RANKX" },
  { name: "Power Query", icon: "Filter", level: "Proficient", detail: "Cleaning, reshaping, surrogate keys" },
  { name: "SQL Server", icon: "Database", level: "Proficient", detail: "CTEs, window functions, views, JOINs" },
  { name: "Excel", icon: "Sheet", level: "Proficient", detail: "Trackers, reports, data validation" },
  { name: "Data Modelling", icon: "Network", level: "Proficient", detail: "Star schema, date tables, warehouse layers" },
  { name: "Python", icon: "Code2", level: "Basic", detail: "Self-taught, pandas basics" },
  { name: "AI Assistants", icon: "Sparkles", level: "Working", detail: "Copilot and Claude for DAX and report checks" },
];

export const experience = [
  {
    role: "Team Member – Back of House (Casual)",
    company: "Roll'd Hospitality Group",
    location: "Perth, WA",
    period: "08/2024 — Present",
    points: ["Prepare and serve food in a fast-paced kitchen to food safety standards; train new team members on procedures and store standards."],
  },
  {
    role: "Logistics Sales Executive (Part-time)",
    company: "Duc Tho Trading JSC",
    location: "Hai Phong, Vietnam",
    period: "02/2022 — 04/2023",
    points: [
      "Tracked quotations and customer orders in Excel and prepared weekly sales reports for the sales manager.",
      "Analysed monthly sales volume and revenue by customer and service line to identify key accounts.",
    ],
  },
  {
    role: "Customs Declaration Intern",
    company: "Hai Ha Chemicals JSC",
    location: "Hai Phong, Vietnam",
    period: "03/2021 — 10/2021",
    points: [
      "Cross-checked customs declarations against contracts, invoices, packing lists and bills of lading.",
      "Kept an Excel tracker of clearance status and resolved document issues with forwarders.",
    ],
  },
  {
    role: "Data Entry Clerk (Part-time)",
    company: "Huybiz JSC",
    location: "Hai Phong, Vietnam",
    period: "02/2020 — 02/2021",
    points: ["Maintained customer, order and invoice records; found and corrected duplicates, missing values and inconsistencies."],
  },
];

export const education = [
  {
    degree: "Master of Commerce (Information Systems)",
    school: "Curtin University",
    location: "Perth, WA",
    period: "02/2024 — 02/2026",
    note: "Coursework: Business Analytics, Information Systems Analysis, Data Management",
  },
  {
    degree: "Bachelor of International Trade",
    school: "Vietnam Maritime University",
    location: "Hai Phong, Vietnam",
    period: "10/2019 — 08/2023",
  },
];
