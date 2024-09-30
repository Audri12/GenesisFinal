

import Carousel from "react-multi-carousel"
import AboutBannerwithbg from "./Component/About/AboutBannerwithbg"
import AboutTopBanner from "./Component/About/AboutTopBanner"
import MeetTheTeam from "./Component/About/MeetTheTeam"
import TestimonialWithBg from "./Component/About/TestimonialWithBg"

import ContactUsLayout from "./Component/Pages/Contact Us/ContactUsLayout"
import HomeLayout1 from "./Component/Pages/HomeLayout/HomeLayout1"
import NewsBanner from "./Component/Pages/News/NewsBanner"
import NewsClassicLayout from "./Component/Pages/News/NewsClassicLayout"
import AllMembers from "./Component/Pages/OurTeam/AllMembers"
import OurTeamBanner from "./Component/Pages/OurTeam/OurTeamBanner"
import TeamFAQWithBG from "./Component/Pages/OurTeam/TeamFAQWithBG"
import Carousel1 from "./Component/Pages/HomeLayout/Carousel1"
import HomeCards from "./Component/Pages/HomeLayout/HomeCards"



function App() {
 

  return (
    <>
     <AboutTopBanner></AboutTopBanner>
     <AboutBannerwithbg></AboutBannerwithbg>
    <TestimonialWithBg></TestimonialWithBg>
    <MeetTheTeam></MeetTheTeam>
    <OurTeamBanner></OurTeamBanner>
    <AllMembers></AllMembers>
    
    <TeamFAQWithBG></TeamFAQWithBG>
    <NewsBanner></NewsBanner>
    <NewsClassicLayout></NewsClassicLayout>
    <ContactUsLayout></ContactUsLayout>
    {/* <HomeLayout1></HomeLayout1> */}
    <Carousel1></Carousel1>
    <HomeCards></HomeCards>
  
    
    
     
    </>
  )
}

export default App
