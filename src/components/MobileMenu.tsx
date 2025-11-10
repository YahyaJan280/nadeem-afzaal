import { Menu, X, Briefcase, Wallet, Calculator, FileText, Phone, User } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface MobileMenuProps {
  onBookingClick: () => void;
}

export const MobileMenu = ({ onBookingClick }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const scrollToTools = () => {
    const toolsSection = document.getElementById("tools");
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleBooking = () => {
    onBookingClick();
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="lg:hidden p-2 rounded-full hover:bg-accent transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed top-20 right-4 left-4 bg-background border rounded-3xl shadow-2xl z-50 p-6 animate-slide-down">
            <nav className="flex flex-col gap-2">
              <button
                onClick={scrollToServices}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors text-left"
              >
                <Briefcase className="w-5 h-5 text-brand-green" strokeWidth={1.5} />
                <span className="font-medium">Services</span>
              </button>

              <button
                onClick={scrollToTools}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors text-left"
              >
                <Calculator className="w-5 h-5 text-brand-green" strokeWidth={1.5} />
                <span className="font-medium">Free Tools</span>
              </button>

              <a
                href="#about"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <User className="w-5 h-5 text-brand-green" strokeWidth={1.5} />
                <span className="font-medium">About</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-5 h-5 text-brand-green" strokeWidth={1.5} />
                <span className="font-medium">Contact</span>
              </a>

              <div className="mt-4 pt-4 border-t">
                <Button
                  variant="gradient-outline"
                  size="lg"
                  className="w-full rounded-full"
                  onClick={handleBooking}
                >
                  Book Consultation
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};
