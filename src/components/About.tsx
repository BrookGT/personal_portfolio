"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const highlights = [
    "Software Engineering @ ASTU · Expected graduation 2026",
    "Product-focused UI/UX designer",
    "Hands-on with real-time systems & mobile",
];

const focusAreas = [
    { title: "Design systems", detail: "Token-driven, consistent, accessible" },
    { title: "Engineering", detail: "Next.js, React Native, TypeScript" },
    { title: "Collaboration", detail: "Clear handoffs, rapid iteration" },
];

export default function About() {
    return (
        <motion.section
            id="about"
            className="section-padding bg-base-100"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
        >
            <div className="container-shell">
                <div className="mb-12 space-y-3 text-left max-w-3xl mx-auto lg:mx-0">
                    <p className="pill w-fit">About</p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold">
                        Bridging design craft with engineering discipline
                    </h2>
                    <p className="text-base-content/80 max-w-2xl">
                        I architect experiences end-to-end: research, UX flows,
                        visual systems, and production-grade code that scales
                        gracefully.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 blur-3xl" />
                        <div className="relative overflow-hidden rounded-2xl border border-base-200 shadow-ring bg-base-100">
                            <Image
                                src="/assets/photo-experience.jpg"
                                alt="Working session"
                                width={900}
                                height={700}
                                className="w-full h-auto object-cover"
                                priority
                                unoptimized
                            />
                            <div className="absolute left-6 top-6 glass-panel rounded-xl p-4 max-w-xs">
                                <p className="text-sm text-base-content/60">
                                    Based in
                                </p>
                                <p className="text-lg font-semibold">
                                    Adama, Ethiopia
                                </p>
                                <p className="text-sm text-base-content/60 mt-2">
                                    Blending East African creativity with global
                                    product standards.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-base-content/80">
                            From prototypes to production, I obsess over usable
                            flows, resilient architecture, and purposeful
                            visuals. I collaborate closely with founders and
                            teams to de-risk ideas and launch confidently.
                        </p>

                        <div className="space-y-3">
                            {highlights.map((item) => (
                                <motion.div
                                    key={item}
                                    whileHover={{ y: -3, scale: 1.01 }}
                                    className="flex items-center gap-3 rounded-xl bg-base-200 px-4 py-3 border border-base-300"
                                >
                                    <span className="h-2 w-2 rounded-full bg-primary" />
                                    <p className="text-base text-base-content/80">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid sm:grid-cols-3 gap-4">
                            {focusAreas.map((focus) => (
                                <motion.div
                                    key={focus.title}
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 220,
                                        damping: 18,
                                    }}
                                    className="glass-panel rounded-xl p-4 border border-base-200 shadow-ring"
                                >
                                    <p className="text-sm text-primary font-semibold">
                                        {focus.title}
                                    </p>
                                    <p className="text-sm text-base-content/70 mt-2">
                                        {focus.detail}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
