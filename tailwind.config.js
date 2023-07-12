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
                "9xl": ["120px", "120px"],
                base: ["18px", "21.6px"],
            },
            backgroundImage: {
                "hero-pattern": "url('/assets/banner.png')",
            },
        },
    },
    plugins: [],
};
