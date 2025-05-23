"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Projects", href: "/#projects" },
        { name: "Skills", href: "/#skills" },
        { name: "Contact", href: "/#contact" },
    ];

    const handleNavigation = (href: string) => {
        setIsOpen(false);
        if (href === "/") {
            router.push(href);
        } else {
            const [path, hash] = href.split("#");
            if (pathname !== path) {
                router.push(href);
            } else {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        }
    };

    const isActive = (href: string) => {
        if (href === "/") return pathname === href;
        const [path, hash] = href.split("#");
        if (pathname !== path) return false;
        if (!hash) return false;
        const element = document.getElementById(hash);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-base-100/80 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link
                        href="/"
                        className="text-xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                    >
                        Biruk GT
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleNavigation(item.href)}
                                className={`relative group font-medium transition-colors ${
                                    isActive(item.href)
                                        ? "text-primary font-semibold"
                                        : "text-base-content/90 hover:text-primary"
                                }`}
                            >
                                {item.name}
                                <span
                                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform origin-left transition-transform duration-300 ${
                                        isActive(item.href)
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                                />
                            </button>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className="btn btn-ghost btn-circle relative overflow-hidden group bg-base-200/50 hover:bg-base-300/50"
                            aria-label="Toggle theme"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            {theme === "light" ? (
                                <svg
                                    className="w-5 h-5 text-primary relative z-10"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-5 h-5 text-accent relative z-10"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            )}
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className="btn btn-ghost btn-circle relative overflow-hidden group bg-base-200/50 hover:bg-base-300/50"
                            aria-label="Toggle theme"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            {theme === "light" ? (
                                <svg
                                    className="w-5 h-5 text-primary relative z-10"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-5 h-5 text-accent relative z-10"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            )}
                        </motion.button>
                        <button
                            className="btn btn-ghost btn-sm relative overflow-hidden group bg-base-200/50 hover:bg-base-300/50"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <svg
                                className="h-6 w-6 relative z-10 text-base-content"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1 bg-base-200/90 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
                                {menuItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() =>
                                            handleNavigation(item.href)
                                        }
                                        className={`w-full text-left px-3 py-2 rounded-md transition-colors relative group ${
                                            isActive(item.href)
                                                ? "text-primary font-semibold bg-base-300/50"
                                                : "text-base-content/90 hover:text-primary hover:bg-base-300/50"
                                        }`}
                                    >
                                        {item.name}
                                        <span
                                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform origin-left transition-transform duration-300 ${
                                                isActive(item.href)
                                                    ? "scale-x-100"
                                                    : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
