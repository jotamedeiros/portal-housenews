import styles from './PerfilSettings.module.css';
import edit from '../../assets/icons/actions/edit-red-24.png';
import ArrowBack from '../ArrowBack/ArrowBack';
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/Auth/AuthContext';
import { getDocumentWithCustomId } from '../RegistrationForm/RegistrationForm';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import Modal from '../Modal/Modal';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';

export default function PerfilSettings() {
    const { currentUser } = useAuth();
    const user = currentUser;

    // declaração de states
    const [ documentData, setDocumentData ]  = useState(null);
    const [ name, setName ] = useState('')
    const [ nickname, setNickname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ urlX, setUrlX ] = useState('');
    const [ urlFacebook, setUrlFacebook ] = useState('');
    const [ urlInstagram, setUrlInstagram ] = useState('');
    const [ urlTelegram, setUrlTelegram ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ currentPassword, setCurrentPassword ] = useState('');
    const [ error, setError ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ openModal, setOpenModal ] = useState(false);

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
            setUrlX(data.urlX);
            setUrlFacebook(data.urlFacebook);
            setUrlInstagram(data.urlInstagram);
            setUrlTelegram(data.urlTelegram);
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
        field.focus();
    };

    // função que salva as alterações no userdoc do firebase.
    const updateDocument = async () => {
        const docRef = doc(db, 'users', currentUser.uid);
        try {
            await updateDoc(docRef, {
                name: name,
                nickname: nickname,
                email: email,
                phone: phone,
                urlX: urlX,
                urlFacebook: urlFacebook,
                urlInstagram: urlInstagram,
                urlTelegram: urlTelegram
            });
            console.log('Documento atualizado com sucesso!')
            alert('Perfil atualizado com sucesso!')
            location.reload();
        } catch (error) {
            console.error('Falha na atualização do documento:', error)
            alert(`Erro: ${error}`)
        }
    };


    // função do botão que salva as alterações.
    const handleSaveChanges = (evt) => {
        evt.preventDefault();
        updateDocument();
    };

    // função do botão 'alterar senha' que abre o modal.
    const handleOpenModal = (evt) => {
        evt.preventDefault();
        setOpenModal(true);
    };

    // função do botão 'arrow back' que fecha o modal.
    const handleCloseModal = (evt) => {
        evt.preventDefault();
        setMessage('');
        setError('');
        setOpenModal(false);
    };

    // função que reautentica o usuário e depois altera sua senha baseada no novo valor.
    const handleReauthenticateAndUpdatePassword = async (evt) => {
        evt.preventDefault();
        setError('');
        setMessage('');

        // confere se o usuário está ou não logado para realizar a ação.
        if (!user) {
            setError('Você precisa estar logado para alterar a senha.')
            return;
        }

        // obtém as credenciais do usuário
        const credential = EmailAuthProvider.credential(user.email, currentPassword);

        // executa a reautenticação passando o valor do usuário e de suas credenciais e depois altera a senha.
        try {
            await reauthenticateWithCredential(user, credential);
            await updatePassword(user, password).then(() => {
                setMessage('Senha alterada com sucesso!');
            })
        } catch (error) {
            setError(`Falha ao alterar senha: ${error.message}`);
        }
    };

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

                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilPhone">Celular</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="tel" name="f_perfilPhone" id="f_perfilPhone" value={phone} onChange={(evt) => setPhone(evt.target.value)} pattern='/^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/' maxLength='17' disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={() => handleUnlockField('f_perfilPhone')} />
                                </div>
                            </div>

                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilX">Twitter</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="text" name="f_perfilX" id="f_perfilX" value={urlX} onChange={(evt) => setUrlX(evt.target.value)} disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={() => handleUnlockField('f_perfilX')} />
                                </div>
                            </div>

                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilFacebook">Facebook</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="text" name="f_perfilFacebook" id="f_perfilFacebook" value={urlFacebook} onChange={(evt) => setUrlFacebook(evt.target.value)} disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={() => handleUnlockField('f_perfilFacebook')} />
                                </div>
                            </div>

                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilInstagram">Instagram</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="text" name="f_perfilInstagram" id="f_perfilInstagram" value={urlInstagram} onChange={(evt) => setUrlInstagram(evt.target.value)} disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={() => handleUnlockField('f_perfilInstagram')} />
                                </div>
                            </div>

                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilTelegram">Telegram</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="text" name="f_perfilTelegram" id="f_perfilTelegram" value={urlTelegram} onChange={(evt) => setUrlTelegram(evt.target.value)} disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={() => handleUnlockField('f_perfilTelegram')} />
                                </div>
                            </div>

                            <div className={styles.perfilSettingsButtonsContainer}>
                                <button className={styles.sendChangesButton} type="submit" onClick={handleSaveChanges}>Salvar alterações</button>
                                <button className={styles.updatePasswordButton} onClick={handleOpenModal} >Alterar senha</button>
                            </div>

                            {/* Modal de alteração de senha */}
                            <Modal isOpen={openModal}>
                                {/* children */}
                                <div className={styles.modalContainer}>
                                    <div className={styles.modalTitleContainer}>
                                        <div onClick={handleCloseModal}>
                                            <ArrowBack />
                                        </div>
                                        <h1 className={styles.modalTitle}>Alterar senha</h1>
                                    </div>
                                    <p className={styles.modalSubtitle}>Para alterar sua senha, você precisa confirmar sua senha atual, e então informar sua nova senha.</p>
                                    <hr />
                                    
                                    <form>
                                        <div className={styles.modalFieldInfos}>
                                            <label htmlFor="f_currentPassword">Senha atual:</label>
                                            <input type="password" name="f_currentPassword" id="f_currentPassword" value={currentPassword} onChange={(evt) => setCurrentPassword(evt.target.value)} />
                                        </div>

                                        <div className={styles.modalFieldInfos}>
                                            <label htmlFor="f_password">Nova senha:</label>
                                            <input type="password" name="f_password" id="f_password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
                                        </div>

                                        <button onClick={handleReauthenticateAndUpdatePassword}>Salvar alteração</button>

                                        {error && <p style={{ color: 'var(--primary-color)', fontWeight: '600' }}>{error}</p>}
                                        {message && <p style={{ color: 'var(--black-color)' }}>{message}</p>}
                                    </form>
                                </div>
                            </Modal>

                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}