import styles from "./Contact.module.css";
import { FaEnvelope, FaInstagram, FaMapMarked, FaPhone, FaWhatsapp } from "react-icons/fa";

function Contact() {
    return (
        <div className={styles.container}>
            <h1>Fale conosco</h1>
            <ul>
                <li>
                    <h2><FaPhone /> Telefone</h2>
                    <p>(37) 9 9935-8892</p>
                </li>
                <li>
                    <h2><FaWhatsapp /> WhatsApp</h2>
                    <p>wa.me/37999358892</p>
                </li>
                <li>
                    <h2><FaInstagram /> Instagram</h2>
                    <p>@ambrosia.doce</p>
                </li>
                <li>
                    <h2><FaEnvelope /> Email</h2>
                    <p>ambrosia.doce@hotmail.com</p>
                </li>
                <li>
                    <h2><FaMapMarked /> Endereço</h2> 
                    <p>Rua (nome da rua), 000
                    <br/>
                    (Nome do bairro) - Formiga, Minas Gerais</p>
                </li>
            </ul>
        </div>
    );
}

export default Contact;