import styles from './Header.module.css'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import LoginButton from '../LoginButton/LoginButton'
import Categories from '../Categories/Categories'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.topHeader}>
                <Logo />
                <SearchBar />
                <LoginButton />
            </div>

            <Categories />
        </header>
    )
}