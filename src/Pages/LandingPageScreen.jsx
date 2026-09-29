import React from 'react'
import NavBar from "../components/NavBar/NavBar";
import Courses from "../components/Courses/Courses";
import Campus from "../components/Campus/Campus";
import Facilities from "../components/Facilities/Facilities";
import Testimonials from "../components/Testinmonials/Testimonials";
import Cta from "../components/cta/Cta";
import Footer from "../components/Footer/Footer";
const LandingPageScreen = () => {
  return (
    <div>
            <NavBar />
            <Courses />
            <Campus />
            <Facilities />
            <Testimonials />
            <Cta />
            <Footer />
    </div>
  )
}

export default LandingPageScreen
