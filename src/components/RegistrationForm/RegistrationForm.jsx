import { Link } from 'react-router-dom';
import styles from './RegistrationForm.module.css';

export default function RegistrationForm() {
    return (
        <>
            <main>
                <div className={styles.registrationContainer}>
                    <h2>Crie sua conta</h2>
                    <p>Já tem uma conta? <Link to='/login'>Acesse aqui</Link></p>
                    <hr />
                    <form>
                        <div className={styles.registrationFormName}>
                            <div className={`fixed-class ${styles.inputContainer} var-class ${styles.firstName}`}>
                                <label htmlFor="firstName">Primeiro nome</label>
                                <input type="text" name="firstName" id="firstName" placeholder='Seu nome' required />
                            </div>
                            <div className={`fixed-class ${styles.inputContainer} var-class ${styles.lastName}`}>
                                <label htmlFor="lastName">Último nome</label>
                                <input type="text" name="lastName" id="lastName" placeholder='Seu sobrenome' required />
                            </div>
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="nickname">Apelido<span className={styles.optional}>*</span></label>
                            <input type="text" name="nickname" id="nickname" placeholder='Como você quer ser chamado(a) ?' />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="email">Endereço de email</label>
                            <input type="email" name="email" id="email" placeholder='Seu email' required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="password">Senha</label>
                            <input type="password" name="password" id="password" placeholder='Sua senha' minLength='8' required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="checkPassword">Confirme a senha</label>
                            <input type="password" name="checkPassword" id="checkPassword" placeholder='Confirme sua senha' minLength='8' required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="phone">Celular<span className={styles.optional}>*</span></label>
                            <input type="tel" name="phone" id="phone" pattern='/^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/' placeholder='Ex: +XX (XX) XXXXX-XXXX' maxLength='17' />
                        </div>

                        <div className={styles.lgpdCheck}>
                            <input type="checkbox" name="lgpdCheck" id="lgpdCheck" required />
                            <label htmlFor="lgpdCheck">Declaro e estou ciente que, para todos os fins de direito e privacidade, sou maior de 12 (doze) anos, e possuo plena capacidade civil, centro das minhas limitações legais, e autorizo a House News a tratar meus dados pessoais aqui inseridos (“Informações”). Neste ato, indico que estou plenamente ciente e de acordo que as Informações aqui compartilhadas serão controladas e tratadas inteiramente pela House News, na forma de suas Políticas de Privacidade e aceito os <a href="#">termos e condições de acesso</a>.</label>
                        </div>

                        <button type="submit">Criar conta</button>

                        <p className={styles.optionalObs}><span className={styles.optional}>*</span> Preenchimento do campo opcional.</p>
                    </form>
                </div>
            </main>
        </>
    )
}