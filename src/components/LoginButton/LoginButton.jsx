import styles from './LoginButton.module.css'

export default function LoginButton() {
    return (
        <a href="#">
            <button className={styles.loginButton}>Login</button>
        </a>
    )
}