import { useEffect } from "react"
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const SVG = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="864" height="742" viewBox="0 0 864 742" fill="none">
            <g opacity="0.4" filter="url(#filter0_f_1329_3175)">
                <path d="M673.469 216.668L689.984 436.047L655.759 540.912L485.295 567.784L413.003 406.756L297.588 445.529L184.059 269.554L174 135.932L452.567 133.014L523.099 244.032L673.469 216.668Z" fill="#00D5BE" />
            </g>
            <defs>
                <filter id="filter0_f_1329_3175" x="0" y="-40.9863" width="863.983" height="782.77" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="87" result="effect1_foregroundBlur_1329_3175" />
                </filter>
            </defs>
        </svg>
    );
}

const Home = () => {

    useEffect(() => {
        document.title = "Home - devsultan06";

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

export default Home