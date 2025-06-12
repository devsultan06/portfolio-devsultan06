import { useEffect } from "react"
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const Contact = () => {

    useEffect(() => {
        document.title = "Contact - devsultan06";

        return () => {
            document.title = "Portfolio";
        }

    }, []);
    return (
        <div className="font-firacode">
            <Navbar />
                        <Footer  />
            

        </div>
    )
}

export default Contact