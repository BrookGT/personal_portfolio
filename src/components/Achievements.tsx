"use client";

import { motion } from "framer-motion";

const achievements = [
    {
        title: "LeetCode",
        stats: "200+ Problems Solved",
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
        <section id="achievements" className="section-padding bg-base-100">
            <div className="container-shell">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 space-y-3"
                >
                    <p className="pill mx-auto">Competitive edge</p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold">
                        Craft backed by problem-solving rigor
                    </h2>
                    <p className="text-base-content/80 max-w-2xl mx-auto">
                        Continual practice on coding platforms keeps my thinking
                        sharp and my systems reliable.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-14">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="glass-panel rounded-2xl p-6 text-center shadow-ring"
                        >
                            <div className="text-4xl mb-3">
                                {achievement.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-1">
                                {achievement.title}
                            </h3>
                            <p className="text-base-content/70">
                                {achievement.stats}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="glass-panel rounded-2xl p-8 shadow-ring"
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
                                    delay: index * 0.05,
                                }}
                                viewport={{ once: true }}
                                className="rounded-lg border border-base-300 bg-base-200 px-3 py-2 text-center text-sm font-medium"
                            >
                                {topic}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
