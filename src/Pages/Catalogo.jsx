import { useState, useEffect } from "react";

export default function Catalogo() {
    const [livros, setLivros] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");

    async function buscarLivros() {
        let url = "https://apps-api-livros.ucxocw.easypanel.host/livro";

        let filtro = "";

        if (titulo !== "") {
            filtro += "?titulo=" + titulo;
        }

        if (autor !== "") {
            if (filtro === "") {
                filtro += "?autor=" + autor;
            } else {
                filtro += "&autor=" + autor;
            }
        }

        url += filtro;

        let retorno = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        retorno = await retorno.json();

        setLivros(retorno.livros);
    }

    useEffect(() => {
        buscarLivros();
    }, [titulo, autor]);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Catálogo de Livros</h2>

            <div className="row mb-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Título"
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>

                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Autor"
                        onChange={(e) => setAutor(e.target.value)}
                    />
                </div>
            </div>

            <div className="row">
                {livros.map((livro, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card p-3 shadow-sm h-100">
                            <h5>{livro.titulo}</h5>
                            <p className="text-muted mb-0">Autor: {livro.autor}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}