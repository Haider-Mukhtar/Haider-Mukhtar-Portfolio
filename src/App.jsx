import { Route, Routes } from "react-router"
import Contact from "./pages/contact"
import Home from "./pages/home"
import MyExperience from "./pages/experience"
import MyWorks from "./pages/works"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myexperience" element={<MyExperience />} />
      <Route path="/myworks" element={<MyWorks />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
