import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import HeroBenefits from "./components/HeroBenefits.jsx";
import Services from "./components/Services.jsx";
import SeoContent from "./components/SeoContent.jsx";
import Projects from "./components/Projects.jsx";
import Process from "./components/Process.jsx";
import Differentials from "./components/Differentials.jsx";
import Audience from "./components/Audience.jsx";
import About from "./components/About.jsx";
import SimpleStart from "./components/SimpleStart.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-pearl">
      <Header />
      <main>
        <Hero />
        <HeroBenefits />
        <Services />
        <SeoContent />
        <Projects />
        <Process />
        <Differentials />
        <Audience />
        <About />
        <SimpleStart />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
