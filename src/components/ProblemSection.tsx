import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingDown, DollarSign, ShieldAlert } from "lucide-react";
import problemContentLag1 from "@/assets/problem-content-lag-1.png";
import problemContentLag2 from "@/assets/problem-content-lag-2.png";
import problemHighCosts1 from "@/assets/problem-high-costs-1.png";
import problemHighCosts2 from "@/assets/problem-high-costs-2.png";
import problemUserFriction from "@/assets/problem-user-friction.jpg";

const problems = [
  {
    icon: TrendingDown,
    title: "Content Lag",
    description: "XR hardware is growing fast — but immersive content isn't keeping up.",
    images: [problemContentLag1, problemContentLag2],
  },
  {
    icon: DollarSign,
    title: "High Costs",
    description: "Creators struggle with fragmented tools and extreme production costs.",
    images: [problemHighCosts1, problemHighCosts2],
  },
  {
    icon: ShieldAlert,
    title: "User Friction",
    description: "Users face major friction in accessing high-quality XR experiences.",
    images: [problemUserFriction, problemUserFriction],
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 border border-foreground/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm text-foreground">Current Problem</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            The XR content gap is
            <br />
            holding the industry back.
          </h2>
        </motion.div>

        <div
          className="grid md:grid-cols-3 gap-6 mb-16"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {problems.map((problem, i) => {
            const isHovered = hoveredIndex === i;
            const showImage = hoveredIndex !== null && !isHovered;

            // Determine which image to show: from the hovered card's images array
            const otherIndices = [0, 1, 2].filter(idx => idx !== hoveredIndex);
            const overlayImageIndex = hoveredIndex !== null ? otherIndices.indexOf(i) : -1;
            const overlayImage = hoveredIndex !== null && overlayImageIndex >= 0
              ? problems[hoveredIndex].images[overlayImageIndex]
              : undefined;

            return (
              <div
                key={problem.title}
                className="relative"
                onMouseEnter={() => setHoveredIndex(i)}
              >
                {/* Card - always present, border changes on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className={`border rounded-lg p-8 text-center h-full transition-colors duration-300 ${
                    isHovered ? "border-foreground" : "border-border"
                  }`}
                >
                  <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center mx-auto mb-6">
                    <problem.icon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </motion.div>

                {/* Image overlay - fades in over the card */}
                <AnimatePresence>
                  {showImage && overlayImage && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 rounded-lg overflow-hidden"
                    >
                      <img
                        src={overlayImage}
                        alt={problem.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-xl md:text-2xl text-muted-foreground font-display"
        >
          The result?{" "}
          <span className="text-foreground font-semibold">
            XR remains niche — not yet mainstream.
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
