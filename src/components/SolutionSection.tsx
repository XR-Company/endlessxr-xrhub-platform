import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" ref={ref}>
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px]" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-block glass-card px-5 py-2 mb-8">
            <span className="text-sm font-medium gradient-text">Our Solution</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            The platform built to close
            <br />
            <span className="gradient-text-cyan">the XR content gap.</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We bring creation, editing, publishing, and discovery into one seamless 
            headset-native ecosystem — so immersive content can scale as fast as XR hardware.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
