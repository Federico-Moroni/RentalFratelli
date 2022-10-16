/* IMPORTS */

// SCSS import:
import './App.css';
// Components import:
import Navbar from './components/Navbar/Navbar'
import HeroImage from './components/HeroImage/HeroImage';
import Cottages from './components/Cottages/Cottages';
import Activities from './components/Activities/Activities';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <HeroImage />
      </header>
      <main>
        <Cottages />
        <Activities />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
