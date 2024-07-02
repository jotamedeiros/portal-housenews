import styles from './PerfilSettings.module.css';
import edit from '../../assets/icons/actions/edit-red-24.png';
import ArrowBack from '../ArrowBack/ArrowBack';
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/Auth/AuthContext';
import { getDocumentWithCustomId } from '../RegistrationForm/RegistrationForm';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';


export default function PerfilSettings() {
    const { currentUser } = useAuth();
    const user = currentUser;

    // declaração de states
    const [ documentData, setDocumentData ]  = useState(null);
    const [ name, setName ] = useState('')
    const [ nickname, setNickname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');


    // função que obtem o valor das infos do usuário através dos dados do 'userdoc'.
    useEffect(() => {
        const fetchData = async () => {
          const data = await getDocumentWithCustomId('users', currentUser.uid);
          if (data) {
            setDocumentData(data);
            setName(data.name);
            setNickname(data.nickname);
            setEmail(data.email);
            setPhone(data.phone);
            console.log('data:', data)
            // If you want to access a specific string inside the data object, you can do so here
          }
        };
        fetchData();
    }, []);

    // função que habilita os campos para alteração dos valores.
    const handleUnlockField = (id) => {
        const field = document.querySelector(`#${id}`);
        field.removeAttribute('disabled');
    };

    // função que salva as alterações no userdoc do firebase.
    const updateDocument = async () => {
        const docRef = doc(db, 'users', currentUser.uid);
        try {
            await updateDoc(docRef, {
                name: name,
                nickname: nickname,
                email: email,
                phone: phone
            });
            console.log('Documento atualizado com sucesso!')
            alert('Documento atualizado com sucesso!')
            location.reload();
        } catch (error) {
            console.error('Falha na atualização do documento:', error)
            alert('Erro: ')
        }
    }


    // função do botão que salva as alterações.
    const handleSaveChanges = (evt) => {
        evt.preventDefault();
        updateDocument();
    }

    return (
        <>
            <main className={styles.mainPerfilSettings}>
                <div className={styles.mainText}>
                    <div className={styles.mainTitleContainer}>
                        <ArrowBack url={'/userlobby'} />
                        <h1 className={styles.mainTitle}>Configurações de Perfil</h1>
                    </div>
                    <p className={styles.mainSubtitle}>Gerencie e atualize suas informações de perfil.</p>
                    <hr />
                </div>
                <form>
                    <div className={styles.perfilSettingsContainer}>
                        <div className={styles.perfilSettingsCard}>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilName">Nome Completo</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="text" name="f_perfilName" id="f_perfilName" value={name} onChange={(evt) => setName(evt.target.value)} disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={() => handleUnlockField('f_perfilName')} />
                                </div>
                            </div>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilNickname">Nome de Exibição</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="text" name="f_perfilNickname" id="f_perfilNickname" value={nickname} onChange={(evt) => setNickname(evt.target.value)} disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={() => handleUnlockField('f_perfilNickname')} />
                                </div>
                            </div>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilEmail">Email</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="email" name="f_perfilEmail" id="f_perfilEmail" value={email} onChange={(evt) => setEmail(evt.target.value)} disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={() => handleUnlockField('f_perfilEmail')} />
                                </div>
                            </div>
                            {/* <div className={styles.perfilField}>
                                <label htmlFor="f_perfilPassword">Senha</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="password" name="f_perfilPassword" id="f_perfilPassword" value='********' onChange='' disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={() => handleUnlockField('f_perfilPassword')} />
                                </div>
                            </div> */}
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilPhone">Celular</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="tel" name="f_perfilPhone" id="f_perfilPhone" value={phone} onChange={(evt) => setPhone(evt.target.value)} pattern='/^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/' maxLength='17' disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={() => handleUnlockField('f_perfilPhone')} />
                                </div>
                            </div>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilTwitter">Twitter</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="text" name="f_perfilTwitter" id="f_perfilTwitter" value='' onChange='' disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick='' />
                                </div>
                            </div>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilFacebook">Facebook</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="text" name="f_perfilFacebook" id="f_perfilFacebook" value='' onChange='' disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick='' />
                                </div>
                            </div>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilInstagram">Instagram</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="text" name="f_perfilInstagram" id="f_perfilInstagram" value='' onChange='' disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick='' />
                                </div>
                            </div>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilTelegram">Telegram</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="text" name="f_perfilTelegram" id="f_perfilTelegram" value='' onChange='' disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick='' />
                                </div>
                            </div>
                            <button className={styles.sendChangesButton} type="submit" onClick={handleSaveChanges}>Salvar alterações</button>
                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}