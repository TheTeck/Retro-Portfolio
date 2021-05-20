import Space from './Components/Space/Space'
import Landing from './Components/Landing/Landing'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import './App.css';

function App() {

  return (
    <div className="App">
      <Landing />
      <Space />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
