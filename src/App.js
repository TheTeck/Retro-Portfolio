import Space from './Components/Space/Space'
import Landing from './Components/Landing/Landing'
import About from './Components/About/About'
import './App.css';

function App() {

  return (
    <div className="App">
      <div id="nav">
        <a href="#about-scene">About Me</a>
        <a href="#">Technical Skills</a>
        <a href="#">Projects</a>
        <a href="#">Resume</a>
        <a href="#">Contact</a>
      </div>
      <Landing />
      <Space />
      <About />
    </div>
  );
}

export default App;
