import AboutMe from "./AboutMe";
import Design from "./Design";
import Gaming from "./Gaming";
import HighSchool from "./HighSchool";
import Hobbies from "./Hobbies";
import MyCV from "./MyCV";
import University from "./University";

const PanelRight = ({
    openedTabs,
    activeTab,
    setActiveTab,
    setOpenedTabs,
    onCloseTab,
}: {
    openedTabs: string[];
    activeTab: string;
    setActiveTab: (tab: string) => void;
    setOpenedTabs: (tabs: string[]) => void;
    onCloseTab: (tab: string) => void;
}) => {
    const renderContent = () => {
        switch (activeTab) {
            case "about-me":
                return <AboutMe />;
            case "my-cv":
                return <MyCV />;
            case "hobbies":
                return <Hobbies />;
            case "university":
                return <University />; // Placeholder for university content
            case "high-school":
                return <HighSchool />; // Placeholder for high school content    
            case "gaming":
                return <Gaming />
            case "design":
                return <Design />
            default:
                return <AboutMe />
        }
    };

    return (
        <div className="font-[450] text-slate400">
            <div className="tabs flex border-b border-slate">
                {openedTabs.map((tab) => (
                    <div
                        key={tab}
                        className={`educa border-r border-slate flex items-center gap-[54px] px-[23px] py-[12px] cursor-pointer ${tab === activeTab ? "bg-slate-700 text-white" : ""
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        <h1 className="">{tab}</h1>
                        {tab !== "about-me" && (
                            <img
                                src="/images/close.svg"
                                alt="close"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onCloseTab(tab);
                                }}
                                className="cursor-pointer"
                            />
                        )}

                    </div>
                ))}
            </div>
            <div className="p-4">{renderContent()}</div>
        </div>
    );
};

export default PanelRight;
