import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/heroSection/Hero";
import About from "./components/About/About";
import Course from "./components/coursesInfo/Course";
import Help from "./components/HelpSection/Help";
import Partner from "./components/partnerSection/Partner";
import Img from "./components/imgSection/Img";
import GlobalStyles from "./components/globalStyles/GlobalStyle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <About />
      <Course />
      <Help />
      <Partner />
      <Img />
    </div>
  );
}

export default App;
