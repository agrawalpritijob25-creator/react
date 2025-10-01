import "./App.css";
import Home from "./Home.js";
import About from "./About.js";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
