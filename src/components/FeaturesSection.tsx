import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const features = [
{
  title: "Various Content Types",
  description:
  "Support for Multi-2D, 360° Immersive, and Hybrid 2D+3D formats. Mix multiple media types into one experience.",
  type: "video" as const,
  videoId: "wtyVy9KZCFI"
},
{
  title: "Instant Discovery",
  description:
  "Short-form XR content feed removes friction. Discover instantly and give feedback to creators in real-time.",
  type: "video" as const,
  videoId: "JFeKIc7Dl5w"
},
{
  title: "Headset-Native Editor",
  description:
  "Build directly in the headset with a unified spatial timeline. No complex desktop workflows required.",
  type: "video" as const,
  videoId: "o4WB8vPlhV4"
},
{
  title: "AI-Generation Tools",
  description:
  "Generate 3D models and 360° videos from text and images. Professional results with zero modeling expertise.",
  type: "video" as const,
  videoId: "Vlq47sL1zoc"
}];



const FeatureItem = ({ feature, index }: {feature: typeof features[0];index: number;}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center mb-32 last:mb-0">

      <span className="text-sm text-muted-foreground font-medium mb-4">Feature {index + 1}</span>

      <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-[0.02em]">
        {feature.title}
      </h3>

      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
        {feature.description}
      </p>

      <div className="w-full max-w-3xl">
        <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden border border-border bg-muted">
          <iframe
            src={`https://www.youtube.com/embed/${feature.videoId}?autoplay=1&mute=1&loop=1&playlist=${feature.videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0`}
            className="w-full h-full pointer-events-none"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={feature.title}
          />
        </AspectRatio>
      </div>
    </motion.div>);

};

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-8 pb-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8">

          <div className="inline-block border border-foreground/30 rounded-full px-5 py-1.5 mb-4">
            <span className="text-sm font-medium text-foreground">Product Highlights</span>
          </div>


        </motion.div>

        {features.map((feature, i) =>
        <FeatureItem key={feature.title} feature={feature} index={i} />
        )}
      </div>
    </section>);

};

export default FeaturesSection;