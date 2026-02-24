import { ReadyToPartnerSection } from '@/components/aboutUs/ReadyToPartner'
import MarketsRegionsBannerSection from '@/components/Markets/Banner'
import { MarketAccessSection } from '@/components/Markets/OurMarketAccess'
import { RegionsServedSection } from '@/components/Markets/RegionsServed'
import { WhereWeOperateSection } from '@/components/Markets/where-we-operate'
import Head from 'next/head'


export default function MarketsAndRegions() {
  return (
    <>
    <Head>
      <title>Markets & Regions | TY International</title>
      <meta name="description" content="Explore our markets and regions of operation." />
    </Head>
    <div>
        <MarketsRegionsBannerSection/>
        <WhereWeOperateSection/>
        <MarketAccessSection/>
        <RegionsServedSection/>
        <ReadyToPartnerSection/>
    </div>
    </>
    
  )
}
