import styles from "./Footer.module.css";
import { FaInstagram, FaWhatsapp, FaEnvelope} from "react-icons/fa";

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://www.instagram.com/ambrosia.doce/"><FaInstagram /></a>
                </li>
                <li>
                    <a href="https://wa.me/37999358892"><FaWhatsapp /></a>
                </li>
                <li>
                    <a href="https://mail.google.com/mail/u/0/#search/ambrosia.doce%40hotmail.com"><FaEnvelope/></a>
                </li>
            </ul>
            <p className={styles.copy_right}><span>Ambrosia doces artesanais</span> &copy; 2023</p>
        </footer>
    );
}

export default Footer;