/** @format */
import Layout from "@/components/common/Layout";
import HeroSection from "@/components/Blog/HeroSection/page.jsx";
import OurBlog from "@/components/Blog/OurBlog/page.jsx";

import React from "react";

function Blog() {
    return (
        <>
            <Layout>
                <HeroSection />
                <OurBlog />
            </Layout>
        </>
    );
}

export default Blog;
