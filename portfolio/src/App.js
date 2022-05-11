import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <p>
          Header hidden from phone view.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Skills />
      </header>
      <main>

      </main>
    </div>
  );
}

export default App;
