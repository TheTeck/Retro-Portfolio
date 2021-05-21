import Space from './Components/Space/Space'
import Landing from './Components/Landing/Landing'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'
import './App.css';

function App() {

  return (
    <div className="App">
      <Landing />
      <Space />
      <About />
      <Skills />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;
