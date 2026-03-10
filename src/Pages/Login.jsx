import {Link} from "react-router-dom";


function Login() {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-5">

                    <div className="card p-4 shadow-sm border-0">

                        <h2 className="section-title text-center mb-4">
                            Login
                        </h2>

                        <form>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Digite seu email"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Digite sua senha"
                                />
                            </div>

                            <Link className="btn login-btn w-100" to="/Catalago">Entrar</Link>
                            <p className="text-center mt-3">
                                Não tem conta? <a href="/cadastro">Criar conta</a>
                            </p>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;
