import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Helmet from "react-helmet";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Tømrerfirmaet Nikolaj Jensen ApS</title>
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="om-os" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
