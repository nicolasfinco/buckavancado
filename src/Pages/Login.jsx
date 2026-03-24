import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [alerta, setAlerta] = useState("");

    async function realizarLogin(e) {
        e.preventDefault();

        let retorno = await fetch("https://apps-api-livros.ucxocw.easypanel.host/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                senha: senha,
            }),
        });

        retorno = await retorno.json();

        if (retorno.token) {
            localStorage.setItem("token", retorno.token);
            localStorage.setItem("usuario_nome", retorno.usuario.nome);
            localStorage.setItem("usuario_email", retorno.usuario.email);
            localStorage.setItem("usuario_id", retorno.usuario.id);

            setAlerta("Login realizado com sucesso!");
            navigate("/admin/livros");
        } else {
            setAlerta("E-mail ou senha incorretos.");
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setAlerta("Você já está logado.");
        }
    }, []);

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card p-4 shadow-sm border-0">
                        <h2 className="text-center mb-4">Login</h2>

                        <form onSubmit={realizarLogin}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Digite seu email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Digite sua senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-warning w-100">
                                Entrar
                            </button>

                            <p className="text-center mt-3">
                                Não tem conta? <Link to="/cadastro">Criar conta</Link>
                            </p>

                            {alerta && (
                                <p className="text-center mt-3 text-danger">{alerta}</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}