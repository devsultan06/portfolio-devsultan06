

import { useState } from "react";
import PanelLeft from "./PanelLeft";

const Sidebar = ({
    onSectionChange,
    active,
    onBarChange,
    activeTab
}: {
    onSectionChange: (section: string) => void;
    active: string;
    onBarChange: (bar: string) => void;
    activeTab: string;
}) => {
    const [hovered, setHovered] = useState<string | null>(null);

    const tabs = [
        {
            id: "professional",
            defaultImg: "/images/prf.svg",
            activeImg: "/images/prfa.svg",
        },
        {
            id: "personal",
            defaultImg: "/images/persoa.svg",
            activeImg: "/images/persoa.svg",
        },
        {
            id: "hobbies",
            defaultImg: "/images/hobbies.svg",
            activeImg: "/images/hobbiesa.svg",
        },
    ];

    return (
        <div className="flex bg-slate-900 w-[318.9px] border-r bg-slate900 border-slate">
            <div className="pt-[12px] pl-[20.5px] pr-[24.5px] border-r border-slate">
                {tabs.map((tab) => {
                    const isHovered = hovered === tab.id;
                    const isActive = active === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => onSectionChange(tab.id)}
                            onMouseEnter={() => setHovered(tab.id)}
                            onMouseLeave={() => setHovered(null)}
                            className="block mb-[32px] focus:outline-none"
                        >
                            <img
                                src={isHovered || isActive ? tab.activeImg : tab.defaultImg}
                                alt={tab.id}
                                className="transition duration-200"
                            />
                        </button>
                    );
                })}
            </div>

            <div className="  ">
                <PanelLeft active={active} activeTab={activeTab} onBarChange={onBarChange} />
            </div>
        </div>
    );
};

export default Sidebar;
