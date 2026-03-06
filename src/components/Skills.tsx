"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "Frontend",
        items: [
            { name: "React", icon: "⚛️", level: "Advanced", proficiency: 90 },
            { name: "Next.js", icon: "▲", level: "Advanced", proficiency: 90 },
            {
                name: "Tailwind CSS",
                icon: "🎨",
                level: "Advanced",
                proficiency: 88,
            },
            { name: "HTML/CSS", icon: "🌐", level: "Expert", proficiency: 95 },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: "🟢", level: "Advanced", proficiency: 85 },
            { name: "Express", icon: "🚂", level: "Advanced", proficiency: 82 },
        ],
    },
    {
        category: "Mobile",
        items: [
            {
                name: "React Native",
                icon: "📱",
                level: "Expert",
                proficiency: 92,
            },
            { name: "Flutter", icon: "🎯", level: "Advanced", proficiency: 80 },
        ],
    },
    {
        category: "UI/UX Design",
        items: [
            { name: "Figma", icon: "🎯", level: "Advanced", proficiency: 90 },
            {
                name: "Adobe Illustrator",
                icon: "✨",
                level: "Intermediate",
                proficiency: 75,
            },
            { name: "Canva", icon: "🎨", level: "Expert", proficiency: 92 },
        ],
    },
    {
        category: "Competitive Programming",
        items: [
            { name: "DSA", icon: "📊", level: "Advanced", proficiency: 85 },
            {
                name: "LeetCode",
                icon: "💻",
                level: "150+ Problems",
                proficiency: 80,
            },
            {
                name: "Codeforces",
                icon: "🏆",
                level: "Active",
                proficiency: 78,
            },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="section-padding bg-base-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 space-y-3">
                    <p className="pill mx-auto">Skills</p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold">
                        A toolkit tuned for shipping fast and clean
                    </h2>
                    <p className="text-base-content/80 max-w-2xl mx-auto">
                        Balanced between product thinking and execution—design
                        systems, real-time experiences, and performant frontends
                        backed by reliable APIs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((category) => (
                        <div
                            key={category.category}
                            className="glass-panel rounded-2xl p-6 shadow-ring"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-primary">
                                    {category.category}
                                </h3>
                                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                    Core stack
                                </span>
                            </div>

                            <div className="space-y-4">
                                {category.items.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ y: -2, scale: 1.01 }}
                                        className="p-4 rounded-xl bg-base-200 border border-base-300"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl">
                                                    {skill.icon}
                                                </span>
                                                <div>
                                                    <p className="font-semibold text-base-content">
                                                        {skill.name}
                                                    </p>
                                                    <p className="text-xs text-base-content/60">
                                                        {skill.level}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="text-sm font-medium text-base-content/70">
                                                {skill.proficiency}%
                                            </span>
                                        </div>
                                        <div className="mt-3 h-2 rounded-full bg-base-300 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{
                                                    width: `${skill.proficiency}%`,
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: "easeOut",
                                                }}
                                                viewport={{ once: true }}
                                                className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
