import "./App.css";

import Section3 from "./Components/Section3/Section3";
import Section4 from "./Components/Section4/Section4";
import Section1 from "./Components/Section1/Section1";
import Section5 from "./Components/Section5/Section5";
import Section6 from "./Components/Section6/Section6";
import ResueableContents from "./Components/ResueableContents";

function App() {
  return (
    <div className="App">
      <div>
        <div className="topStripe"></div>
        <Section1 />
      </div>

      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <div
        style={{
          width: "100%",
          position: "relative",
          background: "white",
          padding: "12rem",
          zIndex: "10",
          border: "1px solid red",
        }}
      >
        <ResueableContents
          topics="Virtual event"
          headings="Watch Sessions on demand"
          des="Stripe Sessions—our annual conference—is now available to watch on demand. Learn more about the future of the internet economy and see new Stripe products in action."
          btnText={"Watch now"}
          Color={"blue"}
          textColor="white"
        />
      </div>
      <Section5 />
      <Section4 />
    </div>
  );
}

export default App;

//
