import { Mail, Phone, MapPin } from "lucide-react";
import { AnimatedContent } from "../components/reactbits";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pbora@uic.edu",
      href: "mailto:pbora@uic.edu",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (773) 930-6989",
      href: "tel:+17739306989",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chicago, IL",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-transparent overflow-hidden"
    >
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <AnimatedContent distance={50} direction="vertical">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              INITIATE CONTACT
            </h2>
            <p className="text-neutral-gray text-lg max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let&apos;s connect and
              build something amazing together.
            </p>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={80} direction="vertical" delay={0.1}>
          <h3 className="text-2xl font-display font-semibold text-white mb-8 text-center">
            Let&apos;s Talk
          </h3>

          <div className="space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:border-accent-blue/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon className="text-accent-blue" size={20} />
                  </div>
                  <div>
                    <p className="text-neutral-gray text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-8 p-4 glass rounded-xl border-l-4 border-accent-cyan">
            <p className="text-white font-medium mb-1">Currently Available</p>
            <p className="text-neutral-gray text-sm">
              Open to Summer 2025 internship opportunities in Cloud, DevOps, and
              Technical Consulting roles.
            </p>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Contact;
