import { useState } from "react";
import { ExternalLink, Github, Award, Rocket } from "lucide-react";
import { AnimatedContent, SpotlightCard } from "../components/reactbits";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  achievements: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const Projects = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const projects: Project[] = [
    {
      id: 1,
      title: "VR Earth and Moon Explorer",
      description:
        "An innovative VR application developed for the Indian Space Research Organization (ISRO), allowing users to explore and interact with detailed 3D models of Earth and the Moon on both Android and Windows platforms.",
      image: "/project-vr-earth.jpg",
      tags: ["C#", "Java", "DBMS", "Unity", "VR SDKs"],
      achievements: [
        "Awarded First Prize at the National Smart India Hackathon",
        "Successfully combined advanced VR technology with educational content",
        "Showcased the potential of virtual reality in space exploration",
      ],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      id: 2,
      title: "Assembly Line Simulator in VR",
      description:
        "A comprehensive VR simulator for Techno Spark ASM, providing an interactive virtual environment where users could explore and engage with a fully modeled vehicle production assembly line on Windows.",
      image: "/project-assembly-line.jpg",
      tags: ["C#", "Java", "DBMS", "3D Modeling", "VR Development"],
      achievements: [
        "Secured First Prize from the Techno Spark Committee",
        "Innovative use of VR technology to enhance training efficiency",
        "Accurate simulation of complex manufacturing processes",
      ],
      links: {
        demo: "#",
        github: "#",
      },
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32 bg-transparent overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-magenta/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <AnimatedContent distance={50} direction="vertical">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              PROJECTS
            </h2>
            <p className="text-neutral-gray text-lg max-w-2xl mx-auto">
              Showcasing innovative solutions and award-winning VR experiences
              that push the boundaries of technology.
            </p>
          </div>
        </AnimatedContent>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <AnimatedContent
              key={project.id}
              distance={100}
              direction="vertical"
              delay={0.1 + index * 0.2}
            >
              <SpotlightCard
                className="overflow-hidden"
                spotlightColor="rgba(255, 0, 85, 0.15)"
                onMouseMove={handleMouseMove}
              >
                {/* Image container */}
                <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
                  {/* Background image with parallax */}
                  <div
                    className="absolute inset-0 w-full h-full transition-transform duration-700 hover:scale-105"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "saturate(0.8)",
                    }}
                  />

                  {/* Flashlight effect overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle 200px at ${mousePos.x}% ${mousePos.y}%, transparent 0%, rgba(10, 10, 10, 0.7) 100%)`,
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
                    <div className="max-w-3xl">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-accent-blue/20 border border-accent-blue/30 rounded-full text-xs text-accent-cyan"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-neutral-gray text-base sm:text-lg mb-6 max-w-2xl">
                        {project.description}
                      </p>

                      {/* Achievements */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 px-4 py-2 bg-surface/80 rounded-lg"
                          >
                            <Award size={16} className="text-accent-magenta" />
                            <span className="text-sm text-white/80">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            className="flex items-center gap-2 px-6 py-3 bg-accent-blue text-white rounded-full font-medium hover:bg-accent-cyan transition-all duration-300 hover:shadow-glow"
                          >
                            <Rocket size={18} />
                            <span>Live Demo</span>
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-full font-medium hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300"
                          >
                            <Github size={18} />
                            <span>View Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>

        {/* More projects hint */}
        <AnimatedContent distance={40} direction="vertical" delay={0.5}>
          <div className="text-center mt-16">
            <p className="text-neutral-gray mb-4">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-cyan transition-colors"
            >
              <span>View GitHub Profile</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Projects;
