import React from 'react'
import ContactUs from './ContactUs'
import ContactUsBanner from './ContactUsBanner'
import ContactUsMap from './ContactUsMap'



const ContactUsLayout = () => {
  return (
    <div>
       <ContactUsBanner></ContactUsBanner>
       {/* <ContactUsMap></ContactUsMap> */}
        
        <ContactUs></ContactUs>
        
        
    </div>
  )
}

export default ContactUsLayout