/** @format */

import React from "react";

const Testimonials = () => {
    return (
        <div className="bg-dark-gray text-white">
            <div className="max-w-6xl mx-auto py-10 ">
                <div className="grid grid-cols-2 gap-20">
                    <div className=" bg-center bg-cover ">
                        <img
                            className="bg-center"
                            src="./assets/testimonials.png"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col items-left justify-center text-left">
                        <div className="flex flex-row gap-2 py-5">
                            <img src="./assets/red-arrow.svg" alt="" />
                            <p className="text-primary-red text-base">
                                Clients Feedback
                            </p>
                        </div>
                        <h2 className="text-5xl font-semibold">Testimonials</h2>
                        <div className="flex flex-col">
                            <p className="py-5 text-base max-w-md">
                                Here are some of the thoughts from our clients
                                about us, all the testimonial are from
                                fiverr.com. Read why our clients are preferring
                                us to develop their websites from us.
                            </p>
                            <div className="flex flex-row gap-5 items-center ">
                                <img
                                    className="w-16 h-16"
                                    src="./assets/client-1.png"
                                    alt=""
                                />
                                <div className="flex flex-col">
                                    <h5>Amanda Koila Jaap</h5>
                                    <p>CEo & Founder</p>
                                </div>
                                <div className="flex flex-row flex-grow">
                                    <img src="./assets/five-stars.svg" alt="" />
                                    <img
                                        className=" -mr-20 "
                                        src="./assets/c.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
