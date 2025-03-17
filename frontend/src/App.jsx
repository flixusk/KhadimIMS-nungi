import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import './App.css'
import Help from "./pages/Help";
import Product from "./pages/Product";

function App () {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="help" element={<Help />} />
    <Route path="product" element={<Product />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
