/** @format */

import React from "react";

function HeroSection() {
    return (
        <div className="bg-hero-pattern  bg-dark-gray">
            <div className="mx-auto max-w-6xl px-6 lg:px-8 h-[457px] flex flex-col justify-end">
                <div className="text-left text-white flex md:flex-row flex-col justify-between">
                    <h1 className="text-base font-semibold sm:text-xl ">
                        Hire
                    </h1>
                    <img src="./assets/design-c.svg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
