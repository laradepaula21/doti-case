import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Products from './pages/Products';
import Teste2 from './pages/Teste2';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/produtos" element={<Products/>} />
      </Routes>
    </BrowserRouter>
  )
}

