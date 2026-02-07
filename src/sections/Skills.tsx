import { useState } from 'react';
import { Code2, Globe, Database, Cloud, Wrench, Terminal } from 'lucide-react';
import { AnimatedContent, SpotlightCard } from '../components/reactbits';

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ElementType;
  skills: string[];
  color: string;
}

const Skills = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Java', 'C++', 'C#', 'Python', 'SQL'],
      color: '#2d62ff',
    },
    {
      id: 2,
      title: 'Web Development',
      icon: Globe,
      skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React'],
      color: '#00e5ff',
    },
    {
      id: 3,
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
      color: '#ff0055',
    },
    {
      id: 4,
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'Azure', 'Kubernetes', 'Jenkins', 'Docker', 'CI/CD', 'DevSecOps'],
      color: '#2d62ff',
    },
    {
      id: 5,
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Linux', 'Git', 'Postman', 'Maven', 'Jira', 'Confluence'],
      color: '#00e5ff',
    },
    {
      id: 6,
      title: 'VR Development',
      icon: Terminal,
      skills: ['Unity', 'C# for VR', '3D Modeling', 'VR SDKs'],
      color: '#ff0055',
    },
  ];

  // Mouse move handler for tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <AnimatedContent distance={50} direction="vertical">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              SKILLS
            </h2>
            <p className="text-neutral-gray text-lg max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and expertise built over years of
              hands-on experience.
            </p>
          </div>
        </AnimatedContent>

        {/* Skills grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: '1000px' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <AnimatedContent
                key={category.id}
                distance={60}
                direction="vertical"
                delay={0.1 + index * 0.1}
              >
                <SpotlightCard
                  className="p-6 h-full"
                  spotlightColor={`${category.color}25`}
                >
                  <div
                    style={{
                      transform: `rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 5}deg)`,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Card header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${category.color}20` }}
                      >
                        <Icon size={24} style={{ color: category.color }} />
                      </div>
                      <h3 className="text-lg font-display font-semibold text-white">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills list */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-surface border border-white/10 rounded-lg text-sm text-white/80 hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedContent>
            );
          })}
        </div>

        {/* Skill proficiency bars */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <AnimatedContent distance={60} direction="horizontal" reverse={true} delay={0.3}>
            <SpotlightCard className="p-6" spotlightColor="rgba(45, 98, 255, 0.15)">
              <h3 className="text-xl font-display font-semibold text-white mb-6">
                Core Expertise
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Cloud & DevOps', level: 95 },
                  { name: 'API Development', level: 90 },
                  { name: 'Database Management', level: 85 },
                  { name: 'VR Development', level: 80 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/80">{skill.name}</span>
                      <span className="text-accent-cyan">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-surface rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </AnimatedContent>

          <AnimatedContent distance={60} direction="horizontal" delay={0.4}>
            <SpotlightCard className="p-6" spotlightColor="rgba(0, 229, 255, 0.15)">
              <h3 className="text-xl font-display font-semibold text-white mb-6">
                Certifications & Awards
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'First Prize - National Smart India Hackathon',
                    org: 'ISRO VR Project',
                  },
                  {
                    title: 'First Prize - Techno Spark Committee',
                    org: 'Assembly Line Simulator',
                  },
                  {
                    title: 'AWS Cloud Practitioner',
                    org: 'Amazon Web Services',
                  },
                  {
                    title: 'DevOps Professional',
                    org: 'Industry Recognition',
                  },
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-surface/50 hover:bg-surface transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white/90 text-sm font-medium">{cert.title}</p>
                      <p className="text-neutral-gray text-xs">{cert.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default Skills;
