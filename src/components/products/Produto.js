import Button from "../form/Button";
import styles from "./Produto.module.css";

function Produto() {
    return (
        <div className={styles.container}>
            <img src="https://via.placeholder.com/300" alt="Produto" />
            <h3>Nome do Produto</h3>
            <p>R$00,00</p>
            <Button text="Comprar" />
        </div>
    );
}

export default Produto;