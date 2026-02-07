import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { AnimatedContent, SpotlightCard } from '../components/reactbits';

interface EducationItem {
  id: number;
  institution: string;
  location: string;
  degree: string;
  period: string;
  achievements: string[];
}

const Education = () => {
  const educationData: EducationItem[] = [
    {
      id: 1,
      institution: 'University of Illinois at Chicago',
      location: 'Chicago, USA',
      degree: 'Master of Science, Management Information Systems',
      period: 'Aug 2024 – Present',
      achievements: [
        'Focusing on advanced information systems and cloud technologies',
        'Coursework in Data Analytics, Cloud Computing, and Enterprise Systems',
      ],
    },
    {
      id: 2,
      institution: 'University of Pune',
      location: 'Pune, India',
      degree: 'Bachelor of Engineering in Computer Engineering',
      period: 'Graduated May 2020',
      achievements: [
        'Strong foundation in computer science fundamentals',
        'Active participant in coding competitions and hackathons',
        'Graduated with honors',
      ],
    },
  ];

  return (
    <section id="education" className="relative py-24 lg:py-32 bg-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <AnimatedContent distance={50} direction="vertical">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              EDUCATION
            </h2>
            <p className="text-neutral-gray text-lg max-w-2xl mx-auto">
              Academic foundation combined with continuous learning and professional
              development.
            </p>
          </div>
        </AnimatedContent>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, index) => (
            <AnimatedContent
              key={edu.id}
              distance={80}
              direction={index % 2 === 0 ? 'horizontal' : 'horizontal'}
              reverse={index % 2 !== 0}
              delay={0.1 + index * 0.2}
            >
              <SpotlightCard
                className="p-6 sm:p-8 h-full"
                spotlightColor="rgba(45, 98, 255, 0.15)"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-accent-blue" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-accent-cyan font-medium">{edu.degree}</p>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-neutral-gray">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white/80 flex items-center gap-2">
                    <Award size={16} className="text-accent-magenta" />
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-neutral-gray"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>

        {/* Additional learning */}
        <AnimatedContent distance={60} direction="vertical" delay={0.4}>
          <SpotlightCard
            className="mt-16 p-6 sm:p-8 max-w-5xl mx-auto"
            spotlightColor="rgba(0, 229, 255, 0.15)"
          >
            <h3 className="text-xl font-display font-semibold text-white mb-6 text-center">
              Continuous Learning
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'AWS Certified', provider: 'Amazon Web Services' },
                { name: 'Kubernetes Fundamentals', provider: 'Linux Foundation' },
                { name: 'Docker Mastery', provider: 'Udemy' },
                { name: 'DevOps Professional', provider: 'Coursera' },
              ].map((cert) => (
                <div
                  key={cert.name}
                  className="p-4 bg-surface/50 rounded-xl text-center hover:bg-surface transition-colors"
                >
                  <p className="text-white/90 text-sm font-medium">{cert.name}</p>
                  <p className="text-neutral-gray text-xs mt-1">{cert.provider}</p>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Education;
