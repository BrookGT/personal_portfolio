"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const heroBadges = [
    "Full-stack product developer",
    "UI/UX designer crafting usable flow",
    "Builder of resilient, responsive experiences",
];

const heroContainer = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 },
    },
};

const heroItem = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const stats = [
    {
        label: "Projects shipped",
        value: "20+",
        accent: "from-primary to-secondary",
    },
    { label: "Design systems", value: "6", accent: "from-accent to-primary" },
    {
        label: "Platforms",
        value: "Web · Mobile · SaaS",
        accent: "from-secondary to-primary",
    },
];

export default function Hero() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.section
            className="relative min-h-[90vh] flex items-start overflow-hidden pt-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="absolute inset-0 opacity-80">
                <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
                <div className="absolute inset-0 grid-lines" />
            </div>

            <div className="container-shell relative z-10 pt-24 pb-16">
                <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-14 xl:gap-16 items-start">
                    <motion.div
                        variants={heroContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        className="space-y-8"
                    >
                        <motion.div
                            variants={heroItem}
                            className="pill w-fit shadow-ring"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Shipping thoughtful digital products
                        </motion.div>

                        <motion.div variants={heroItem} className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                                    Biruk Gebisa
                                </span>
                                <br />
                                Software Engineer · UI/UX Designer
                            </h1>
                            <p className="text-lg sm:text-xl text-base-content/80 max-w-2xl">
                                I design and engineer responsive web and mobile
                                products end-to-end—blending systems thinking,
                                crisp visuals, and reliable code to ship modern
                                experiences.
                            </p>
                        </motion.div>

                        <motion.div variants={heroItem} className="space-y-3">
                            {heroBadges.map((item) => (
                                <motion.div
                                    key={item}
                                    className="flex items-center gap-3 text-base text-base-content/80"
                                    whileHover={{ x: 4 }}
                                >
                                    <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-primary to-secondary" />
                                    {item}
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            variants={heroItem}
                            className="flex flex-col sm:flex-row gap-3"
                        >
                            <motion.button
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn btn-primary btn-lg shadow-ring"
                                onClick={() => scrollToSection("projects")}
                            >
                                View portfolio
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn btn-outline btn-lg"
                                onClick={() => scrollToSection("contact")}
                            >
                                Book a call
                            </motion.button>
                        </motion.div>

                        <motion.div
                            variants={heroItem}
                            className="grid sm:grid-cols-3 gap-4"
                        >
                            {stats.map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 220,
                                        damping: 18,
                                    }}
                                    className="p-4 rounded-xl glass-panel shadow-ring relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br opacity-20" />
                                    <p className="text-sm text-base-content/60">
                                        {stat.label}
                                    </p>
                                    <p
                                        className={`text-2xl font-semibold mt-1 bg-clip-text text-transparent bg-gradient-to-r ${stat.accent}`}
                                    >
                                        {stat.value}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={heroContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="relative"
                        whileHover={{ y: -6 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 18,
                        }}
                    >
                        <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 blur-3xl" />
                        <div className="relative glass-panel rounded-2xl p-7 shadow-ring">
                            <div className="flex items-center gap-5 mb-6">
                                <div className="relative h-24 w-24 rounded-3xl overflow-hidden border border-base-200 shadow-lg">
                                    <Image
                                        src="/assets/photo6.jpg"
                                        alt="Biruk GT"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm text-base-content/60">
                                        Biruk GT
                                    </p>
                                    <p className="text-lg font-semibold">
                                        Biruk Gebisa
                                    </p>
                                    <p className="text-sm text-base-content/70">
                                        Product Engineer · UI/UX Systems
                                    </p>
                                    <p className="text-sm text-base-content/60">
                                        Adama, Ethiopia
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="rounded-xl bg-base-200/70 p-4 border border-base-300">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-base-content/60">
                                            Focus areas
                                        </p>
                                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                            Product-first
                                        </span>
                                    </div>
                                    <ul className="mt-3 space-y-2 text-sm text-base-content/80">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                                            Design systems, tokens,
                                            accessibility
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                                            Web + mobile product builds with
                                            clear handoff
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                                            Real-time experiences & performance
                                            tuning
                                        </li>
                                    </ul>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Next.js",
                                        "React Native",
                                        "Figma",
                                        "TypeScript",
                                        "Design Systems",
                                        "Prototyping",
                                    ].map((tag) => (
                                        <div
                                            key={tag}
                                            className="rounded-lg bg-base-200 px-3 py-2 text-sm font-medium border border-base-300 text-base-content/80"
                                        >
                                            {tag}
                                        </div>
                                    ))}
                                </div>

                                <div className="rounded-xl border border-base-300 p-4 bg-gradient-to-br from-base-100 to-base-200">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-base-content/60">
                                            Recent highlight
                                        </p>
                                        <span className="text-[11px] px-2.5 py-1 rounded-full bg-secondary/10 text-secondary font-semibold">
                                            Mobile UI · 50+ screens
                                        </span>
                                    </div>
                                    <p className="text-base font-semibold mt-2 text-base-content leading-relaxed">
                                        Fitness tracking mobile app UI in Figma:
                                        50+ screens covering onboarding, goals,
                                        live workout tracking, progress
                                        analytics, and social challenges.
                                    </p>
                                    <p className="text-xs text-base-content/60 mt-2">
                                        Motion-ready prototypes · Component
                                        library · Developer handoff notes
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-primary"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
