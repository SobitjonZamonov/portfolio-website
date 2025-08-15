import React from "react";
import "./css/style.css";
import Instagram from "../../assets/icons/instagramIcon";
import Telegram from "../../assets/icons/telegramIcon";
import Github from "../../assets/icons/githubIcon";
import Linkedin from "../../assets/icons/linkedinIcon";
import TextType from "./css/TextType";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="relative min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 md:gap-28 mt-[60px] bg-[#0A061D] px-5 py-10 overflow-hidden">
            {/* Left Content */}
            <div className="text-center md:text-left z-10 max-w-2xl">
                <TextType
                    text={["Hi, I'm Sobitjon"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    className="text-white text-3xl md:text-5xl"
                    cursorCharacter="|"
                />

                <p className="text-2xl md:text-4xl text-white mt-4">Frontend Developer</p>

                <p className="text-white text-base md:text-lg mt-4 leading-relaxed">
                    My name is Sobitjon Zamonov, a 17-year-old passionate Full-Stack
                    Developer with hands-on experience in building dynamic and responsive
                    web applications using <strong>Node.js</strong>, <strong>React.js</strong>, <strong>NestJS</strong>, and <strong>Next.js</strong>.
                    In addition to my full-stack expertise, I have a solid understanding
                    of <strong>C</strong> and <strong>Python</strong>, which has strengthened my grasp of core programming
                    fundamentals. I am a lifelong learner, always eager to explore new
                    technologies and transform creative ideas into impactful digital
                    experiences.
                </p>

                {/* Social Icons */}
                <div className="flex justify-center md:justify-start gap-4 pt-4">
                    <Instagram />
                    <Telegram />
                    <Github />
                    <Linkedin />
                </div>

                {/* Buttons */}
                <div className="flex justify-center md:justify-start gap-5 pt-4">
                    <Link to="/about">
                        <button className="glow-on-hover1">More About Me</button>
                    </Link>
                    <button
                        className="glow-on-hover2"
                        onClick={() => window.open("./zs.pdf", "_blank")}
                    >
                        CV
                    </button>
                </div>
            </div>

            {/* Avatar Image */}
            <div className="hidden md:block z-10">
                <img
                    src="/avatar.webp"
                    alt="avatar"
                    width={400}
                    className="rounded-[100px] shadow-2xl shadow-white"
                />
            </div>
        </div>
    );
};

export default Home;
