import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/pages/Contact/Contact";
import Privacy from "./components/pages/Privacy/Privacy";
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
