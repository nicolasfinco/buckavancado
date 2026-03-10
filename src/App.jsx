import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./Pages/Cadastro.jsx";
import Catalogo from "./Pages/Catalogo.jsx";
import Livro from "./pages/Livro";

export default function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/livro/:id" element={<Livro />} />
            </Routes>
        </>
    );
}