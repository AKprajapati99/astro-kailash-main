import Navbar from "./navbar/Navbar"
import Home from "./pages/Home";
import Zodiac from "./component/Zodiac";
import Astrology from "./component/Astrology";
import Services from "./component/Services";
import Vastu from "./component/Vastu";
import CelestialPage from "./component/CelestialPage";
import ReadingsSection from "./component/ReadingsSection";
import Footer from "./footer/Footer";
function App() {
  return <>
  <Navbar/>
  <Home/>
  <Zodiac/>
  <Astrology/>
  <Services/>
  <Vastu/>
  <CelestialPage/>
  <ReadingsSection/>
  <Footer/>
  </>;
}

export default App;
