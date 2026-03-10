export default function Cadastro() {
    return (
        <div className="container d-flex justify-content-center align-items-center mt-5">

            <div className="card p-4 shadow" style={{ width: "400px" }}>

                <h3 className="text-center mb-4">Cadastro</h3>

                <form>

                    {/* NOME */}
                    <div className="mb-3">
                        <label className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite seu nome"
                        />
                    </div>

                    {/* EMAIL */}
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Digite seu email"
                        />
                    </div>

                    {/* SENHA */}
                    <div className="mb-3">
                        <label className="form-label">Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Digite sua senha"
                        />
                    </div>

                    {/* BOTÃO */}
                    <button className="btn btn-dark w-100">
                        Cadastrar
                    </button>

                </form>

            </div>

        </div>
    );
}