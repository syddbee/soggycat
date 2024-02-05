import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="flametext.gif" className="App-text" alt="flametext" />
        <img src="soggycat.webp" className="App-logo" alt="logo" />
        <p>
          Soggy Cat <span className="heart">♥️</span> 
        </p>
        <p className="small">
          we love soggy cat
        </p>
        <p>
          <a
            className="App-link"
            href="https://sydbee.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Back To Main Page
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
