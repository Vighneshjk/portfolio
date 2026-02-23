import ThunderBackground from './components/ThunderBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      {/* Animated thunder background (fixed behind everything) */}
      <ThunderBackground />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating scroll-to-top button */}
      <ScrollToTop />
    </>
  );
}

export default App;
