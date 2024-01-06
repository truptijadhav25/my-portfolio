import { BrowserRouter} from 'react-router-dom';
import { Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Education from "./Component/Education";
import Service from "./Component/Service";
import Project from "./Component/Project";
import "bootstrap/dist/js/bootstrap.min.js";




import './App.css';
import Navbar from './Component/Navbar';
<About/>

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
