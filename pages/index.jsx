/** @format */
import Layout from "@/components/common/Layout";
import HeroSection from "@/components/Home/HeroSection/page.jsx";
import WhoWeAre from "@/components/Home/WhoWeAre/page.jsx";
import OurPortfolio from "@/components/Home/OurPortfolio/page.jsx";
import OurServices from "@/components/Home/OurServices/page.jsx";
import Testimonials from "@/components/common/Testimonials/page.jsx";
function Home() {
    return (
        <>
            <Layout>
                <HeroSection />
                <WhoWeAre />
                <OurPortfolio />
                <OurServices />
                <Testimonials />
            </Layout>
        </>
    );
}
export default Home;
