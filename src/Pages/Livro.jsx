import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Livro() {
    const { id } = useParams();
    const [livro, setLivro] = useState(null);

    async function buscarLivro() {
        let retorno = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        retorno = await retorno.json();
        setLivro(retorno.livro);
    }

    useEffect(() => {
        buscarLivro();
    }, []);

    if (!livro) {
        return <p className="text-center mt-5">Carregando...</p>;
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={livro.imagem}
                        alt={livro.titulo}
                        className="img-fluid rounded shadow"
                    />
                </div>

                <div className="col-md-8">
                    <h2>{livro.titulo}</h2>
                    <p><strong>Autor:</strong> {livro.autor}</p>
                    <p><strong>Categoria:</strong> {livro.categoria}</p>
                    <p><strong>Faixa etária:</strong> {livro.faixa_etaria}</p>
                    <p><strong>Descrição:</strong> {livro.descricao}</p>
                </div>
            </div>
        </div>
    );
}