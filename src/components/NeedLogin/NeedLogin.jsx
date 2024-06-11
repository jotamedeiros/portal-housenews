import styles from './NeedLogin.module.css';
import { Link } from 'react-router-dom';

export default function NeedLogin() {
    return (
        <main className={styles.mainNeedLogin}>
            <div className={styles.mainText}>
                <h1 className={styles.mainTitle}>Para realizar essa ação, você precisa acessar sua conta.</h1>
                <p className={styles.mainSubtitle}>Faça login <Link to={'/login'} className={styles.needLoginLink}>clicando aqui.</Link> Se você ainda não possui uma conta, <Link to={'/registration'} className={styles.needLoginLink}>cadastre-se!</Link></p>
                <hr />
            </div>
        </main>
    )
}