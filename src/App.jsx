import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUpPage';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Produtos from './pages/Produtos/Produtos';
import EditarPerfil from './pages/EditarPerfil/EditarPerfil';
import SignIn from './pages/SignIn/SignInPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SignUp/>} />
        <Route path="/login" element={ <SignIn/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/produtos" element={<Produtos/>} />
        <Route path="/editar" element={<EditarPerfil/>} />
      </Routes>
    </BrowserRouter>
  )
}
