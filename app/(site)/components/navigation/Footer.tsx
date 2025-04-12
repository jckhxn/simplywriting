import Link from "next/link";

type FooterProps = {
  company: string;
  description: string;
  links: [];
};
export default function Footer({
  company = "Company Name",
  description = "Professional writing services tailored to your needs. We help individuals and businesses express themselves with clarity and impact.",
  links = [],
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="pt-10 pb-6 px-6 md:px-10 bg-foreground text-foreground-foreground">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 pb-10">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              {company}
              {/* Simply<span className="text-primary">Writing</span> */}
            </h3>
            <p className="text-white/70 max-w-xs">{description}</p>
          </div>

          <div>
            <h4 className="text-white text-base font-medium mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-base font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  Content Creation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  Editing & Proofreading
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  Business Writing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  Academic Writing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-center text-white/60 text-sm">
          <p>
            © {currentYear} {company}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
