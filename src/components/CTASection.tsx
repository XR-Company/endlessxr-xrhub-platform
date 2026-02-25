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
    <section className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            Designed to close the
            <br />
            XR market gap.
          </h2>

          <div className="flex flex-col items-center gap-4 mb-16">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-5 h-5 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-muted-foreground" />
                </div>
                <span className="text-lg text-muted-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Email signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border border-border rounded-lg p-8 md:p-12 max-w-xl mx-auto mb-12"
          >
            <h3 className="font-display text-2xl font-semibold mb-2">Stay in the loop</h3>
            <p className="text-muted-foreground mb-6">
              Sign up for new experiences, and updates.
            </p>

            {submitted ? (
              <div className="flex items-center justify-center gap-2 text-foreground py-3">
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
                  className="flex-1 bg-secondary border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/30 transition-all"
                />
                <button
                  type="submit"
                  className="bg-foreground text-background font-medium px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
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
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground text-background font-medium px-8 py-4 rounded-md inline-flex items-center gap-3 text-lg hover:opacity-90 transition-opacity"
            >
              <Apple className="w-6 h-6" />
              Download on the App Store
            </a>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 EndlessXR. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
