import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection"
import './App.scss'
import ServicesSection from "./components/ServicesSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import BrandsSection from "./components/BrandsSection";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<NavBar />
			<HeroSection />
			<ServicesSection />
			<CaseStudiesSection />
			<BrandsSection />
			<Footer />
		</>
	)
}

export default App
