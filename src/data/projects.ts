// data/projects.ts
import {
    SiReact,
    SiNextdotjs,
    SiHtml5,
} from "react-icons/si";

export type Project = {
    title: string;
    slug: string;
    description: string;
    image: string;
    tech: {
        id: string;
        icon: React.ElementType;
    };
};

export const projects: Project[] = [
    {
        title: "StreamVibe",
        slug: "streamvibe",
        description: "StreamVibe is a subscription-based streaming service built with ReactJS and Tailwind which provides thousands of internet-connected devices with access to an extensive selection of highly acclaimed TV series, films, anime, documentaries, and more.",
        image: "/images/pro1.png",
        tech: {
            id: "react",
            icon: SiReact,
        },
    },
    {
        title: "Project 2",
        slug: "tetris-game",
        description: "Duis aute irure dolor in velit esse cillum dolore.",
        image: "/images/pro2.png",
        tech: {
            id: "react",
            icon: SiReact,
        },
    },
    {
        title: "Project 3",
        slug: "html-css-clone",
        description: "A static site clone using only HTML and CSS.",
        image: "/images/pro3.png",
        tech: {
            id: "htmlcss",
            icon:
                SiHtml5


        },
    },
    {
        title: "Project 4",
        slug: "nextjs-landing",
        description: "Landing page built with Next.js and Tailwind.",
        image: "/images/pro4.png",
        tech: {
            id: "nextjs",
            icon: SiNextdotjs,
        },
    },
];
