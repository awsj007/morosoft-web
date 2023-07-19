/** @format */

import React from "react";

function HeroSection() {
    return (
        <div className="bg-hero-pattern  bg-dark-gray">
            <div className="mx-auto max-w-6xl px-6 lg:px-8 h-[702px] flex flex-col justify-end pb-24">
                <div className="text-left text-white flex md:flex-row flex-col justify-between">
                    <h1 className="text-base font-semibold sm:text-xl ">
                        About Us
                    </h1>
                    <img src="./assets/design-c.svg" alt="" />
                </div>

                <div className="mx-auto max-w-6xl -mt-14 md:-mt-32">
                    <h2 className="text-white sm:text-lg text-md ">
                        WHO WE ARE?
                    </h2>
                    <p className="mt-5 line-clamp-3 text-base leading-6 text-white">
                        Morosoft is one of the fastest growing IT company in
                        Pakistan, delivering a broad range of products/solutions
                        and services across industries in all over the world. In
                        addition to its product development, it empowers
                        companies through business intelligence, reporting
                        capabilities and IT consultancies. Launched in 2017,
                        Morosoft has established its footprints in the global
                        market through its constant innovation and unmatched
                        technical support even after the completion of the
                        projects.
                    </p>
                    <p className="mt-5 line-clamp-3 text-base leading-6 text-white">
                        Morosoft has a global customer base serving the markets
                        of USA, Canada, Europe, Middle East, China and Hong
                        Kong. Our office is located in Pakistan (Islamabad)
                        ensure seamless delivery of services to its clients.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
