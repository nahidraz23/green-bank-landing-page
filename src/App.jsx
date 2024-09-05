import ExperienceSection from "./components/ExperienceSection/ExperienceSection"
import Herosection from "./components/Herosection"
import Navbar from "./components/Navbar"
import PersonalizedSection from "./components/PersonalizedSection/PersonalizedSection"
import Reviews from "./components/Reviews"
import SponsorSection from "./components/SponsorSection"
import WeOfferSection from "./components/WeOfferSection/WeOfferSection"

function App() {

  return (
    <main>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <ExperienceSection></ExperienceSection>
      <SponsorSection></SponsorSection>
      <WeOfferSection></WeOfferSection>
      <PersonalizedSection></PersonalizedSection>
      <Reviews />
    </main>

  )
}

export default App
