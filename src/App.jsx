import { Route, Routes } from "react-router"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import MyExperience from "./pages/MyExperience"
import MyWorks from "./pages/MyWorks"

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
