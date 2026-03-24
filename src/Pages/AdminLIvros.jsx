import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminLivros() {
    const [livros, setLivros] = useState([]);

    async function buscarLivros() {
        let retorno = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        retorno = await retorno.json();
        setLivros(retorno.livros);
    }

    async function excluirLivro(id) {
        const token = localStorage.getItem("token");

        let retorno = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
        });

        if (retorno.ok) {
            buscarLivros();
        } else {
            alert("Erro ao excluir livro");
        }
    }

    useEffect(() => {
        buscarLivros();
    }, []);

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Área Administrativa - Livros</h2>
                <Link to="/admin/livros/novo" className="btn btn-success">
                    Novo Livro
                </Link>
            </div>

            <div className="row g-4">
                {livros.map((livro) => (
                    <div className="col-md-4" key={livro.id}>
                        <div className="card h-100 shadow-sm">
                            <img
                                src={livro.imagem}
                                className="card-img-top"
                                alt={livro.titulo}
                                style={{ height: "300px", objectFit: "cover" }}
                            />

                            <div className="card-body">
                                <h5>{livro.titulo}</h5>
                                <p><strong>Autor:</strong> {livro.autor}</p>
                                <p><strong>Categoria:</strong> {livro.categoria}</p>

                                <div className="d-flex gap-2">
                                    <Link
                                        to={`/admin/livros/editar/${livro.id}`}
                                        className="btn btn-primary btn-sm"
                                    >
                                        Editar
                                    </Link>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => excluirLivro(livro.id)}
                                    >
                                        Excluir
                                    </button>

                                    <Link
                                        to={`/livro/${livro.id}`}
                                        className="btn btn-warning btn-sm"
                                    >
                                        Ver
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}