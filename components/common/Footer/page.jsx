/** @format */
import React from "react";

const Footer = () => {
    return (
        <div className="bg-[#070F1C] bg-background-footer text-white h-2/4">
            <div className="grid grid-cols-3 gap-10 py-20 px-6 max-w-6xl mx-auto">
                <div className="col-span-2">
                    <h2 className="text-5xl  font-semibold max-w-lg">
                        Get Ready to Build Your Website
                    </h2>
                </div>
                <div className="flex flex-col">
                    <button className="w-[128px] h-[128px] bg-primary-red text-white rounded-full">
                        <img
                            src="./assets/arrow.svg"
                            alt=""
                            className="w-5 h-5 mx-auto "
                        />
                        Explores
                    </button>
                </div>
                <div>
                    <form action="">
                        <input
                            className="bg-transparent border-0 border-b border-opacity-40 opacity-40 text-white"
                            type="text"
                            placeholder="Email Address"
                        />
                    </form>
                </div>
                <div>Get to Touch</div>
                <div>Links</div>
            </div>
        </div>
    );
};

export default Footer;
