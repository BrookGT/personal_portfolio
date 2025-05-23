"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Achievements from "@/components/Achievements";
import Header from "@/components/Header";

export default function Home() {
    return (
        <main className="min-h-screen bg-base-100">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Contact />
        </main>
    );
}
