import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/quote' element={<quote />} />
        <Route path='/photography' element={<quote />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
