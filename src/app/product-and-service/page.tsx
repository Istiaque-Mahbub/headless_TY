import ProductServiceHero from "@/components/product-and-service/ProductServiceHero"
import WhatWeDoSection from "@/components/home/WhatWeDoSection"
import ElectronicProductsSection from "@/components/product-and-service/ElectronicProductsSection"
import HealthcareProductsSection from "@/components/product-and-service/HealthcareProductsSection"
import SourcingExportSection from "@/components/product-and-service/SourcingExportSection"
import Head from "next/head"
import RequestQuoteSection from "@/components/home/RequestQuoteSection"

export default function ProductAndServicePage() {
    return (
        <>
        <Head>
        <title>Products & Services | TY International</title>
        <meta name="description" content="Discover our comprehensive range of products and services, including sourcing, export, and distribution solutions." />
        </Head>
        <main className="flex flex-col gap-16">
            <ProductServiceHero />
            <WhatWeDoSection />
            <ElectronicProductsSection />
            <HealthcareProductsSection />
            <SourcingExportSection />
            <RequestQuoteSection />
        </main>
        </>
    )
}
