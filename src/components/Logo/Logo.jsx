import Logotipo from '../../assets/images/housenews.png'
import styles from './Logo.module.css'

export default function Logo() {
    return (
        <a className={styles.logoContainer} href="#">
            <img className={styles.logoImg} src={Logotipo} alt="Logo House News" />
            <div className={styles.logoNameBox}>
                <h1 className={styles.logoTitle}>House News</h1>
                <p className={styles.logoSlogan}>Humans are diverse. Information is plural.</p>
            </div>
        </a>
    )
}