import onoLogo from "@/assets/ono-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 border-t border-border">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Logo */}
          <div>
            <img src={onoLogo} alt="O&O" className="h-10 opacity-90" />
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-foreground font-bold text-sm tracking-wider mb-6">LEGAL</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://past-ketch-646.notion.site/Terms-of-Service-2cb2539bf12280cdb1a3f1eb0d01914e" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="https://past-ketch-646.notion.site/Privacy-Policy-2cb2539bf122800baddafe3499db87da" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-bold text-sm tracking-wider mb-6">CONTACT</h4>
            <a
              href="mailto:xrgoat777@gmail.com"
              className="text-muted-foreground text-sm underline hover:text-foreground transition-colors duration-200"
            >
              xrgoat777@gmail.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-right">
          <span className="text-muted-foreground text-xs">© 2025 by EndlessXR</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
