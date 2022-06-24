import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Helmet from "react-helmet";
import NavBarWithSubnavigation from "./components/widget/navigation";
import Footer from "./components/footer";
import Flooring from "./pages/projekter/Flooring";
import GalleryPage from "./pages/GalleryPage";
import Insulation from "./pages/projekter/Insulation";
import Roofing from "./pages/projekter/Roofing";
import Terrace from "./pages/projekter/Terrace";
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
        <Route path="projekter/isolering" element={<Insulation />} />
        <Route path="projekter/tag-og-renovering" element={<Roofing />} />
        <Route path="projekter/terasse-vindue-d%C3%B8r" element={<Terrace />} />
        <Route path="om-os" element={<About />} />
        <Route path="galleri" element={<GalleryPage />} />
        <Route path="kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
