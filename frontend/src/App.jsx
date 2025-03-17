import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import './App.css'
import Help from "./pages/Help";

function App () {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="help" element={<Help />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
