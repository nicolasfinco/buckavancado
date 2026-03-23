import Banner from "../components/Banner/Banner.jsx";
import Catalogo from "../components/Catalogo/Catalogo.jsx";

function Home({ pesquisa }) {
    return (
        <div>
            <Banner />
            <Catalogo pesquisa={pesquisa} />
        </div>
    );
}

export default Home;