import styles from './LoginForm.module.css'
// import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    // const navigate = useNavigate();

    // const handleSubmit = (evt) => {
    //     evt.preventDefault();
    //     console.log('Login realizado com sucesso!');
    //     return navigate('/');
    // };

    return (
        <>
            <main>
                <div className={styles.loginContainer}>
                    <h2>Entre em sua conta</h2>
                    <p>Não tem uma conta? <a href="#">Cadastre-se agora</a></p>
                    <hr />
                    <form>
                        <div className={styles.inputContainer}>
                            <label htmlFor="email">Endereço de email</label>
                            <input type="email" name="email" id="email" placeholder='Seu email' required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="password">Senha</label>
                            <input type="password" name="password" id="password" placeholder='Sua senha' minLength='8' required />
                        </div>

                        <button type="submit">Login</button>
                    </form>
                </div>
            </main>
        </>
    )
}