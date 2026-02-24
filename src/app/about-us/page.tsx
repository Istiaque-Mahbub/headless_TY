import AboutUsBannerPage from '@/components/aboutUs/banner'
import { MissionAndVision } from '@/components/aboutUs/missionAndVision'
import OurJourney from '@/components/aboutUs/OurJourney'
import { OurTeamSection } from '@/components/aboutUs/OurTeam'
import { ReadyToPartnerSection } from '@/components/aboutUs/ReadyToPartner'




import { TrustedPartnerSection } from '@/components/aboutUs/TrustedGlobalTrade'
import Head from 'next/head'


export default function AboutUsPage() {
  return (
   <>
   <Head>
      <title>About Us | TY International</title>
      <meta name="description" content="Learn about TY International, our mission, vision, and commitment to excellence in global trade." />
   </Head>
    <div>
        <AboutUsBannerPage />
        <TrustedPartnerSection/>
        <MissionAndVision/>
        <OurJourney/>
        <OurTeamSection/>
        <ReadyToPartnerSection/>
    </div>
   </>
  )
}
