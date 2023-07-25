/** @format */
import React from "react";

const Footer = () => {
    return (
        <div className="bg-[#070F1C] bg-hero-pattern text-white py-20 px-6">
            <div className="grid grid-cols-12 gap-4  max-w-6xl mx-auto">
                <div className="md:col-span-6 col-span-12">
                    <h2 className="text-5xl  font-semibold max-w-lg">
                        Get Ready to Build Your Website
                    </h2>
                </div>
                <div className="flex flex-col md:col-start-11 ">
                    <button className="w-[128px] h-[128px] bg-primary-red text-white rounded-full">
                        <img
                            src="./assets/arrow.svg"
                            alt=""
                            className="w-5 h-5 mx-auto "
                        />
                        Explores
                    </button>
                </div>
                <div className="md:col-span-6 col-span-12">
                    <form className=" py-5" action="">
                        <input
                            className=" w-3/4  bg-transparent border-0 border-b-2  text-white"
                            type="text"
                            placeholder="Email Address"
                        />
                    </form>
                    <div className="flex flex-row gap-5">
                        <img src="./assets/google-plus.svg" alt="" srcset="" />
                        <img src="./assets/youtube.svg" alt="" srcset="" />
                        <img src="./assets/facebook.svg" alt="" srcset="" />
                        <img src="./assets/linkedin.svg" alt="" srcset="" />
                    </div>
                </div>
                <div className="md:col-span-4 col-span-12">
                    <p className="text-sm font-medium py-7">Get to Touch</p>
                    <div className="flex flex-row  justify-start items-start">
                        <img src="./assets/location.svg" alt="Location" />
                        <p className="text-sm font-light leading-6 pl-7">
                            Office S# 04, 2nd Floor, E-8 Markaz Plaza, Hyderi
                            Chowk, Saidpur Road, Rawalpindi, Pakistan
                        </p>
                    </div>
                    <div className="flex flex-row py-1 justify-start items-start">
                        <img src="./assets/phone.svg" alt="Location" />
                        <p className="text-sm font-light leading-6 pl-7 text-[#00AB6D]">
                            (051) 8894816 +92 334 386 8945
                        </p>
                    </div>
                    <div className="flex flex-row py-1 justify-start items-start">
                        <img src="./assets/mail.svg" alt="Location" />
                        <p className="text-sm font-light leading-6 pl-7 ">
                            Info@morosoft.org
                        </p>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-2">
                    <p className="text-sm font-medium py-7">Links</p>
                    <ul>
                        <li className="text-sm font-light leading-5 pb-4">
                            Services
                        </li>
                        <li className="text-sm font-light leading-5 pb-4">
                            Porfolio
                        </li>
                        <li className="text-sm font-light leading-5 pb-4">
                            About Us
                        </li>
                        <li className="text-sm font-light leading-5 pb-4">
                            Contact Us
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
