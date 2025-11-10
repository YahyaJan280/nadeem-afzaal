import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import nadeemPortrait from "@/assets/Nadeem-Hero.png";

interface HeroProps {
  onBookingClick: () => void;
}

export const Hero = ({ onBookingClick }: HeroProps) => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background"
    >
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)_/_0.03),_transparent_60%),_radial-gradient(ellipse_at_bottom_right,_hsl(var(--secondary)_/_0.02),_transparent_50%)]"></div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-32 left-12 w-32 h-32 rounded-full border-2 border-primary/5 float-shape opacity-30"></div>
      <div className="absolute bottom-32 right-16 w-40 h-40 rounded-lg border-2 border-secondary/5 float-shape opacity-30" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-primary/3 to-secondary/3 blur-3xl float-shape" style={{ animationDelay: "1s" }}></div>

      {/* Background Blob */}
      <svg
        className="absolute top-1/4 right-1/4 w-48 h-48 opacity-5 float-shape"
        style={{ animationDelay: "0.5s" }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          className="text-primary"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.1,87.2C-23,86.8,-37.9,82.9,-51.7,75.3C-65.5,67.7,-78.2,56.4,-84.4,42.2C-90.6,28,-90.3,11,-86.9,-4.8C-83.5,-20.6,-77,-35.2,-68.1,-48.2C-59.2,-61.2,-47.9,-72.6,-34.7,-80.4C-21.5,-88.2,-10.8,-92.4,1.6,-95.3C14,-98.2,30.6,-83.6,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-8 order-1">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full text-sm font-medium mb-2">
                🇦🇪 UAE Business Consulting Expert
              </div>

              <h1 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight">
                <span className="animated-underline">Nadeem Afzal Pracha</span>
                <br />
                <span className="text-muted-foreground text-[clamp(1.5rem,3.5vw,2rem)] font-normal">
                  Tax Consultant and Virtual CFO for UAE businesses
                </span>
              </h1>

              <p className="text-lg text-muted-foreground font-body max-w-xl leading-relaxed">
                Clear tax and finance advice that protects value and supports growth.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onBookingClick}
                size="lg"
                variant="gradient-outline"
                className="group rounded-full px-8 font-medium"
              >
                Book a Consultation
                <ArrowRight
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  strokeWidth={2}
                />
              </Button>

              <Button
                onClick={scrollToServices}
                size="lg"
                variant="ghost"
                className="font-medium hover:text-primary transition-colors rounded-full px-8 underline-offset-4 hover:underline"
              >
                View Services
              </Button>
            </div>
          </div>

          {/* Portrait Section */}
          <div className="relative order-first md:order-last">
            <div className="relative w-full max-w-md mx-auto bg-white rounded-[40px] p-8 shadow-lg">
              <svg
                className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
                viewBox="0 0 400 500"
              >
                <circle cx="85%" cy="15%" r="60" fill="#00e25b" className="animate-pulse-glow" />
                <rect x="10%" y="75%" width="80" height="80" fill="#ff3e3e" opacity="0.3" className="animate-float" />
                <path d="M0,100 Q100,50 200,100" stroke="url(#brandGradient)" strokeWidth="3" fill="none" />
                <path d="M200,300 Q300,250 400,300" stroke="url(#brandGradient)" strokeWidth="3" fill="none" opacity="0.5" />
                <defs>
                  <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00e25b" />
                    <stop offset="100%" stopColor="#ff3e3e" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="relative mask-organic overflow-hidden">
                <img
                  src={nadeemPortrait}
                  alt="Nadeem Afzal Pracha - Tax Consultant & Virtual CFO"
                  className="w-full h-auto parallax-subtle"
                />
              </div>
            </div>

            {/* Floating Shapes */}
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#00e25b]/20 to-[#ff3e3e]/20 rotate-12 animate-float" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border-4 border-[#00e25b]/30 animate-pulse-glow" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
          <ChevronDown className="w-6 h-6 text-muted-foreground/50" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
};
