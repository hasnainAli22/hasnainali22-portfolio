import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "Python",
        level: SkillLevel.Expert,
        icon: "/skills/python.png",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/typescript.svg",
      },
      // {
      //   title: "Dart",
      //   level: SkillLevel.Expert,
      //   icon: "/skills/dart.svg",
      // },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },
      {
        title: "SASS",
        level: SkillLevel.Intermediate,
        icon: "/skills/sass.svg",
      },
      {
        title: "Redux Toolkit",
        level: SkillLevel.Expert,
        icon: "/skills/redux.svg",
      },
    ],
  },
  {
    title: "Full Stack Development",
    items: [
      {
        title: "Python",
        level: SkillLevel.Expert,
        icon: "/skills/python.png",
      },
      {
        title: "Django",
        level: SkillLevel.Expert,
        icon: "/skills/django.png", // Assuming Django icon
      },
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "RestAPI",
        level: SkillLevel.Intermediate,
        icon: "/skills/rest.png",
      },
    ],
  },
  {
    title: "Artificial Intelligence",
    items: [
      {
        title: "Deep Learning",
        level: SkillLevel.Expert,
        icon: "/skills/deep-learning.png", // Add appropriate icon for Deep Learning
      },
      {
        title: "Machine Learning",
        level: SkillLevel.Expert,
        icon: "/skills/machine-learning.png", // Add appropriate icon for Machine Learning
      },
      {
        title: "Computer Vision",
        level: SkillLevel.Expert,
        icon: "/skills/computer-vision.png", // Add appropriate icon for Computer Vision
      },
      {
        title: "Pytorch",
        level: SkillLevel.Expert,
        icon: "/skills/pytorch.svg", // Add appropriate icon for Generative AI
      },
      {
        title: "Natural Language Processing",
        level: SkillLevel.Intermediate,
        icon: "/skills/nlp-skill.png", // Add appropriate icon for NLP
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      // {
      //   title: "MongoDB",
      //   level: SkillLevel.Intermediate,
      //   icon: "/skills/mongodb.svg",
      // },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Begginer,
        icon: "/skills/mysql.svg",
      },
    ],
  },
  {
    title: "DevOps/VCS",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Begginer,
        icon: "/skills/docker.png",
      },
      // {
      //   title: "AWS",
      //   level: SkillLevel.Intermediate,
      //   icon: "/skills/aws.svg",
      // },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.png",
      },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        title: "Figma",
        level: SkillLevel.Intermediate,
        icon: "/skills/figma.png",
      },
      {
        title: "Ubuntu",
        level: SkillLevel.Intermediate,
        icon: "/skills/ubuntu.png",
      },
    ],
  },
  {
    title: "Non-technical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;
