import { useState } from "react";

export default function Catalogo() {

    const livros = [
        { titulo: "Dom Casmurro", autor: "Machado de Assis", categoria: "Romance" },
        { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", categoria: "Infantil" },
        { titulo: "1984", autor: "George Orwell", categoria: "Ficção" }
    ];

    const [busca, setBusca] = useState("");

    const livrosFiltrados = livros.filter((livro) =>
        livro.titulo.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <div className="container mt-5">

            <h2 className="mb-4">Catálogo de Livros</h2>

            {/* CAMPO DE BUSCA */}
            <input
                type="text"
                className="form-control mb-4"
                placeholder="Buscar livro..."
                onChange={(e) => setBusca(e.target.value)}
            />

            {/* FILTROS */}
            <div className="row mb-4">

                <div className="col-md-6">
                    <select className="form-select">
                        <option>Filtrar por Autor</option>
                        <option>Machado de Assis</option>
                        <option>Antoine de Saint-Exupéry</option>
                        <option>George Orwell</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <select className="form-select">
                        <option>Filtrar por Categoria</option>
                        <option>Romance</option>
                        <option>Infantil</option>
                        <option>Ficção</option>
                    </select>
                </div>

            </div>

            {/* LISTA DE LIVROS */}
            <div className="row">

                {livrosFiltrados.map((livro, index) => (
                    <div className="col-md-4 mb-4" key={index}>

                        <div className="card p-3 shadow-sm">

                            <h5>{livro.titulo}</h5>
                            <p className="text-muted mb-1">
                                Autor: {livro.autor}
                            </p>
                            <p className="text-muted">
                                Categoria: {livro.categoria}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}