import { useEffect } from "react"
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Hello from "./components/Hello";

const SVG = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="svg1" width="864" height="742" viewBox="0 0 864 742" fill="none">
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


const SVG2 = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="882" height="783" viewBox="0 0 882 783" fill="none">
            <g opacity="0.4" filter="url(#filter0_f_1329_3174)">
                <path d="M477.947 656.704L264.032 605.317L174.664 540.654L201.227 370.142L376.649 350.576L375.041 228.832L577.309 174.577L707.603 205.876L625.166 471.982L497.893 505.172L477.947 656.704Z" fill="#615FFF" />
            </g>
            <defs>
                <filter id="filter0_f_1329_3174" x="0.664062" y="0.577148" width="880.938" height="830.127" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="87" result="effect1_foregroundBlur_1329_3174" />
                </filter>
            </defs>
        </svg>
    );
}

const Home = () => {

    useEffect(() => {
        document.title = "home - devsultan06";

        return () => {
            document.title = "Portfolio";
        }

    }, []);
    return (
        <div className="font-firacode relative overflow-hidden">
            <Navbar />

            <div className="absolute -top-[40px] right-[120px] max-900:right-[0px]  z-30">
                <SVG />
            </div>

             <div className="absolute top-[80px] -right-[40px]  z-30">
                <SVG2 />
            </div>

            <Hello />

            <Footer />

        </div>
    )
}

export default Home