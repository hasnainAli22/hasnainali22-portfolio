import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "fullstack-ecom",
    title: "AI-Powered E-commerce with Django & Next.js",
    description:
      "An AI-powered e-commerce platform built with Django and Next.js. Features include advanced image search capabilities.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/hasnainAli22/fullstack-ecom",
    // url: "https://www.nixlab.co.in/projects/com.nixlab.rippl",
    url: "https://github.com/hasnainAli22/fullstack-ecom",
    tags: ["Django Rest Framework", "Next.JS","Redux Toolkit", "PostgreSQL", "Artificial Intelligence"],
    // sceenshots: ["/screenshots/rippl.png"],
  },
  {
    id: "gym-management-system",
    title: "Gym Management System",
    description:
      "A comprehensive gym management system built with Django for tracking memberships, schedules, and workouts.",
    icon: "/skills/django.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/hasnainAli22/gms",
    url: "https://github.com/hasnainAli22/gms",
    tags: ["Django", "Bootstrap5", "SQLite", "Stripe"],
  },
  {
    id: "image-upscalling-app",
    title: "PyTorch Image Upscaler: Flask-based Project",
    description:
      "A PyTorch-based image upscaling project implemented with Flask, enhancing image quality through deep learning algorithms.",
    icon: "/skills/pytorch.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/hasnainAli22/gansapp",
    url: "https://github.com/hasnainAli22/gansapp",
    tags: ["Pytorch", "SQLite", "Pytorch", "Deep Learning"],
  },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
