import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ProductPerro from './pages/ProductsPerro';
import ProductGato from './pages/ProductsGato';
import ProductAccesorio from './pages/ProductsAccesorio';
import Carrito from './pages/Carrito';

function App() {
  return (
    <>
      <NavBar/>
      <main >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<ProductDetail/>} />
          <Route path="/perro" element={<ProductPerro/>}/>
          <Route path="/gato" element={<ProductGato/>}/>
          <Route path="/accesorio" element={<ProductAccesorio/>}/>
          <Route path="/carrito" element={<Carrito/>}></Route>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
