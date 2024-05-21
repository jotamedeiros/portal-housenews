import styles from './PerfilSettings.module.css';
import edit from '../../assets/icons/actions/edit-red-24.png';
import save from '../../assets/icons/actions/save-red-24.png';
import { useState } from 'react';

export default function PerfilSettings({ name, nickname, email, password, phone, xUrl, facebookUrl, instagramUrl, telegramUrl }) {
    // Declaração dos States.
    const [perfilName, setPerfilName] = useState(name);
    const [perfilNickname, setPerfilNickname] = useState(nickname);
    const [perfilEmail, setPerfilEmail] = useState(email);
    const [perfilPassword, setPerfilPassword] = useState(password);
    const [perfilPhone, setPerfilPhone] = useState(phone);


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

    function handleUpdateName() {
        if (perfilName.length > 0) {
            alert(`Nome do usuário alterado para "${perfilName}" com sucesso!`);
            const perfilNameField = document.querySelector('#f_perfilName');
            perfilNameField.setAttribute('disabled', 'disabled');
        } else {
            alert(`ERRO: O campo "Nome" precisa ser preenchido.`)
            const perfilNameField = document.querySelector('#f_perfilName');
            perfilNameField.focus();
        }
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

    function handleUpdateNickname() {
        alert(`Apelido do usuário alterado para "${perfilNickname}" com sucesso!`);
        const perfilNicknameField = document.querySelector('#f_perfilNickname');
        perfilNicknameField.setAttribute('disabled', 'disabled');
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

    function handleUpdateEmail() {
        alert(`Email do usuário alterado para "${perfilEmail}" com sucesso!`);
        const perfilEmailField = document.querySelector('#f_perfilEmail');
        perfilEmailField.setAttribute('disabled', 'disabled');
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

    function handleUpdatePassword() {
        alert(`Senha do usuário alterada com sucesso!`);
        const perfilPasswordField = document.querySelector('#f_perfilPassword');
        perfilPasswordField.setAttribute('disabled', 'disabled');
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

    function handleUpdatePhone() {
        alert(`Celular do usuário alterado com sucesso!`);
        const perfilPhoneField = document.querySelector('#f_perfilPhone');
        perfilPhoneField.setAttribute('disabled', 'disabled');
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
                                    <img src={save} alt="Ícone Salvar Alteração" onClick={handleUpdateName} />
                                </div>
                            </div>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilNickname">Apelido</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="text" name="f_perfilNickname" id="f_perfilNickname" value={perfilNickname} onChange={handleChangeNickname} disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={handleEnableNicknameField} />
                                    <img src={save} alt="Ícone Salvar Alteração" onClick={handleUpdateNickname} />
                                </div>
                            </div>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilEmail">Email</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="email" name="f_perfilEmail" id="f_perfilEmail" value={perfilEmail} onChange={handleChangeEmail} disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={handleEnableEmailField} />
                                    <img src={save} alt="Ícone Salvar Alteração" onClick={handleUpdateEmail} />
                                </div>
                            </div>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilPassword">Senha</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="password" name="f_perfilPassword" id="f_perfilPassword" value={perfilPassword} onChange={handleChangePassword} disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={handleEnablePasswordField} />
                                    <img src={save} alt="Ícone Salvar Alteração" onClick={handleUpdatePassword} />
                                </div>
                            </div>
                            <div className={styles.perfilField}>
                                <label htmlFor="f_perfilPhone">Celular</label>
                                <div className={styles.perfilFieldInfos}>
                                    <input type="tel" name="f_perfilPhone" id="f_perfilPhone" value={perfilPhone} onChange={handleChangePhone} pattern='/^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/' maxLength='17' disabled />
                                    <img src={edit} alt="ícone Editar Informação" onClick={handleEnablePhoneField} />
                                    <img src={save} alt="Ícone Salvar Alteração" onClick={handleUpdatePhone} />
                                </div>
                            </div>
                            {/* <button className={styles.sendChangesButton} type="submit">Salvar alterações</button> */}
                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}