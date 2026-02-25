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

const ProblemCard = ({
  problem,
  isInView,
  delay,
}: {
  problem: (typeof problems)[0];
  isInView: boolean;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay }}
    className="border border-border rounded-lg p-8 text-center h-full"
  >
    <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center mx-auto mb-6">
      <problem.icon className="w-6 h-6 text-muted-foreground" />
    </div>
    <h3 className="font-display text-xl font-semibold mb-3">{problem.title}</h3>
    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
  </motion.div>
);

const ImageTile = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.3 }}
    className="rounded-lg overflow-hidden h-full"
  >
    <img src={src} alt={alt} className="w-full h-full object-cover rounded-lg" />
  </motion.div>
);

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const renderCell = (index: number) => {
    const problem = problems[index];

    if (hoveredIndex === null) {
      // No hover — show all cards normally
      return (
        <div
          key={problem.title}
          className="cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
        >
          <ProblemCard problem={problem} isInView={isInView} delay={0.1 + index * 0.1} />
        </div>
      );
    }

    if (hoveredIndex === index) {
      // This is the hovered card — keep showing it
      return (
        <div
          key={problem.title + "-active"}
          className="cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
        >
          <ProblemCard problem={problem} isInView={isInView} delay={0} />
        </div>
      );
    }

    // Not hovered — replace with image
    return (
      <AnimatePresence mode="wait" key={problem.title + "-img"}>
        <ImageTile src={problem.image} alt={problem.title} />
      </AnimatePresence>
    );
  };

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
          {[0, 1, 2].map((i) => renderCell(i))}
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
