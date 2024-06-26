import styles from './Lobby.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth/AuthContext';
import { getDocumentWithCustomId } from '../RegistrationForm/RegistrationForm';
import { useEffect, useState } from 'react';

export default function Lobby() {
    const { currentUser } = useAuth();
    const [ documentData, setDocumentData ]  = useState(null);
    const [ nickname, setNickname ] = useState('');

    // função que obtem o valor do nickname do usuário através dos dados do 'userdoc'.
    useEffect(() => {
        const fetchData = async () => {
          const data = await getDocumentWithCustomId('users', currentUser.uid);
          if (data) {
            setDocumentData(data);
            setNickname(data.nickname);
            console.log(data)
            // If you want to access a specific string inside the data object, you can do so here
          }
        };
        fetchData();
    }, []);


    // async function userData() {
    //     await getDocumentWithCustomId('users', currentUser.uid).then((data) => {
    //      console.log(data);
    //     });
    // }

    return (
        <>
            <main className={styles.mainLobby}>
                <div className={styles.mainText}>
                    <h1 className={styles.mainTitle}>Olá, {nickname}! Seja bem-vindo ao Portal House News.</h1>
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