import styles from "./Company.module.css";

function Company() {
    return (
        <div className={styles.container}>
            <h1>Sobre nós</h1>
            <p>Fundamos a <b>Ambrosia</b> com um objetivo: oferecer uma loja online confiável, inteligente e de alta qualidade. A paixão pela excelência nos guia desde o início e assim seguimos em direção ao futuro. Sabemos que cada produto é valioso, por isso nosso objetivo é oferecer sua experiência de compra prazerosa. Veja você mesmo!</p>
            <img src="https://via.placeholder.com/500" alt="Ambrosia" />
        </div>
    );
}

export default Company;