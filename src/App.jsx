import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Products from './pages/Products';
import SignUp from './pages/Sign/SignUpPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SignUp/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/produtos" element={<Products/>} />
      </Routes>
    </BrowserRouter>
  )
}

