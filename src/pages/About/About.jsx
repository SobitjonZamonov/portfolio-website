import React from "react";
import Code from "../../assets/icons/code";
import Javascript from "../../assets/icons/javascript";
import Reactjs from "../../assets/icons/react";
import Html from "../../assets/icons/html";
import Css from "../../assets/icons/css";
import Nest from "../../assets/icons/nestjs";
import Typescript from "../../assets/icons/typescript";
import "./css/style.css";

const skillsData = {
    coding: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 65 },
        { name: "Python", level: 75 },
    ],
    professional: [
        { name: "Web Design", level: 95 },
        { name: "Web Development", level: 67 },
        { name: "Graphic Design", level: 85 },
        { name: "SEO Marketing", level: 60 },
    ],
};

const ProgressBar = ({ name, level }) => (
    <div className="mb-5">
        <div className="flex justify-between mb-1">
            <span>{name}</span>
            <span>{level}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
            <div
                className="bg-blue-400 h-3 rounded-full"
                style={{ width: `${level}%` }}
            ></div>
        </div>
    </div>
);

const About = () => {
    return (
        <div className="about-container">
            {/* Text Section */}
            <div className="about-content">
                <p className="about-text">
                    <span className="about-title">About Me</span>
                    My name is Sobitjon Zamonov, a 17-year-old passionate Fullstack Developer with a deep enthusiasm for
                    creating dynamic, user-friendly, and visually appealing web applications. From an early age, I have
                    been fascinated by technology and problem-solving, which naturally led me into the world of
                    programming and software development. Over time, I have developed strong expertise in both frontend
                    and backend technologies, enabling me to build complete, high-performance, and scalable applications
                    from scratch.
                    <br/>
                    <br/>
                    I specialize in JavaScript (ES6+), TypeScript, and Python, and have hands-on experience working with
                    popular backend frameworks such as Node.js, Express.js, and NestJS. On the frontend, I am skilled in
                    HTML5, CSS, SCSS, TailwindCSS, React (with Vite), and have also explored modern frameworks like
                    Next.js. My database knowledge covers PostgreSQL, MongoDB, and MySQL, and I am experienced with
                    performance optimization tools such as Redis and WebSockets. In addition, I am familiar with Docker,
                    Git/GitHub, and the development of RESTful APIs and Telegram bots.
                    <br/>
                    <br/>
                    I completed my professional training at the Najot Ta’lim Education Software Center, one of
                    Uzbekistan’s leading IT education institutions. There, I successfully graduated from the Fullstack
                    Web Development course, gaining solid experience through real-world projects that integrated modern
                    technologies like React.js, Node.js, Express.js, MongoDB, and PostgreSQL. This program not only
                    strengthened my technical skills but also taught me the importance of writing clean, maintainable
                    code, effective teamwork using Git and GitHub, and deploying fully functional web applications.
                    <br/>
                    <br/>
                    Beyond my core full-stack expertise, I have a solid understanding of C and Python, which has
                    deepened my knowledge of programming fundamentals and enhanced my problem-solving abilities. I am a
                    lifelong learner, constantly exploring emerging technologies, frameworks, and tools to stay ahead in
                    the ever-evolving software development industry.
                    <br/>
                    <br/>
                    My ultimate goal is to apply and expand my skills by working on innovative, high-quality projects
                    that deliver real value to users. I aim to grow professionally through hands-on experience,
                    collaboration with talented teams, and continuous learning. I am committed to transforming creative
                    ideas into impactful digital solutions and becoming a valuable contributor to any development team I
                    join.
                </p>
            </div>

            {/* Skills Section */}
            <h1 className="text-4xl md:text-6xl text-white text-center font-bold py-8">
                My Skills
            </h1>
            <div className="about-cards text-white">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Coding Skills */}
                    <div className="w-full lg:w-[500px] border border-white rounded-3xl p-6">
                        <h2 className="text-2xl font-bold mb-6">
                            <span className="text-[#6607e3]">Coding</span> Skills
                        </h2>
                        {skillsData.coding.map((skill) => (
                            <ProgressBar key={skill.name} {...skill} />
                        ))}
                    </div>

                    {/* Professional Skills */}
                    <div className="w-full lg:w-[500px] border border-white rounded-3xl p-6">
                        <h2 className="text-2xl font-bold mb-6">
                            <span className="text-[#6607e3]">Professional</span> Skills
                        </h2>
                        {skillsData.professional.map((skill) => (
                            <ProgressBar key={skill.name} {...skill} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Icons */}
            <div className="about-icons-wrapper">
                <div className="about-icons">
                    <Code />
                    <Javascript />
                    <Typescript />
                    <Reactjs />
                    <Html />
                    <Css />
                    <Nest />
                </div>
            </div>
        </div>
    );
};

export default About;