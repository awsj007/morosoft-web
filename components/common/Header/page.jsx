/** @format */
import React from "react";

const Header = () => {
    return (
        <>
            <header className="container-xl"> 
                <section className="grid grid-cols-4 gap-4">
                    <div className="">
                        <h1>Logo</h1>
                    </div>
                    <nav className="">
                        <h1>Menu</h1>
                    </nav>
                    <div className="">
                        <h1>Search Icon</h1>
                    </div>
                </section>
            </header>
        </>
    )
};

export default Header;
