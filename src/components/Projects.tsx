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
        title: "Bete Mobile App",
        description:
            "Developed a Bete mobile application that allows users to post rental listings or property to sell with location and enables in-app messaging between renters and landlords. It also includes a rent management system for tracking rental due dates.",
        images: [
            "/assets/Bete mobile app 1.png",
            "/assets/Bete mobile app 2.png",
            "/assets/Bete mobile app 3.png",
            "/assets/Bete mobile app 4.png",
            "/assets/Bete mobile app 5.png",
            "/assets/Bete mobile app 6.png",
            "/assets/Bete mobile app 7.png",
            "/assets/Bete mobile app 8.png",
            "/assets/Bete mobile app 9.png",
        ],
        techStack: ["React Native", "Expo", "TypeScript"],
    },
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
        title: "Melanated E-commerce Website",
        description: "Built with Next.js",
        images: [
            "/assets/e commerce website 1.png",
            "/assets/e commerce website 2.png",
            "/assets/e commerce website 3.png",
            "/assets/e commerce website 4.png",
            "/assets/e commerce website 5.png",
        ],
        techStack: ["Next.js", "Tailwind CSS"],
        siteLink: "https://melanated-princess-website-b8vc.vercel.app/",
    },
    {
        title: "Fitness App UI Design",
        description: "UI design and prototype created with Figma.",
        images: [
            "/assets/Fitness app ui 1.png",
            "/assets/Fitness app ui 2.png",
            "/assets/Fitness app ui 3.png",
            "/assets/Fitness app ui 4.png",
            "/assets/Fitness app ui 5.png",
        ],
        techStack: ["Figma", "UI/UX Design"],
        figmaLink:
            "https://www.figma.com/design/eLjv97lAAr3qZcV2SMGt6W/REV-Fitness?node-id=1-19&t=V544XnHhHkPcyoNy-1",
    },
    {
        title: "Live Communication Platform",
        description:
            "Real-time communication platform built with Next.js (frontend), NestJS (backend), Socket.IO and WebRTC.",
        images: [
            "/assets/live communication platform 1.png",
            "/assets/live communication platform 2.png",
            "/assets/live communication platform 3.png",
            "/assets/live communication platform 4.png",
            "/assets/live communication platform 5.png",
            "/assets/live communication platform 6.png",
        ],
        techStack: ["Next.js", "NestJS", "Socket.IO", "WebRTC"],
        codeLink: "https://github.com/BrookGT/lcp-frontend",
        backendLink: "https://github.com/BrookGT/lcp-backend",
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
        projects.map(() => 0),
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
        <section id="projects" className="section-padding bg-base-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 space-y-3"
                >
                    <p className="pill mx-auto">Selected work</p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold">
                        Modern products shipped end-to-end
                    </h2>
                    <p className="text-base-content/80 max-w-2xl mx-auto">
                        Real launches, design systems, and prototypes that blend
                        UX craft with robust engineering.
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
                            className="group relative rounded-2xl overflow-hidden glass-panel shadow-ring"
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
                            <motion.div
                                className="relative min-h-[260px] bg-base-300 rounded-t-2xl overflow-hidden"
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
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-gradient-to-t from-base-200/90 via-base-200/60 to-transparent"
                                />
                            </motion.div>

                            <div className="p-6 relative z-10 space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold text-base-content">
                                        {project.title}
                                    </h3>
                                    <div className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                        {project.techStack[0]}
                                    </div>
                                </div>
                                <p className="text-base-content/80">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <motion.span
                                            key={tech}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-3 py-1 text-xs bg-base-300 text-base-content/80 rounded-full"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {project.siteLink && (
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                href={project.siteLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-primary btn-sm shadow-ring"
                                            >
                                                Live Site
                                            </Link>
                                        </motion.div>
                                    )}

                                    {project.codeLink && (
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                href={project.codeLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-outline btn-sm"
                                            >
                                                GitHub
                                            </Link>
                                        </motion.div>
                                    )}

                                    {project.backendLink && (
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                href={project.backendLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-outline btn-sm"
                                            >
                                                Backend
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
                                                className="btn btn-outline btn-sm"
                                            >
                                                Figma
                                            </Link>
                                        </motion.div>
                                    )}
                                </div>
                            </div>

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
