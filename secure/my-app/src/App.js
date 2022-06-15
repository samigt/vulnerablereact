import SanitizedXss from "./components/SanitizedXss";
import "./App.css";
import Xss from "./components/Xss";

function App() {
  return (
    <div className="App">
      <h1>XSS attacks</h1>
      <br></br>
      <hr></hr>
      <Xss />
      <SanitizedXss />
    </div>
  );
}

export default App;
