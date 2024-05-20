import React from "react"

import { Navbar } from "../components/Navbar"
import Hero from "../components/Hero"
import AboutUs from "../components/AboutUs"
import { IntroContent } from "../components/IntroContent"
import { Sidebar } from "../components/Sidebar"
import CTA from "../components/CTA"
import Testimonials from "../components/Testimonials"
import GetInTouch from "../components/GetInTouch"
import Footer from "../components/Footer"

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <IntroContent />
      <CTA />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </>
  )
}
