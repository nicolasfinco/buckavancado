import Cards from "../Cards/Cards";
import styles from "./Catalogo.module.css";

function Catalogo() {
    return (
        <section className={`container py-5 ${styles.catalogo}`}>

            {/* TOPO */}
            <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-4 mb-5">

                <div>
                    <div className="d-flex align-items-center gap-3 mb-3">
                        <div className={styles.lineDecor}></div>
                        <span className={styles.sectionSubtitle}>
              Novidades
            </span>
                    </div>

                    <h2 className={styles.sectionTitle}>
                        Destaques da Semana
                    </h2>
                </div>

                <div className="d-flex align-items-center gap-3">
                    <button className={styles.filterBtn}>
            <span className="material-symbols-outlined">
              filter_list
            </span>
                    </button>

                    <select className={styles.orderSelect}>
                        <option>Ordenar por: Relevância</option>
                        <option>Mais recentes</option>
                        <option>Menor preço</option>
                    </select>
                </div>
            </div>

            {/* GRID */}
            <div className="row g-4">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />


            </div>

            {/* BOTÃO */}
            <div className="text-center mt-5">
                <button className={styles.catalogBtn}>
                    Ver Catálogo Completo
                </button>
            </div>

        </section>
    );
}

export default Catalogo;