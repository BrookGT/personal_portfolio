"use client";

import {
    motion,
    useMotionValue,
    useTransform,
    useSpring,
    AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const projects = [
    {
        title: "Library Management System",
        description:
            "Full-stack website with user pages and admin dashboard with live activity feed.",
        images: [
            "/assets/library management system 1.png",
            "/assets/library management system 2.png",
            "/assets/library management system 3.png",
            "/assets/library management system 4.png",
            "/assets/library management system 5.png",
            "/assets/library management system 6.png",
            "/assets/library management system 7.png",
            "/assets/library management system 8.png",
        ],
        techStack: ["React", "Express.js", "MongoDB"],
        codeLink: "https://github.com/BrookGT/Library-Management-System",
    },
    {
        title: "Easy Rent Mobile App",
        description:
            "React Native app with chat and geolocation search by posted house coordinates.",
        images: [
            "/assets/easy rent mobile app1.png",
            "/assets/easy rent mobile app 2.png",
            "/assets/easy rent mobile app 3.png",
            "/assets/easy rent mobile app 4.png",
            "/assets/easy rent mobile app 5.png",
            "/assets/easy rent mobile app 6.png",
            "/assets/easy rent mobile app 7.png",
            "/assets/easy rent mobile app 8.png",
            "/assets/easy rent mobile app 9.png",
            "/assets/easy rent mobile app 10.png",
            "/assets/easy rent mobile app 11.png",
        ],
        techStack: ["React Native", "Firebase", "Google Maps API"],
        codeLink: "https://github.com/BrookGT/rent-bridge-app",
    },
    {
        title: "Easy Rent Mobile UI/UX",
        description:
            "Interactive Figma prototype of Easy Rent app with polished visual design.",
        images: [
            "/assets/easy rent mobile ui 1.png",
            "/assets/easy rent mobile ui 2.png",
            "/assets/easy rent mobile ui 3.png",
            "/assets/easy rent mobiel ui 0.png",
        ],
        techStack: ["Figma", "UI/UX Design"],
        figmaLink:
            "https://www.figma.com/design/z9tZ5ey3JgyMI6qOlQo1Lz/Easy-Rent-app?node-id=84-2&t=Rf9I1lUip3FEyH5r-1",
    },
    {
        title: "Gift Shop E-Commerce Figma Design",
        description:
            "Figma screens for a girl's gift store with checkout flow.",
        images: [
            "/assets/ecommerce1.png",
            "/assets/ecommerce 2.png",
            "/assets/ecommerce 3.png",
            "/assets/ecommerce 4.png",
        ],
        techStack: ["Figma", "UI/UX Design"],
        figmaLink:
            "https://www.figma.com/design/65eYSlofn6BE7A6uDsloAo/Melanated-E-commerce-website?node-id=7-2&t=ArdknqKrGVnUGMuS-1",
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

const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
    hover: {
        y: -8,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

const imageHoverVariants = {
    hover: {
        scale: 1.1,
        y: -10,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

const imageVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
    }),
};

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [currentImageIndices, setCurrentImageIndices] = useState<number[]>(
        projects.map(() => 0)
    );

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (hoveredProject !== null) {
            interval = setInterval(() => {
                setCurrentImageIndices((prev) => {
                    const newIndices = [...prev];
                    const project = projects[hoveredProject];
                    newIndices[hoveredProject] =
                        (newIndices[hoveredProject] + 1) %
                        project.images.length;
                    return newIndices;
                });
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [hoveredProject]);

    return (
        <section id="projects" className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-base-content/80 max-w-2xl mx-auto">
                        A showcase of my recent work and personal projects
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            variants={projectVariants}
                            whileHover="hover"
                            className="group relative bg-base-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            onHoverStart={() => setHoveredProject(index)}
                            onHoverEnd={() => {
                                setHoveredProject(null);
                                setCurrentImageIndices((prev) => {
                                    const newIndices = [...prev];
                                    newIndices[index] = 0;
                                    return newIndices;
                                });
                            }}
                        >
                            {/* Project Image Container */}
                            <motion.div
                                className="relative min-h-[300px] bg-base-300 rounded-t-xl overflow-hidden"
                                variants={imageHoverVariants}
                            >
                                <AnimatePresence initial={false}>
                                    <motion.div
                                        key={currentImageIndices[index]}
                                        variants={imageVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                            },
                                            opacity: { duration: 0.2 },
                                        }}
                                        className="absolute inset-0 flex items-center justify-center p-4"
                                    >
                                        <Image
                                            src={
                                                project.images[
                                                    currentImageIndices[index]
                                                ]
                                            }
                                            alt={`${project.title} - Image ${
                                                currentImageIndices[index] + 1
                                            }`}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                                {/* Gradient Overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-gradient-to-t from-base-200/90 via-base-200/50 to-transparent"
                                />
                            </motion.div>

                            {/* Project Content */}
                            <div className="p-6 relative z-10">
                                <h3 className="text-xl font-bold mb-2 text-base-content">
                                    {project.title}
                                </h3>
                                <p className="text-base-content/80 mb-4">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech) => (
                                        <motion.span
                                            key={tech}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-3 py-1 text-sm bg-base-300 text-base-content/80 rounded-full transition-colors duration-200 hover:bg-primary/20"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Project Links */}
                                <div className="flex gap-3">
                                    {project.codeLink && (
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                href={project.codeLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-primary btn-sm transition-all duration-200 hover:shadow-lg"
                                            >
                                                <svg
                                                    className="w-4 h-4 mr-2"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                GitHub
                                            </Link>
                                        </motion.div>
                                    )}
                                    {project.figmaLink && (
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                href={project.figmaLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-outline btn-sm transition-all duration-200 hover:shadow-lg"
                                            >
                                                <svg
                                                    className="w-4 h-4 mr-2"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.31 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm7.79 0c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm-7.79 7.948c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm7.79 0c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978z" />
                                                </svg>
                                                Figma
                                            </Link>
                                        </motion.div>
                                    )}
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent transition-opacity duration-300"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
