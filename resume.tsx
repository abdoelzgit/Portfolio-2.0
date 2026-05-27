import { Icons } from "@/components/icons";
import { url } from "inspector";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abdoelz",
  initials: "AB",
  url: "https://dillion.io",
  location: "Bogor, ID",
  locationLink: "https://www.google.com/maps/place/ciampea",
  description:
    "Front-end Dev, Graphic Designer. I love building visual experiences and creating compelling designs.",
  summary:
    "Fresh graduate with experience in web development and visual design, passionate about AI and Large Language Model (LLM) technologies, particularly in interactive and visually driven digital experiences. Skilled in building modern web applications and interactive digital products that combine AI, web technology, and visual storytelling.",
  avatarUrl: "/abdoelz.png",
  code: [
    "React",
    "Javascript",
    "Typescript",
    "PHP",
    "Node.js",
    "Next.js",
    "Laravel",
    "MySQL",
    "PostgreSQL",
    "Figma",
    "Next.js",
    "Photoshop",
    "Illustrator",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "abdoelzmail@gmail.com",
    tel: "+6281227431167",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Abdul-liebert",
        icon: Icons.github,

        navbar: true,
      },
      Credit: {
        url: "https://dillion.io/",
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      whatsapp: {
        name: "Contact Me",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.phone,

        navbar: true,
      },
      
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/abdoelz._/",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Mention",
      href: "/",
      badges: [],
      location: "Bogor, Indonesia",
      title: "Creative Director",
      logoUrl: "/mention.png",
      start: "Oct 2024",
      end: "Feb 2026",
      description:
        "As a core member of the Media Team at SMK TI BAZMA, I led the production of digital content and visual assets that supported the school’s branding and communication efforts. I developed visual concepts, directed multimedia and photography projects, and ensured brand consistency across all platforms. I also played a key role in preparing media and design materials for school events, working closely with the team to bring ideas in a creative and impactful way.",
    },
    {
      company: "PT. Pertamina Geothermal Energy Tbk.",
      href: "https://www.pge.pertamina.com/id",
      badges: [],
      location: "Jakarta, Indonesia",
      title: "Internship",
      logoUrl: "/pge-logo.png",
      start: "Aug 2025",
      end: "Apr 2026",
      description:
        "As an IT intern at PT Pertamina Geothermal Energy Tbk, I worked on developing an internal application to help the team work more efficiently. I was involved in the whole process, from brainstorming ideas and designing the system to coding and testing. This experience became an important step in my journey as a software developer.",
    },

  ],
  education: [
    {
      school: "SMK TI BAZMA",
      href: "https://www.smktibazma.sch.id",
      degree: "Vocational Highschool",
      logoUrl: "/smk.png",
      start: "2022",
      end: "now",
    },
  ],
  projects: [
    {
      title: "Cyberdome",
      href: "#",
      dates: "Apr 2026",
      active: true,
      role: "Fullstack Engineer",
      projectType: "Internship Project",
      challenge: "Streaming large-scale cyber threat detection data from Wazuh SIEM into a visual dashboard in real-time with low latency.",
      solution: "Building a streaming pipeline based on WebSocket/SSE using Express.js, presenting interactive cyber threat map visualizations in Next.js, and storing logs in PostgreSQL.",
      impact: "Enabling security teams to monitor and respond to cyber attacks instantly through dynamic threat visualizations.",
      description:
        "Built a real-time Cyber Threat Map dashboard to visualize live cyber attacks by integrating Wazuh SIEM endpoints through a low-latency streaming pipeline using WebSocket/SSE, and designed an admin panel to manage APIs and endpoints dynamically.",
      technologies: [
        "Next.js",
        "Express.js",
        "Tailwindcss",
        "Socket.IO",
        "Wazuh",
        "PostgreSQL"
      ],
      links: [
        {
          type: "Get in Touch",
          href: "https://github.com/abdoelzgit/Xinna",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project5.png",
    },
    {
      title: "Xinna",
      href: "https://github.com/abdoelzgit/Xinna",
      dates: "Feb 2026",
      active: true,
      role: "Fullstack Developer",
      projectType: "Personal Project",
      challenge: "Providing instant AI-based symptom consultation services that seamlessly integrate with modern medicine inventory management.",
      solution: "Building an inventory system based on Next.js & Prisma, integrating the Google Gemini API, and enhancing the visual design with Framer Motion & GSAP.",
      impact: "The application successfully automates pharmacy inventory while providing a smart health assistant in real-time.",
      description:
        "Xinna is a cutting-edge Health-Tech application built using Next.js & Prisma. More than just a pharmacy inventory management system, it features an AI Health Agent (Google Gemini) for real-time symptom consultation. Designed with a premium aesthetic using Framer Motion and GSAP, Xinna offers a seamless and high-performance user experience.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "Shadcn UI",
        "Framer Motion",
        "Magic UI"
      ],
      links: [
        {
          type: "Get in Touch",
          href: "https://github.com/abdoelzgit/Xinna",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project4.png",
    },
    {
      title: "SMK TI BAZMA",
      href: "https://smktibazma-v2.vercel.app/",
      dates: "Oct 2024 ",
      active: true,
      role: "Frontend Developer",
      projectType: "School Project",
      challenge: "Designing an informative and dynamic portal with high performance to be easily accessible by prospective students and industry partners.",
      solution: "Using Next.js for fast loading performance, TailwindCSS for a modern visual style, and Next UI & Magic UI for interactive animations.",
      impact: "Enhancing the school's branding quality and facilitating efficient access to information about key programs.",
      description:
        "SMK TI BAZMA s profile website, built with Next.js, showcases the school s programs, achievements, and facilities in a modern and responsive design.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Magic UI",
        "Next UI",
        "React",
      ],
      links: [
        {
          type: "Get in Touch",
          href: "https://smktibazma.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project.png",
    },
    {
      title: "Stemify",
      href: "https://www.figma.com/design/B8mJg6ercv83dlJ9Z1mGx7/Stemify---E-learning-Mobile-Apps?node-id=2002-10&t=stkHJZoVhor3wh6N-1",
      dates: "Aug 2024",
      active: true,
      role: "UI/UX Designer",
      projectType: "Competition",
      challenge: "Designing a user-friendly, interactive, and structured STEM mobile e-learning interface to motivate science and technology learning.",
      solution: "Designing an intuitive User Journey in Figma with a modern-themed visual style, supporting illustrations, and a grid navigation system.",
      impact: "Producing an application prototype with a high UX score that is ready for further development.",
      description:
        "An E-learning app design created using Figma, focusing on intuitive navigation, a clean layout,  engaging visuals to enhance the learning experience in STEM education.",
      technologies: ["Figma", "Illustrator"],
      links: [
        {
          type: "Get in Touch",
          href: "https://www.figma.com/design/B8mJg6ercv83dlJ9Z1mGx7/Stemify---E-learning-Mobile-Apps?node-id=2002-10&t=stkHJZoVhor3wh6N-1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project2.png",
    },
    // {
    //   title: "SISMAKO",
    //   href: "https://github.com/Mufiz17/SISMAKO",
    //   dates: "Jul 2024",
    //   active: true,
    //   description:
    //     "Developed a correspondence system for a Laravel-based internal communication platform developed in collaboration with fellow students. Enabled structured message exchange between staff and students with role-based access and message tracking.",
    //   technologies: [
    //     "Laravel 11",
    //     "Bootstrap",
    //     "MySQL",
    //     "Javascript"
    //   ],
    //   links: [
    //     {
    //       type: "Get in Touch",
    //       href: "https://github.com/Mufiz17/SISMAKO",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "/project3.png",
    // },
  ],
  portfolio: [
    {
      title: "Social Media Works",
      href: "/socialmedia.pdf",
      dates: "Jan 2025",
      active: true,
      description:
        "I've experienced in managing and creating content for Instagram. Skilled in content planning, copywriting, and visual design to boost engagement and strengthen brand identity.",
      technologies: [
        "Canva",
        "ChatGPT",
        "Spreadsheet",
        "Illustrator",
        "Photoshop",
        
      ],
      links: [
        {
          type: "Preview",
          href: "/socialmedia.pdf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/thumbnail.png",
    },
  ],

} as const;
