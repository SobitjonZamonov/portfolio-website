import React from "react";
import Instaram from "../../assets/icons/instagramIcon";
import Telegram from "../../assets/icons/telegramIcon";
import Github from "../../assets/icons/githubIcon";
import Linkendin from "../../assets/icons/linkedinIcon";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#0A061D] px-4 py-8">
            <div className="flex flex-col justify-center items-center gap-8 mt-20 md:mt-40 px-4 md:px-10">
                <h1 className="font-bold text-3xl md:text-5xl text-white text-center">Contact Information</h1>
                
                <div className="w-full max-w-md md:max-w-lg border border-white"></div>

                <div className="flex flex-col lg:flex-row gap-10 items-center justify-center w-full">
                    {/* Contact Cards */}
                    <div className="flex flex-col gap-5 w-full max-w-[400px]">
                        <button className="w-full flex justify-start items-center h-[80px] rounded-3xl border border-white cursor-pointer px-4">
                            <img src="/emailIcon.svg" alt="email Icon" className="w-10 h-10" />
                            <div className="flex flex-col ml-4 text-left">
                                <label className="text-[16px] font-medium text-white">Email</label>
                                <a href="#" className="text-white text-[18px] break-all">sobitjonzamonov@gmail.com</a>
                            </div>
                        </button>

                        <button className="w-full flex justify-start items-center h-[80px] rounded-3xl border border-white cursor-pointer px-4">
                            <img src="/phoneIcon.svg" alt="phone Icon" className="w-10 h-10" />
                            <div className="flex flex-col ml-4 text-left">
                                <label className="text-[16px] font-medium text-white">Phone</label>
                                <a href="#" className="text-white text-[18px]">+998 (94) 120-57-26</a>
                            </div>
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col items-center gap-5">
                        <p className="text-2xl text-white font-light text-center">Connect With Me</p>
                        <div className="flex gap-5 flex-wrap justify-center">
                            <Instaram />
                            <Telegram />
                            <Github />
                            <Linkendin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
