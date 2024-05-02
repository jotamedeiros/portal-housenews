import SearchIcon from '../../assets/icons/search-32.svg'
import Logo from '../Logo/Logo'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.topHeader}>
                <Logo />

                <div className={styles.searchContainer}>
                    <input className={styles.inputSearch} type="text" name="search" id="search" placeholder='O que você está procurando?' />

                    <img className={styles.iconSearch} src={SearchIcon} alt="Search Icon" />
                </div>

                <a href="#">
                    <button className={styles.loginButton}>Login</button>
                </a>
            </div>
        
            <div className={styles.navContainer}>
                <ul className={styles.navList}>
                    <a className={styles.navItem} href="#"><li>Meio-Ambiente</li></a>
                    <a className={styles.navItem} href="#"><li>Geopolítica</li></a>
                    <a className={styles.navItem} href="#"><li>Comportamento</li></a>
                    <a className={styles.navItem} href="#"><li>Saúde</li></a>
                    <a className={styles.navItem} href="#"><li>Ásia</li></a>
                    <a className={styles.navItem} href="#"><li>I.A</li></a>
                    <a className={styles.navItem} href="#"><li>Extraterrestres</li></a>
                </ul>
            </div>
        </header>
    )
}