// import { useState } from "react";
// import { FiCheck } from "react-icons/fi";
// import {
//     SiReact,
//     SiHtml5,
//     SiNextdotjs,
// } from "react-icons/si";

// type Tech = {
//     id: string;
//     label: string;
//     Icon: React.ElementType;
// };

// const techList: Tech[] = [
//     { id: "react", label: "React", Icon: SiReact },
//     { id: "nextjs", label: "Next.js", Icon: SiNextdotjs },
//     {
//         id: "htmlcss", label: "HTML/CSS", Icon: () => (
//             <div className="flex items-center gap-[2px]">
//                 <SiHtml5 className="text-[#62748E] w-[20px] h-[20px]" />
//             </div>
//         )
//     },
// ];

// const ProjectsSidebar = () => {
//     const [selected, setSelected] = useState<string[]>(["react"]);

//     const toggleCheckbox = (id: string) => {
//         setSelected((prev) =>
//             prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//         );
//     };

//     return (
//         <div className="font-[450]  text-slate400 bg-slate-900 w-[318.9px] max-900:w-full border-r bg-slate900 border-slate ">
//             <div className="flex gap-[12px] mb-[12px] pl-[24px] pr-[72px] whitespace-nowrap border-b border-slate py-[12px]">
//                 <img src="/images/ad.svg" alt="Profile" />
//                 <h1 className="text-slate50 text-[16px]">projects</h1>
//             </div>

//             <div className="py-[12px] pl-[24px] pr-[29px] space-y-4">
//                 {techList.map(({ id, label, Icon }) => {
//                     const isChecked = selected.includes(id);

//                     return (
//                         <label
//                             key={id}
//                             className="flex items-center gap-[26px] cursor-pointer select-none"
//                             onClick={() => toggleCheckbox(id)}
//                         >
//                             <div
//                                 className={`
//                   w-[20px] h-[20px] rounded-[2px] flex  items-center justify-center border
//                   transition-all duration-200
//                   ${isChecked ? "bg-[#62748E] border-[#62748E]" : "border-[#62748E] bg-transparent hover:bg-[#2b2f3b]"}
//                 `}
//                             >
//                                 {isChecked && <FiCheck size={12} className="text-white" />}
//                             </div>

//                             <Icon className="text-[#62748E] w-[20px] h-[20px]" />
//                             <span className="text-[16px] -ml-[12px] text-white">{label}</span>
//                         </label>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default ProjectsSidebar;
