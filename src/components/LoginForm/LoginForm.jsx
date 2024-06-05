import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import styles from './LoginForm.module.css'

export default function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/userlobby");
            console.log(user);
            console.log('usuário logado com sucesso!')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            if (errorCode === "auth/invalid-credential") {
                window.alert("Erro - Email ou Senha incorretos!");
            } else if (errorCode === "auth/invalid-email") {
                window.alert("Erro - O email precisa ser válido!");
            }
        });
    }

    return (
        <>
            <main>
                <div className={styles.mainText}>
                    <h1 className={styles.mainTitle}>Entre em sua conta</h1>
                    <p className={styles.mainSubtitle}>Faça login para postar e compartilhar novas notícias, adquirir pacotes ou gerenciar suas informações de perfil.</p>
                    <p className={styles.mainRegistrationLink}>Ainda não possui uma conta? <Link to='/registration'>Crie sua conta</Link></p>
                    <hr />
                </div>
                <div className={styles.loginContainer}>
                    <form>
                        <div className={styles.inputContainer}>
                            <label htmlFor="f_email">Endereço de email</label>
                            <input type="email" name="f_email" id="f_email" placeholder='Seu email' onChange={(evt) => setEmail(evt.target.value)} required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="f_password">Senha</label>
                            <input type="password" name="f_password" id="f_password" placeholder='Sua senha' minLength='8' onChange={(evt) => setPassword(evt.target.value)} required />
                        </div>

                        <button onClick={handleSignIn} type="submit">Login</button>
                    </form>
                </div>
            </main>
        </>
    )
}