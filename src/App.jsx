import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUpPage';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Produtos from './pages/Produtos/Produtos';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SignUp/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/produtos" element={<Produtos/>} />
      </Routes>
    </BrowserRouter>
  )
}
