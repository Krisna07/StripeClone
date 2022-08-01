import Nav from "./Components/Navbar/Nav";
import "./App.css";
import Home from "./Components/HomeItems/Home";
import Sponsers from "./Components/HomeItems/Sponsers";
import Section3 from "./Components/Section3/Section3";

function App() {
  return (
    <div className="App">
      <div className="topStripe"></div>

      <div className="bodyContainer">
        <div className="hrItems">
          <span />
          <span />
          <span />
        </div>
        <Nav />
        <Home />
        <Sponsers />
      </div>
      <Section3 />
    </div>
  );
}

export default App;
