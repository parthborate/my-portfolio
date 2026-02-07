import { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, RotateCcw } from 'lucide-react';
import { AnimatedContent, SpotlightCard } from '../components/reactbits';

interface ExperienceItem {
  id: number;
  company: string;
  location: string;
  role: string;
  period: string;
  achievements: string[];
}

const Experience = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: 'Mainline Information Systems',
      location: 'Remote, India',
      role: 'Technical Consultant',
      period: 'Jan 2022 – Jun 2024',
      achievements: [
        'Led MongoDB scripts for automated data management, improving reporting accuracy by 35%',
        'Spearheaded Auto Reply feature for BCR using AWS stack, benefiting 1,000+ customers with $100,000+ cost savings',
        'Deployed cloud services using AWS, Docker, and Kubernetes, achieving 50% improvement in deployment efficiency',
        'Developed RESTful APIs using Java, Spring Boot, and Hibernate, leading to 25% increase in user engagement',
        'Managed microservices in Java and Kotlin resulting in 30% reduction in development time',
      ],
    },
    {
      id: 2,
      company: 'Xenstack',
      location: 'India',
      role: 'Cloud and DevOps Engineer',
      period: 'Jun 2020 – Dec 2021',
      achievements: [
        'Implemented CI/CD pipelines using Jenkins and GitLab CI, reducing deployment time by 40%',
        'Managed cloud infrastructure on AWS and Azure, ensuring 99.9% uptime',
        'Automated infrastructure provisioning using Terraform and Ansible',
        'Implemented monitoring and logging solutions using Prometheus and Grafana',
        'Collaborated with development teams to optimize application performance',
      ],
    },
  ];

  const handleCardClick = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section id="experience" className="relative py-24 lg:py-32 bg-dark overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <AnimatedContent distance={50} direction="vertical">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              EXPERIENCE
            </h2>
            <p className="text-neutral-gray text-lg max-w-2xl mx-auto">
              A journey through my professional career, showcasing key roles and impactful
              achievements.
            </p>
          </div>
        </AnimatedContent>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-accent-blue via-accent-cyan to-accent-blue opacity-50" />
          </div>

          {/* Experience cards */}
          <div className="space-y-12 lg:space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index > 0 ? 'lg:mt-12' : ''
                }`}
              >
                {/* Timeline node - Desktop */}
                <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-accent-blue shadow-glow" />
                </div>

                {/* Card container */}
                <div
                  className={`${index % 2 === 0 ? 'lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}
                >
                  <AnimatedContent
                    distance={80}
                    direction={index % 2 === 0 ? 'horizontal' : 'horizontal'}
                    reverse={index % 2 !== 0}
                    delay={0.1 + index * 0.2}
                  >
                    <SpotlightCard
                      className="p-6 sm:p-8 cursor-pointer"
                      spotlightColor="rgba(0, 229, 255, 0.15)"
                      onClick={() => handleCardClick(exp.id)}
                    >
                      {/* Flip indicator */}
                      <div className="absolute top-4 right-4 text-neutral-gray/50 hover:text-accent-cyan transition-colors">
                        <RotateCcw size={16} />
                      </div>

                      {/* Front of card */}
                      <div
                        className={`transition-all duration-500 ${
                          flippedCard === exp.id
                            ? 'opacity-0 rotate-y-180 absolute inset-0 pointer-events-none'
                            : 'opacity-100 rotate-y-0'
                        }`}
                      >
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
                            <Briefcase className="text-accent-blue" size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl font-display font-semibold text-white">
                              {exp.role}
                            </h3>
                            <p className="text-accent-cyan font-medium">{exp.company}</p>
                          </div>
                        </div>

                        {/* Meta info */}
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-neutral-gray">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Preview */}
                        <p className="text-neutral-gray text-sm">
                          Click to view key achievements and contributions...
                        </p>

                        {/* CTA */}
                        <div className="flex items-center gap-1 text-accent-blue text-sm mt-4 group">
                          <span>View Achievements</span>
                          <ChevronRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </div>
                      </div>

                      {/* Back of card - Achievements */}
                      <div
                        className={`transition-all duration-500 ${
                          flippedCard === exp.id
                            ? 'opacity-100 rotate-y-0'
                            : 'opacity-0 rotate-y-180 absolute inset-0 pointer-events-none'
                        }`}
                      >
                        <h4 className="text-lg font-display font-semibold text-white mb-4">
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
