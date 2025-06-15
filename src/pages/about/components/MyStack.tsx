import {
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiExpress,
    SiPostgresql,
    SiGit,
    SiGithub,
    SiFigma,
    SiNodedotjs,
    SiNextdotjs,
    SiTestinglibrary,
    SiVitest,
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiReactquery,
    SiNpm,
    SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const MyStack = () => {
    return (
        <div className="h-[667px] max-1300:h-fit overflow-y-auto custom-scrollbar px-[40px] text-slate400 text-[18px] font-[450] pt-[12px] pb-[100px] leading-[32px]">
            <p className="mb-[10px]"><span className="mr-[40px]">1</span>  /**</p>
            <p className="mb-[10px]"><span className="mr-[40px]">2</span>   * My Tech Stack</p>
            <p className="mb-[10px]"><span className="mr-[40px]">3</span>   * Here's a categorized list of tools & technologies I work with:</p>
            <p className="mb-[10px]"><span className="mr-[40px]">4</span>  */</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-6 mt-[20px]">

                {/* ==== FRONTEND ==== */}
                <h3 className="col-span-full text-[16px] text-[#F8FAFC] mt-4 mb-1">Frontend</h3>

                <div className="flex items-center gap-3"><SiHtml5 className="text-[#E34F26] text-[20px]" /><p>HTML5</p></div>
                <div className="flex items-center gap-3"><SiCss3 className="text-[#1572B6] text-[20px]" /><p>CSS3</p></div>
                <div className="flex items-center gap-3"><SiJavascript className="text-[#F7DF1E] text-[20px]" /><p>JavaScript</p></div>
                <div className="flex items-center gap-3"><SiReact className="text-cyan-400 text-[20px]" /><p>React</p></div>
                <div className="flex items-center gap-3"><SiTailwindcss className="text-sky-400 text-[20px]" /><p>Tailwind CSS</p></div>

                <div className="flex items-center gap-3"><SiNextdotjs className="text-[20px]" /><p>Next.js</p></div>
                <div className="flex items-center gap-3"><SiTypescript className="text-blue-500 text-[20px]" /><p>TypeScript</p></div>

                <div className="flex items-center gap-3"><SiReactquery className="text-[#FF4154] text-[20px]" /><p>React Query</p></div>

                {/* ==== BACKEND ==== */}
                <h3 className="col-span-full text-[16px]  text-[#F8FAFC] mt-4 mb-1">Backend</h3>
                <div className="flex items-center gap-3"><SiNodedotjs className="text-green-600 text-[20px]" /><p>Node.js</p></div>
                <div className="flex items-center gap-3"><SiExpress className="text-gray-300 text-[20px]" /><p>Express</p></div>
                <div className="flex items-center gap-3"><SiPostgresql className="text-blue-400 text-[20px]" /><p>PostgreSQL</p></div>

                {/* ==== TESTING ==== */}
                <h3 className="col-span-full text-[16px]  text-[#F8FAFC] mt-4 mb-1">Testing</h3>
                <div className="flex items-center gap-3"><SiVitest className="text-[#6E9F18] text-[20px]" /><p>Vitest</p></div>
                <div className="flex items-center gap-3"><SiTestinglibrary className="text-[#E33332] text-[20px]" /><p>Testing Library</p></div>

                {/* ==== TOOLS ==== */}
                <h3 className="col-span-full text-[16px]  text-[#F8FAFC] mt-4 mb-1">Tools</h3>
                <div className="flex items-center gap-3"><SiGit className="text-[#F05032] text-[20px]" /><p>Git</p></div>
                <div className="flex items-center gap-3"><SiGithub className="text-white text-[20px]" /><p>GitHub</p></div>
                <div className="flex items-center gap-3"><SiNpm className="text-[#CB3837] text-[20px]" /><p>NPM</p></div>
                <div className="flex items-center gap-3"><SiVite className="text-[#646CFF] text-[20px]" /><p>Vite</p></div>
                <div className="flex items-center gap-3"><VscVscode className="text-[#007ACC] text-[20px]" /><p>VS Code</p></div>

                {/* ==== DESIGN ==== */}
                <h3 className="col-span-full text-[16px] text-[#F8FAFC] mt-4 mb-1">Design</h3>
                <div className="flex items-center gap-3"><SiFigma className="text-pink-400 text-[20px]" /><p>Figma</p></div>
            </div>
        </div>
    );
};

export default MyStack;
