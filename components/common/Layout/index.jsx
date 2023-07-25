/** @format */
"use client";
import Header from "@/components/common/Header/page.jsx";
import Footer from "@/components/common/Footer/page.jsx";
import SplashScreen from "@components/SplashScreen/page";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isLoading, setIsLoading] = useState(isHome);

    useEffect(() => {
        if (isLoading) return;
    }, [isLoading]);
    return (
        <>
            {isLoading && isHome ? (
                <SplashScreen finishLoading={() => setIsLoading(false)} />
            ) : (
                <>
                    <Header />
                    {children}
                    <Footer />
                </>
            )}
        </>
    );
}
