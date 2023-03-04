import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Container from "./Container";
import logo from "../../img/logo.png";
import { FaShoppingBag, FaUser } from "react-icons/fa";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt="Logo" /></Link>
                <ul> 
                    <li>
                        <Link to="/">Página inicial</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contato</Link>
                    </li>
                    <li>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li>
                        <Link to="/shop">Loja</Link>
                    </li>
                    <li>
                        <Link to="/cart"><FaShoppingBag className={styles.icons} /></Link>
                    </li>
                    <li>
                        <Link to="/user"><FaUser className={styles.icons} /></Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar;