import AboutMe from "./AboutMe";
import ContentWriting from "./ContentWriting";
import HighSchool from "./HighSchool";
import Hobbies from "./Hobbies";
import MyCV from "./MyCV";
import MyStack from "./MyStack";
import ProSolving from "./ProSolving";
import Self from "./Self";
import SnippetList from "./SnippetList";
import Startups from "./Startups";
import Uirefine from "./Uirefine";
import University from "./University";

const PanelRight = ({
    openedTabs,
    activeTab,
    setActiveTab,
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
            case "my-stack":
                return <MyStack />;
            case "hobbies":
                return <Hobbies />;
            case "university":
                return <University />; // Placeholder for university content
            case "high-school":
                return <HighSchool />; // Placeholder for high school content    
            case "problem-solving":
                return <ProSolving />; // Placeholder for high school content    
            case "startups":
                return <Startups />
            case "content-writing":
                return <ContentWriting />

            case "ui-refinement":
                return <Uirefine />; // Placeholder for high school content    
            case "self-improvement":
                return <Self />


            default:
                return <AboutMe />
        }
    };

    return (
        <div>
            <div className="flex border-b font-[450] text-slate400 overflow-x-auto custom-scrollbar2 border-slate">
                <div className="tabs flex ">
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

            </div>

            <div className="flex max-1300:flex-col h-[767px] overflow-y-auto custom-scrollbar">

                <div className="flex-[1]">{renderContent()}</div>


                <div className="flex-[1] py-4 px-[40px] pb-[100px] max-1300:pb-[200px]  min-1300:overflow-y-auto custom-scrollbar">
                    <h1 className="text-slate400">// Code snippet showcase:</h1>

                    <SnippetList />
                </div>
            </div>

        </div>

    );
};

export default PanelRight;
