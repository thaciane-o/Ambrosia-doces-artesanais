import Produto from "../products/Produto";
import styles from "./Home.module.css";

function Home() {
    return (
        <section className={styles.section}>
            <div>
                <h1>Novidades</h1>
                <Produto/>
            </div>
            <div>
                <h1>Mais vendidos</h1>
                <Produto/>
            </div>
            <div>
                <h1>Promoções</h1>
                <Produto/>
            </div>
        </section>
    );
}

export default Home;