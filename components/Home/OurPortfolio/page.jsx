/** @format */

import React from "react";

const OurPortfolio = () => {
    return (
        <div class="text-white body-font bg-[#02050A]">
            <div class="px-5 py-24 mx-auto">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex flex-row gap-2 py-5">
                        <img src="./assets/red-arrow.svg" alt="" />
                        <p className="text-primary-red text-base">
                            Popular Website
                        </p>
                    </div>
                    <h2 className="text-5xl font-semibold">Our Portfolio</h2>
                    <p className=" w-1/2 mx-auto py-5 text-md">
                        Let’s Look Our Recent Project Gallery
                    </p>
                    <button className="bg-primary-red text-white rounded-full px-7 py-2">
                        Read More
                    </button>
                </div>

                <div className="grid grid-col-1 md:grid-cols-3 gap-x-10 gap-y-16 text-black max-w-4xl mx-auto py-20">
                    <div className="text-white p-1 sm:p-5 bg-[#070F1CCC] border-dashed border border-[#FFFFFF66] rounded-tr-2xl rounded-bl-2xl">
                        <div className="relative flex flex-row justify-evenly items-center  ">
                            <img
                                class="absolute right-0 top-0"
                                src="./assets/arrow.svg"
                                alt=""
                            />
                            <img
                                src="./assets/custom-website.svg"
                                alt=""
                                srcset=""
                            />
                            <h3 className="text-md font-semibold">
                                Custom website
                            </h3>
                        </div>
                    </div>
                    <div className="text-white p-1 sm:p-5 bg-[#070F1CCC] border-dashed border border-[#FFFFFF66] rounded-tr-2xl rounded-bl-2xl">
                        <div className="relative flex flex-row justify-evenly items-center  ">
                            <img
                                class="absolute right-0 top-0"
                                src="./assets/arrow.svg"
                                alt=""
                            />
                            <img
                                src="./assets/mobile-apps.svg"
                                alt=""
                                srcset=""
                            />
                            <h3 className="text-md font-semibold">
                                Mobile Apps
                            </h3>
                        </div>
                    </div>
                    <div className="text-white p-1 sm:p-5 bg-[#070F1CCC] border-dashed border border-[#FFFFFF66] rounded-tr-2xl rounded-bl-2xl">
                        <div className="relative flex flex-row justify-evenly items-center  ">
                            <img
                                class="absolute right-0 top-0"
                                src="./assets/arrow.svg"
                                alt=""
                            />
                            <img src="./assets/ui-ux.svg" alt="" srcset="" />
                            <h3 className="text-md font-semibold">UI/UX</h3>
                        </div>
                    </div>
                    <div className="text-white p-1 sm:p-5 bg-[#070F1CCC] border-dashed border border-[#FFFFFF66] rounded-tr-2xl rounded-bl-2xl">
                        <div className="relative flex flex-row justify-evenly items-center  ">
                            <img
                                class="absolute right-0 top-0"
                                src="./assets/arrow.svg"
                                alt=""
                            />
                            <img
                                src="./assets/custom-website.svg"
                                alt=""
                                srcset=""
                            />
                            <h3 className="text-md font-semibold">Shopify</h3>
                        </div>
                    </div>
                    <div className="text-white p-1 sm:p-5 bg-[#070F1CCC] border-dashed border border-[#FFFFFF66] rounded-tr-2xl rounded-bl-2xl">
                        <div className="relative flex flex-row justify-evenly items-center  ">
                            <img
                                class="absolute right-0 top-0"
                                src="./assets/arrow.svg"
                                alt=""
                            />
                            <img
                                src="./assets/mobile-apps.svg"
                                alt=""
                                srcset=""
                            />
                            <h3 className="text-md font-semibold">Wordpress</h3>
                        </div>
                    </div>
                    <div className="text-white p-1 sm:p-5 bg-[#070F1CCC] border-dashed border border-[#FFFFFF66] rounded-tr-2xl rounded-bl-2xl">
                        <div className="relative flex flex-row justify-evenly items-center  ">
                            <img
                                class="absolute right-0 top-0"
                                src="./assets/arrow.svg"
                                alt=""
                            />
                            <img src="./assets/ui-ux.svg" alt="" srcset="" />
                            <h3 className="text-md font-semibold">Industry</h3>
                        </div>
                    </div>

                    <div className="relative flex justify-evenly items-top col-span-2 -mt-32 ">
                        <img className="" src="./assets/ushape.svg" alt="" />
                    </div>
                    <div className="flex flex-row justify-end">
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
    );
};

export default OurPortfolio;
