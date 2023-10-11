import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection"
import './App.scss'
import ServicesSection from "./components/ServicesSection";
import CaseStudiesSection from "./components/CaseStudiesSection";

function App() {
	return (
		<>
			<NavBar />
			<HeroSection />
			<ServicesSection />
			<CaseStudiesSection />
		</>
	)
}

export default App
