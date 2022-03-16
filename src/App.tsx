import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Helmet from "react-helmet";
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Tømrerfirmaet Nikolaj Jensen ApS</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
