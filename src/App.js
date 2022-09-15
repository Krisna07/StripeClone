import "./App.css";

import Section3 from "./Components/Section3/Section3";
import Section4 from "./Components/Section4/Section4";
import Section1 from "./Components/Section1/Section1";
import Section5 from "./Components/Section5/Section5";
import Section6 from "./Components/Section6/Section6";
import StripeSessions from "./Components/StripeSessions";
import Sections from "./Components/Sections/Sections";
import Section7 from "./Components/Section7/Section7";
import { Section8 } from "./Components/Section8/Section8";

function App() {
  return (
    <div className="App">
      <div className="topSection">
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
          padding: "10rem",
          background: "rgb(233, 233, 233)",
        }}
      >
        <Sections
          topics="Virtual event"
          headings="Watch Sessions on demand"
          des="Stripe Sessions—our annual conference—is now available to watch on demand. Learn more about the future of the internet economy and see new Stripe products in action."
          btnText={"Watch now"}
          Color={"blue"}
          textColor="white"
          rightItem={<StripeSessions />}
        />
      </div>
      <Section7 />
      <Section8 />
    </div>
  );
}

export default App;

//
