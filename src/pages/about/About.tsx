import { useEffect, useState } from "react"
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Sidebar from "./components/Sidebar";
import PanelRight from "./components/PanelRight";

const About = () => {

    useEffect(() => {
        document.title = "about - devsultan06";

        return () => {
            document.title = "Portfolio";
        }

    }, []);

    const [activeSection, setActiveSection] = useState("personal");
    const [openedTabs, setOpenedTabs] = useState<string[]>([]);
    const [activeTab, setActiveTab] = useState<string>("");

    useEffect(() => {
        const savedTabs = JSON.parse(localStorage.getItem("openedTabs") || "[]");
        const savedActive = localStorage.getItem("activeTab");

        const initialTabs = savedTabs.includes("about-me")
            ? savedTabs
            : ["about-me", ...savedTabs];

        setOpenedTabs(initialTabs);
        setActiveTab(savedActive || "about-me");
    }, []);

    useEffect(() => {
        localStorage.setItem("openedTabs", JSON.stringify(openedTabs));
        localStorage.setItem("activeTab", activeTab);
    }, [openedTabs, activeTab]);

    const handleBarChange = (bar: string) => {
        if (!openedTabs.includes(bar)) {
            setOpenedTabs([...openedTabs, bar]);
        }
        setActiveTab(bar);
    };

    const handleCloseTab = (tab: string) => {
        if (tab === "about-me") return;

        const newTabs = openedTabs.filter((t) => t !== tab);
        setOpenedTabs(newTabs);

        if (activeTab === tab) {
            setActiveTab(newTabs[newTabs.length - 1] || "about-me");
        }
    };


    return (
        <div className="font-firacode">
            <Navbar />

            <div className="h-[663px] max-900:h-[700px] max-1300:overflow-y-auto flex max-900:flex-col">
                <Sidebar onSectionChange={setActiveSection} activeTab={activeTab} onBarChange={handleBarChange} active={activeSection} />



                <div className="flex-[3] bg-slate900 text-white overflow-hidden relative">
                    <PanelRight
                        openedTabs={openedTabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        setOpenedTabs={setOpenedTabs}
                        onCloseTab={handleCloseTab}
                    />

                </div>
            </div>



            <Footer />


        </div>
    )
}

export default About