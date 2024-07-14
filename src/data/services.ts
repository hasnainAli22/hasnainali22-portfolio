import { IServiceItem } from "@/types";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const services: IServiceItem[] = [
  {
    id: 1,
    title: "Full Stack Development",
    icons: [
      `/skills/react.svg`,
      `/skills/nextjs.png`,
      `/skills/django-logo-negative.png`,
      `/skills/redux.svg`,
      `/skills/typescript.svg`,
    ],
    shortDescription: "I build dynamic and responsive web applications.",
    description:
      "I develop comprehensive web applications using Django and Next.js, integrating frontend and backend systems for seamless performance. From RESTful APIs to state management with Redux, I provide custom solutions tailored to your needs.",
  },
  {
    id: 2,
    title: "Backend Development",
    icons: [
      "/skills/python.svg",
      "/skills/django-logo-negative.png",
      "/skills/graphql.svg",
      "/skills/docker.svg",
      "/skills/aws.svg",
    ],
    shortDescription: "I create robust and scalable backend infrastructures.",
    description:
      "I enhance digital applications with robust, scalable backend infrastructures. I develop efficient database structures, APIs, and configure servers for optimal performance, security, and scalability, ensuring your applications handle high traffic and complex data management seamlessly.",
  },
  {
    id: 3,
    title: "Frontend Development",
    icons: [
      "/skills/react.svg",
      "/skills/nextjs.png",
      "/skills/html.svg",
      "/skills/css.svg",
      "/skills/redux.svg",
    ],
    shortDescription: "I build visually stunning and user-friendly interfaces.",
    description:
      "I deliver stunning, user-friendly interfaces using React and Next.js. From responsive designs to complex state management with Redux, I ensure a seamless and engaging user experience across all devices.",
  },
  {
    id: 4,
    title: "Artificial Intelligence Solutions",
    icons: [
      "/skills/python.svg",
      "/skills/tensorflow.svg",
      "/skills/pytorch.svg",
      "/skills/opencv.svg",
      "/skills/nlp.svg",
    ],
    shortDescription: "I develop AI and machine learning models.",
    description:
      "I create and integrate AI and machine learning models into web applications. Specializing in natural language processing and computer vision, I provide predictive analytics and data-driven solutions to enhance your business operations.",
  },
  {
    id: 5,
    title: "API Development and Integration",
    icons: [
      "/skills/rest.svg",
      "/skills/graphql.svg",
      "/skills/postman.svg",
      "/skills/swagger.svg",
      "/skills/docker.svg",
    ],
    shortDescription: "I create and integrate custom APIs.",
    description:
      "I develop custom APIs for various services and integrate third-party APIs into existing systems. I ensure secure, efficient data exchange and provide thorough documentation for seamless integration.",
  },
  {
    id: 6,
    title: "DevOps and Deployment",
    icons: [
      "/skills/docker.svg",
      "/skills/kubernetes.svg",
      "/skills/aws.svg",
      "/skills/jenkins.svg",
      "/skills/terraform.svg",
    ],
    shortDescription: "I streamline development and operations processes.",
    description:
      "I streamline development and operations processes through effective DevOps practices. I implement continuous integration and deployment pipelines, manage cloud infrastructure, and use containerization to ensure efficient, reliable, and scalable software delivery.",
  },
];



export default services;
