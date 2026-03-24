import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroLivro() {
    const navigate = useNavigate();

    const [imagem, setImagem] = useState("");
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descricao, setDescricao] = useState("");
    const [autor, setAutor] = useState("");
    const [faixaEtaria, setFaixaEtaria] = useState("");

    async function cadastrarLivro(e) {
        e.preventDefault();

        const token = localStorage.getItem("token");

        let retorno = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
            body: JSON.stringify({
                imagem,
                titulo,
                categoria,
                descricao,
                autor,
                faixa_etaria: faixaEtaria,
            }),
        });

        retorno = await retorno.json();
        console.log(retorno);

        navigate("/admin/livros");
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card p-4 shadow-sm">
                        <h2 className="mb-4">Cadastrar Livro</h2>

                        <form onSubmit={cadastrarLivro}>
                            <div className="mb-3">
                                <label className="form-label">Imagem</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={imagem}
                                    onChange={(e) => setImagem(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Título</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={titulo}
                                    onChange={(e) => setTitulo(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Categoria</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={categoria}
                                    onChange={(e) => setCategoria(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Descrição</label>
                                <textarea
                                    className="form-control"
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Autor</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={autor}
                                    onChange={(e) => setAutor(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Faixa Etária</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={faixaEtaria}
                                    onChange={(e) => setFaixaEtaria(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-success">
                                Cadastrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}