import './App.css';
import Home from './components/home/Home';
import Shop from './components/shop/Shop'
import Header from './components/header/Header';
import ProductInfo from "./components/productInfo/ProductInfo";
import { Routes, Route } from "react-router-dom";
import Bag from './components/bag/Bag';
import Explore from './explore/Explore';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/explore/:brand" element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;
