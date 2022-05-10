import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        {/* <About /> */}
        {/* <Projects /> */}
        {/* <Skills /> */}
        {/* <Contact /> */}
      </main>
        {/* <ScrollToTop />
        <Footer /> */}
    </div>
  );
}

export default App;
