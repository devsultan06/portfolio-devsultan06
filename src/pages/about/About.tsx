import { useEffect } from "react"
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Sidebar from "./components/Sidebar";

const About = () => {

    useEffect(() => {
        document.title = "About - devsultan06";

        return () => {
            document.title = "Portfolio";
        }

    }, []);
    return (
        <div className="font-firacode">
            <Navbar />

            <div className="h-[667px] flex">
                <Sidebar />
            </div>

            <Footer />


        </div>
    )
}

export default About