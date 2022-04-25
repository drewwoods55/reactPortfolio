import Topbar from "./components/Topbar/Topbar"
import Intro from "./components/Intro/Intro"
import Portfolio from "./components/Portfolio/Portfolio"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import Data from "./projects.json"


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Intro />
        <About />
        <Portfolio Data = {Data}/>
        <Contact />
      </div>
    </div>
  );
}

export default App;
