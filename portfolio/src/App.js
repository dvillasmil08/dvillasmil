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
        <h1>TEST</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <ScrollToTop />
        <Footer />
    </div>
  );
}

export default App;
