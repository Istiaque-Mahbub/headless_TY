import ProductServiceHero from "@/components/product-and-service/ProductServiceHero"
import WhatWeDoSection from "@/components/home/WhatWeDoSection"
import ElectronicProductsSection from "@/components/product-and-service/ElectronicProductsSection"
import HealthcareProductsSection from "@/components/product-and-service/HealthcareProductsSection"
import SourcingExportSection from "@/components/product-and-service/SourcingExportSection"

export default function ProductAndServicePage() {
    return (
        <main className="flex flex-col gap-16">
            <ProductServiceHero />
            <WhatWeDoSection />
            <ElectronicProductsSection />
            <HealthcareProductsSection />
            <SourcingExportSection />
        </main>
    )
}
