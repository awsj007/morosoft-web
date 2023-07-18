/** @format */
import React from "react";

const Header = () => {
    return (
        <>
            <header className="relative bg-dark-gray text-white"> 
                <div className=" left-0 right-0 w-[1200px] mx-auto ">
                    <section className="grid grid-cols-3 gap-4 py-[35px]">
                        <div className="">
                            <img 
                                src="./assets/logo.png"     
                                alt=""
                                className="w-[174px] h-[45px] object-contain"
                            />
                        </div>
                        <div className="">
                            <ul className="flex">
                                <li>
                                    <a href="/" className="text-sm font-medium text-primary-red pe-[30px]">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm pe-[30px]">About Us</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm pe-[30px]">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm pe-[30px]">Portfolio</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm pe-[30px]">Blogs</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm pe-[30px]">Hire</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm pe-[30px]">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h1>Search Icon</h1>
                        </div>
                    </section>
                </div>
            </header>
        </>
    )
};

export default Header;
