/** @format */

import React, { useEffect, useState } from "react";
import anime from "animejs";
const SplashScreen = ({ finishLoading }) => {
    const [isMounted, setIsMounted] = useState(false);
    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        });
        loader.add({
            target: "#logo",
            delay: 100,
            scale: 1.25,
            duration: 500,
            easing: "easeInOutExpo",
        });
    };
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10);
        animate();
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className="flex flex-col h-screen items-center justify-center bg-[#02050A] text-white"
            isMounted={isMounted}
        >
            <div
                class="inline-block h-32 w-32 animate-spin rounded-full border-4 border-solid border-current border-r-primary-red align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
            ></div>
            <img
                id="logo"
                className=" animate-bounce py-5 duration-1000 transition ease-in-out delay-1000 "
                src="./assets/splashscreen-logo.svg"
                alt=""
            />
            <p className=" animate-bounce text-md uppercase leading-9 tracking-widest">
                LOADING
            </p>
        </div>
    );
};
export default SplashScreen;
