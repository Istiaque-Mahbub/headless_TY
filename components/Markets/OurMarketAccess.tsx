import { 
  Store, 
  Scale, 
  Ship, 
  ShieldCheck, 
  TrendingUp, 
  Handshake 
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const marketFeatures = [
  {
    title: "Market Expertise",
    description: "Years of hands-on experience navigating business culture, buyer expectations, and market entry nuances in each region.",
    icon: <Store className="h-5 w-5" />,
    badge: "Asia Pacific",
  },
  {
    title: "Regulatory Knowledge",
    description: "In-depth understanding of local compliance, certification requirements, and import/export protocols.",
    icon: <Scale className="h-5 w-5" />,
    badge: "EU Compliant",
  },
  {
    title: "Logistics Capabilities",
    description: "End-to-end freight management via sea, air, and multimodal with trusted carriers on both sides.",
    icon: <Ship className="h-5 w-5" />,
    badge: "Sea + Air",
  },
  {
    title: "Quality Assurance",
    description: "Pre-shipment inspections and supplier audits ensure every consignment meets destination standards.",
    icon: <ShieldCheck className="h-5 w-5" />,
    badge: "ISO Aligned",
  },
  {
    title: "Trade Finance Support",
    description: "Guidance on LC arrangements, payment terms, and currency considerations across cross-border transactions.",
    icon: <TrendingUp className="h-5 w-5" />,
    badge: "Multi-Currency",
  },
  {
    title: "Partner Vetting",
    description: "Every supplier and buyer in our network undergoes rigorous due diligence to protect our clients' interests.",
    icon: <Handshake className="h-5 w-5" />,
    badge: "Verified Network",
  },
];

export function MarketAccessSection() {
  return (
    <section className="w-full bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-md">
            What Makes Our Market <span className="text-[#1F3A93]">Access Unique</span>
          </h2>
          <p className="text-muted-foreground max-w-md text-lg mt-2">
            We don't just know the trade routes, we know the regulations, the relationships, and the logistics that make deals succeed.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketFeatures.map((feature, index) => (
            <Card key={index} className="border-none shadow-none bg-slate-50/50 p-6">
              <CardContent className="p-0 space-y-4">
                {/* Reusing your FeatureItem-style icon container */}
                <div className="flex items-center bg-[#1F3A93] justify-center h-12 w-12 rounded-lg text-white mb-6">
                  {feature.icon}
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                <Badge 
                  variant="secondary" 
                  className="bg-slate-200/50 text-[#1F3A93] hover:bg-slate-200 font-medium rounded-sm px-3"
                >
                  {feature.badge}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}