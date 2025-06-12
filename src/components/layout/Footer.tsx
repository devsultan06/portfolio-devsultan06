import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="flex justify-between gap-4 mt-[300px] text-[16px]   bg-slate900 text-slate400">
            <div className="flex items-center max-900:justify-between">
                <div className="max-900:border-none border-r border-slate">
                    <h1 className=" py-[16px] px-[24px]">find me in:</h1>
                </div>

                <div className="flex justify-between max-900:hidden ">
                    <Link
                        to=" "
                        className="py-[16px] px-[16px] border-r border-slate"
                    >

                        <img src="/images/x.svg" alt="footer" className="w-[24px] h-[24px]" />
                    </Link>

                    <Link
                        to=" "
                        className="py-[16px] px-[16px] border-r border-slate"

                    >
                        <img src="/images/linkedin.svg" alt="footer" className="w-[24px] h-[24px]" />

                    </Link>

                    <Link
                        to=" "
                        className="py-[16px] hidden max-900:block px-[16px] border-r border-slate"

                    >
                        <img src="/images/github.svg" alt="footer" className="w-[24px] h-[24px]" />

                    </Link>
                </div>





            </div>

            <div className=" justify-between hidden max-900:flex ">
                <Link
                    to=" "
                    className="py-[16px] px-[16px] border-l border-r border-slate"
                >

                    <img src="/images/x.svg" alt="footer" className="w-[24px] h-[24px]" />
                </Link>

                <Link
                    to=" "
                    className="py-[16px] px-[16px] border-r border-slate"

                >
                    <img src="/images/linkedin.svg" alt="footer" className="w-[24px] h-[24px]" />

                </Link>

                <Link
                    to=" "
                    className="py-[16px] hidden max-900:block px-[16px] border-r border-slate"

                >
                    <img src="/images/github.svg" alt="footer" className="w-[24px] h-[24px]" />

                </Link>
            </div>

            <div className="flex items-center max-900:hidden border-l border-slate">
                <Link
                    to=" "
                    className="flex items-center gap-2  px-[24px]  text-slate400 text-[16px] font-[450]"
                >
                    @devsultan06
                    <img src="/images/github.svg" alt="footer" className="" />

                </Link>
            </div>
        </div>
    )
}

export default Footer