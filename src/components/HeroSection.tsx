import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import heroVideo from "@/assets/hero-video.mp4";
import appLogo from "@/assets/logo.png";
import SubscribeModal from "@/components/SubscribeModal";

const APP_STORE_URL = "https://apps.apple.com/us/app/endlessxr/id6751106381";

const capsuleBtn = "border border-foreground/30 bg-foreground/10 backdrop-blur-md text-foreground font-medium px-7 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-foreground hover:text-background transition-all duration-300 whitespace-nowrap";

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-0">
          
          <div className="inline-flex items-center gap-2 border border-foreground/30 rounded-full px-4 py-1.5 mb-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{ boxShadow: '0 0 6px rgba(52,211,153,0.8), 0 0 16px rgba(52,211,153,0.5), 0 0 30px rgba(52,211,153,0.3)' }} />
            <span className="text-sm text-foreground">Now available on Apple Vision Pro</span>
          </div>
        </motion.div>

        <motion.img

          alt="Endless XR"
          className="h-20 md:h-[7.5rem] lg:h-[8.75rem] mx-auto mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }} src="/lovable-uploads/1f79a93a-2a71-4450-a0fc-f39d97e3c4c5.png" />
        

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}>
          
          Create, Share, Explore
          <br />
          XR - All in One Place.
        </motion.h1>

        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          
          The all-in-one short-form XR platform where you can effortlessly create
          and discover immersive experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <button onClick={() => setModalOpen(true)} className={capsuleBtn}>
            Subscribe
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={capsuleBtn}>
            
            Download
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 flex flex-col items-center gap-2">
          
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1.5">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-foreground/60"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
            
          </div>
        </motion.div>
      </div>

      <SubscribeModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>);

};

export default HeroSection;