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
        title: "MInArch (Mender Information Architecture & Software Design company Intern",
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
        <section id="experience" className="py-20 bg-base-200">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Work Experience
                    </h2>
                    <p className="text-base-content/80 max-w-2xl mx-auto">
                        My professional journey and roles I've taken on
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-base-300" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={experience.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                className={`relative flex items-center ${
                                    index % 2 === 0
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse"
                                }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />

                                {/* Content */}
                                <div
                                    className={`w-full md:w-1/2 ${
                                        index % 2 === 0
                                            ? "md:pr-12"
                                            : "md:pl-12"
                                    }`}
                                >
                                    <div className="bg-base-100 p-6 rounded-xl shadow-lg">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                            <h3 className="text-xl font-bold text-primary">
                                                {experience.title}
                                            </h3>
                                            <span className="text-sm text-base-content/60">
                                                {experience.period}
                                            </span>
                                        </div>
                                        <h4 className="text-lg font-semibold mb-4">
                                            {experience.company}
                                        </h4>
                                        <ul className="space-y-2">
                                            {experience.description.map(
                                                (item, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        className="flex items-start"
                                                    >
                                                        <span className="text-primary mr-2">
                                                            •
                                                        </span>
                                                        <span className="text-base-content/80">
                                                            {item}
                                                        </span>
                                                    </li>
                                                )
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
