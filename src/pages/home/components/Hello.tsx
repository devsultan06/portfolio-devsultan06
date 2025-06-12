import PF from "./PF"


const Hello = () => {
    return (
        <div className="py-[130px] bg-slate900 font-[450] max-900:flex-col-reverse max-900:mx-auto flex justify-center items-center gap-[146px] max-1200:gap-[0px]">
            <div className="relative z-30 max-900:pl-[24px]">
                <h1 className="text-[18px] text-slate400 mb-[4px]">Hi all. I am</h1>
                <h1 className="text-slate50 text-[60px] max-600:text-[40px] mb-[4px]">Abanik. Sultan</h1>
                <h1 className="text-[#615FFF] max-600:text-[20px] text-[30px] mb-[75px]">  <span>&gt;
                </span> Front-end developer </h1>



                <div>
                    <h1 className="text-slate400 max-900:text-[14px] text-[16px] mb-[4px]"> // currently learning back end (Node Js)</h1>
                    <p className=" max-900:text-[14px] text-[16px] text-slate400 mb-[4px]">// find my profile on Github:</p>
                    <a
                        href="https://github.com/devsultan06"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                    >
                        <p className=" max-900:text-[14px] text-[16px] text-slate400 mb-[4px]"><span className="text-[#615FFF]">const</span> <span className="text-[#00D5BE]"> githubLink</span> = <span className="text-[#FFA1AD]"> “https://github.com/devsultan06”</span></p>

                    </a>
                </div>

            </div>

            <div>

                <PF />

            </div>
        </div>
    )
}

export default Hello