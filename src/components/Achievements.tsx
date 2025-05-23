"use client";

import { motion } from "framer-motion";

const achievements = [
    {
        title: "LeetCode",
        stats: "400+ Problems Solved",
        icon: "💻",
        color: "from-blue-500 to-blue-600",
    },
    {
        title: "Codeforces",
        stats: "Active Participant",
        icon: "🏆",
        color: "from-purple-500 to-purple-600",
    },
    {
        title: "HackerRank",
        stats: "5 Star Problem Solver",
        icon: "⭐",
        color: "from-green-500 to-green-600",
    },
];

const dsaTopics = [
    "Arrays & Strings",
    "Linked Lists",
    "Trees & Graphs",
    "Dynamic Programming",
    "Sorting & Searching",
    "Greedy Algorithms",
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Competitive Programming & Achievements
                    </h2>
                    <p className="text-base-content/80 max-w-2xl mx-auto">
                        Mastery of Data Structures and Algorithms with active
                        participation in competitive programming platforms
                    </p>
                </motion.div>

                {/* Platform Stats */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-base-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <span className="text-4xl">
                                    {achievement.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-2">
                                {achievement.title}
                            </h3>
                            <p className="text-base-content/80 text-center">
                                {achievement.stats}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* DSA Topics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-base-200 rounded-xl p-8 shadow-lg"
                >
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        Data Structures & Algorithms
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {dsaTopics.map((topic, index) => (
                            <motion.div
                                key={topic}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="bg-base-100 p-4 rounded-lg text-center hover:bg-base-300 transition-colors"
                            >
                                <span className="text-sm font-medium">
                                    {topic}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
