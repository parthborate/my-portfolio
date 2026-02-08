import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check, Loader2 } from "lucide-react";
import { AnimatedContent, SpotlightCard } from "../components/reactbits";

type SubmitState = "idle" | "loading" | "success";

const Contact = () => {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState("loading");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmitState("success");

    // Reset after showing success
    setTimeout(() => {
      setSubmitState("idle");
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
      {/* Digital rain background effect */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(45, 98, 255, 0.3) 25%, rgba(45, 98, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(45, 98, 255, 0.3) 75%, rgba(45, 98, 255, 0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(45, 98, 255, 0.3) 25%, rgba(45, 98, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(45, 98, 255, 0.3) 75%, rgba(45, 98, 255, 0.3) 76%, transparent 77%, transparent)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow effects */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section heading */}
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <AnimatedContent
            distance={80}
            direction="horizontal"
            reverse={true}
            delay={0.1}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-semibold text-white mb-8">
                Let&apos;s Talk
              </h3>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-4 glass rounded-xl hover:border-accent-blue/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Icon className="text-accent-blue" size={20} />
                    </div>
                    <div>
                      <p className="text-neutral-gray text-sm">{label}</p>
                      <p className="text-white font-medium">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability status */}
              <div className="mt-8 p-4 glass rounded-xl border-l-4 border-accent-cyan">
                <p className="text-white font-medium mb-1">
                  Currently Available
                </p>
                <p className="text-neutral-gray text-sm">
                  Open to Summer 2025 internship opportunities in Cloud, DevOps,
                  and Technical Consulting roles.
                </p>
              </div>
            </div>
          </AnimatedContent>

          {/* Contact form */}
          <AnimatedContent distance={80} direction="horizontal" delay={0.2}>
            <SpotlightCard
              className="p-6 sm:p-8"
              spotlightColor="rgba(0, 229, 255, 0.15)"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                  <label className="block text-sm text-neutral-gray mb-2">
                    <span className="text-accent-blue">$</span> name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-transparent border-b-2 border-white/20 text-white py-2 focus:outline-none transition-colors"
                      style={{
                        borderColor:
                          focusedField === "name" ? "#00e5ff" : undefined,
                      }}
                      placeholder="Enter your name"
                    />
                    <div
                      className="absolute bottom-0 left-0 h-0.5 bg-accent-cyan transition-all duration-300"
                      style={{
                        width: focusedField === "name" ? "100%" : "0%",
                      }}
                    />
                  </div>
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-sm text-neutral-gray mb-2">
                    <span className="text-accent-blue">$</span> email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-transparent border-b-2 border-white/20 text-white py-2 focus:outline-none transition-colors"
                      style={{
                        borderColor:
                          focusedField === "email" ? "#00e5ff" : undefined,
                      }}
                      placeholder="Enter your email"
                    />
                    <div
                      className="absolute bottom-0 left-0 h-0.5 bg-accent-cyan transition-all duration-300"
                      style={{
                        width: focusedField === "email" ? "100%" : "0%",
                      }}
                    />
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-sm text-neutral-gray mb-2">
                    <span className="text-accent-blue">$</span> message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={4}
                      className="w-full bg-transparent border-b-2 border-white/20 text-white py-2 focus:outline-none transition-colors resize-none"
                      style={{
                        borderColor:
                          focusedField === "message" ? "#00e5ff" : undefined,
                      }}
                      placeholder="Enter your message"
                    />
                    <div
                      className="absolute bottom-0 left-0 h-0.5 bg-accent-cyan transition-all duration-300"
                      style={{
                        width: focusedField === "message" ? "100%" : "0%",
                      }}
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitState !== "idle"}
                    className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                      submitState === "success"
                        ? "bg-green-500 text-white"
                        : "bg-accent-blue text-white hover:bg-accent-cyan hover:shadow-glow"
                    }`}
                  >
                    {submitState === "idle" && (
                      <>
                        <Send size={18} />
                        <span>EXECUTE SEND</span>
                      </>
                    )}
                    {submitState === "loading" && (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>SENDING...</span>
                      </>
                    )}
                    {submitState === "success" && (
                      <>
                        <Check size={18} />
                        <span>MESSAGE SENT!</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </SpotlightCard>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default Contact;
