import { useEffect } from "react"
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

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

            <Footer />


        </div>
    )
}

export default Projects