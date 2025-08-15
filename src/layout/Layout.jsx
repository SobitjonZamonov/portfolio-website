import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SideBar from "./components/sidebarIcon";
import CloseIcon from "./components/closeIcon";
import Footer from "./Footer.jsx";

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Education", path: "/education" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <>
            <header className="bg-[#0A061D] w-full fixed top-0 left-0 z-50 shadow-lg">
                <div className="flex justify-between items-center px-6 md:px-12 py-4">
                    {/* Logo */}
                    <h1 className="font-bold text-2xl md:text-3xl text-white">
                        <Link to="/">
                            <i>Sobitjon_911</i>
                        </Link>
                    </h1>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex gap-10">
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="font-semibold text-white hover:text-gray-300 transition"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Phone Number (Desktop) */}
                    <div className="hidden md:block text-white font-medium">
                        <a href="tel:+998941205726" className="hover:text-gray-300 transition">
                            +998 (94) 120-57-26
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white focus:outline-none"
                    >
                        {isOpen ? <CloseIcon /> : <SideBar />}
                    </button>
                </div>

                {/* Mobile Sidebar */}
                <div
                    className={`md:hidden fixed top-10 right-0 w-[130px] bg-[#0A061D] h-full px-4 py-6 z-40 transform transition-transform duration-300 ease-in-out ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <ul className="flex flex-col gap-6 mt-12">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    onClick={toggleMenu}
                                    to={item.path}
                                    className="font-semibold text-white hover:text-gray-300 transition"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        {/* Phone Number (Mobile) */}
                        <li className="mt-6 text-white font-medium">
                            <a href="tel:+998941205726" className="hover:text-gray-300 transition">
                                +998 (94) 120-57-26
                            </a>
                        </li>
                    </ul>
                </div>
            </header>

            {/* Main Content */}
            <main className="min-h-screen">
                <Outlet />
            </main>

            <Footer />
        </>
    );
};

export default Layout;
