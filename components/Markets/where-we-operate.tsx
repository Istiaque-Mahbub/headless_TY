import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ship, Scale, Handshake, Truck, ShoppingCart, CheckLineIcon, StarIcon, PlaneIcon } from "lucide-react"
import portImage from "@/public/bangladesh-port.png"
import flyingPlane from "@/public/plane-flying.png"
export function WhereWeOperateSection() {
  return (
    <section className="w-full bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">
            Where We <span className="text-primary">Operate Best</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Deep-rooted expertise in two strategic corridors — South Asia
            anchored by Bangladesh, and Europe anchored by Germany.
          </p>
        </div>

        {/*upper  Content Grid */}
        <div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <Badge variant="secondary" className="mb-4">
              South Asia
            </Badge>

            <h3 className="text-3xl font-semibold mb-4 text-primary">
              Bangladesh
            </h3>

            <p className="text-muted-foreground mb-8">
              Our primary Asian hub — a fast-growing economy with strategic
              port access and strong bilateral ties with China and Europe.
            </p>

            <div className="space-y-6">
              <FeatureItem
                icon={<Ship className="h-5 w-5" />}
                title="Chittagong Port Access"
                description="Strategic port connectivity enabling efficient global trade routes."
              />
              <FeatureItem
                icon={<Scale className="h-5 w-5" />}
                title="Regulatory Expertise"
                description="In-depth knowledge of customs, import duties, and compliance frameworks."
              />
              <FeatureItem
                icon={<Handshake className="h-5 w-5" />}
                title="Local Partner Network"
                description="Strong relationships with vetted distributors, agents, and buyers."
              />
              <FeatureItem
                icon={<Truck className="h-5 w-5" />}
                title="Last-Mile Logistics"
                description="Efficient nationwide distribution and fulfillment capabilities."
              />
            </div>
          </div>

          {/* Right Image */}
          <Card className="overflow-hidden p-0 shadow-lg border-none">
            <CardContent className="p-0">
              <div className="relative w-full h-[450px]">
                <Image
                  src={portImage}
                  alt="Chittagong Port Bangladesh"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>


        </div>


         {/*lower  Content Grid */}
        <div className="my-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">


        {/* left Image */}
          <Card className="overflow-hidden p-0 shadow-lg border-none">
            <CardContent className="p-0">
              <div className="relative w-full h-[450px]">
                <Image
                  src={flyingPlane}
                  alt="Flying Plane"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
          
          {/* right Content */}
          <div>
            <Badge variant="secondary" className="mb-4">
              Europe
            </Badge>

            <h3 className="text-3xl font-semibold mb-4 text-primary">
              Germany & EU
            </h3>

            <p className="text-muted-foreground mb-8">
             Gateway to 500M European consumers Europe's largest economy with world-class logistics and strict quality standards we navigate with confidence.
            </p>

            <div className="space-y-6">
              <FeatureItem
                icon={<ShoppingCart className="h-5 w-5" />}
                title="EU Single Market Access"
                description="Products entering Germany gain access to all 27 EU member states with minimal additional barriers."
              />
              <FeatureItem
                icon={<CheckLineIcon className="h-5 w-5" />}
                title="CE & EU Compliance"
                description="Expert guidance on CE marking, RoHS, REACH, MDR, and all European regulatory requirements."
              />
              <FeatureItem
                icon={<StarIcon className="h-5 w-5" />}
                title="German Quality Standards"
                description="We pre-qualify suppliers to meet the exacting benchmarks demanded by German buyers."
              />
              <FeatureItem
                icon={<PlaneIcon className="h-5 w-5" />}
                title="Frankfurt & Hamburg Hubs"
                description="Air and sea freight leverage two of Europe's most connected logistics nodes for rapid distribution."
              />
            </div>
          </div>

          
        </div>


        </div>


      </div>
    </section>
  )
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4">
      <div className="flex items-center bg-[#1F3A93] justify-center h-10 w-10 rounded-full text-white">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}