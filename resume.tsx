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
    "Vocational high school student passionate about web programming and creative world, including photography and digital media. Skilled in front-end development with hands-on experience building web applications and creating visual content. Motivated to grow by gaining real-world experience in a professional environment.",
  avatarUrl: "/abdoelz.png",
  code: [
    "React",
    "Javascript",
    "Typescript",
    "PHP",
    "Node.js",
    "Laravel",
    "MySQL",
    "Tailwind.css",
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
      title: "SMK TI BAZMA",
      href: "https://smktibazma-v2.vercel.app/",
      dates: "Oct 2024 ",
      active: true,
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
    {
      title: "SISMAKO",
      href: "https://github.com/Mufiz17/SISMAKO",
      dates: "July 2024",
      active: true,
      description:
        "Developed a correspondence system for a Laravel-based internal communication platform developed in collaboration with fellow students. Enabled structured message exchange between staff and students with role-based access and message tracking.",
      technologies: [
        "Laravel 11",
        "Bootstrap",
        "MySQL",
        "Javascript"
      ],
      links: [
        {
          type: "Get in Touch",
          href: "https://github.com/Mufiz17/SISMAKO",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project3.png",
    },
     {
      title: "Xinna",
      href: "https://github.com/abdoelzgit/Xinna",
      dates: "January 2026",
      active: true,
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
