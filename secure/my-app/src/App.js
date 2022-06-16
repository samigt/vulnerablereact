import SanitizedXss from "./components/SanitizedXss";
import "./App.css";
import Xss from "./components/Xss";
import Serialized from "./components/Serialized";

function App() {
  return (
    <div className="App">
      <h1>XSS attacks</h1>
      <br></br>
      <hr></hr>
      <h2>REACT XSS</h2>
      <Xss />
      <hr></hr>
      <h2>REACT Sanitized XSS</h2>
      <SanitizedXss />
      <h2>REACT Serialized not stringify json XSS</h2>
      <Serialized />
    </div>
  );
}

export default App;
