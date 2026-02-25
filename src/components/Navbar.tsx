import appStoreBadge from "@/assets/app-store-badge.png";

const APP_STORE_URL = "https://apps.apple.com/us/app/endlessxr/id6751106381";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="section-container flex items-center justify-between py-4">
        <span className="font-display text-lg font-bold tracking-tight">EndlessXR</span>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:opacity-90 transition-opacity"
        >
          <img src={appStoreBadge} alt="Download on the App Store" className="h-9" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
