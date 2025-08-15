import React from 'react';
import { Github, Mail } from "lucide-react";

const Footer = () => {
    return (
        <div className="w-full bg-[#0A061D] py-4 flex justify-center items-center px-4">
            <div className="w-full max-w-[1200px]">
                {/* Top section */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h1 className="text-[16px] sm:text-[18px] text-white font-bold">
                        Follow me
                    </h1>
                    <div className="flex gap-4">
                        <a
                            href="mailto:sobitjonzamonov@gmail.com"
                            className="text-white hover:text-gray-400 transition"
                        >
                            <Mail />
                        </a>
                        <a
                            href="https://github.com/SobitjonZamonov"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-400 transition"
                        >
                            <Github />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white my-3"></div>

                {/* Bottom section */}
                <div>
                    <h2 className="text-white text-center text-[14px] sm:text-[16px]">
                        zamonov sobitjon ©
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;
