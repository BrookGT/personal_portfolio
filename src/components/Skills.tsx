"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
        },
    },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2,
        },
    },
};

const skills = [
    {
        category: "Frontend",
        items: [
            { name: "React", icon: "⚛️", level: "Advanced" },
            { name: "Next.js", icon: "▲", level: "Advanced" },
            { name: "Tailwind CSS", icon: "🎨", level: "Advanced" },
            { name: "HTML/CSS", icon: "🌐", level: "Expert" },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: "🟢", level: "Advanced" },
            { name: "Express", icon: "🚂", level: "Advanced" },
        ],
    },
    {
        category: "Mobile",
        items: [
            { name: "React Native", icon: "📱", level: "Advanced" },
            { name: "Flutter", icon: "🎯", level: "Advanced" },
        ],
    },
    {
        category: "UI/UX Design",
        items: [
            { name: "Figma", icon: "🎯", level: "Advanced" },
            { name: "Adobe Illustrator", icon: "✨", level: "Intermediate" },
            { name: "Canva", icon: "🎨", level: "Expert" },
        ],
    },
    {
        category: "Competitive Programming",
        items: [
            { name: "DSA", icon: "📊", level: "Advanced" },
            { name: "LeetCode", icon: "💻", level: "150+ Problems" },
            { name: "Codeforces", icon: "🏆", level: "Active" },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-base-200">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Skills & Expertise
                    </h2>
                    <p className="text-base-content/80 max-w-2xl mx-auto">
                        I am a software engineer who builds sleek, scalable web
                        and mobile products. Passionate about code, design, and
                        turning ideas into reality.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skills.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            variants={categoryVariants}
                            className="bg-base-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-xl font-bold mb-6 text-primary">
                                {category.category}
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {category.items.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={skillVariants}
                                        whileHover="hover"
                                        className="group relative"
                                    >
                                        <div className="flex flex-col items-center p-4 bg-base-200 rounded-lg hover:bg-base-300 transition-colors">
                                            <span className="text-2xl mb-2">
                                                {skill.icon}
                                            </span>
                                            <span className="text-sm font-medium text-center">
                                                {skill.name}
                                            </span>
                                            <span className="text-xs text-base-content/60 mt-1">
                                                {skill.level}
                                            </span>
                                        </div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity bg-base-300 text-xs px-2 py-1 rounded whitespace-nowrap"
                                        >
                                            {skill.name} - {skill.level}
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
