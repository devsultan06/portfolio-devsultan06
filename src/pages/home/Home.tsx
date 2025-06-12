import { useEffect } from "react"


const Home = () => {

    useEffect(() => {
        document.title = "Home - devsultan06";

        return () => {
            document.title = "Portfolio";
        }

    }, []);
    return (
        <div>Home</div>
    )
}

export default Home