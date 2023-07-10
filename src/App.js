import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary App</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://katiehaughey.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Katie Haughey
            </a>{" "}
            and open-sourced on{" "}
            <a
              href="https://github.com/KatieHaughey/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
