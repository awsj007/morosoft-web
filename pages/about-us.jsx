/** @format */
import Layout from "@/components/common/Layout";
import HeroSection from "@/components/About/HeroSection/page.jsx";
import OurTeam from "@/components/About/OurTeam/page.jsx";
import React from "react";

function AboutUs() {
    return (
        <>
            <Layout>
                <HeroSection />
                <OurTeam />
            </Layout>
        </>
    );
}

export default AboutUs;
