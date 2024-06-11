import styles from './HomeRedirect.module.css';
import { Link } from 'react-router-dom';

export default function HomeRedirect() {
    return (
        <main className={styles.mainHomeRedirect}>
            <div className={styles.mainText}>
                <h1 className={styles.mainTitle}>Você já está logado.</h1>
                <p className={styles.mainSubtitle}>Para voltar à página inicial, <Link to={'/'} className={styles.homeRedirectLink}>clique aqui.</Link>.</p>
                <hr />
            </div>
        </main>
    )
}