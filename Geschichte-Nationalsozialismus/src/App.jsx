import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartPage from './components/start-page'
import WasIstNationalsozialismus from './components/WasIstNationalsozialismus'
import Transition1 from './components/transition1'
import NationalsozialismusHeute from './components/NationalsozialismusHeute'
import Transition2 from './components/transition2'
import WerWarHitler from './components/WerWarHitler'
import FuehrerkultHeute from './components/FührerkultHeute'
import VerfolgungHolocaust from './components/VerfolgungHolocaust'
import VerboteneSymboleSection from './components/VerboteneSymbole'
import RechtsgrundlageSection from './components/Rechtsgrundlage'
import Quiz from './components/Quiz'

function App() {

  return (
    <>
      <div className="bg-amber-900 text-white min-h-screen font-sans w-full">
        <StartPage />
        <Transition1 />
        <WasIstNationalsozialismus />
        <Transition2 />
        <NationalsozialismusHeute />
        <Transition1 />
        <WerWarHitler />
        <Transition2 />
        <FuehrerkultHeute />
        <Transition1 />
        <VerfolgungHolocaust />
        <Transition2 />
        <VerboteneSymboleSection />
        <Transition1 />
        <RechtsgrundlageSection />
        <Transition2 />
        <Quiz />
        <Transition1 />
        <footer className="bg-slate-900 text-gray-400 text-xs p-4 text-center py-10">
          <p>© 2025 Geschichtsunterricht GK Hofer</p>
          <p>Alle Rechte vorbehalten.</p>


      
        </footer>
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-gray-400 text-xs p-2 text-center">
          <p>Diese Seite ist ein Bildungsprojekt und dient nur zu Demonstrationszwecken.</p>
        </div>
      </div>
    </>
  )
}

export default App
