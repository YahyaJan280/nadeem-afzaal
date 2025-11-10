import { Mail, Linkedin, Twitter } from "lucide-react";
import logoImage from "@/assets/nadeem-logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <img 
              src={logoImage} 
              alt="Nadeem Afzal Pracha" 
              className="h-10 w-auto object-contain"
            />
            <p className="text-sm text-muted-foreground max-w-md">
              Strategic consulting for UAE professionals and enterprises. Transform your business with expert guidance in corporate tax compliance and growth acceleration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors hover-underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#tools" className="text-sm text-muted-foreground hover:text-primary transition-colors hover-underline">
                  Free Tools
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors hover-underline">
                  About
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors hover-underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href="mailto:contact@nadeempracha.com"
                className="p-3 glass-card rounded-full hover:bg-accent transition-colors luxury-hover"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:bg-accent transition-colors luxury-hover"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:bg-accent transition-colors luxury-hover"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="h-px bg-gradient-outline opacity-20 mb-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nadeem Afzal Pracha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
