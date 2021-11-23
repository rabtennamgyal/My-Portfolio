// 😎 🦄

import Navbar from './components/Home/Navbar'
import Intro from './components/Home/Intro'
import Content from './components/Home/Content'
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Intro />
        <Content />
        <Skills />
        <Projects />
      </div>
  );
}

export default App;
