import { Routes, Route, useLocation } from 'react-router-dom'
import HeroPage from './components/HeroPage/hero';
import Header from './components/headerPage/header'
import Services from './components/servicesPage/service'
import Industries from './components/industriesPage/industries'
import Company from './components/companyPage/company'
import Contact from './components/contactPage/contact'
import Footer from './components/footer/footer'
import ScrollManager from './components/ScrollManager'
import Loader from './components/Loader/Loader'
import './App.css'

function App() {
  const location = useLocation();

  return (
    <>
      <Loader />
      <ScrollManager />
      <Header/>
      {/* key forces a remount on route change so the fade-in animation replays */}
      <div className="page-transition" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<HeroPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
