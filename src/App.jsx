import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Hero from './pages/Hero';
import Navbar from './pages/Navbar';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Photography from './pages/Photography';
import Cinematography from './pages/Cinematography';
import Fashion from './pages/Fashion';
import Portrait from './pages/Portrait'
import Automobile from './pages/Automobile'
import Ecom from './pages/Ecom'
import Product from './pages/Product'
import Events from './pages/Events'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/quote' element={<quote />} />
        <Route path='/photography' element={<Photography />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/cinematography' element={<Cinematography />} />
        <Route path='/photography/fashion' element={<Fashion />} />
        <Route path='/photography/portrait' element={<Portrait />} />
        <Route path='/photography/automobile' element={<Automobile />} />
        <Route path='/photography/ecom' element={<Ecom />} />
        <Route path='/photography/product' element={<Product />} />
        <Route path='/photography/events' element={<Events />} />
        <Route path='/photography/portrait' element={<Portrait />} />
        <Route path='/photography/automobile' element={<Automobile />} />
        <Route path='/photography/ecom' element={<Ecom />} />
        <Route path='/photography/product' element={<Product />} />
        <Route path='/photography/events' element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
