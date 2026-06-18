import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Process from "./components/Process.jsx";
import Differentials from "./components/Differentials.jsx";
import About from "./components/About.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-pearl">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Differentials />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
