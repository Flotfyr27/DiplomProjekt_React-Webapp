import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Helmet from "react-helmet";
import NavBarWithSubnavigation from "./components/widget/navigation";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Tømrerfirmaet Nikolaj Jensen ApS</title>
      </Helmet>
      <NavBarWithSubnavigation />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projekter" element={<Project />} />
        <Route path="om-os" element={<About />} />
        <Route path="kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
