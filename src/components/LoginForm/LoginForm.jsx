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
            navigate("/")
            console.log(user);
            console.log('usuário logado com sucesso!')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            console.log('deu merda')
        });
    }

    return (
        <>
            <main>
                <div className={styles.loginContainer}>
                    <h2>Entre em sua conta</h2>
                    <p>Não tem uma conta? <Link to='/registration'>Cadastre-se agora</Link></p>
                    <hr />
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