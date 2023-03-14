import './App.css';
import AboutHive from './components/about/AboutHive';
import Carousel from './components/carousel/Carousel';
import NavBarOne from './components/navBar/NavBarOne';
import NavBarTwo from './components/navBar/NavBarTwo';

function App() {
  return (
    <div className="App">
      <NavBarOne/>
      <NavBarTwo/>
      <Carousel/>
      <AboutHive/>
    </div>
  );
}

export default App;
