import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Linkedin, Github, ChevronDown } from "lucide-react";
import { DecryptedText, ShinyText } from "../components/reactbits";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Entrance animations
  useEffect(() => {
    // Small delay to ensure everything is mounted
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const tl = gsap.timeline({ delay: 0.5 });

    // Image reveal
    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.2, filter: "blur(20px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
        },
        0.3
      );
    }

    // Socials orbit entry
    if (socialsRef.current) {
      const socials = socialsRef.current.querySelectorAll(".social-btn");
      tl.fromTo(
        socials,
        { opacity: 0, scale: 0, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        0.8
      );
    }
  }, [isLoaded]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          rotateY: xPercent * 10,
          rotateX: -yPercent * 10,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-dark/1 backdrop-blur-sm bg-gradient-to-b from-transparent via-dark/50 to-dark z-[1]" />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Name with DecryptedText effect */}
            <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight">
              <DecryptedText
                text="PARTH BORATE"
                speed={60}
                maxIterations={15}
                sequential={true}
                revealDirection="center"
                animateOn="view"
                className="text-white"
                encryptedClassName="text-accent-blue"
                parentClassName="inline-block"
              />
            </h1>

            {/* Title with ShinyText */}
            <div className="mb-4">
              <ShinyText
                text="Technical Consultant & Cloud Architect"
                speed={3}
                className="text-xl sm:text-2xl md:text-3xl font-display font-light"
              />
            </div>

            {/* Description */}
            <p className="text-neutral-gray text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8">
              Transforming complex infrastructure into seamless digital
              experiences. Specializing in DevOps, DevSecOps, Cloud
              Architecture, and Data Analytics.
            </p>

            {/* Social links */}
            <div
              ref={socialsRef}
              className="flex justify-center lg:justify-start gap-4"
            >
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/parthborate/",
                  label: "LinkedIn",
                },
                {
                  icon: Github,
                  href: "https://github.com/parthborate",
                  label: "GitHub",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn magnetic-btn w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-accent-cyan hover:border-accent-cyan transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div
              ref={imageRef}
              className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px]"
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-accent-blue/30 rounded-2xl blur-3xl scale-110" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 hover:border-accent-blue/50 transition-all duration-500 floating">
                <img
                  src="/profile.jpg"
                  alt="Parth Borate"
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/30 to-transparent z-[1]" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent-cyan/50 rounded-tr-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent-blue/50 rounded-bl-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#about"
          className="flex flex-col items-center text-neutral-gray hover:text-accent-cyan transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="animate-bounce" size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
