import styles from './ResetPasswordForm.module.css';
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { Link } from 'react-router-dom';

export default function ResetPasswordForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleResetPassword = async (evt) => {
        evt.preventDefault();
        try {
            // altera o idioma do firebase para o idioma do dispositivo do usuário.
            auth.useDeviceLanguage();
            // envia email de redefinição de senha para o usuário.
            await sendPasswordResetEmail(auth, email);
            setMessage('Email para redefinição de senha enviado!');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <main className={styles.mainResetPassword}>
                <div className={styles.mainText}>
                    <h1 className={styles.mainTitle}>Esqueci minha senha</h1>
                    <p className={styles.mainSubtitle}>Você pode recuperá-la informando o endereço de e-mail de sua conta e recebendo um link de redefinição.</p>
                    <hr />
                </div>
                <div className={styles.resetPasswordContainer}>
                    <form onSubmit={handleResetPassword}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="f_email">Endereço de email</label>
                            <input type="email" name="f_email" id="f_email" placeholder='Seu email' onChange={(evt) => setEmail(evt.target.value)} required />
                        </div>

                        <button type="submit">Redefinir senha</button>

                        {message && <p className={styles.returnMessage}>{message}</p>}
                        {error && <p className={styles.returnMessage}>{error}</p>}
                    </form>
                </div>
            </main>
        </>
    )
}