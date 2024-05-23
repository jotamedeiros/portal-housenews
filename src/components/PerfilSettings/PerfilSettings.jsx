import styles from './PerfilSettings.module.css';
import edit from '../../assets/icons/actions/edit-red-24.png';
import { useState } from 'react';

export default function PerfilSettings({ name, nickname, email, password, phone, xUrl, facebookUrl, instagramUrl, telegramUrl }) {
    // Declaração dos States.
    const [perfilName, setPerfilName] = useState(name);
    const [perfilNickname, setPerfilNickname] = useState(nickname);
    const [perfilEmail, setPerfilEmail] = useState(email);
    const [perfilPassword, setPerfilPassword] = useState(password);
    const [perfilPhone, setPerfilPhone] = useState(phone);
    const [perfilTwitter, setPerfilTwitter] = useState(xUrl);
    const [perfilFacebook, setPerfilFacebook] = useState(facebookUrl);
    const [perfilInstagram, setPerfilInstagram] = useState(instagramUrl);
    const [perfilTelegram, setPerfilTelegram] = useState(telegramUrl);

    // Função que salva alterações feitas no perfil do usuário.
    function handleUpdateFields(evt) {
        evt.preventDefault();
        if (perfilName.length > 0 && perfilNickname.length > 0 && perfilEmail.length > 0 && perfilPassword.length >= 8) {
            const perfilNameField = document.querySelector('#f_perfilName');
            perfilNameField.setAttribute('disabled', 'disabled');
            const perfilNicknameField = document.querySelector('#f_perfilNickname');
            perfilNicknameField.setAttribute('disabled', 'disabled');
            const perfilEmailField = document.querySelector('#f_perfilEmail');
            perfilEmailField.setAttribute('disabled', 'disabled');
            const perfilPasswordField = document.querySelector('#f_perfilPassword');
            perfilPasswordField.setAttribute('disabled', 'disabled');
            const perfilPhoneField = document.querySelector('#f_perfilPhone');
            perfilPhoneField.setAttribute('disabled', 'disabled');
            const perfilTwitterField = document.querySelector('#f_perfilTwitter');
            perfilTwitterField.setAttribute('disabled', 'disabled');
            const perfilFacebookField = document.querySelector('#f_perfilFacebook');
            perfilFacebookField.setAttribute('disabled', 'disabled');
            const perfilInstagramField = document.querySelector('#f_perfilInstagram');
            perfilInstagramField.setAttribute('disabled', 'disabled');
            const perfilTelegramField = document.querySelector('#f_perfilTelegram');
            perfilTelegramField.setAttribute('disabled', 'disabled');
            alert('As alterações foram salvas com sucesso!')
        } else {
            alert('Você precisa preencher todos os campos corretamente!')
        }
    }


    // Funções de manipulação do campo 'Nome'.
    function handleEnableNameField() {
        const perfilNameField = document.querySelector('#f_perfilName');
        perfilNameField.removeAttribute('disabled');
        setPerfilName('');
        perfilNameField.focus();
    }

    function handleChangeName(evt) {
        setPerfilName(evt.target.value);
    }


    // Funções de manipulação do campo 'Nickname'.
    function handleEnableNicknameField() {
        const perfilNicknameField = document.querySelector('#f_perfilNickname');
        perfilNicknameField.removeAttribute('disabled');
        setPerfilNickname('');
        perfilNicknameField.focus();
    }

    function handleChangeNickname(evt) {
        setPerfilNickname(evt.target.value);
    }


    // Funções de manipulação do campo 'Email'.
    function handleEnableEmailField() {
        const perfilEmailField = document.querySelector('#f_perfilEmail');
        perfilEmailField.removeAttribute('disabled');
        setPerfilEmail('');
        perfilEmailField.focus();
    }

    function handleChangeEmail(evt) {
        setPerfilEmail(evt.target.value);
    }


    // Funções de manipulação do campo 'Password'.
    function handleEnablePasswordField() {
        const perfilPasswordField = document.querySelector('#f_perfilPassword');
        perfilPasswordField.removeAttribute('disabled');
        setPerfilPassword('');
        perfilPasswordField.focus();
    }

    function handleChangePassword(evt) {
        setPerfilPassword(evt.target.value);
    }


    // Funções de manipulação do campo 'Phone'.
    function handleEnablePhoneField() {
        const perfilPhoneField = document.querySelector('#f_perfilPhone');
        perfilPhoneField.removeAttribute('disabled');
        setPerfilPhone('');
        perfilPhoneField.focus();
    }

    function handleChangePhone(evt) {
        setPerfilPhone(evt.target.value);
    }


    // Funções de manipulação do campo 'Twitter'.
    function handleEnableTwitterField() {
        const perfilTwitterField = document.querySelector('#f_perfilTwitter');
        perfilTwitterField.removeAttribute('disabled');
        setPerfilTwitter('');
        perfilTwitterField.focus();
    }

    function handleChangeTwitter(evt) {
        setPerfilTwitter(evt.target.value);
    }


    // Funções de manipulação do campo 'Facebook'.
    function handleEnableFacebookField() {
        const perfilFacebookField = document.querySelector('#f_perfilFacebook');
        perfilFacebookField.removeAttribute('disabled');
        setPerfilFacebook('');
        perfilFacebookField.focus();
    }

    function handleChangeFacebook(evt) {
        setPerfilFacebook(evt.target.value);
    }


    // Funções de manipulação do campo 'Instagram'.
    function handleEnableInstagramField() {
        const perfilInstagramField = document.querySelector('#f_perfilInstagram');
        perfilInstagramField.removeAttribute('disabled');
        setPerfilInstagram('');
        perfilInstagramField.focus();
    }

    function handleChangeInstagram(evt) {
        setPerfilInstagram(evt.target.value);
    }


    // Funções de manipulação do campo 'Telegram'.
    function handleEnableTelegramField() {
        const perfilTelegramField = document.querySelector('#f_perfilTelegram');
        perfilTelegramField.removeAttribute('disabled');
        setPerfilTelegram('');
        perfilTelegramField.focus();
    }

    function handleChangeTelegram(evt) {
        setPerfilTelegram(evt.target.value);
    }

    return (
        <>
            <main className={styles.mainPerfilSettings}>
                <div className={styles.mainText}>
                    <h1 className={styles.mainTitle}>Configurações de Perfil</h1>
                    <p className={styles.mainSubtitle}>Gerencie e atualize suas informações de perfil.</p>
                    <hr />
                </div>
                <form>
                    <div className={styles.perfilSettingsContainer}>
                        <div className={styles.perfilSettingsCard}>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilName">Nome</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="text" name="f_perfilName" id="f_perfilName" value={perfilName} onChange={handleChangeName} disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={handleEnableNameField} />
                                </div>
                            </div>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilNickname">Apelido</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="text" name="f_perfilNickname" id="f_perfilNickname" value={perfilNickname} onChange={handleChangeNickname} disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={handleEnableNicknameField} />
                                </div>
                            </div>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilEmail">Email</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="email" name="f_perfilEmail" id="f_perfilEmail" value={perfilEmail} onChange={handleChangeEmail} disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={handleEnableEmailField} />
                                </div>
                            </div>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilPassword">Senha</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="password" name="f_perfilPassword" id="f_perfilPassword" value={perfilPassword} onChange={handleChangePassword} disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={handleEnablePasswordField} />
                                </div>
                            </div>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilPhone">Celular</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="tel" name="f_perfilPhone" id="f_perfilPhone" value={perfilPhone} onChange={handleChangePhone} pattern='/^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/' maxLength='17' disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={handleEnablePhoneField} />
                                </div>
                            </div>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilTwitter">Twitter</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="text" name="f_perfilTwitter" id="f_perfilTwitter" value={perfilTwitter} onChange={handleChangeTwitter} disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={handleEnableTwitterField} />
                                </div>
                            </div>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilFacebook">Facebook</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="text" name="f_perfilFacebook" id="f_perfilFacebook" value={perfilFacebook} onChange={handleChangeFacebook} disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={handleEnableFacebookField} />
                                </div>
                            </div>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilInstagram">Instagram</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="text" name="f_perfilInstagram" id="f_perfilInstagram" value={perfilInstagram} onChange={handleChangeInstagram} disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={handleEnableInstagramField} />
                                </div>
                            </div>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilTelegram">Telegram</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="text" name="f_perfilTelegram" id="f_perfilTelegram" value={perfilTelegram} onChange={handleChangeTelegram} disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={handleEnableTelegramField} />
                                </div>
                            </div>
                            <button className={styles.sendChangesButton} type="submit" onClick={handleUpdateFields}>Salvar alterações</button>
                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}