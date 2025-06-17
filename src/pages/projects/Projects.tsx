import { useEffect } from "react"
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProjectsSidebar from "./components/ProjectsSidebar";
import ProjectsPanel from "./components/ProjectsPanel";

const Projects = () => {

    useEffect(() => {
        document.title = "Projects - devsultan06";

        return () => {
            document.title = "Portfolio";
        }

    }, []);
    return (
        <div className="font-firacode">
            <Navbar />

            <div className="h-[663px] max-1300:h-[667px] max-1300:overflow-y-auto flex max-900:flex-col">
                <ProjectsSidebar />

                <div className="flex-[3] overflow-y-auto custom-scrollbar2 bg-slate900 text-white overflow-hidden relative">
                    <ProjectsPanel

                    />

                </div>
            </div>

            <Footer />


        </div>
    )
}

export default Projects