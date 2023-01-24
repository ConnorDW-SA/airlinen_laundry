import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Quote from "./components/pages/Quote/Quote";
import Services from "./components/pages/Services/Services";
import Contact from "./components/pages/Contact/Contact";
import Team from "./components/pages/Team/Team";
import Privacy from "./components/pages/Privacy/Privacy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="quote" element={<Quote />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="meet-the-team" element={<Team />} />
          <Route path="privacy-policy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
