"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    techStack: string[];
    liveLink?: string;
    codeLink?: string;
    figmaLink?: string;
}

const ProjectCard = ({
    title,
    description,
    image,
    techStack,
    liveLink,
    codeLink,
    figmaLink,
}: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative bg-base-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2 text-base-content">
                    {title}
                </h3>
                <p className="text-base-content/80 mb-4">{description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-base-200 text-base-content/80 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                    {liveLink && (
                        <Link
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm"
                        >
                            Live Demo
                        </Link>
                    )}
                    {codeLink && (
                        <Link
                            href={codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-sm"
                        >
                            View Code
                        </Link>
                    )}
                    {figmaLink && (
                        <Link
                            href={figmaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-sm"
                        >
                            Figma Design
                        </Link>
                    )}
                </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
    );
};

export default ProjectCard;
