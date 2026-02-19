import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Apple, Check, ArrowRight } from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/us/app/endlessxr/id6751106381";

const benefits = [
  "Lower the barrier to XR content creation and consumption",
  "Help the industry move beyond early adopters",
  "Cross the chasm toward mainstream adoption",
];

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-32 relative" ref={ref}>
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-[150px]" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Designed to close the
            <br />
            <span className="gradient-text">XR market gap.</span>
          </h2>

          <div className="flex flex-col items-center gap-4 mb-16">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-lg text-muted-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Email signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="glass-card p-8 md:p-12 max-w-xl mx-auto mb-12"
          >
            <h3 className="font-display text-2xl font-semibold mb-2">Get Early Access</h3>
            <p className="text-muted-foreground mb-6">
              Sign up for our newsletter and be the first to know.
            </p>

            {submitted ? (
              <div className="flex items-center justify-center gap-2 text-accent py-3">
                <Check className="w-5 h-5" />
                <span className="font-medium">You're on the list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-background/60 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <button
                  type="submit"
                  className="btn-gradient flex items-center justify-center gap-2 !px-6 !py-3"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* App Store CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center gap-3 text-lg"
            >
              <Apple className="w-6 h-6" />
              Download on the App Store
            </a>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 EndlessXR. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
