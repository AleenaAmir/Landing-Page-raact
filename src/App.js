import "./App.css";
import NavBar from "./Header/NavBar";
import EcomActvity from "./eComerece/EcomActivity";
import Community from "./section-three/Community";
import Footer from "./Footer/Footer";

import SectionBox from "./slider/SectionBox";

function App() {
  return (
    <div>
      <NavBar />
      <EcomActvity />
      <Community />
      <SectionBox />
      <Footer />
    </div>
  );
}

export default App;
