import { motion } from "framer-motion";
import { Apple } from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/us/app/endlessxr/id6751106381";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card !rounded-none border-x-0 border-t-0"
    >
      <div className="section-container flex items-center justify-between py-4">
        <span className="font-display text-xl font-bold gradient-text">EndlessXR</span>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient !px-5 !py-2.5 text-sm inline-flex items-center gap-2"
        >
          <Apple className="w-4 h-4" />
          Download
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
