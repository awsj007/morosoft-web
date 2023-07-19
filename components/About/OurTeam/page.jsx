/** @format */

import React from "react";

function OurTeam() {
    return (
        <div className=" bg-dark-gray px-6 py-24  ">
            <div className="flex flex-col justify-center items-center">
                <div className="flex gap-2 py-5">
                    <img src="./assets/red-arrow.svg" alt="" />
                    <p className="text-primary-red text-base">Team Members</p>
                </div>
                <h2 className="text-5xl text-white font-semibold">
                    Meet Our Professionals Team
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white max-w-6xl mx-auto py-24">
                <div className="relative px-6">
                    <div className=" relative bg-[#101010] h-[304px] flex flex-row justify-center items-end border-white border-b border-r px-5">
                        <span className="h-[304px] w-full border-t border-l p-5 absolute -top-4 -left-4 opacity-50">
                            {" "}
                        </span>
                        <img
                            className="bg-bottom"
                            src="./assets/noman.png"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-row justify-between items-start">
                        <div className="py-5">
                            <h3 className="text-base">Muhammad Noman</h3>
                            <p className="text-xm opacity-60">CEO</p>
                        </div>
                        <img className="py-5" src="./assets/arrow.svg" alt="" />
                    </div>
                </div>
                <div className="relative px-6">
                    <div className=" relative bg-[#101010] h-[304px] flex flex-row justify-center items-end border-white border-b border-r px-5">
                        <span className="h-[304px] w-full border-t border-l p-5 absolute -top-4 -left-4 opacity-50">
                            {" "}
                        </span>
                        <img
                            className="bg-bottom"
                            src="./assets/ali.png"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-row justify-between items-start">
                        <div className="py-5">
                            <h3 className="text-base">Ghazanfar Ali</h3>
                            <p className="text-xm opacity-60">Manager</p>
                        </div>
                        <img className="py-5" src="./assets/arrow.svg" alt="" />
                    </div>
                </div>
                <div className="relative px-6">
                    <div className=" relative bg-[#101010] h-[304px] flex flex-row justify-center items-end border-white border-b border-r px-5">
                        <span className="h-[304px] w-full border-t border-l p-5 absolute -top-4 -left-4 opacity-50">
                            {" "}
                        </span>
                        <img
                            className="bg-bottom"
                            src="./assets/moeez.png"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-row justify-between items-start">
                        <div className="py-5">
                            <h3 className="text-base">Rao Abdul Moeez</h3>
                            <p className="text-xm opacity-60">
                                Assistant Manager
                            </p>
                        </div>
                        <img className="py-5" src="./assets/arrow.svg" alt="" />
                    </div>
                </div>
                <div className="relative px-6">
                    <div className=" relative bg-[#101010] h-[304px] flex flex-row justify-center items-end border-white border-b border-r px-5">
                        <span className="h-[304px] w-full border-t border-l p-5 absolute -top-4 -left-4 opacity-50">
                            {" "}
                        </span>
                        <img
                            className="bg-bottom"
                            src="./assets/alip.png"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-row justify-between items-start">
                        <div className="py-5">
                            <h3 className="text-base">Muhammad Ali</h3>
                            <p className="text-xm opacity-60">Growth Hacker</p>
                        </div>
                        <img className="py-5" src="./assets/arrow.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
