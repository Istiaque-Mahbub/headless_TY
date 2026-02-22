import AboutUsBannerPage from '@/components/aboutUs/banner'
import { MissionAndVision } from '@/components/aboutUs/missionAndVision'
import OurJourney from '@/components/aboutUs/OurJourney'
import { OurTeamSection } from '@/components/aboutUs/OurTeam'
import { ReadyToPartnerSection } from '@/components/aboutUs/ReadyToPartner'




import { TrustedPartnerSection } from '@/components/aboutUs/TrustedGlobalTrade'


export default function AboutUsPage() {
  return (
    <div>
        <AboutUsBannerPage />
        <TrustedPartnerSection/>
        <MissionAndVision/>
        <OurJourney/>
        <OurTeamSection/>
        <ReadyToPartnerSection/>
    </div>
  )
}
