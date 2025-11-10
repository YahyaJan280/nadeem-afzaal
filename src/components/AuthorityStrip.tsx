import { Award, Users, TrendingUp, Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.webp";
import testimonial2 from "@/assets/testimonial-2.webp";
import testimonial3 from "@/assets/testimonial-3.webp";

const stats = [
  {
    icon: Users,
    label: "Clients Served",
    value: "500+",
  },
  {
    icon: TrendingUp,
    label: "Revenue Growth",
    value: "150%",
  },
  {
    icon: Award,
    label: "Years Experience",
    value: "15+",
  },
  {
    icon: Star,
    label: "Client Satisfaction",
    value: "98%",
  },
];

const testimonials = [
  {
    quote: "Nadeem's expertise in UAE corporate tax helped us save millions while ensuring full compliance. His strategic insights transformed our approach.",
    author: "Ahmed Al-Mansouri",
    role: "CEO",
    company: "Emirates Trading Co.",
    image: testimonial1,
    rating: 5,
  },
  {
    quote: "The business growth strategies we implemented with Nadeem's guidance resulted in 200% revenue increase in just 18 months. Exceptional results!",
    author: "Sarah Johnson",
    role: "Managing Director",
    company: "Dubai Ventures Ltd",
    image: testimonial2,
    rating: 5,
  },
  {
    quote: "Professional, knowledgeable, and always available. Nadeem's consulting services are worth every dirham. Highly recommend to any UAE business.",
    author: "Chen Wei",
    role: "Founder",
    company: "Tech Innovations FZ",
    image: testimonial3,
    rating: 5,
  },
];

export const AuthorityStrip = () => {
  return (
    <section className="py-20 lg:py-8 md:py-24 scroll-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Section */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-green to-brand-red mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across the UAE
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Subtle Background Glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-brand-green/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {/* Card */}
              <div className="relative bg-white border rounded-3xl p-6 hover:shadow-lg transition-all duration-300 scroll-fade-in">
                
                {/* Quote Icon - Brand Green */}
                <svg className="absolute top-4 right-4 w-12 h-12 opacity-5" viewBox="0 0 24 24">
                  <path fill="#00e25b" d="M6,17h3l2-4V7H5v6h3L6,17z M18,17h3l2-4V7h-6v6h3L18,17z" />
                </svg>
                
                {/* Avatar with Brand Ring */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-brand-green to-brand-red rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="relative w-14 h-14 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                
                {/* Stars - Brand Green */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5" fill="#00e25b" stroke="#00e25b" strokeWidth={1} />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
