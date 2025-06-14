import { useEffect, useState } from "react"
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Sidebar from "./components/Sidebar";
import PanelLeft from "./components/PanelLeft";
import PanelRight from "./components/PanelRight";

const About = () => {

    useEffect(() => {
        document.title = "About - devsultan06";

        return () => {
            document.title = "Portfolio";
        }

    }, []);

    const [activeSection, setActiveSection] = useState("personal");
    const [openedTabs, setOpenedTabs] = useState<string[]>([]);
    const [activeTab, setActiveTab] = useState<string>("");

    // On mount: Load tabs from localStorage, or initialize with about-me if not closed previously
    useEffect(() => {
        const savedTabs = JSON.parse(localStorage.getItem("openedTabs") || "[]");
        const savedActive = localStorage.getItem("activeTab");

        // Ensure about-me is always present
        const initialTabs = savedTabs.includes("about-me")
            ? savedTabs
            : ["about-me", ...savedTabs];

        setOpenedTabs(initialTabs);
        setActiveTab(savedActive || "about-me");
    }, []);

    // Save openedTabs and activeTab to localStorage on any change
    useEffect(() => {
        localStorage.setItem("openedTabs", JSON.stringify(openedTabs));
        localStorage.setItem("activeTab", activeTab);
    }, [openedTabs, activeTab]);

    // This function is passed to the left panel to open new tabs
    const handleBarChange = (bar: string) => {
        if (!openedTabs.includes(bar)) {
            setOpenedTabs([...openedTabs, bar]);
        }
        setActiveTab(bar);
    };

    const handleCloseTab = (tab: string) => {
        // Prevent closing "about-me"
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

            <div className="h-[667px] flex">
                <Sidebar onSectionChange={setActiveSection} activeTab={activeTab} onBarChange={handleBarChange} active={activeSection} />



                <div className="flex-[3] bg-slate900 text-white">
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