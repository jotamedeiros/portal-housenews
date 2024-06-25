import styles from './RegistrationForm.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase/firebase';
import { doc, getDoc, setDoc } from "firebase/firestore";
import {  createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';

export async function getDocumentWithCustomId(collectionName, customId) {
    try {
        // Referência ao documento com o ID personalizado
        const docRef = doc(db, collectionName, customId);

        // Obtenha o documento
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
            // Documento encontrado, acesse os dados
            const data = docSnapshot.data();
            console.log("Dados do documento:", data);
            return data;
        } else {
            // Documento não encontrado
            console.log("Documento não encontrado!");
            return null;
        }
    } catch (error) {
        console.error("Erro ao consultar documento: ", error);
        return null;
    }
}

export default function RegistrationForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [phone, setPhone] = useState('');

    const data = {
        name: name,
        nickname: nickname,
        email: email,
        phone: phone
    };

    // cria o documento referente ao usuário dentro do banco de dados.
    async function createDocumentWithCustomId(collectionName, customId, data) {
        try {
            // Referência ao documento com o ID personalizado
            const docRef = doc(db, collectionName, customId)

            // Defina os dados no documento
            await setDoc(docRef, data)

            console.log(`Documento criado com o ID personalizado: ${customId}`);
        } catch (error) {
            console.error("Erro ao criar documento com ID personalizado: ", error);
        }
    }


    // Função que cria o usuário
    const handleCreateUser = async (e) => {
        e.preventDefault()

        // se necessário remover o 'async' após o then() e os 'await' em updateProfile() e useDeviceLang()
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user;

                // chama a função de criação do documento referente ao usuário com ID customizado.
                await createDocumentWithCustomId('users', user.uid, data);

                // salva o 'name' do usuário como 'displayName' da conta no firebase.
                await updateProfile(user, {
                    displayName: name,
                    photoURL: null,
                });

                // altera o idioma do firebase para o idioma do dispositivo do usuário.
                await auth.useDeviceLanguage();

                // envia e-mail de verificação para o e-mail do usuário que criou a conta.
                sendEmailVerification(user);
                alert('Email de verificação de conta enviado!');
                console.log(user);
                alert('Conta criada com sucesso!')

                // redireciona o usuário para o lobby após criar a conta.
                navigate("/userlobby")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                if (error.code === "auth/email-already-in-use") {
                    window.alert("Erro - Email já cadastrado!");
                } else if (error.code === "auth/invalid-email") {
                    window.alert("Erro - Email inválido!");
                }
                // ..
            });
    }

    return (
        <>
            <main className={styles.mainRegistrationForm}>
                <div className={styles.mainText}>
                    <h1 className={styles.mainTitle}>Crie sua conta</h1>
                    <p className={styles.mainSubtitle}>Criando sua conta você poderá publicar e compartilhar as notícias postadas aqui no House News.</p>
                    <p className={styles.mainLoginLink}>Já tem uma conta? <Link to='/login'>Acesse aqui</Link></p>
                    <hr />
                </div>
                <div className={styles.registrationContainer}>
                    <form>
                        <div className={styles.inputContainer}>
                            <label htmlFor="f_name">Nome Completo</label>
                            <input type="text" name="f_name" id="f_name" placeholder='Seu nome' onChange={(evt) => setName(evt.target.value)} required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="f_nickname">Nome de Exibição</label>
                            <input type="text" name="f_nickname" id="f_nickname" placeholder='Como você quer ser chamado(a) ?' onChange={(evt) => setNickname(evt.target.value)} required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="f_email">Endereço de email</label>
                            <input type="email" name="f_email" id="f_email" placeholder='Seu email' onChange={(evt) => setEmail(evt.target.value)} required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="f_password">Senha</label>
                            <input type="password" name="f_password" id="f_password" placeholder='Sua senha' minLength='8' onChange={(evt) => setPassword(evt.target.value)} required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="check_password">Confirme a senha</label>
                            <input type="password" name="check_password" id="check_password" placeholder='Confirme sua senha' minLength='8' />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="f_phone">Celular<span className={styles.optional}>*</span></label>
                            <input type="tel" name="f_phone" id="f_phone" pattern='/^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/' placeholder='Ex: +XX (XX) XXXXX-XXXX' maxLength='17' onChange={(evt) => setPhone(evt.target.value)} />
                        </div>

                        <div className={styles.lgpdCheck}>
                            <input type="checkbox" name="lgpdCheck" id="lgpdCheck" required />
                            <label htmlFor="lgpdCheck">Declaro e estou ciente que, para todos os fins de direito e privacidade, sou maior de 18 (dezoito) anos, e possuo plena capacidade civil, dentro das minhas limitações legais, e autorizo a House News a tratar meus dados pessoais aqui inseridos (“Informações”). Neste ato, indico que estou plenamente ciente e de acordo que as Informações aqui compartilhadas serão controladas e tratadas inteiramente pela House News, na forma de suas Políticas de Privacidade e aceito os <a href="#">termos e condições de acesso</a>.</label>
                        </div>

                        <button onClick={handleCreateUser} type="submit">Criar conta</button>

                        <p className={styles.optionalObs}><span className={styles.optional}>*</span> Preenchimento do campo opcional.</p>
                    </form>
                </div>
            </main>
        </>
    )
}