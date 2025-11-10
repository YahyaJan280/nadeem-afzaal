import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  // Replace this URL with the actual booking embed URL when available
  const bookingUrl = "https://calendly.com/your-booking-page";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-hidden rounded-[20px]">
        <DialogHeader className="p-6 pb-4 border-b border-border">
          <DialogTitle className="font-heading text-2xl font-bold">
            Book Your Consultation
          </DialogTitle>
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-full p-2 hover:bg-accent transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </DialogHeader>
        
        <div className="p-6 overflow-y-auto">
          <div className="bg-accent/30 rounded-[20px] p-8 text-center space-y-4">
            <p className="text-muted-foreground font-body">
              Booking integration placeholder
            </p>
            <p className="text-sm text-muted-foreground">
              Replace <code className="px-2 py-1 bg-muted rounded text-xs">bookingUrl</code> in BookingModal.tsx with your actual booking embed URL
            </p>
            <div className="pt-4">
              <a 
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full bg-gradient-outline text-white font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                Open Booking Page
              </a>
            </div>
          </div>
          
          {/* When ready, replace the above div with iframe embed: */}
          {/* <iframe 
            src={bookingUrl}
            className="w-full h-[600px] border-0 rounded-lg"
            title="Booking Calendar"
          /> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};
