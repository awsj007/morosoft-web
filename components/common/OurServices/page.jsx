/** @format */

import React from "react";

const OurServices = () => {
    return (
        <div class="text-white body-font bg-light-gray">
            <div class="container px-5 py-16 mx-auto">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex flex-row gap-2 py-5">
                        <img src="./assets/red-arrow.svg" alt="" />
                        <p className="text-primary-red text-base">
                            Popular Services
                        </p>
                    </div>
                    <h2 className="text-5xl font-semibold">
                        We Offer a wide variety of services
                    </h2>
                    <p className=" w-1/2 mx-auto py-5 text-base">
                        We love what we do and we do what our clients love &
                        work with great clients all over the world to create
                        thoughtful and purposeful websites.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 md:gap-32 max-w-5xl mx-auto ">
                    <div className="divide-y divide-dashed md:order-1 order-2 px-6   ">
                        <div className="flex flex-row justify-between items-center py-10">
                            <img src="./assets/service-icon-1.svg" alt="" />
                            <p className="px-5">
                                We develop professional websites for our
                                clients.
                            </p>
                            <img src="./assets/arrow.svg" alt="" />
                        </div>
                        <div className="flex flex-row justify-between items-center py-10">
                            <img src="./assets/service-icon-2.svg" alt="" />
                            <p className="px-5">
                                We design professional looking websites.
                            </p>
                            <img src="./assets/arrow.svg" alt="" />
                        </div>
                        <div className="flex flex-row justify-between items-center py-10">
                            <img src="./assets/service-icon-3.svg" alt="" />
                            <p className="px-5">
                                We build professional web applications.
                            </p>
                            <img src="./assets/arrow.svg" alt="" />
                        </div>
                        <div className="flex flex-row justify-between items-center py-10">
                            <img src="./assets/service-icon-4.svg" alt="" />
                            <p className="px-5">
                                Graphic Designing is one of our core service.
                            </p>
                            <img src="./assets/arrow.svg" alt="" />
                        </div>
                        <div className="flex flex-row justify-between items-center py-10">
                            <img src="./assets/service-icon-5.svg" alt="" />
                            <p className="px-5">
                                We are highly efficient in developing Mobile
                                Apps.
                            </p>
                            <img src="./assets/arrow.svg" alt="" />
                        </div>
                        <div className="flex flex-row justify-between items-center py-10">
                            <img src="./assets/service-icon-6.svg" alt="" />
                            <p className="px-5">
                                We do SEO for better Marketing for our clients.
                            </p>
                            <img src="./assets/arrow.svg" alt="" />
                        </div>
                    </div>
                    <div className="py-6 flex flex-col justify-between md:order-2 order-1 mb-24 md:mb-0">
                        <img src="./assets/popular-service.png" alt="" />

                        <div className="flex flex-row justify-end items-start mr-8 ">
                            <button className="w-[128px] h-[128px] bg-primary-red text-white rounded-full">
                                <img
                                    src="./assets/arrow.svg"
                                    alt=""
                                    className="w-5 h-5 mx-auto "
                                />
                                Explores
                            </button>
                        </div>
                        <img
                            className="-mt-72"
                            src="./assets/ushape.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
