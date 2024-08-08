import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Components/Navbar'
import BottomNav from './Components/BottomNav'
import './App.css'
import AnnouncementsNav from './Components/AnnouncementsNav'
import MainContent from './Components/MainContent'
import StatsSection from './Components/StatsSection'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <div className='-mx-8'>
    <Navbar />
    <BottomNav />
    <AnnouncementsNav />
    <MainContent />
    <StatsSection />
    <Footer />
    </div>
    </>
  )
}

export default App
