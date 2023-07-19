/** @format */
import Layout from "@/components/common/Layout";
import HeroSection from "@/components/OurServices/HeroSection/page.jsx";
import OurServices from "@/components/common/OurServices/page.jsx";
import Testimonials from "@components/common/Testimonials/page";
import React from "react";

function Services() {
    return (
        <>
            <Layout>
                <HeroSection />
                <OurServices />
                <Testimonials />
            </Layout>
        </>
    );
}

export default Services;
