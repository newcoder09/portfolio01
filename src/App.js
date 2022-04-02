import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import {Routes, Route} from 'react-router-dom'
 


// Nav bar outside of the Routes due to showing on every page, home stays "/" as home page
function App() {
  return (
    <>
<Navbar />
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/skills" element={<Skills/>} />
  <Route path="/projects" element={<Projects/>} />
  <Route path="/contact" element={<Contact/>} />
</Routes>
{/* <Home />
<About />
<Skills />
<Projects />
<Contact /> */}



    </>
  );
}

export default App;
