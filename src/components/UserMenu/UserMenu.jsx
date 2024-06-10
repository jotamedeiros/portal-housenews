import styles from './UserMenu.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth/AuthContext';
import userImg from '../../assets/icons/user/user-blue-64.png';
import closeMenu from '../../assets/icons/actions/close-window-16.png'

export default function UserMenu() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.error(`Erro ao sair: ${error}`)
        }
    };

    const handleUserMenu = () => {
        const userMenuDropdown = document.querySelector('#userMenuDropdown');
        userMenuDropdown.style.display = 'flex';
    }

    const handleCloseUserMenu = () => {
        const userMenuDropdown = document.querySelector('#userMenuDropdown');
        userMenuDropdown.style.display = 'none';
    }

    return (
        <div className={styles.userMenu} >
            <div className={styles.userImgContainer}>
                <Link to='/userlobby'>
                    <img src={userImg} alt="Avatar do Usuário" onMouseEnter={handleUserMenu} />
                </Link>

                <ul className={styles.userMenuDropdown} id='userMenuDropdown'>
                    <img src={closeMenu} className={styles.closeMenuButton} alt="Fechar Menu" onClick={handleCloseUserMenu} />

                    <li className={styles.userMenuItem}>
                        <Link to='/usersettings' className={styles.userMenuLink} onClick={handleCloseUserMenu}>
                            <p>Meu Perfil</p>
                        </Link>
                    </li>

                    {/* Comprar créditos */}
                    <li className={styles.userMenuItem}>
                        <Link to='/userlobby' className={styles.userMenuLink} onClick={handleCloseUserMenu}>
                            <p>Adquirir Créditos</p>
                        </Link>
                    </li>

                    <li className={styles.userMenuItem}>
                        <Link to='/newpost' className={styles.userMenuLink} onClick={handleCloseUserMenu}>
                            <p>Nova Postagem</p>
                        </Link>
                    </li>

                    <li className={styles.userMenuItem}>
                        <p onClick={handleLogout} className={styles.userMenuLink}>Sair</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}