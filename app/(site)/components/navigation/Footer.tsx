import Link from "next/link";
import type { SitePayload } from "@/types";

type FooterProps = {
  // Site global data will be passed from layout
  site?: SitePayload;
};

export default function Footer({ site }: FooterProps) {
  // Extract footer and company data from site
  const footer = site?.footer || {};
  const companyName = site?.companyName || "SimplyWriting";
  const companyDescription = footer.companyDescription || site?.description || "Professional writing services tailored to your needs. We help individuals and businesses express themselves with clarity and impact.";
  const email = site?.email;
  const phone = site?.phone;
  const currentYear = new Date().getFullYear();
  
  // Footer configuration
  const {
    quickLinks = [],
    serviceLinks = [],
    legalLinks = [],
    showContactInfo = true,
    showSocialMedia = true,
    copyrightText,
    footerColumns = "three-columns"
  } = footer;
  return (
    <footer className="pt-16 pb-8 px-6 md:px-10 bg-gradient-to-br from-foreground via-foreground to-foreground/95 text-foreground-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className={`grid ${footerColumns === 'four-columns' ? 'md:grid-cols-4' : footerColumns === 'centered' ? 'md:grid-cols-1' : 'md:grid-cols-3'} gap-10 pb-10`}>
          
          {/* Company Information */}
          <div className={footerColumns === 'centered' ? 'text-center' : ''}>
            <h3 className="text-white text-2xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {companyName}
            </h3>
            <p className="text-white/80 max-w-xs leading-relaxed mb-6">{companyDescription}</p>
            
            {/* Contact Information */}
            {showContactInfo && (email || phone) && (
              <div className="mt-4 space-y-2">
                {email && (
                  <p className="text-white/70 text-sm">
                    <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                      {email}
                    </a>
                  </p>
                )}
                {phone && (
                  <p className="text-white/70 text-sm">
                    <a href={`tel:${phone}`} className="hover:text-white transition-colors">
                      {phone}
                    </a>
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Quick Links */}
          {quickLinks.length > 0 && (
            <div className={footerColumns === 'centered' ? 'text-center' : ''}>
              <h4 className="text-white text-base font-medium mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link: any, index: number) => (
                  <li key={index}>
                    <Link
                      href={link.url || '#'}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Service Links */}
          {serviceLinks.length > 0 && (
            <div className={footerColumns === 'centered' ? 'text-center' : ''}>
              <h4 className="text-white text-base font-medium mb-4">Services</h4>
              <ul className="space-y-2">
                {serviceLinks.map((link: any, index: number) => (
                  <li key={index}>
                    <Link
                      href={link.url || '#'}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Social Media Links */}
          {showSocialMedia && site?.socialMedia && (
            <div className={footerColumns === 'centered' ? 'text-center' : ''}>
              <h4 className="text-white text-lg font-semibold mb-6">Follow Us</h4>
              <div className="flex space-x-6">
                {site.socialMedia.twitter && (
                  <a
                    href={site.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 p-2 rounded-lg hover:bg-white/10"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                )}
                {site.socialMedia.linkedin && (
                  <a
                    href={site.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 p-2 rounded-lg hover:bg-white/10"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                {site.socialMedia.github && (
                  <a
                    href={site.socialMedia.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 p-2 rounded-lg hover:bg-white/10"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Legal Links */}
          {legalLinks.length > 0 && footerColumns === 'four-columns' && (
            <div>
              <h4 className="text-white text-base font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link: any, index: number) => (
                  <li key={index}>
                    <Link
                      href={link.url || '#'}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/70 text-sm font-medium">
            © {currentYear} {copyrightText || companyName}. All rights reserved.
          </p>
          {legalLinks.length > 0 && footerColumns !== 'four-columns' && (
            <div className="mt-4 flex justify-center space-x-6">
              {legalLinks.map((link: any, index: number) => (
                <Link
                  key={index}
                  href={link.url || '#'}
                  className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
