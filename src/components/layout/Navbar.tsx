import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { href: "/", label: "_hello" },
    { href: "/about", label: "_about-me" },
    { href: "/projects", label: "_projects" },
    { href: "/contact", label: "_contact-me" },
];

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Close on screen resize > 900px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <>
            <div className="flex text-slate400 text-[16px] font-[450] justify-between items-center border-b border-slate pl-[24px] h-[54px] bg-slate900">
                <div className="flex items-center space-x-[128px] max-900:space-x-[20px] max-600:space-x-[32px]">
                    <div className="flex items-center space-x-[8px]">
                        <img src="/images/favi.png" alt="" className="w-[30px] h-[30px] rounded-full" />

                        <h1>devsultan</h1>
                    </div>

                    <div className="block max-900:hidden">
                        <ul className="flex">
                            {navLinks.slice(0, 3).map((link) => {
                                const isActive = location.pathname === link.href;
                                return (
                                    <li key={link.href} className="text-[16px]">
                                        <Link
                                            to={link.href}
                                            className={`py-[16px] max-900:px-[15px] px-[32px] border-l border-r border-slate hover:text-slate-50 transition-all ${isActive ? "text-slate50 border-b-4 border-b-orange" : ""
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="block max-900:hidden">
                    <Link
                        to="/contact"
                        className={`py-[16px] px-[24px] max-900:px-[15px] border-l border-slate transition-all ${location.pathname === "/contact"
                            ? "text-slate50 border-b-4 border-b-orange"
                            : ""
                            }`}
                    >
                        _contact-me
                    </Link>
                </div>

                <div className="menu px-[24px] hidden max-900:block cursor-pointer " onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                    <img src="/images/menu.png" alt="menu" className=" " />
                </div>
            </div>


            {/* Full-page mobile menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 font-firacode bg-slate900 z-50  flex flex-col"
                    >
                        <div className="flex justify-between items-center border-b border-slate py-[16px] pl-[24px] pr-[16px]">
                            <div className="flex items-center space-x-[8px]">
                                <img src="/images/favi.png" alt="" className="w-[30px] h-[30px] rounded-full" />
                                <h2 className="text-[16px] text-slate400 ">devsultan</h2>


                            </div>
                            <img
                                src="/images/close.png "
                                onClick={() => setMobileMenuOpen(false)}
                                alt="close menu"
                                className="cursor-pointer"

                            />
                        </div>

                        <p className="pt-[24px] pb-[12px] pl-[24px] border-b border-slate text-[16px] text-slate400"># navigate:</p>

                        <ul className="">
                            {navLinks.map((link) => (
                                <li key={link.href} className="">
                                    <Link
                                        to={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block text-lg border-b border-slate py-[12px] pl-[24px] ${location.pathname === link.href
                                            ? "text-white"
                                            : "text-slate400"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="flex justify-between gap-4 absolute bottom-0 right-0 left-0 text-[16px] border-t border-slate   bg-slate900 text-slate400">
                            <div className="flex items-center max-900:justify-between">
                                <div className="max-900:border-none border-r border-slate">
                                    <h1 className=" py-[16px] px-[24px]">find me in:</h1>
                                </div>


                            </div>

                            <div className=" justify-between hidden max-900:flex ">

                                <a
                                    href="https://x.com/devsultan06"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="py-[16px] px-[16px] border-l border-r border-slate"
                                >
                                    <img src="/images/x.svg" alt="footer" className="w-[24px] h-[24px]" />
                                </a>

                                <a
                                    href="https://www.instagram.com/devsultan06"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="py-[16px] text-slate500 px-[16px] border-r border-slate"
                                >
                                    <IoLogoInstagram className="w-[26px] h-[26px]" />
                                </a>


                                <a
                                    href="https://github.com/devsultan06"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="py-[16px] hidden max-900:block px-[16px] border-r border-slate"
                                >
                                    <img src="/images/github.svg" alt="footer" className="w-[24px] h-[24px]" />
                                </a>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
};

export default Navbar;
