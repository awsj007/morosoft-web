/** @format */
import Layout from "@/components/common/Layout";
import HeroSection from "@/components/Contact/HeroSection/page.jsx";
import Form from "@/components/Contact/Form/page.jsx";

import React from "react";

function Contact() {
    return (
        <>
            <Layout>
                <HeroSection />
                <Form />
            </Layout>
        </>
    );
}

export default Contact;
