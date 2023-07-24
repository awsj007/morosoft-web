/** @format */
import React from "react";
import Link from "next/link";
const Header = () => {
    return (
        <>
            <header className="relative bg-dark-gray text-white">
                <div className="z-50 absolute left-0 right-0 max-w-6xl mx-auto ">
                    <section className="flex flex-row justify-between items-center gap-4 py-[35px]">
                        <div className="">
                            <Link href="/">
                                <img
                                    src="./assets/logo.png"
                                    alt=""
                                    className="w-[174px] h-[45px] object-contain"
                                />
                            </Link>
                        </div>
                        <div className="">
                            <ul className="flex flex-row justify-evenly gap-5">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-sm font-medium hover:text-primary-red active:text-primary-red text-white "
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about-us/"
                                        className="text-sm font-medium hover:text-primary-red active:text-primary-red text-white "
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/our-services/"
                                        className="text-sm font-medium hover:text-primary-red active:text-primary-red text-white "
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/our-portfolio/"
                                        className="text-sm font-medium hover:text-primary-red active:text-primary-red text-white "
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/blog/"
                                        className="text-sm font-medium hover:text-primary-red active:text-primary-red text-white "
                                    >
                                        Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/hire/"
                                        className="text-sm font-medium hover:text-primary-red active:text-primary-red text-white "
                                    >
                                        Hire
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact/"
                                        className="text-sm font-medium hover:text-primary-red active:text-primary-red text-white "
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-16">
                            <img
                                src="./assets/search-icon.svg"
                                alt=""
                                srcset=""
                            />
                            <img src="./assets/menu-icon.svg" alt="" />
                        </div>
                    </section>
                </div>
            </header>
        </>
    );
};

export default Header;
