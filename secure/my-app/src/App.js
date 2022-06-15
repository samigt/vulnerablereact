import logo from "./logo.svg";
import "./App.css";
import Xss from "./components/Xss";

function App() {
  return (
    <div className="App">
      <h1>XSS attacks</h1>
      <br></br>
      <hr></hr>
      <Xss />
    </div>
  );
}

export default App;
