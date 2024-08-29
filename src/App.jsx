import ExperienceSection from "./components/ExperienceSection/ExperienceSection"
import Herosection from "./components/Herosection"
import Navbar from "./components/Navbar"
import Reviews from "./components/Reviews"

function App() {

  return (
    <main>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <ExperienceSection></ExperienceSection>
      <Reviews />
    </main>

  )
}

export default App
