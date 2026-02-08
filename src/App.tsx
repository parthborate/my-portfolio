import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LiquidEther } from "./components/reactbits";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Navigation from "./sections/Navigation";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const sections = document.querySelectorAll(".animate-section");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isLoaded]);

  return (
    <div
      ref={mainRef}
      className="relative min-h-screen bg-dark overflow-x-hidden"
    >
      {/* Global LiquidEther background */}
      <div className="fixed inset-0 z-0">
        <LiquidEther
          colors={["#2d62ff", "#00e5ff", "#ff0055"]}
          mouseForce={20}
          cursorSize={100}
          resolution={0.5}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
        />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main
        className={`relative z-10 transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 bg-dark/80 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-neutral-gray text-sm">
            © 2024 Parth Borate. All rights reserved.
          </p>
          <p className="text-neutral-gray/60 text-xs mt-2">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
