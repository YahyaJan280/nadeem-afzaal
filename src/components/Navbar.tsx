import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Briefcase, Wallet, Calculator, FileText, ClipboardCheck } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import logoImage from "@/assets/nadeem-logo.jpg"

interface NavbarProps {
  onBookingClick: () => void;
}

export const Navbar = ({ onBookingClick }: NavbarProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setToolsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setToolsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTools = () => {
    document.getElementById("tools")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/50 overflow-hidden">
        <div
          id="scroll-progress"
          className="h-full bg-gradient-to-r from-brand-green to-brand-red transition-all duration-200"
          style={{ width: '0%' }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Reduced Size */}
          <div className="flex items-center">
            <img src={logoImage} alt="Nadeem Afzal Pracha"  className="h-6 sm:h-7 md:h-8 lg:h-9 w-auto lg:ml-5 object-contain" />
          </div>

          {/* Desktop Navigation - Capsule Style */}
          <div className="hidden lg:flex items-center gap-1 px-3 py-2 rounded-[9999px] bg-background/60 border shadow-sm">
            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setToolsOpen(false);
                }}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-full hover:bg-accent"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-[calc(100%+12px)]  left-0 min-w-[250px] bg-background border rounded-2xl shadow-lg overflow-hidden z-50"
                  style={{
                    animation: "dropdownSlide 200ms ease-out",
                  }}
                >
                  {/* Arrow Pointer */}
                  <div className="absolute -top-2 left-8 w-4 h-4 bg-background border-l border-t rotate-45"></div>
                  
                  <div className="p-2">
                    <button
                      onClick={() => {
                        scrollToServices();
                        setServicesOpen(false);
                      }}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors group w-full text-left"
                    >
                      <Briefcase className="w-4 h-4 text-brand-green" strokeWidth={1.5} />
                      <div className="text-left">
                        <div className="font-medium text-sm">Tax Consultant</div>
                        <div className="text-xs text-muted-foreground">Expert tax planning</div>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        scrollToServices();
                        setServicesOpen(false);
                      }}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors group w-full text-left"
                    >
                      <Wallet className="w-4 h-4 text-brand-green" strokeWidth={1.5} />
                      <div className="text-left">
                        <div className="font-medium text-sm">Virtual CFO</div>
                        <div className="text-xs text-muted-foreground">Financial leadership</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Free Tools Dropdown */}
            <div className="relative" ref={toolsRef}>
              <button
                onClick={() => {
                  setToolsOpen(!toolsOpen);
                  setServicesOpen(false);
                }}
                className="flex items-center gap-1 px-3  py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-full hover:bg-accent"
                aria-expanded={toolsOpen}
                aria-haspopup="true"
              >
                Free Tools
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${toolsOpen ? "rotate-180" : ""}`} />
              </button>

              {toolsOpen && (
                <div
                  className="absolute top-[calc(100%+12px)]  min-w-[250px] bg-background border rounded-2xl shadow-lg overflow-hidden z-50"
                  style={{
                    animation: "dropdownSlide 200ms ease-out",
                  }}
                >
                  {/* Arrow Pointer */}
                  <div className="absolute -top-2 right-8 w-4 h-4 bg-background border-l border-t rotate-45"></div>
                  
                  <div className="p-2">
                    <button
                      onClick={() => {
                        scrollToTools();
                        setToolsOpen(false);
                      }}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors group w-full text-left"
                    >
                      <Calculator className="w-4 h-4 text-brand-green" strokeWidth={1.5} />
                      <div>
                        <div className="font-medium text-sm">Tax Calculator</div>
                        <div className="text-xs text-muted-foreground">Calculate corporate tax</div>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        scrollToTools();
                        setToolsOpen(false);
                      }}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors group w-full text-left"
                    >
                      <FileText className="w-4 h-4 text-brand-green" strokeWidth={1.5} />
                      <div>
                        <div className="font-medium text-sm">Free Guides</div>
                        <div className="text-xs text-muted-foreground">Download resources</div>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        scrollToTools();
                        setToolsOpen(false);
                      }}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors group w-full text-left"
                    >
                      <ClipboardCheck className="w-4 h-4 text-brand-green" strokeWidth={1.5} />
                      <div>
                        <div className="font-medium text-sm">Compliance Checklist</div>
                        <div className="text-xs text-muted-foreground">Stay compliant</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <a href="#about" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-full hover:bg-accent">About</a>
            <a href="#contact" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-full hover:bg-accent">Contact</a>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button
              onClick={onBookingClick}
              variant="gradient-outline"
              size="default"
              className="hidden md:flex text-sm px-4 rounded-full"
            >
              Book Consultation
            </Button>
            <MobileMenu onBookingClick={onBookingClick} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};
