import Topbar from "./components/Topbar/Topbar"
import Intro from "./components/Intro/Intro"
import Testimonials from "./components/Testimonials/Testimonials"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/Menu/Menu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Intro />
        <About />
        {/* <Portfolio /> */}
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
