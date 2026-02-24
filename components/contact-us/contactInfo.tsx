import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Mail, 
  PhoneCall 
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
// Replace this with your actual map image path
import mapPlaceholder from "@/public/hongkong-map.png"; 

export function ContactInfoSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Contact Details */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">
              Contact <span className="text-[#1F3A93]">Info</span>
            </h2>

            <div className="space-y-6">
              {/* Office Location */}
              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center h-10 w-10 text-muted-foreground group-hover:text-[#1F3A93] transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <span className="text-xl text-muted-foreground font-medium">
                  Hongkong Office
                </span>
              </div>

              {/* Primary Phone */}
              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center h-10 w-10 text-[#1F3A93]">
                  <PhoneCall className="h-6 w-6" />
                </div>
                <span className="text-2xl md:text-3xl font-bold text-[#1F3A93]">
                  +880 0000000000
                </span>
              </div>

              {/* Secondary Phone/WhatsApp */}
              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center h-10 w-10 text-muted-foreground">
                  <Phone className="h-6 w-6" />
                </div>
                <span className="text-xl text-muted-foreground font-medium">
                  +880 0000000000
                </span>
              </div>

              {/* Message/Chat */}
              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center h-10 w-10 text-muted-foreground">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <span className="text-xl text-muted-foreground font-medium">
                  +880 0000000000
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center h-10 w-10 text-muted-foreground">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="text-xl text-muted-foreground font-medium">
                  contact@abc.com
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Map Image */}
          <div className="relative">
            <Card className="overflow-hidden p-0 border-none shadow-xl rounded-3xl">
              <CardContent className="p-0">
                <div className="relative w-full h-[400px] md:h-[500px]">
                  <Image
                    src={mapPlaceholder}
                    alt="Office Location Map"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Subtle overlay to soften the map if needed */}
                  <div className="absolute inset-0 bg-blue-900/5 pointer-events-none" />
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}