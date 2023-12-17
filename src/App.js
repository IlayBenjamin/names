import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Garage from './pages/Garage';
import Names from './pages/Names';
import Header from './components/Header';


export default function App () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header />} />
            <Route index path="/" element={<Home />} /> 
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/garage" element={<Garage />} />
            <Route path="/names" element={<Names />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
