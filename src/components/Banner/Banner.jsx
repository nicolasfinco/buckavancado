import css from "./Banner.module.css";

export default function Banner() {
    return (
        <section className={`bg-dark text-light p-5 ${css.banner}`}>
            <div className="container text-start">

                <p className="text-warning fw-bold">
                    CURADORIA EXCLUSIVA
                </p>

                <h1>
                    Descubra seu <br />
                    <span className="text-warning">próximo capítulo</span>
                </h1>

                <p>
                    Mergulhe em histórias que transformam.
                </p>

                <div className="mt-4">
                    <button className="btn btn-warning me-2">
                        Explorar
                    </button>
                    <button className="btn btn-outline-light">
                        Promoções
                    </button>
                </div>

            </div>
        </section>
    );
}