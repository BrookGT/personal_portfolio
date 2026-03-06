"use client";

import { motion } from "framer-motion";

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/BrookGT",
        icon: (
            <svg
                className="w-6 h-6"
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
        ),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/biruk-gebisa-285b64395/",
        icon: (
            <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: "Telegram",
        url: "https://t.me/Biruk_GT",
        icon: (
            <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
            </svg>
        ),
    },
];

export default function Contact() {
    return (
        <section id="contact" className="section-padding bg-base-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 space-y-3"
                >
                    <p className="pill mx-auto">Contact</p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold">
                        Let’s build something memorable
                    </h2>
                    <p className="text-base-content/80 max-w-2xl mx-auto">
                        Tell me about your product, your users, and your goals.
                        I’ll respond quickly.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-8"
                >
                    <div className="glass-panel rounded-2xl p-8 shadow-ring">
                        <h3 className="text-xl font-semibold mb-4">
                            Direct message
                        </h3>
                        <p className="text-base-content/70 mb-6">
                            Prefer email? I answer within one business day.
                        </p>

                        <div className="space-y-4">
                            <a
                                href="mailto:birukgebisa7@gmail.com"
                                className="flex items-center justify-between rounded-xl bg-base-200 px-4 py-3 border border-base-300 hover:border-primary transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                        ✉️
                                    </span>
                                    <div>
                                        <p className="text-sm text-base-content/60">
                                            Email
                                        </p>
                                        <p className="font-semibold">
                                            birukgebisa7@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <span className="text-xs text-base-content/60">
                                    Open anytime
                                </span>
                            </a>

                            <div className="rounded-xl bg-base-200 px-4 py-3 border border-base-300">
                                <p className="text-sm text-base-content/60">
                                    Location
                                </p>
                                <p className="font-semibold">Adama, Ethiopia</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel rounded-2xl p-8 shadow-ring">
                        <h3 className="text-xl font-semibold mb-4">Connect</h3>
                        <p className="text-base-content/70 mb-6">
                            Find my work, writing, and prototypes here.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 rounded-xl bg-base-200 px-4 py-3 border border-base-300 hover:border-primary transition-colors"
                                    aria-label={link.name}
                                >
                                    <span className="text-base-content/70">
                                        {link.icon}
                                    </span>
                                    <span className="font-medium">
                                        {link.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
