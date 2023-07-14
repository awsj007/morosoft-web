/** @format */

import Header from "@/components/common/Header/page.jsx";
import Footer from "@/components/common/Footer/page.jsx";

const RootLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default RootLayout;
