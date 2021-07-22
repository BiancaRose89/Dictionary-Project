import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="app-logo" alt="logo" />
        <a href="#" className="btn btn-primary">
          Button Check{" "}
        </a>
      </header>
    </div>
  );
}
