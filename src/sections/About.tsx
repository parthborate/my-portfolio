import { Award, Briefcase, Code, Users } from "lucide-react";
import { AnimatedContent, SpotlightCard } from "../components/reactbits";

const About = () => {
  const stats = [
    {
      icon: Briefcase,
      value: "4+",
      label: "Years Experience",
      color: "#2d62ff",
    },
    { icon: Code, value: "15+", label: "Projects Completed", color: "#00e5ff" },
    { icon: Users, value: "20+", label: "Happy Clients", color: "#ff0055" },
    { icon: Award, value: "2", label: "National Awards", color: "#2d62ff" },
  ];

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-transparent backdrop-blur-sm "
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <AnimatedContent distance={50} direction="vertical" delay={0}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-12 text-center">
            ABOUT ME
          </h2>
        </AnimatedContent>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <AnimatedContent
            distance={80}
            direction="horizontal"
            reverse={true}
            delay={0.1}
          >
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                A highly skilled{" "}
                <span className="text-accent-blue font-semibold">
                  Technical Consultant
                </span>{" "}
                with 4 years of experience in DevOps and cloud technologies,
                holding a Bachelor&apos;s in Computer Science and currently
                completed my Master&apos;s in Management Information Systems
                (MIS) from University of Illinois Chicago (UIC).
              </p>

              <p className="text-base text-neutral-gray leading-relaxed">
                Proven expertise in cloud migration and DevSecOps
                implementation, with a strong track record of enhancing
                productivity and reducing costs. Proficient in multiple
                programming languages and cloud platforms, recognized for
                excellence in project execution and client relationship
                management.
              </p>

              <p className="text-base text-neutral-gray leading-relaxed">
                Seeking Full-Time job to leverage my extensive experience in a
                dynamic and innovative environment. Passionate about
                transforming complex infrastructure into seamless digital
                experiences.
              </p>

              {/* Key highlights */}
              <div className="flex flex-wrap gap-3 pt-4">
                {["DevOps", "AWS", "Azure", "DevSecOps", "Data Analytics"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-surface border border-white/10 rounded-full text-sm text-white/80 hover:border-accent-blue hover:text-accent-cyan transition-all duration-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </AnimatedContent>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <AnimatedContent
                  key={stat.label}
                  distance={60}
                  direction="vertical"
                  delay={0.2 + index * 0.1}
                >
                  <SpotlightCard
                    className="p-6 sm:p-8 text-center h-full"
                    spotlightColor="rgba(45, 98, 255, 0.15)"
                  >
                    <div
                      className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: `${stat.color}20` }}
                    >
                      <Icon size={28} style={{ color: stat.color }} />
                    </div>
                    <div
                      className="text-3xl sm:text-4xl font-display font-bold mb-2"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-gray">
                      {stat.label}
                    </div>
                  </SpotlightCard>
                </AnimatedContent>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
