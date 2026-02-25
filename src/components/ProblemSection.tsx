import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingDown, DollarSign, ShieldAlert } from "lucide-react";
import problemContentLag from "@/assets/problem-content-lag.jpg";
import problemHighCosts from "@/assets/problem-high-costs.jpg";
import problemUserFriction from "@/assets/problem-user-friction.jpg";

const problems = [
  {
    icon: TrendingDown,
    title: "Content Lag",
    description: "XR hardware is growing fast — but immersive content isn't keeping up.",
    image: problemContentLag,
  },
  {
    icon: DollarSign,
    title: "High Costs",
    description: "Creators struggle with fragmented tools and extreme production costs.",
    image: problemHighCosts,
  },
  {
    icon: ShieldAlert,
    title: "User Friction",
    description: "Users face major friction in accessing high-quality XR experiences.",
    image: problemUserFriction,
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

        <div className="relative mb-16 min-h-[220px]">
          {/* Default grid view */}
          <AnimatePresence>
            {hoveredIndex === null && (
              <motion.div
                className="grid md:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {problems.map((problem, i) => (
                  <motion.div
                    key={problem.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    className="border border-border rounded-lg p-8 text-center cursor-pointer transition-all duration-300 hover:border-foreground/40"
                    onMouseEnter={() => setHoveredIndex(i)}
                  >
                    <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center mx-auto mb-6">
                      <problem.icon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expanded hover view */}
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                key={hoveredIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-10"
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="border border-foreground/30 rounded-lg p-8 grid md:grid-cols-2 gap-8 items-center h-full bg-background">
                  <div className="flex flex-col justify-center">
                    <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center mb-6">
                      {(() => {
                        const Icon = problems[hoveredIndex].icon;
                        return <Icon className="w-6 h-6 text-foreground" />;
                      })()}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                      {problems[hoveredIndex].title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {problems[hoveredIndex].description}
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={problems[hoveredIndex].image}
                      alt={problems[hoveredIndex].title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-xl md:text-2xl text-muted-foreground font-display"
        >
          The result? <span className="text-foreground font-semibold">XR remains niche — not yet mainstream.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
