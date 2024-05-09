import styles from './LoginButton.module.css';
import { Link } from 'react-router-dom';

export default function LoginButton() {
    return (
        <Link to='/login'>
            <button className={styles.loginButton}>Login</button>
        </Link>
    )
}