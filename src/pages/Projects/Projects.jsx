import React from "react";
import { Github } from "lucide-react";
import "./style.css";

const Projects = () => {
    return (
        <div className="education-container px-4">
            <div className="education-content max-w-[1200px] mx-auto">
                <h1 className="text-[#fff] font-bold text-4xl sm:text-5xl md:text-6xl py-[40px] text-center">
                    Projects
                </h1>

                {/* Project cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* First */}
                    <div className="w-full h-auto flex flex-col justify-center border px-5 py-6 gap-6 border-white rounded-3xl">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl sm:text-2xl text-white">Nasiya savdo</h1>
                            <a href="https://github.com/SobitjonZamonov/Nasiya-savdo-backend" className="text-white hover:text-gray-400">
                                <Github />
                            </a>
                        </div>
                        <p className="text-white text-sm sm:text-base">
                            A backend API built exclusively for product sellers to manage
                            halal installment (nasiya) sales with their most frequent customers.
                            It works like a personal note-keeping system where sellers can record
                            products, track customer payments, and monitor all transactions with
                            monthly statistics. The app helps organize and simplify the pay-later
                            selling process in a fair, transparent and securable way.
                        </p>
                    </div>

                    {/* Second */}
                    <div className="w-full h-auto flex flex-col justify-center border px-5 py-6 gap-6 border-white rounded-3xl">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl sm:text-2xl text-white">Liars Bar bot</h1>
                            <a href="https://github.com/SobitjonZamonov/liars-bar-bot" className="text-white hover:text-gray-400">
                                <Github />
                            </a>
                        </div>
                        <p className="text-white text-sm sm:text-base">
                            🕵️‍♂️ Liars Bar - Telegram Bot Version Liars Bar is a classic social
                            bluffing game — reimagined as a Telegram bot. This bot allows friends
                            to play the game directly in a Telegram group or chat, where players take
                            turns bluffing, guessing, and trying to expose the liar among them.
                        </p>
                    </div>

                    {/* Third */}
                    <div className="w-full h-auto flex flex-col justify-center border px-5 py-6 gap-6 border-white rounded-3xl">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl sm:text-2xl text-white">Football Randomiser app</h1>
                            <a href="https://github.com/SobitjonZamonov/football-randomizer-app" className="text-white hover:text-gray-400">
                                <Github />
                            </a>
                        </div>
                        <p className="text-white text-sm sm:text-base">
                            ⚽️ Football Team Randomizer - Web App a web application
                            designed for friends or players who want to organize a fair and
                            fun football match. The app takes a list of player names and randomly
                            divides them into two balanced teams, making sure everyone gets to
                            play — no bias, no arguments!
                        </p>
                    </div>

                    {/* Fourth */}
                    <div className="w-full h-auto flex flex-col justify-center border px-5 py-6 gap-6 border-white rounded-3xl">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl sm:text-2xl text-white">LMS frontend admin</h1>
                            <a href="https://github.com/SobitjonZamonov/lms-frontent-admin" className="text-white hover:text-gray-400">
                                <Github />
                            </a>
                        </div>
                        <p className="text-white text-sm sm:text-base">
                            🎓 Learning Center Management System - Frontend Learning Center Management
                            System, designed for use by educational centers and training institutions. It provides
                            an intuitive and responsive user interface for managing teachers, students, groups,
                            assignments, and attendance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
