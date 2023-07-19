/** @format */

import React from "react";

const OurPortfolio = () => {
    return (
        <div class="text-white body-font bg-[#02050A]">
            <div class="px-5 mx-auto">
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
                    <div className="md:max-w-3xl mx-auto pt-6">
                        <form className="w-100" action="">
                            <div className="relative flex">
                                <select
                                    className="caret-white md:w-[150px] text-left px-3 md:px-8 border-0  rounded-l-full bg-primary-red text-white focus:border-primary-red focus:ring-primary-red"
                                    name=""
                                    id=""
                                >
                                    <option
                                        className="caret-white tex-white bg-primary-red focus:border-primary-red focus:ring-primary-red rounded-lg hover:bg-white "
                                        value="All"
                                    >
                                        All
                                    </option>
                                    <option
                                        className="caret-white tex-white bg-primary-red focus:border-primary-red focus:ring-primary-red "
                                        value="All"
                                    >
                                        Wordpress
                                    </option>
                                    <option
                                        className="caret-white tex-white bg-primary-red focus:border-primary-red focus:ring-primary-red "
                                        value="All"
                                    >
                                        Shopify
                                    </option>
                                </select>

                                <input
                                    className="md:w-[500px] rounded-r-full border-0 text-[#B9B9B9CC] focus:border-primary-red focus:ring-primary-red  "
                                    type="text"
                                    placeholder="Search any things"
                                />
                                <span class="absolute inset-y-0 right-4 flex items-center ">
                                    <button
                                        type="submit"
                                        class="p-1 focus:outline-none focus:shadow-outline"
                                    >
                                        <svg
                                            width="17"
                                            height="17"
                                            viewBox="0 0 17 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.4583 10.0833H10.7342L10.4775 9.83584C11.4069 8.75786 11.9177 7.38164 11.9167 5.95834C11.9167 4.77989 11.5672 3.62791 10.9125 2.64806C10.2578 1.66822 9.32723 0.904526 8.23849 0.453554C7.14975 0.00258165 5.95173 -0.115413 4.79592 0.11449C3.64012 0.344394 2.57845 0.91187 1.74516 1.74516C0.91187 2.57845 0.344394 3.64012 0.11449 4.79592C-0.115413 5.95173 0.00258165 7.14975 0.453554 8.23849C0.904526 9.32723 1.66822 10.2578 2.64806 10.9125C3.62791 11.5672 4.77989 11.9167 5.95834 11.9167C7.43417 11.9167 8.79084 11.3758 9.83584 10.4775L10.0833 10.7342V11.4583L14.6667 16.0325L16.0325 14.6667L11.4583 10.0833ZM5.95834 10.0833C3.67584 10.0833 1.83334 8.24084 1.83334 5.95834C1.83334 3.67584 3.67584 1.83334 5.95834 1.83334C8.24084 1.83334 10.0833 3.67584 10.0833 5.95834C10.0833 8.24084 8.24084 10.0833 5.95834 10.0833Z"
                                                fill="#939393"
                                                fill-opacity="0.6"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-10 md:gap-y-16 text-black md:max-w-4xl mx-auto py-20">
                    <div className=" text-white p-3 sm:p-5 bg-[#070F1CCC] border-dashed border border-[#FFFFFF66] rounded-tr-3xl rounded-bl-3xl">
                        <div className="relative flex flex-row justify-left items-center  ">
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
                            <h3 className="text-md font-semibold ml-6">
                                Custom website
                            </h3>
                        </div>
                    </div>
                    <div className="text-white p-3 sm:p-5 bg-[#070F1CCC] border-dashed border border-[#FFFFFF66] rounded-tr-3xl rounded-bl-3xl">
                        <div className="relative flex flex-row justify-left items-center  ">
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
                            <h3 className="text-md font-semibold ml-6">
                                Mobile Apps
                            </h3>
                        </div>
                    </div>
                    <div className="text-white p-3 sm:p-5 bg-[#070F1CCC] border-dashed border border-[#FFFFFF66] rounded-tr-3xl rounded-bl-3xl">
                        <div className="relative flex flex-row justify-left items-center  ">
                            <img
                                class="absolute right-0 top-0"
                                src="./assets/arrow.svg"
                                alt=""
                            />
                            <img src="./assets/ui-ux.svg" alt="" srcset="" />
                            <h3 className="text-md font-semibold ml-6">
                                UI/UX
                            </h3>
                        </div>
                    </div>
                    <div className="text-white p-3 sm:p-5 bg-[#070F1CCC] border-dashed border border-[#FFFFFF66] rounded-tr-3xl rounded-bl-3xl">
                        <div className="relative flex flex-row justify-left items-center  ">
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
                            <h3 className="text-md font-semibold ml-6">
                                Shopify
                            </h3>
                        </div>
                    </div>
                    <div className="text-white p-3 sm:p-5 bg-[#070F1CCC] border-dashed border border-[#FFFFFF66] rounded-tr-3xl rounded-bl-3xl">
                        <div className="relative flex flex-row justify-left items-center  ">
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
                            <h3 className="text-md font-semibold ml-6">
                                Wordpress
                            </h3>
                        </div>
                    </div>
                    <div className="text-white p-3 sm:p-5 bg-[#070F1CCC] border-dashed border border-[#FFFFFF66] rounded-tr-3xl rounded-bl-3xl">
                        <div className="relative flex flex-row justify-left items-center  ">
                            <img
                                class="absolute right-0 top-0"
                                src="./assets/arrow.svg"
                                alt=""
                            />
                            <img src="./assets/ui-ux.svg" alt="" srcset="" />
                            <h3 className="text-md font-semibold ml-6">
                                Industry
                            </h3>
                        </div>
                    </div>

                    <div className="relative flex justify-evenly items-top md:col-span-2 -mt-32 ">
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
