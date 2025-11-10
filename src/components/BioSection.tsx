import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import nadeemPortrait from "@/assets/Nadeem-Hero.png";

interface BioSectionProps {
  onBookingClick: () => void;
}

export const BioSection = ({ onBookingClick }: BioSectionProps) => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
<section
  id="about"
  className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 scroll-fade-in bg-background"
>
  <div className="container mx-auto max-w-7xl">
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
        Personal Spotlight
      </h2>
      <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full"></div>
    </div>

    {/* Card */}
    <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-br from-background via-background to-primary/[0.03] shadow-sm border border-border/40 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row lg:items-center gap-12">
        {/* Portrait (Left) */}
        <div className="flex-shrink-0 w-full max-w-xs -mt-14  sm:max-w-sm lg:max-w-md mx-auto lg:mx-0">
          <div className="relative mask-organic overflow-hidden border-2 border-primary/10 rounded-3xl">
            <img
              src={nadeemPortrait}
              alt="Nadeem Afzal Pracha - UAE Tax Consultant & Virtual CFO"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/8 to-secondary/8 rounded-full blur-2xl -z-10"></div>
        </div>

        {/* Content (Right) */}
        <div className="flex-1 flex flex-col gap-6 sm:gap-8">
          {/* Top Text */}
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              About Nadeem Afzal Pracha
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              With over 15 years of specialized experience in UAE financial
              consulting, Nadeem has established himself as a trusted advisor
              for businesses navigating corporate taxation and financial
              management. As a certified tax consultant and virtual CFO, he
              combines deep regulatory knowledge with practical business
              acumen to deliver strategic solutions that drive growth and
              ensure compliance.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground text-base">
              "Clear tax and finance advice that protects value and supports growth."
            </blockquote>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-t border-b border-border/50 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                15+
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="border-t sm:border-t-0 sm:border-l sm:border-r border-border/50 py-4 sm:py-0">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                8-Fig
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                Tax Savings
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                500+
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                Clients Advised
              </div>
            </div>
          </div>

          {/* CTA Button - Always Centered */}
          <div className="flex justify-center mt-4">
            <Button
              onClick={onBookingClick}
              size="lg"
              variant="gradient-outline"
              className="group rounded-full hover:scale-105 transition-transform"
            >
              Book a Consultation
              <ArrowRight
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                strokeWidth={2}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};
