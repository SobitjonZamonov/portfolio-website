import React from "react";
import "./css/style.css";

const Education = () => {
    return (
        <div className="education-container">
            <div className="education-content">
                <h1 className="text-[#fff] font-bold text-6xl py-[60px]">Education</h1>
                {/*//first*/}
                <div
                    className="w-full h-[200px] flex justify-between items-center border px-[20px] md:px-[40px] border-white rounded-3xl">
                    <div>
                        <h2 className="font-normal text-[20px] text-[#fff] md:text-3xl">Bootcamp Foundation</h2>
                        <p className="font-normal text-[20px] text-[#fff]">Python & C language basics</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <button className="glow-on-hover1" onClick={() => window.open('./sertifikat.png', '_blank')}>View Certificate</button>
                        <div>
                            <label className="font-normal text-[18px] text-[#fff]">Data:</label>
                            <p className="font-normal text-[14px] text-[#fff]">26.032024 - 24.08.2025</p>
                        </div>
                    </div>
                </div>
                {/*// second*/}
                <div
                    className="w-full h-[200px] flex justify-between px-[20px] md:px-[40px] items-center border border-white rounded-3xl">
                    <div>
                        <h2 className="font-normal text-[20px] text-[#fff] md:text-3xl">Bootcamp Full-Stack</h2>
                        <p className="font-normal text-[20px] text-[#fff]">Node.js & React.js Full-Stack</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <button className="glow-on-hover1" onClick={() => window.open('./sertifikat.png', '_blank')}>View Certificate</button>
                        <div>
                            <label className="font-normal text-[18px] text-[#fff]">Data:</label>
                            <p className="font-normal text-[14px] text-[#fff]">10.09.2024 - 01.05.2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Education;