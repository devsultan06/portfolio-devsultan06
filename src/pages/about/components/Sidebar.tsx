import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="pt-[12px]  bg-slate900 pl-[20.5px] pr-[24.5px]  border-r border-slate ">

            <Link
                to="/"
            >
                <img src="/images/prf.svg" alt="logo" className=" mb-[32px]" />
            </Link>

            <Link
                to="/"
            >
                <img src="/images/perso.svg" alt="logo" className=" mb-[32px]" />
            </Link>

            <Link
                to="/"
            >
                <img src="/images/hobbies.svg" alt="logo" className=" mb-[16px]" />
            </Link>

        </div>
    )
}

export default Sidebar