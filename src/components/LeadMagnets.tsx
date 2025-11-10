import { Button } from "@/components/ui/button";
import { Calculator, FileText, CheckSquare } from "lucide-react";

const tools = [
  {
    title: "Corporate Tax Calculator",
    description: "Calculate your UAE corporate tax obligations with our free, easy-to-use interactive tool. Get instant estimates tailored to your business.",
    cta: "Open Calculator",
    action: () => alert("Calculator tool opening..."),
    icon: Calculator,
  },
  {
    title: "UAE Tax Compliance Guide",
    description: "Comprehensive PDF guide covering everything you need to know about UAE corporate tax regulations, deadlines, and best practices.",
    cta: "Download Guide",
    action: () => alert("Downloading guide..."),
    icon: FileText,
  },
];

export const LeadMagnets = () => {
  return (
    <section id="tools" className="py-20 md:py-24 bg-background lg:py-8 scroll-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Free <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-muted-foreground">
            Access our expert tools and guides to kickstart your business transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div key={tool.title} className="group relative card-hover">
                {/* Subtle Background Glow */}
                <div className="absolute -inset-2 bg-gradient-to-br from-brand-green/5 to-brand-red/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
                
                {/* Card */}
                <div className="bg-white border border-border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 scroll-fade-in">
                  
                  {/* Animated Corner Accent */}
                  <svg className="absolute top-0 right-0 w-20 h-20 opacity-10 pointer-events-none">
                    <circle cx="60" cy="20" r="15" fill="#00e25b" className="group-hover:animate-pulse-glow" />
                  </svg>
                  
                  {/* Icon with Gradient Background */}
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-brand-green/10 to-brand-red/10 relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-green to-brand-red opacity-0 group-hover:opacity-20 transition-opacity" />
                    <Icon className="w-8 h-8 text-brand-green relative z-10" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {tool.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {tool.description}
                  </p>
                  
                  <Button 
                    onClick={tool.action} 
                    variant="gradient-outline" 
                    className="w-full rounded-full group/btn"
                  >
                    {tool.cta}
                    <span className="ml-2 inline-block transition-transform group-hover/btn:translate-x-1">
                      →
                    </span>
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
