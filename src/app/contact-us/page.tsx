import ContactUsBannerPage from '@/components/contact-us/banner'
import { ContactInfoSection } from '@/components/contact-us/contactInfo'
import RequestQuoteSection from '@/components/home/RequestQuoteSection'
import Head from 'next/head'

export default function ContactUs() {
  return (
   <>
   <Head>
        <title>Contact Us | TY International</title>
        <meta name="description" content="Get in touch with TY International for inquiries, support, or partnership opportunities." />
   </Head>
    <div>
        <ContactUsBannerPage/>
        <ContactInfoSection/>
        <RequestQuoteSection/>
    </div></>
  )
}
