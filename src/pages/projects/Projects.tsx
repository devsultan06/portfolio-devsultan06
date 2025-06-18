import { useEffect } from "react"
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProjectsPanel from "./components/ProjectsPanel";

const Projects = () => {

    useEffect(() => {
        document.title = "projects - devsultan06";

        return () => {
            document.title = "Portfolio";
        }

    }, []);
    return (
        <div className="font-firacode">
            <Navbar />

            <div className="h-[663px] max-900:h-[700px] flex max-900:flex-col">

                <div className="flex-[3] max-900:p-[20px] p-[64px] overflow-y-auto custom-scrollbar2 bg-slate900  overflow-hidden relative">
                    <h2 className="text-[#615FFF] font-[700] text-[18px] mb-[28px]">
                        <span className="text-[#90A1B9] font-[450]"> // _here is what I've been up to</span>
                    </h2>
                    <ProjectsPanel

                    />

                </div>
            </div>

            <Footer />


        </div>
    )
}

export default Projects