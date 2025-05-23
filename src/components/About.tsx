"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const infoCards = [
    {
        title: "Education",
        content: "4th Year Software Engineering Student at ASTU",
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                />
            </svg>
        ),
    },
    {
        title: "Location",
        content: "Adama, Ethiopia",
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        ),
    },
    {
        title: "Experience",
        content: "UI/UX & Graphics Designer",
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
        ),
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
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

export default function About() {
    return (
        <section id="about" className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About Me
                    </h2>
                    <p className="text-base-content/80 max-w-2xl mx-auto">
                        A passionate software engineering student with a keen
                        eye for design and user experience
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Image Side */}
                    <motion.div
                        variants={itemVariants}
                        className="relative w-full h-auto rounded-xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/assets/photo-experience.jpg"
                            alt="Experience"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                            quality={100}
                            priority
                            unoptimized
                        />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <p className="text-lg text-base-content/80">
                            I am a 4th year Software Engineering student at
                            Adama Science and Technology University, passionate
                            about creating beautiful and functional digital
                            experiences. With expertise in both development and
                            design, I bridge the gap between aesthetics and
                            functionality.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {infoCards.map((card) => (
                                <motion.div
                                    key={card.title}
                                    variants={itemVariants}
                                    className="bg-base-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                                >
                                    <div className="text-primary mb-4 flex justify-center">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-base-content/80">
                                        {card.content}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
