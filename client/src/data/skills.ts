import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Python" },
      { name: "Flask" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Database",
    items: [{ name: "MongoDB" }, { name: "PostgreSQL" }],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "GitHub" },
      { name: "Postman" },
      { name: "Cloudinary" },
      { name: "Stripe API" },
      { name: "OpenAI API" },
      { name: "VS Code" },
    ],
  },
  {
    title: "Concepts",
    items: [
      { name: "JWT Authentication" },
      { name: "Role-Based Access" },
      { name: "SaaS Architecture" },
      { name: "API Integration" },
      { name: "Full Stack Development" },
    ],
  },
];
