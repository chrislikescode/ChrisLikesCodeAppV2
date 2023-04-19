import CSExorHoldings from "@/components/home/CaseStudy_ExorHoldings"
import CSHermesKore from "@/components/home/CaseStudy_HermesKore"
import GetStartedCTA from "@/components/home/GetStartedCTA"
import Hero from "@/components/home/hero"
import LogoCloud from "@/components/home/logocloud"
import Services from "@/components/home/services"
import Testimonial from "@/components/home/testimonial"
import ContactForm from "@/components/navigation/contact"
import Footer from "@/components/navigation/footer"
import Navigation from "@/components/navigation/navigation"

export default function Home() {

  function showContactForm(){
    document.getElementById("getStartedContactForm")!.style.left = "0";
  }


  return (
    
    <>
      <Navigation/>
      <Hero showContactForm={showContactForm}/>
      <LogoCloud/>

      <Services/>
      <Testimonial/>
      <CSHermesKore/>
      <CSExorHoldings/>
      <GetStartedCTA showContactForm={showContactForm}/>
      <ContactForm/>
      {/* <Footer/> */}
    </>

  )
}
