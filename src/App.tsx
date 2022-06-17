import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Helmet from "react-helmet";
import NavBarWithSubnavigation from "./components/widget/navigation";
import Footer from "./components/footer";
import Flooring from "./pages/Flooring";
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Tømrerfirmaet Nikolaj Jensen ApS</title>
      </Helmet>
      <NavBarWithSubnavigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="projekter" element={<Project />} />
        <Route path="projekter/gulve" element={<Flooring />} />
        <Route path="om-os" element={<About />} />
        <Route path="kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
