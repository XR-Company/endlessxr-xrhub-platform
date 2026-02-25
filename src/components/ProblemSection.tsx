import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, DollarSign, ShieldAlert } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Content Lag",
    description: "XR hardware is growing fast — but immersive content isn't keeping up.",
  },
  {
    icon: DollarSign,
    title: "High Costs",
    description: "Creators struggle with fragmented tools and extreme production costs.",
  },
  {
    icon: ShieldAlert,
    title: "User Friction",
    description: "Users face major friction in accessing high-quality XR experiences.",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            The XR content gap is
            <br />
            holding the industry back.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="border border-border rounded-lg p-8 text-center"
            >
              <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center mx-auto mb-6">
                <problem.icon className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
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
