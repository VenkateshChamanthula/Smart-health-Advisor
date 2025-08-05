import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HealthForm from './components/HealthForm'
import ResultsSlider from './components/ResultsSlider'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <HeroSection />
      <HealthForm />
      <ResultsSlider />
      <Footer />
    </div>
  )
}

export default App

