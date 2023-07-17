/** @format */

import React from "react";

const OurServices = () => {
    return (
        <div className="grid place-items-center min-h-screen">
            <div className="p-4 grid gap-4 max-w-7xl sm:grid-cols-2 md:grid-cols-4">
                <h1 className="text-4xl font-extrabold sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-4 md:col-span-3 md:grid-cols-3">
                    <span className="md:col-span-2"></span> Grid Layout With
                    Tailwind Css
                </h1>
                <p className="sm:row-start-2 sm:col-start-2 sm:self-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae esse dolore asperiores error ullam quo fugiat,
                    dolor at, maxime reiciendis dicta praesentium tenetur illum
                    nam et! Quo, officia. Saepe, labore.
                </p>
                <div className="h-16  bg-blue-500 sm:h-auto sm:aspect-square"></div>
                <div className="h-16 bg-blue-500 sm:h-auto sm:aspect-square"></div>
                <div className="h-16 bg-pink-500 sm:h-auto sm:aspect-square"></div>
                <div className="h-16 bg-blue-500 sm:h-auto sm:aspect-square"></div>
                <div className="h-16 bg-pink-500 sm:h-auto sm:aspect-square"></div>
                <div className="h-16 bg-blue-500 sm:h-auto sm:aspect-square"></div>
                <div className="h-16 bg-blue-500 sm:h-auto sm:aspect-square"></div>
                <div className="h-16 bg-pink-500 sm:h-auto sm:aspect-square"></div>
                <p className="sm:self-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellat, maxime doloribus soluta laboriosam ullam harum
                    ipsa nam libero molestias quidem distinctio optio, saepe id.
                    Temporibus cum esse veniam quis doloremque?
                </p>
            </div>
        </div>
    );
};

export default OurServices;
