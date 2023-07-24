/** @format */
import Layout from "@/components/common/Layout";
import HeroSection from "@/components/OurPortfolio/HeroSection/page.jsx";
import OurPortfolio from "@/components/common/OurPortfolio/page.jsx";

import React from "react";

function Portfolio() {
    return (
        <>
            <Layout>
                <HeroSection />
                <OurPortfolio />
            </Layout>
        </>
    );
}

export default Portfolio;
