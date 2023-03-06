import styles from "./User.module.css";
import Input from "../form/Input";
import Button from "../form/Button";

function User() {
    return (
        <div>
            <form className={styles.form}>
                <h1>Login</h1>
                <Input 
                    type="email"
                    text="Email"
                    name="email"
                    placeholder="Insira seu email"
                />
                <Input 
                    type="password"
                    text="Senha"
                    name="passoword"
                    placeholder="Insira sua senha"
                />
                <Button text="Enviar"/>
            </form>
            <form className={styles.form}>
                <h1>Cadastro</h1>
                <Input 
                    type="name"
                    text="Nome completo"
                    name="name"
                    placeholder="Insira seu nome completo"
                />
                <Input 
                    type="email"
                    text="Email"
                    name="email"
                    placeholder="Insira seu email"
                />
                <Input 
                    type="password"
                    text="Senha"
                    name="passoword"
                    placeholder="Insira sua senha"
                />
                <Button text="Enviar" />
            </form>
        </div>  
    );
}

export default User;