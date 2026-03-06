"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        title: "UI/UX Design & Development",
        company: "Freelance",
        period: "2023 - Present",
        description: [
            "Designed and developed custom websites for individual clients",
            "Created user-centered UI/UX designs for personal projects",
            "Implemented responsive designs and modern web technologies",
        ],
    },
    {
        title: "MInArch · Software Design Intern",
        company: "MInArch",
        period: "2023",
        description: [
            "Developed website prototypes and information architecture",
            "Collaborated on software design projects",
            "Created user interface designs and wireframes",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="section-padding bg-base-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 space-y-3">
                    <p className="pill mx-auto">Experience</p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold">
                        Where design, code, and delivery meet
                    </h2>
                    <p className="text-base-content/80 max-w-2xl mx-auto">
                        Practical roles blending UX strategy, prototyping, and
                        production engineering.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/60 via-base-300 to-secondary/60" />

                    <div className="space-y-10">
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={experience.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.05,
                                }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row ${
                                    index % 2 === 0
                                        ? "md:pl-12"
                                        : "md:pr-12 md:flex-row-reverse"
                                }`}
                            >
                                <div
                                    className={`absolute top-4 left-0 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-ring`}
                                />

                                <div
                                    className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
                                >
                                    <div className="glass-panel rounded-2xl p-6 shadow-ring">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-xl font-semibold text-base-content">
                                                {experience.title}
                                            </h3>
                                            <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                                {experience.period}
                                            </span>
                                        </div>
                                        <p className="text-sm text-base-content/70 mb-3">
                                            {experience.company}
                                        </p>
                                        <ul className="space-y-2">
                                            {experience.description.map(
                                                (item, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        className="flex items-start gap-2"
                                                    >
                                                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                                                        <span className="text-base-content/80 text-sm">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
