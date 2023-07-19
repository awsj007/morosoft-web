/** @format */

import React from "react";

function HeroSection() {
    return (
        <div className="bg-hero-pattern  bg-dark-gray">
            <div className="mx-auto max-w-6xl px-6 lg:px-8 h-[702px] flex flex-col justify-end pb-24">
                <div className="text-left text-white flex md:flex-row flex-col justify-between">
                    <h1 className="text-base font-semibold sm:text-xl ">
                        Our Services
                    </h1>
                    <img src="./assets/design-c.svg" alt="" />
                </div>

                <div className="mx-auto max-w-6xl -mt-14 md:-mt-32">
                    <h2 className="text-white sm:text-lg text-md ">
                        Our Services
                    </h2>
                    <p className="mt-5 line-clamp-3 text-base leading-6 text-white">
                        We love what we do and we do what our clients love &
                        work with great clients all over the world to create
                        thoughtful and purposeful websites.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
