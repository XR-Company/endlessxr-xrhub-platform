import onoLogo from "@/assets/ono-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background py-16 border-t border-foreground/20">
      <div className="w-full px-[5%]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start justify-between">
          {/* Logo */}
          <div>
            <img src={onoLogo} alt="O&O" className="h-10 opacity-90" />
          </div>

          <div className="flex gap-12 md:gap-16">
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
                href="mailto:contact@o-o.company"
                className="text-muted-foreground text-sm underline hover:text-foreground transition-colors duration-200"
              >
                contact@o-o.company
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-right">
          <span className="text-muted-foreground text-xs">© 2025 by O&O Co.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
