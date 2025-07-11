import { useEffect, useState } from "react"
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import AboutMe from "./components/AboutMe";

const About = () => {

    useEffect(() => {
        document.title = "about - devsultan06";

        return () => {
            document.title = "Portfolio";
        }

    }, []);

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


    return (


        <div className="font-firacode relative overflow-hidden">
            <Navbar />

            <AboutMe />

            <Footer />

        </div>
    )
}

export default About