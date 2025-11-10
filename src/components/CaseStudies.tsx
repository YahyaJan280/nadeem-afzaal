import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign } from "lucide-react";

const caseStudies = [
  {
    title: "Tech SME Tax Optimization",
    metric: "32% Savings",
    description:
      "Helped a growing technology company optimize their corporate tax structure, resulting in significant savings while maintaining full compliance with UAE regulations. Implemented strategic planning frameworks that continue to deliver value.",
    icon: DollarSign,
  },
  {
    title: "Enterprise Market Entry",
    metric: "6 Months",
    description:
      "Guided an international enterprise through complete UAE market entry, ensuring seamless tax compliance and regulatory adherence. Established robust operational frameworks that enabled rapid market expansion.",
    icon: TrendingUp,
  },
];

export const CaseStudies = () => {
  return (
    <section className="relative py-20 md:py-24 lg:py-28 overflow-hidden scroll-fade-in">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />

      {/* Professional decorative animations */}
      <svg className="absolute top-0 right-0 w-1/3 h-1/2 opacity-20 pointer-events-none">
        {/* Large green pulsing circle */}
        <circle cx="75%" cy="20%" r="120" fill="#00e25b" className="animate-pulse-glow" />
        {/* Small green circles for depth */}
        <circle cx="85%" cy="35%" r="40" fill="#00e25b" className="animate-pulse-glow delay-200" />
        <circle cx="65%" cy="15%" r="30" fill="#00e25b" className="animate-pulse-glow delay-400" />

        {/* Red floating rectangles */}
        <rect x="55%" y="60%" width="100" height="100" fill="#ff3e3e" opacity="0.3" className="animate-float" />
        <rect x="70%" y="50%" width="60" height="60" fill="#ff3e3e" opacity="0.2" className="animate-float delay-200" />
      </svg>

      {/* Bottom subtle lines */}
      <svg className="absolute bottom-0 left-0 w-full h-24 opacity-10 pointer-events-none">
        <path d="M0,16 Q400,8 800,16 T1600,16" stroke="#00e25b" strokeWidth="2" fill="none" />
        <path d="M0,24 Q400,16 800,24 T1600,24" stroke="#ff3e3e" strokeWidth="2" fill="none" />
      </svg>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 -mt-16">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Proven <span className="gradient-text">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real success stories from businesses we've transformed
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <div key={index} className="group relative flex flex-col">
                <div className="bg-white border-2 border-transparent rounded-[32px] p-8 shadow-lg hover:shadow-2xl hover:border-brand-green/20 transition-all duration-300 flex flex-col h-full">
                  
                  {/* Icon + Metric in one line */}
                  <div className="flex items-center mb-6 gap-4">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-brand-green/10 to-brand-red/10 relative">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-green to-brand-red opacity-0 group-hover:opacity-20 transition-opacity" />
                      <Icon className="w-4 h-4 text-brand-green relative z-10" strokeWidth={1.5} />
                    </div>
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-brand-green/10 to-brand-red/10 border border-brand-green/20">
                      <span className="text-xl font-bold bg-gradient-to-r from-brand-green to-brand-red bg-clip-text text-transparent">
                        {study.metric}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{study.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{study.description}</p>

                  {/* Button */}
                  <Button variant="gradient-outline" className="w-full rounded-full mt-auto">
                    Download Case Study
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
