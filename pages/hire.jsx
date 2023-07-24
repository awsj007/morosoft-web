/** @format */
import Layout from "@/components/common/Layout";
import HeroSection from "@/components/Hire/HeroSection/page.jsx";
import Packages from "@/components/Hire/Packages/page.jsx";
import React from "react";

function Hire() {
    return (
        <>
            <Layout>
                <HeroSection />
                <Packages />
            </Layout>
        </>
    );
}

export default Hire;
