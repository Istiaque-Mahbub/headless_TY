import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const regions = [
  { name: "Bangladesh", status: "Active" },
  { name: "China", status: "Primary" },
  { name: "Hong Kong", status: "HQ" },
  { name: "Germany", status: "Active" },
  { name: "Netherlands", status: "Growing" },
  { name: "Poland", status: "Primary" },
  { name: "Belgium", status: "Primary" },
  { name: "Spain", status: "Primary" },
];

export function RegionsServedSection() {
  return (
    <section className="w-full bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            All Regions <span className="text-[#1F3A93]">We Serve</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Beyond our core markets, we facilitate trade across a growing list of countries in Asia and Europe.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {regions.map((region, index) => (
            <Card 
              key={index} 
              className="border-none shadow-none bg-slate-50/50 hover:bg-slate-100 transition-colors"
            >
              <CardContent className="flex flex-col items-center justify-center p-8 space-y-3">
                <h3 className="text-xl font-bold text-foreground">
                  {region.name}
                </h3>
                <Badge 
                  variant="secondary" 
                  className="bg-slate-200/60 text-slate-600 hover:bg-slate-200 font-medium rounded-sm px-4 py-0.5 text-xs uppercase tracking-wider"
                >
                  {region.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}