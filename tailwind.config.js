/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            fontFamily: {
                satoshi: ["Satoshi", "sans-serif"],
                inter: ["inter", "sans-serif"],
            },
            colors: {
                "primary-red": "#EA1B38",
                "dark-gray": "#070F1C",
            },
            fontSize: {
                "5xl": ["50px", "55px"],
                "9xl": ["120px", "120px"],
                md: ["20px", "22px"],
                base: ["18px", "21.6px"],
                sm: ["16px", "17.6px"],
                xm: ["12px", "20px"],
            },
            backgroundImage: {
                "hero-pattern": "url('/assets/banner.png')",
                "background-pattern": "url('/assets/background-pattern.svg')",
                "background-our-mission":
                    "url('/assets/background-our-mission.svg')",
            },
        },
    },
    plugins: [],
};
