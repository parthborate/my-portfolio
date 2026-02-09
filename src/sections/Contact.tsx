import { useState } from "react";
import { Send, Check, Loader2 } from "lucide-react";
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

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmitState("success");

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

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-transparent overflow-hidden"
    >
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        {/* Section heading */}
        <AnimatedContent distance={50} direction="vertical">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              GET IN TOUCH
            </h2>
            <p className="text-neutral-gray text-lg max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let&apos;s connect and
              build something amazing together.
            </p>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={80} direction="vertical" delay={0.2}>
          <SpotlightCard
            className="p-6 sm:p-8"
            spotlightColor="rgba(0, 229, 255, 0.15)"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div>
                <label className="block text-sm text-neutral-gray mb-2">
                  Name
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
                  Email
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
                  Message
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
                      <span>Send Message</span>
                    </>
                  )}
                  {submitState === "loading" && (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  )}
                  {submitState === "success" && (
                    <>
                      <Check size={18} />
                      <span>Message Sent!</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </SpotlightCard>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Contact;
