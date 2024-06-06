import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import Categories from '../Categories/Categories';
import { useAuth } from '../../contexts/Auth/AuthContext';

export default function Header() {
    const { currentUser } = useAuth();

    return (
        <header className={styles.header}>
            <div className={styles.topHeader}>
                <Logo />
                <SearchBar />
                {
                    currentUser ? (
                        <LogoutButton />
                    ) : (
                        <LoginButton />
                    )
                }
            </div>
            <Categories />
        </header>
    )
}