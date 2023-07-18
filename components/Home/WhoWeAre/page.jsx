/** @format */

import React from "react";

const WhoWeAre = () => {
    return (
        <div class="text-white body-font bg-[#02050A]">
            <div class="max-w-6xl px-5 py-24 mx-auto">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex flex-row gap-2 py-5">
                        <img src="./assets/red-arrow.svg" alt="" />
                        <p className="text-primary-red text-base">
                            About Company
                        </p>
                    </div>
                    <h2 className="text-5xl font-semibold">WHO WE ARE?</h2>
                    <p className=" w-1/2 mx-auto py-5">
                        Morosoft is one of the fastest growing IT company in
                        Pakistan, delivering a broad range of products solutions
                        and services across industries in all over the world.
                    </p>
                    <button className="bg-primary-red text-white rounded-full px-7 py-2">
                        Read More
                    </button>
                </div>

                <div className="grid grid-col-1 md:grid-cols-3 gap-4 text-black py-10">
                    <div className="bg-white bg-background-pattern p-3 sm:p-10 bg-no-repeat bg-cover bg-bottom">
                        <div className="flex flex-row justify-between items-center pb-3">
                            <h3 className="text-md font-semibold">
                                Our Vision
                            </h3>
                            <img
                                src="./assets/our-vision.svg"
                                alt=""
                                srcset=""
                            />
                        </div>
                        <p className="text-sm font-light">
                            Bring inspiration in the life of Entrepreneur,
                            Industrialist, Businessman, and make the world a
                            better place for everyone.
                        </p>
                    </div>
                    <div className="bg-[#070F1C] text-white bg-background-our-mission p-3 sm:p-10 bg-no-repeat bg-cover bg-bottom">
                        <div className="flex flex-row justify-between items-center pb-3">
                            <h3 className="text-md font-semibold">
                                Our Mission
                            </h3>
                            <img
                                src="./assets/our-mission.svg"
                                alt=""
                                srcset=""
                            />
                        </div>
                        <p className="text-sm font-light">
                            Shape Idea's, Ensure Security, improve customer
                            satisfaction, engage Prospects bring leads and
                            increase Profitability.
                        </p>
                    </div>
                    <div className="bg-[#070F1C] text-white bg-background-our-mission p-3 sm:p-10 bg-no-repeat bg-cover bg-bottom">
                        <div className="flex flex-row justify-between items-center pb-3">
                            <h3 className="text-md font-semibold">Our Goal</h3>
                            <img src="./assets/our-goal.svg" alt="" srcset="" />
                        </div>
                        <p className="text-sm font-light">
                            Shape Idea's, Ensure Security, improve customer
                            satisfaction, engage Prospects bring leads and
                            increase Profitability.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
