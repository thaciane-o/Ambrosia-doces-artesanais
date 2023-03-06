import styles from "./Button.module.css";

function Button({text}) {
    return (
        <div>
            <Button className={styles.btn}>{text}</Button>
        </div>
    );
}

export default Button;