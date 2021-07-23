import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="main-heading">English Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="wine" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by
            <a
              href="https://adoring-kepler-a9a12f.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Bianca Schwartz{" "}
            </a>
            and is{" "}
            <a
              href="https://github.com/BiancaRose89/weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub{" "}
            </a>
            and{" "}
            <a
              href="https://focused-bardeen-30372a.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify{" "}
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
