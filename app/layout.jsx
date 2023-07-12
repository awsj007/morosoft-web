/** @format */
import "@styles/globals.css";
export const metadata = {
    title: "Morosoft",
    description: "Lets Innovate ",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};
export default RootLayout;
