import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import Trend from './components/Trend/trend';
import Feature from './components/Feature/feature';
import Gallery from './components/Gallery/gallery';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Trend />
      <Feature />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
