import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BioSection } from "@/components/BioSection";
import { AuthorityStrip } from "@/components/AuthorityStrip";
import { ServicesPreview } from "@/components/ServicesPreview";
import { LeadMagnets } from "@/components/LeadMagnets";
import { CaseStudies } from "@/components/CaseStudies";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookingClick={() => setBookingOpen(true)} />
      <main>
        <Hero onBookingClick={() => setBookingOpen(true)} />
        <BioSection onBookingClick={() => setBookingOpen(true)} />
        <ServicesPreview />
        <AuthorityStrip />
        <LeadMagnets />
        <CaseStudies />
        <Footer />
      </main>
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
};

export default Index;
