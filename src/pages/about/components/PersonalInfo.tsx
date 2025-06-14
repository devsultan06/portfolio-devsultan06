import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const PersonalInfo = ({
    activeTab,
    onBarChange
}: {
    activeTab: string;
    onBarChange: (bar: string) => void;
}
) => {

    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(prev => (prev === section ? null : section));
    };

    const getArrowIcon = (section: string) =>
        openSection === section ? "/images/adl.svg" : "/images/ar.svg";
    return (
        <div className="font-[450]  text-slate400 ">
            <div>
                <div className="flex gap-[12px] mb-[12px] pl-[24px] pr-[72px] whitespace-nowrap border-b border-slate py-[12px]">
                    <img src="/images/ad.svg" alt="Profile" />
                    <h1 className="text-slate50 text-[16px] ">personal-info</h1>
                </div>

                <div className="border-b border-slate py-[12px] pl-[24px] pr-[29px] whitespace-nowrap">
                    <div className="mb-[12px]">
                        <div
                            className="bio flex gap-[12px] mb-[8px] cursor-pointer"
                            onClick={() => toggleSection("bio")}
                        >
                            <img
                                src={
                                    openSection === "bio"
                                        ? "/images/adl.svg"
                                        : "/images/ar.svg"
                                }
                                alt="Arrow"
                            />
                            <div className="flex gap-[8px] text-[16px]">
                                <img src="/images/bio.svg" alt="Bio" />
                                <p>bio</p>
                            </div>
                        </div>

                        <AnimatePresence initial={false}>
                            {openSection === "bio" && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden pl-[26px]"
                                >
                                    <div onClick={() => onBarChange("about-me")}
                                        className={`flex transition-all duration-400 cursor-pointer gap-[8px] text-[16px] mb-[8px] hover:text-slate50 ${activeTab === "about-me" ? "text-slate50" : ""}`}
                                    >                                        <img src="/images/mark.svg" alt="dot" />
                                        <p>about-me</p>
                                    </div>
                                    <div onClick={() => onBarChange("my-cv")} className={`flex transition-all duration-400 cursor-pointer gap-[8px] text-[16px] mb-[8px] hover:text-slate50 ${activeTab === "my-cv" ? "text-slate50" : ""}`}
                                    >
                                        <img src="/images/mark.svg" alt="dot" />
                                        <p>my-cv</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="mb-[12px]">
                        <div
                            className="flex gap-[12px] mb-[8px] cursor-pointer"
                            onClick={() => toggleSection("interests")}
                        >
                            <img src={getArrowIcon("interests")} alt="Arrow" />
                            <div className="flex gap-[8px]   text-[16px]">
                                <img src="/images/int.svg" alt="Interests" />
                                <p>interests</p>
                            </div>
                        </div>

                        <AnimatePresence initial={false}>
                            {openSection === "interests" && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden pl-[26px] space-y-[12px]"
                                >
                                    {/* Career Interests */}
                                    <div>
                                        <p className=" text-[16px] text-slate400 mb-[6px]">career</p>
                                        <div
                                            onClick={() => onBarChange("problem-solving")}
                                            className={`flex gap-[8px] text-[16px] cursor-pointer hover:text-slate50 mb-[4px] ${activeTab === "problem-solving" ? "text-slate50" : ""
                                                }`}
                                        >
                                            <img src="/images/mark.svg" alt="dot" />
                                            <p>problem-solving</p>
                                        </div>
                                        <div
                                            onClick={() => onBarChange("startups")}
                                            className={`flex gap-[8px] text-[16px] cursor-pointer hover:text-slate50 ${activeTab === "startups" ? "text-slate50" : ""
                                                }`}
                                        >
                                            <img src="/images/mark.svg" alt="dot" />
                                            <p>startups</p>
                                        </div>
                                    </div>

                                    {/* Creative Interests */}
                                    <div>
                                        <p className=" text-[16px] text-slate400 mb-[6px]">creative</p>
                                        <div
                                            onClick={() => onBarChange("content-writing")}
                                            className={`flex gap-[8px] text-[16px] cursor-pointer hover:text-slate50 mb-[4px] ${activeTab === "content-writing" ? "text-slate50" : ""
                                                }`}
                                        >
                                            <img src="/images/mark.svg" alt="dot" />
                                            <p>content-writing</p>
                                        </div>
                                        <div
                                            onClick={() => onBarChange("ui-refinement")}
                                            className={`flex gap-[8px] text-[16px] cursor-pointer hover:text-slate50 ${activeTab === "ui-refinement" ? "text-slate50" : ""
                                                }`}
                                        >
                                            <img src="/images/mark.svg" alt="dot" />
                                            <p>ui-refinement</p>
                                        </div>
                                    </div>

                                    {/* Personal Interests */}
                                    <div>
                                        <p className=" text-[16px] text-slate400 mb-[6px]">personal</p>
                                        <div
                                            onClick={() => onBarChange("self-improvement")}
                                            className={`flex gap-[8px] text-[16px] cursor-pointer hover:text-slate50 ${activeTab === "self-improvement" ? "text-slate50" : ""
                                                }`}
                                        >
                                            <img src="/images/mark.svg" alt="dot" />
                                            <p>self-improvement</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>

                    {/* EDUCATION */}
                    <div>
                        <div
                            className="flex gap-[12px] mb-[8px] cursor-pointer"
                            onClick={() => toggleSection("education")}
                        >
                            <img src={getArrowIcon("education")} alt="Arrow" />
                            <div className="flex gap-[8px] text-[16px]">
                                <img src="/images/edu.svg" alt="Education" />
                                <p>education</p>
                            </div>
                        </div>

                        <AnimatePresence initial={false}>
                            {openSection === "education" && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden pl-[26px]"
                                >
                                    <div onClick={() => onBarChange("high-school")}
                                        className={`flex transition-all duration-400 cursor-pointer gap-[8px] text-[16px] mb-[8px] hover:text-slate50 ${activeTab === "high-school" ? "text-slate50" : ""}`}
                                    >                                        <img src="/images/mark.svg" alt="dot" />
                                        <p>high-school</p>
                                    </div>
                                    <div onClick={() => onBarChange("university")} className={`flex transition-all duration-400 cursor-pointer gap-[8px] text-[16px] mb-[8px] hover:text-slate50 ${activeTab === "university" ? "text-slate50" : ""}`}
                                    >
                                        <img src="/images/mark.svg" alt="dot" />
                                        <p>university</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>



            </div >

            <div>
                <div className="flex gap-[12px] mb-[12px] pl-[24px] pr-[29px] whitespace-nowrap border-b border-slate py-[12px]">
                    <img src="/images/ad.svg" alt="Profile" />
                    <h1 className="text-slate50 text-[16px] ">contacts</h1>
                </div>
                <div className="flex gap-[8px] text-[14px] mb-[8px] pl-[24px]  ">
                    <img src="/images/mes.svg" alt="Location" />
                    <p>sultanabaniks@gmail.com</p>

                </div>

                <div className="flex gap-[8px] text-[14px]  pl-[24px] pr-[29px]">
                    <img src="/images/pho.svg" alt="Location" />
                    <p>+2347036886069</p>

                </div>



            </div>
        </div >
    )
}

export default PersonalInfo