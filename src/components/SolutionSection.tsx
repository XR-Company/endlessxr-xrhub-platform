import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PlusSquare, PenTool, Globe, Search } from "lucide-react";
const capabilities = [
{ icon: PlusSquare, label: "Create", iconColor: "#fb7185", bg: "bg-rose-500/10", border: "border-rose-500/20", glowColor: "rgba(251,113,133,0.45)" },
{ icon: PenTool, label: "Edit", iconColor: "#34d399", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glowColor: "rgba(52,211,153,0.45)" },
{ icon: Globe, label: "Publish", iconColor: "#60a5fa", bg: "bg-blue-500/10", border: "border-blue-500/20", glowColor: "rgba(96,165,250,0.45)" },
{ icon: Search, label: "Discover", iconColor: "#c084fc", bg: "bg-purple-500/10", border: "border-purple-500/20", glowColor: "rgba(192,132,252,0.45)" }];


const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-32 pb-0" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto">
          
          <div className="inline-block border border-foreground/30 rounded-full px-5 py-1.5 mb-8">
            <span className="text-sm font-medium text-foreground">Our Solution</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-[0.02em]">
            The platform built to close
            <br />
            the XR content gap.
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8 md:text-xl">
            We bring creation, editing, publishing, and discovery into one seamless
            headset-native ecosystem — so immersive content can scale as fast as XR hardware.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center gap-6 md:gap-10">
          
          {capabilities.map((cap, i) =>
          <motion.div
            key={cap.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            className="flex flex-col items-center gap-3 group">
            
              <div
              className={`relative w-12 h-12 md:w-14 md:h-14 rounded-xl ${cap.bg} ${cap.border} border backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-115`}
              style={{ boxShadow: `0 0 0px ${cap.glowColor}`, transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 24px ${cap.glowColor}, 0 0 48px ${cap.glowColor}`}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 0px ${cap.glowColor}`}>
              
                <cap.icon className="w-6 h-6 md:w-7 md:h-7" color={cap.iconColor} strokeWidth={1.5} />
              </div>
              <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {cap.label}
              </span>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mt-16"
          style={{ originY: 0 }}>
          
          <div className="w-px h-80 bg-gradient-to-b from-foreground/30 to-transparent" />
        </motion.div>
      </div>
    </section>);

};

export default SolutionSection;