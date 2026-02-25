import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-block border border-foreground/30 rounded-full px-5 py-1.5 mb-8">
            <span className="text-sm font-medium text-foreground">Our Solution</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            The platform built to close
            <br />
            the XR content gap.
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
