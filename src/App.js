import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import About from './pages/about/About';
import { ProductProvider } from './context/Products/ProductProvider';
import Navbar from './components/Navigation/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
