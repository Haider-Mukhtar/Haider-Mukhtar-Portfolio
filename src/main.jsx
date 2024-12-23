import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";

import App from './App.jsx'
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import MyWorks from './components/Work/MyWorks.jsx';
import MyExperience from './components/About/Experience/MyExperience.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/myworks" element={<MyWorks />} />
      <Route path="/myexperience" element={<MyExperience />} />
    </Routes>
  </BrowserRouter>,
)
