/**
 * All portfolio content lives here — edit this file to update the site.
 */
const repo = "https://github.com/QuangMinhV/Thomas-s_portfolio/tree/main";

export const profile = {
  name: "Thomas Vu",
  roles: ["Data Analyst", "Power BI · SQL · Excel"],
  tagline:
    "I turn raw business data into clean models, clear Power BI dashboards and recommendations managers can act on.",
  email: "otbibi@gmail.com",
  location: "Perth, WA, Australia",
  /** Hero photo; replace with /thomas.jpg once the real photo is added to /public */
  photo: "/profile-placeholder.svg",
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
  /** Filter group shown on the image badge */
  stack: "Power BI" | "SQL" | "SQL + Power BI";
  kind: "Personal" | "Academic";
  date: string;
  image: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Payroll Remediation Analytics",
    desc: "Three-layer SQL Server warehouse and Power BI star schema over 45,607 timesheet rows; found $35.1K owed to 14 of 100 employees.",
    tools: ["SQL Server", "Power BI", "DAX", "Star Schema"],
    stack: "SQL + Power BI",
    kind: "Personal",
    date: "10/2026",
    image: "/projects/payroll.jpg",
    href: `${repo}/payroll_project`,
  },
  {
    title: "RFM Customer Segmentation",
    desc: "Scored customers from 51,290 order lines with CTEs and window functions; At Risk was the largest segment at $2.2M in sales.",
    tools: ["SQL Server", "T-SQL", "Window Functions"],
    stack: "SQL",
    kind: "Personal",
    date: "10/2026",
    image: "/projects/rfm.svg",
    href: `${repo}/RFM%20Project`,
  },
  {
    title: "Pizza Sales Analysis",
    desc: "48,620 order lines from 2015: peak hours, holiday spikes, best and worst pizzas, ingredient usage and an 18-check data validation log.",
    tools: ["Power BI", "Power Query", "DAX", "Field Parameters"],
    stack: "Power BI",
    kind: "Personal",
    date: "09/2026",
    image: "/projects/pizza.jpg",
    href: `${repo}/pizza-sales`,
  },
  {
    title: "Hospital ER Analysis",
    desc: "9,216 emergency visits; found 59% of patients missed the 30-minute wait target at every hour of the day.",
    tools: ["Power BI", "Power Query", "DAX"],
    stack: "Power BI",
    kind: "Personal",
    date: "09/2026",
    image: "/projects/hospital.jpg",
    href: `${repo}/hospital-er`,
  },
  {
    title: "Coffee Sales Analysis",
    desc: "~149K transactions reshaped into a star schema; 7–10 AM held 46% of revenue, so staff should shift to mornings.",
    tools: ["Power BI", "DAX", "Star Schema"],
    stack: "Power BI",
    kind: "Personal",
    date: "09/2026",
    image: "/projects/coffee.jpg",
    href: `${repo}/coffee-sales`,
  },
  {
    title: "Curtin Law School Feeder Schools",
    desc: "Integrated 12,000+ enrolment records into a Power BI report with 15+ DAX measures to find underrepresented schools for outreach.",
    tools: ["Power BI", "Excel", "Power Query"],
    stack: "Power BI",
    kind: "Academic",
    date: "11/2025",
    image: "/projects/curtin.svg",
  },
];

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
