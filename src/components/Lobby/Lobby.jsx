import styles from './Lobby.module.css';
import { Link } from 'react-router-dom';

export default function Lobby() {
    return (
        <>
            <main className={styles.mainLobby}>
                <div className={styles.mainText}>
                    <h1 className={styles.mainTitle}>Olá, Usuário! Seja bem-vindo ao Portal House News.</h1>
                    <p className={styles.mainSubtitle}>Escolha abaixo qual ação você quer realizar.</p>
                    <hr />
                </div>
                <div className={styles.lobbyContainer}>
                    <Link to={'/'} className={`${styles.lobbyOption} ${styles.optHome}`}>
                        <img src='' alt="Ícone Página Inicial" />
                        <h3>Página Inicial</h3>
                    </Link>

                    <Link to={'/'} className={`${styles.lobbyOption} ${styles.optPerfil}`}>
                        <img src='' alt="Ícone Configurações de Perfil" />
                        <h3>Configurações de Perfil</h3>
                    </Link>

                    <Link to={'/'} className={`${styles.lobbyOption} ${styles.optBuyCredits}`}>
                        <img src='' alt="Ícone Compra de Créditos" />
                        <h3>Comprar Créditos</h3>
                    </Link>

                    <Link to={'/newpost'} className={`${styles.lobbyOption} ${styles.optNewPost}`}>
                        <img src='' alt="Ícone Nova Postagem" />
                        <h3>Nova Postagem</h3>
                    </Link>
                </div>
            </main>
        </>
    )
}