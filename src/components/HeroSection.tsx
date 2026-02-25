import { motion } from "framer-motion";
import { Apple, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const APP_STORE_URL = "https://apps.apple.com/us/app/endlessxr/id6751106381";

const EarlyAccessForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center gap-2 text-foreground py-3">
        <Check className="w-5 h-5" />
        <span className="font-medium">You're on the list!</span>
      </div>
    );
  }

  return (
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
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
            <span className="text-sm text-muted-foreground">Now available on Apple Vision Pro</span>
          </div>
        </motion.div>

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Create, Share, Explore XR
          <br />
          All in One Place.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The all-in-one short-form XR platform where you can effortlessly create
          and discover immersive experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border border-border rounded-lg p-6 md:p-8 max-w-md mx-auto mb-8"
        >
          <h3 className="font-display text-lg font-semibold mb-1">Stay in the loop</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Sign up for new experiences, and updates.
          </p>
          <EarlyAccessForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
      </div>
    </section>
  );
};

export default HeroSection;
