"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

interface FloatingShapeProps {
    delay?: number;
    size?: number;
    color?: string;
    style?: React.CSSProperties;
}

const FloatingShape = ({
    delay = 0,
    size = 100,
    color = "primary",
    style,
}: FloatingShapeProps) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            x: [0, 50, 0],
            y: [0, -50, 0],
        }}
        transition={{
            duration: 8,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
        }}
        className={`absolute rounded-full bg-${color}/20 backdrop-blur-sm`}
        style={{
            width: size,
            height: size,
            filter: "blur(8px)",
            ...style,
        }}
    />
);

export default function Hero() {
    const containerRef = useRef(null);
    const [displayText, setDisplayText] = useState("");
    const fullText = "Biruk Gebisa";
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        let currentIndex = 0;
        let isDeleting = false;
        let typingSpeed = 150;

        const typeText = () => {
            if (isDeleting) {
                setDisplayText(fullText.substring(0, currentIndex - 1));
                currentIndex--;
                typingSpeed = 50;
            } else {
                setDisplayText(fullText.substring(0, currentIndex + 1));
                currentIndex++;
                typingSpeed = 150;
            }

            if (!isDeleting && currentIndex === fullText.length) {
                isDeleting = true;
                typingSpeed = 2000; // Pause at the end
            } else if (isDeleting && currentIndex === 0) {
                isDeleting = false;
                typingSpeed = 500; // Pause before starting again
            }

            setTimeout(typeText, typingSpeed);
        };

        typeText();
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-base-100/95 via-base-100/90 to-base-200/95" />

            {/* Floating 3D shapes */}
            <FloatingShape
                delay={0}
                size={150}
                color="primary"
                style={{ top: "20%", left: "10%" }}
            />
            <FloatingShape
                delay={2}
                size={100}
                color="secondary"
                style={{ top: "60%", right: "15%" }}
            />
            <FloatingShape
                delay={4}
                size={120}
                color="accent"
                style={{ bottom: "20%", left: "20%" }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                        <motion.div
                            variants={itemVariants}
                            className="relative w-48 h-48 md:w-64 md:h-64"
                            style={{
                                perspective: "1000px",
                            }}
                        >
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                    rotateX: [0, 5, 0],
                                    rotateY: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "100%",
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        border: "4px solid rgba(var(--primary), 0.2)",
                                        boxShadow:
                                            "0 20px 40px rgba(0, 0, 0, 0.2)",
                                        transform: "translateZ(20px)",
                                    }}
                                >
                                    <Image
                                        src="/assets/photo6.jpg"
                                        alt="Biruk GT"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                {/* 3D Shadow */}
                                <motion.div
                                    animate={{
                                        scale: [1, 0.9, 1],
                                        opacity: [0.2, 0.1, 0.2],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    style={{
                                        position: "absolute",
                                        bottom: "-20px",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        width: "80%",
                                        height: "20px",
                                        borderRadius: "50%",
                                        background: "rgba(0, 0, 0, 0.3)",
                                        filter: "blur(10px)",
                                    }}
                                />
                                {/* Glow Effect */}
                                <motion.div
                                    animate={{
                                        opacity: [0.3, 0.5, 0.3],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    style={{
                                        position: "absolute",
                                        inset: "-10px",
                                        borderRadius: "50%",
                                        background:
                                            "radial-gradient(circle, rgba(var(--primary), 0.2) 0%, transparent 70%)",
                                        filter: "blur(15px)",
                                        zIndex: -1,
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="text-left"
                            style={{ y, opacity }}
                        >
                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl md:text-6xl font-bold mb-4"
                            >
                                <motion.span
                                    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent"
                                    animate={{
                                        backgroundPosition: ["0%", "100%"],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                    }}
                                    style={{
                                        backgroundSize: "200% auto",
                                    }}
                                >
                                    {displayText}
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{
                                            duration: 0.5,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                        }}
                                    >
                                        |
                                    </motion.span>
                                </motion.span>
                                <motion.div
                                    className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent mt-2"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.5,
                                        ease: "easeOut",
                                    }}
                                />
                            </motion.h1>
                            <motion.p
                                variants={itemVariants}
                                className="text-xl md:text-2xl text-base-content/90 mb-2"
                            >
                                Software Engineering Student
                            </motion.p>
                            <motion.p
                                variants={itemVariants}
                                className="text-lg md:text-xl text-base-content/80 mb-4"
                            >
                                Adama Science and Technology University
                            </motion.p>
                            <motion.p
                                variants={itemVariants}
                                className="text-lg md:text-xl text-base-content/80"
                            >
                                UI/UX & Graphics Designer
                            </motion.p>
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col gap-2 mt-4"
                            >
                                <motion.a
                                    href="mailto:birukgebisa7@gmail.com"
                                    className="text-base-content/80 hover:text-primary transition-colors flex items-center gap-2"
                                    whileHover={{ x: 5 }}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    birukgebisa7@gmail.com
                                </motion.a>
                                <motion.a
                                    href="https://github.com/BrookGT"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base-content/80 hover:text-primary transition-colors flex items-center gap-2"
                                    whileHover={{ x: 5 }}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    @BrookGT
                                </motion.a>
                                <motion.a
                                    href="https://linkedin.com/in/biruk-gebisa-188747337/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base-content/80 hover:text-primary transition-colors flex items-center gap-2"
                                    whileHover={{ x: 5 }}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    Biruk Gebisa
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center space-x-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, rotateX: 10 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary btn-lg"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "perspective(1000px)",
                            }}
                            onClick={() => scrollToSection("projects")}
                        >
                            View My Work
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, rotateX: 10 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-outline btn-lg"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "perspective(1000px)",
                            }}
                            onClick={() => scrollToSection("contact")}
                        >
                            Contact Me
                        </motion.button>
                    </motion.div>
                </motion.div>
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
        </section>
    );
}
