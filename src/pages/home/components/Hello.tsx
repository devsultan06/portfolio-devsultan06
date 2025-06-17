import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import PF from "./PF";

const Hello = () => {
    const [showLine1, setShowLine1] = useState(false);
    const [showLine2, setShowLine2] = useState(false);
    const [showLine3, setShowLine3] = useState(false);

    useEffect(() => {
        const timeout1 = setTimeout(() => setShowLine1(true), 500);
        const timeout2 = setTimeout(() => setShowLine2(true), 1500);
        const timeout3 = setTimeout(() => setShowLine3(true), 2500);

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
        };
    }, []);

    return (
        <div className="py-[125px] bg-slate900 font-[450] max-900:flex-col-reverse max-900:mx-auto flex justify-center items-center gap-[146px] max-1200:gap-[0px]">
            <div className="relative z-30 max-900:pl-[24px]">
                {showLine1 && (
                    <h1 className="text-[18px] text-slate400 mb-[4px]">
                        <Typewriter
                            words={["Hi all. I am"]}
                            typeSpeed={70}
                            cursor={false}
                        />
                    </h1>
                )}

                {showLine2 && (
                    <h1 className="text-slate50 text-[60px] max-600:text-[40px] mb-[4px]">
                        <Typewriter
                            words={["Abanik. Sultan"]}
                            typeSpeed={70}
                            cursor={false}
                        />
                    </h1>
                )}

                {showLine3 && (
                    <h1 className="text-[#615FFF] max-600:text-[20px] text-[30px]">
                        <span>&gt;</span>{" "}
                        <Typewriter
                            words={["Front-end developer"]}
                            typeSpeed={70}
                            cursor
                            cursorStyle="_"
                        />
                    </h1>
                )}

                <div className=" mt-[75px]">
                    <h1 className="text-slate400 max-900:text-[14px] text-[16px] mb-[4px]">
            // currently learning back end (Node Js)
                    </h1>
                    <p className=" max-900:text-[14px] text-[16px] text-slate400 mb-[4px]">
            // find my profile on Github:
                    </p>
                    <a
                        href="https://github.com/devsultan06"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className=" max-900:text-[14px] text-[16px] text-slate400 mb-[4px]">
                            <span className="text-[#615FFF]">const</span>{" "}
                            <span className="text-[#00D5BE]">githubLink</span> ={" "}
                            <span className="text-[#FFA1AD]">
                                “https://github.com/devsultan06”
                            </span>
                        </p>
                    </a>

                    <a href="/files/cv.pdf" download>
                        <button className="relative overflow-hidden mt-[18px] font-[450] rounded-[8px] border-[3px] hover:border-[3px] hover:border-orange border-slate hover:text-[#020618] py-[10px] px-[12px] text-slate50 text-[14px] group">
                            <span className="relative z-10">download my-cv</span>
                            <span className="absolute left-0 top-0 h-full w-0 bg-orange transition-all duration-400 group-hover:w-full z-0"></span>
                        </button>
                    </a>
                </div>
            </div>

            <div>
                <PF />
            </div>
        </div>
    );
};

export default Hello;
