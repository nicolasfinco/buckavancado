function Footer() {
    return (
        <footer className="bg-dark text-light pt-5 pb-4">
            <div className="container">

                <div className="row gy-5">

                    {/* DESCRIÇÃO */}
                    <div className="col-12 col-lg-4">
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <span className="material-symbols-outlined">menu_book</span>
                            <h5 className="mb-0 fw-bold">BOOK PLUS</h5>
                        </div>

                        <p className="text-secondary">
                            Sua livraria digital de confiança. Uma curadoria minimalista
                            das obras mais impactantes para o seu crescimento.
                        </p>

                        <div className="d-flex gap-3">
                            <span className="material-symbols-outlined">share</span>
                            <span className="material-symbols-outlined">favorite</span>
                        </div>
                    </div>

                    {/* LINKS */}
                    <div className="col-12 col-lg-8">
                        <div className="row">

                            <div className="col-6 col-md-4 mb-4 mb-md-0">
                                <h6 className="fw-bold mb-3">Explorar</h6>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-secondary text-decoration-none">Lançamentos</a></li>
                                    <li><a href="#" className="text-secondary text-decoration-none">Mais Vendidos</a></li>
                                    <li><a href="#" className="text-secondary text-decoration-none">E-books</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-4 mb-4 mb-md-0">
                                <h6 className="fw-bold mb-3">Suporte</h6>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-secondary text-decoration-none">Ajuda</a></li>
                                    <li><a href="#" className="text-secondary text-decoration-none">Envios</a></li>
                                    <li><a href="#" className="text-secondary text-decoration-none">Trocas</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-4">
                                <h6 className="fw-bold mb-3">Institucional</h6>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-secondary text-decoration-none">Sobre Nós</a></li>
                                    <li><a href="#" className="text-secondary text-decoration-none">Contato</a></li>
                                    <li><a href="#" className="text-secondary text-decoration-none">Privacidade</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <hr className="my-4" />


            </div>
        </footer>
    );
}

export default Footer;