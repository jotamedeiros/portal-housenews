import styles from './Lobby.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth/AuthContext';

export default function Lobby() {
    const { currentUser } = useAuth();

    return (
        <>
            <main className={styles.mainLobby}>
                <div className={styles.mainText}>
                    <h1 className={styles.mainTitle}>Olá, {currentUser.displayName}! Seja bem-vindo ao Portal House News.</h1>
                    <p className={styles.mainSubtitle}>Escolha abaixo qual ação você quer realizar.</p>
                    <hr />
                </div>
                <div className={styles.lobbyContainer}>
                    <Link to={'/'} className={`${styles.lobbyOption} ${styles.optHome}`}>
                        <img src='' alt="Ícone Página Inicial" />
                        <h3>Página Inicial</h3>
                    </Link>

                    <Link to={'/usersettings'} className={`${styles.lobbyOption} ${styles.optPerfil}`}>
                        <img src='' alt="Ícone Configurações de Perfil" />
                        <h3>Configurações de Perfil</h3>
                    </Link>

                    <Link to={'/userlobby'} className={`${styles.lobbyOption} ${styles.optBuyCredits}`}>
                        <img src='' alt="Ícone Compra de Créditos" />
                        <h3>Adquirir Créditos</h3>
                    </Link>

                    <Link to={'/newpost'} className={`${styles.lobbyOption} ${styles.optNewPost}`}>
                        <img src='' alt="Ícone Nova Postagem" />
                        <h3>Nova Postagem</h3>
                    </Link>

                    <Link to={'/userlobby'} className={`${styles.lobbyOption} ${styles.optFavNews}`}>
                        <img src='' alt="Ícone Notícias Favoritas" />
                        <h3>Notícias Favoritas</h3>
                    </Link>
                </div>
            </main>
        </>
    )
}