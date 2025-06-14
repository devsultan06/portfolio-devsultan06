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
    return (
        <div className="font-firacode">
            <Navbar />

            <div className="h-[667px] flex">
                <Sidebar onSectionChange={setActiveSection} active={activeSection} />



                <div className="flex-[3] bg-slate900 text-white p-[24px]">
                    <PanelRight active={activeSection} />

                </div>
            </div>



            <Footer />


        </div>
    )
}

export default About