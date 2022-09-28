import './App.css';
import Navbar from './components/Navbar/Navbar'
import HeroImage from './components/HeroImage/HeroImage';
import Activities from './components/Activities/Activities';
import Form from './components/Form/Form'
import Cottages from './components/Cottages/Cottages';

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
        <Form />
      </main>
    </div>
  );
}

export default App;
