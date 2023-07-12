/** @format */

import React from "react";
import Image from "next/image";
function Hero() {
    return (
        <div className="bg-hero-pattern  bg-dark-gray">
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 flex items-center min-h-screen">
                <div className="mx-auto ">
                    <div className="text-left text-white">
                        <h1 className="text-4xl font-semibold sm:text-9xl ">
                            We Build Web Application
                        </h1>
                    </div>

                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <div className="flex max-w-xl flex-col items-start justify-between">
                                <div className="group relative">
                                    <p className="mt-5 line-clamp-3 text-base leading-6 text-white">
                                        We are one of the best organization
                                        which is rapidly growing in mobile
                                        application developments.
                                    </p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4 text-white">
                                    <img
                                        src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                        className="h-10 w-10 rounded-full bg-gray-50"
                                    />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold">
                                            <a href="#">
                                                <span className="absolute inset-0"></span>
                                                Michael Foster
                                            </a>
                                        </p>
                                        <p>Co-Founder / CTO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex max-w-xl flex-col items-start justify-between">
                                <div className="group relative">
                                    <p className="mt-5 line-clamp-3 text-base leading-6 text-white">
                                        We are one of the best organization
                                        which is rapidly growing in mobile
                                        application developments.
                                    </p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4 text-white">
                                    <img
                                        src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                        className="h-10 w-10 rounded-full bg-gray-50"
                                    />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold">
                                            <a href="#">
                                                <span className="absolute inset-0"></span>
                                                Michael Foster
                                            </a>
                                        </p>
                                        <p>Co-Founder / CTO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex max-w-xl flex-col items-start justify-between">
                                <div>
                                    <button className="w-[128px] h-[128px] bg-primary-red text-white">
                                        Explores
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
