import styles from './LogoutButton.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth/AuthContext';

// 'currentUser' desestruturado para ser utilizado caso seja necessário acessar infos do usuário.
export default function LogoutButton() {
    const { currentUser, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(`Erro ao sair: ${error}`)
        }
    };

    return (
        <Link to='/'>
            <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
        </Link>
    )
}