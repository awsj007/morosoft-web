/** @format */
import React from "react";
import Image from "next/image";
function HeroSection() {
    return (
        <div className="bg-hero-pattern  bg-dark-gray">
            <div className="relative mx-auto max-w-6xl px-6 lg:px-8 flex items-center min-h-screen py-32">
                <div className="mx-auto ">
                    <div className="text-left text-white">
                        <div className="relative ">
                            <img
                                src="./assets/reverse-c.svg"
                                alt=""
                                className="md:h-[118px] md:w-[118px] absolute right-[30%] z-10 w-12 h-12 "
                            />
                            <img
                                className="absolute md:right-[20%] md:top-[60px] top-6 right-3 z-0 w-1/2 md:w-auto"
                                src="./assets/right-arrow.svg"
                                alt=""
                            />
                        </div>

                        <h1 className="text-4xl font-semibold sm:text-9xl ">
                            We Build <br /> Web Application
                        </h1>
                    </div>

                    <div className="mx-auto max-w-6xl">
                        <div className="mx-auto md:mt-10 grid grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-10 place-items-center">
                            <div className="flex max-w-xl flex-col items-center justify-stretch md:items-start md:justify-between md:col-span-3 col-span-6">
                                <p className="md:mt-5 line-clamp-3 text-sm leading-6 text-white md:text-left text-center">
                                    We are one of the best organization which is
                                    rapidly growing in mobile application
                                    developments.
                                </p>
                                <img
                                    className="py-10 hidden md:block"
                                    src="./assets/right-arrow.svg"
                                    alt=""
                                />
                                <div className="flex flex-row text-white items-top mt-6 md:mt-0">
                                    <img
                                        src="./assets/client-1.png"
                                        alt=""
                                        className="h-10 w-10 rounded-full"
                                    />
                                    <img
                                        src="./assets/client-2.png"
                                        alt=""
                                        className="h-10 w-10 rounded-full -ml-4"
                                    />
                                    <img
                                        src="./assets/client-3.png"
                                        alt=""
                                        className="h-10 w-10 rounded-full -ml-4"
                                    />
                                    <img
                                        src="./assets/client-4.png"
                                        alt=""
                                        className="h-10 w-10 rounded-full -ml-4"
                                    />
                                    <span className="h-10 w-10 bg-primary-red rounded-full -ml-4 flex flex-col items-center justify-center text-md pb-1">
                                        +
                                    </span>
                                    <div className="text-sm ml-6">
                                        <p>100+ Popular Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6 place-items-center relative">
                                <img
                                    src="./assets/play.svg"
                                    alt=""
                                    className="absolute top-0 bottom-0 left-0 right-0  m-auto "
                                />
                                <img
                                    src="./assets/video-thumbnail.png"
                                    alt=""
                                    srcset=""
                                    className="md:max-w-xl md:h-[283px]"
                                />
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
