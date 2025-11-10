import { Briefcase, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Briefcase,
    title: "Tax Consultant",
    description: "Expert corporate tax compliance and advisory services for UAE businesses. Navigate complex regulations with confidence and optimize your tax strategy.",
  },
  {
    icon: Wallet,
    title: "Virtual CFO",
    description: "Strategic financial leadership and planning for growing enterprises. Drive business growth with expert financial guidance and operational excellence.",
  },
];

export const ServicesPreview = () => {
  return (
    <section id="services" className="py-20 lg:py-12 md:py-24 relative scroll-fade-in">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-green to-brand-red mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert solutions tailored for your business success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group relative card-hover">
                {/* Animated Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-green/5 to-brand-red/5 rounded-[32px] opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-xl" />
                
                {/* Card */}
                <div className="relative bg-white border border-border rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 scroll-fade-in">
                  
                  {/* Animated Corner Shape */}
                  <svg className="absolute top-0 right-0 w-24 h-24 opacity-20 pointer-events-none">
                    <defs>
                      <linearGradient id={`serviceGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00e25b" />
                        <stop offset="100%" stopColor="#ff3e3e" />
                      </linearGradient>
                    </defs>
                    <path d="M24,0 L24,24 L0,24 Q24,24 24,0" fill={`url(#serviceGradient${index})`} className="group-hover:animate-pulse-glow" transform="translate(72, 0)" />
                  </svg>
                  
                  {/* Icon with Gradient Border */}
                  <div className="relative inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br from-brand-green/10 to-brand-red/10">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-green to-brand-red opacity-0 group-hover:opacity-20 transition-opacity" />
                    <Icon className="w-8 h-8 relative z-10 text-brand-green" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <Button variant="gradient-outline" className="group/btn rounded-full">
                    See Details
                    <span className="ml-2 inline-block transition-transform group-hover/btn:translate-x-1">
                      →
                    </span>
                  </Button>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green to-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
