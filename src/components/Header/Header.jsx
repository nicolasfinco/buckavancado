import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <nav className="navbar navbar-expand-lg">
                <div className="container">

                    {/* LOGO */}
                    <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#">
                        <span className="material-symbols-outlined">menu_book</span>
                        <span className="fs-6">BOOK PLUS</span>
                    </a>

                    {/* TOGGLER */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#menuBookPlus"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* MENU */}
                    <div className="collapse navbar-collapse" id="menuBookPlus">

                        {/* SEARCH */}
                        <form className="d-flex flex-grow-1 justify-content-center my-3 my-lg-0">
                            <input
                                className="form-control w-50"
                                type="search"
                                placeholder="Encontre sua próxima leitura..."
                            />
                        </form>

                        {/* LINKS */}
                        <ul className="navbar-nav ms-lg-3 align-items-lg-center gap-lg-3">
                            <li className="nav-item">
                                <Link className="nav-link fw-medium" to="/catalogo">Catálogo</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-medium" href="#">Lançamentos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-medium" href="#">Mais vendidos</a>
                            </li>
                            <li className="nav-item mt-2 mt-lg-0">
                                <Link to="/login" className="btn btn-dark">
                                    Login admin
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    );
}