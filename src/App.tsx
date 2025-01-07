import { Route, Routes } from "react-router-dom";

import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Home from "./pages/home";
import Works from "./pages/works";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myexperience" element={<Experience />} />
      <Route path="/myworks" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
