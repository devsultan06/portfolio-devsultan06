
const MyCV = () => {
    return (
        <div className="h-[667px] overflow-y-auto custom-scrollbar px-[40px] text-slate400 text-[18px] font-[450] pt-[12px] pb-[100px] leading-[32px]">
            <p className="mb-[10px]"><span className="mr-[40px]">1</span>  /**</p>
            <p className="mb-[10px]"><span className="mr-[40px]">2</span> <span></span>   * Resume</p>
            <p className="mb-[10px]"><span className="mr-[40px]">3</span>   <span></span>*  Here’s a downloadable version of my CV.
            </p>
            <p className="mb-[10px]"><span className="mr-[40px]">4</span> <span></span>   *  It covers my tech stack, experience, </p>
            <p className="mb-[10px]"><span className="mr-[85px]"></span> <span></span>     projects,
                education, and more.</p>

            <p className="mb-[10px]"><span className="mr-[40px]">5</span>   */</p>


            <a href="/files/cv.pdf" download>
                <button className="relative overflow-hidden mt-[18px] font-[450] rounded-[8px] border-[3px] hover:border-[3px] hover:border-orange border-slate hover:text-[#020618] py-[10px] px-[12px] text-slate50 text-[14px] group">
                    <span className="relative z-10">download my-cv</span>
                    <span className="absolute left-0 top-0 h-full w-0 bg-orange transition-all duration-400 group-hover:w-full z-0"></span>
                </button>
            </a>

        </div>
    )
}

export default MyCV