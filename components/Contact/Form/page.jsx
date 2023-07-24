/** @format */

import React from "react";
import Map from "@/components/Contact/Form/map.jsx";
function Form() {
    return (
        <div className="bg-[#02050A] px-6 lg:px-8 py-12 relative ">
            <h2 className="text-xl font-medium text-white max-w-6xl mx-auto py-12">
                Let’s Start a Project together!
            </h2>
            <iframe
                className="w-full h-[450px] mb-24"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.7403172851036!2d73.06024527467379!3d33.63797463949306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95aeab79bf35%3A0x6fe0ff50c10afe0b!2sMorosoft%20Technologies!5e0!3m2!1sen!2s!4v1690183783927!5m2!1sen!2s"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="max-w-md mx-auto bg-dark-gray teext-white py-20 px-10 absolute top-32 right-24  ">
                <form className="flex flex-col gap-5 justify-end  " action="">
                    <input
                        className="bg-transparent border-0 border-b border-opacity-40 opacity-40 text-white"
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        className="bg-transparent border-0 border-b border-opacity-40 opacity-40 text-white"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        className="bg-transparent border-0 border-b border-opacity-40 opacity-40 text-white"
                        type="number"
                        placeholder="Phone Number"
                    />
                    <input
                        className="bg-transparent border-0 border-b border-opacity-40 opacity-40 text-white"
                        type="text"
                        placeholder="Message"
                    />
                    <input
                        className="bg-transparent border-0 border-opacity-40 opacity-40 text-white py-10"
                        type="file"
                        name="Upload File"
                        id=""
                    />
                    <button className="bg-primary-red w-full rounded-md text-white py-2">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Form;
