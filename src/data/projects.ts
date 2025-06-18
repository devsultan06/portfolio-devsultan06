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
        title: "Project 1",
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
        slug: "damien",
        description: "A bold, modern photography portfolio website designed for Damien Braun, showcasing his stunning photographic work across various categories like fashion, product, commercial, and wedding photography. The site features a sleek dark theme, a high-contrast layout, and a modular image grid that emphasizes visual storytelling.",
        image: "/images/pro2.png",
        tech: {
            id: "react",
            icon: SiNextdotjs,
        },
    },
    {
        title: "Project 3",
        slug: "splitwise",
        description: " Split- The - Cost is a web application that helps users track and divide shared expenses easily(e.g., for roommates, trips, or group outings).The app enables users to log expenses, specify participants, and calculate who owes what in a user - friendly way.",
        image: "/images/pro3.png",
        tech: {
            id: "react",
            icon: SiReact,
        },

    },

    {
        title: "Project 4",
        slug: "conova",
        description: " Conova is a smart workspace booking platform built for teams and organizations to manage physical spaces like offices, meeting rooms, or learning hubs.",
        tech: {
            id: "react",
            icon: SiReact
        },
        image: "/images/con2.png"
    },
    {
        title: "Project 5",
        slug: "blog",
        description: "FutureTech - A modern tech blog delivering the latest news, insights, and trends in the industry. Built with Next.js and Supabase for seamless content management. 🚀",
        image: "/images/pro4.png",
        tech: {
            id: "nextjs",
            icon: SiNextdotjs,
        },
    },

    {
        title: "Project 6",
        slug: "openhealth",
        description: "OpenHealth is “The first AI-driven preventive health platform built specifically for young Africans.” We are making healthcare a continuous, interactive experience rather than an emergency solution.",
        image: "/images/open.png",
        tech: {
            id: "react",
            icon: SiReact,
        },
    },

    {
        title: "Project 7",
        slug: "getlinked",
        description: "A futuristic, visually engaging landing page for getlinked Tech Hackathon 1.0, designed to ignite excitement and participation in a groundbreaking HR innovation challenge.",
        image: "/images/pro5.png",
        tech: {
            id: "react",
            icon: SiReact,
        },
    },

    // {
    //     title: "Project 6",
    //     slug: "jurismart",
    //     description: "JurisSmart is an AI web application designed to assist users in navigating complex legal matters, with a special emphasis on Intellectual Property law. The app retrieves relevant information from legal documents and trusted sources across Nigeria, the USA and the UK and provides citation-backed answers, ensuring user receive authoritative responses",
    //     image: "/images/pro5.png",
    //     tech: {
    //         id: "react",
    //         icon: SiReact,
    //     },
    // },

    {
        title: "Project 8",
        slug: "qr-code-generator",
        description: "A clean, confetti-themed web application that allows users to generate QR codes for any URL in seconds. With a simple and interactive UI, users can input a link, click a vibrant Generate QR Code button, and instantly receive a downloadable and copyable QR code. The tool is completely free, requires no sign-up, and offers a fun, user-friendly experience with celebratory animations that enhance user engagement",
        tech: {
            id: "react",
            icon: SiReact,
        },
        image: "/images/pro6.png",
    },

    {
        title: "Project 8",
        slug: "sporta-ai",
        description: "Sporta AI is an innovative sports- tech company leveraging artificial intelligence to revolutionize performance analytics for athletes, coaches, and teams",
        tech: {
            id: "react",
            icon: SiReact,
        },
        image: "/images/pro7.png",
    },

    {
        title: "Project 9",
        slug: "customer-table",
        description: "A customer management dashboard built to handle customer records efficiently. ",
        tech: {
            id: "react",
            icon: SiReact,
        },
        image: "/images/pro8.png",
    },

    {
        title: "Project 10",
        slug: "organic-mind",
        description: "Organic Mind is customized for individuals seeking a stress-free way to stay focused on their goals, projects, and tasks.",
        tech: {
            id: "react",
            icon: SiReact,
        },
        image: "/images/pro10.png",
    },

    {
        title: "Project 11",
        slug: "pokemon",
        description: "A comprehensive Pokémon dict., featuring all the species from across the various regions.",
        tech: {
            id: "react",
            icon: SiReact,
        },
        image: "/images/pro9.png",
    },

    {
        title: "Project 12",
        slug: "narc-alert",
        description: "Narc alert is a platform to supporting survivor of narcissistic abuse and fostering a community of strength, healing, and empowerment",
        tech: {
            id: "htmlcss",
            icon:
                SiHtml5
        },
        image: "/images/narc.png",
    },

    {
        title: "Project 13",
        slug: "food-app",
        description: "Food app is a mobile or web application designed to help users with various aspects related to food. It's only available on mobile for now",
        tech: {
            id: "htmlcss",
            icon:
                SiHtml5
        },
        image: "/images/food.png",
    },

    {
        title: "Project 14",
        slug: "cgpa-calculator",
        description: "This app is a CGPA (Cumulative Grade Point Average) Calculator designed to help students calculate their CGPA based on their course grades and credit units. The app provides a user-friendly interface where students can input their course details, including the course name, credit units, and scores. The app then calculates the CGPA.",
        tech: {
            id: "htmlcss",
            icon:
                SiHtml5
        },
        image: "/images/cg.png",
    },
];
