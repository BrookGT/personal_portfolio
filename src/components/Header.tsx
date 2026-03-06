"use client";

import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNav = (href: string) => {
        setIsOpen(false);
        if (!href.startsWith("#")) return;
        const el = document.getElementById(href.replace("#", ""));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-base-100/80 backdrop-blur-xl shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <motion.div
                className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary"
                style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                    >
                        Biruk.
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-base-200 border border-base-300 text-sm">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Available for collaboration
                        </div>
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNav(link.href)}
                                className="relative text-sm font-medium text-base-content/80 hover:text-primary transition-colors"
                            >
                                <span>{link.label}</span>
                                <motion.span
                                    layoutId="nav-underline"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent origin-left scale-x-0"
                                    initial={false}
                                    whileHover={{ scaleX: 1 }}
                                    style={{ transformOrigin: "left" }}
                                />
                            </button>
                        ))}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() =>
                                    setTheme(
                                        theme === "dark" ? "light" : "dark",
                                    )
                                }
                                className="btn btn-ghost btn-sm border border-base-300"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? "Light" : "Dark"}
                            </button>
                            <Link
                                href="#contact"
                                className="btn btn-primary btn-sm shadow-ring"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNav("#contact");
                                }}
                            >
                                Book a call
                            </Link>
                        </div>
                    </nav>

                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            className="p-2 rounded-lg hover:bg-base-200 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <svg
                                    className="w-5 h-5"
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
                            ) : (
                                <svg
                                    className="w-5 h-5"
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
                            )}
                        </button>
                        <button
                            className="p-2 rounded-lg hover:bg-base-200 transition-colors"
                            aria-label="Open menu"
                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={
                                        isOpen
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16M4 18h16"
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-base-100/95 backdrop-blur-lg border-t border-base-200"
                    >
                        <div className="container mx-auto px-4 py-4 space-y-3">
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-base-200">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Available for collaboration
                            </div>
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleNav(link.href)}
                                    className="w-full text-left px-3 py-2 rounded-lg bg-base-200 hover:bg-base-300 transition-colors"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <Link
                                href="#contact"
                                className="btn btn-primary w-full"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNav("#contact");
                                }}
                            >
                                Book a call
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
