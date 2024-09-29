

import AboutBannerwithbg from "./Component/About/AboutBannerwithbg"
import AboutTopBanner from "./Component/About/AboutTopBanner"
import MeetTheTeam from "./Component/About/MeetTheTeam"
import TestimonialWithBg from "./Component/About/TestimonialWithBg"

import ContactUsLayout from "./Component/Pages/Contact Us/ContactUsLayout"
import NewsBanner from "./Component/Pages/News/NewsBanner"
import NewsClassicLayout from "./Component/Pages/News/NewsClassicLayout"
import AllMembers from "./Component/Pages/OurTeam/AllMembers"
import OurTeamBanner from "./Component/Pages/OurTeam/OurTeamBanner"
import TeamFAQWithBG from "./Component/Pages/OurTeam/TeamFAQWithBG"



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
    
     
    </>
  )
}

export default App
