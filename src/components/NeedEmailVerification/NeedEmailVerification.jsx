import styles from './NeedEmailVerification.module.css';
import { useAuth } from '../../contexts/Auth/AuthContext';
import { sendEmailVerification } from 'firebase/auth';

export default function NeedEmailVerification() {
    const currentUser = useAuth();

    const handleEmailVerify = (currentUser) => {
        if (currentUser && !currentUser.emailVerified) {
            sendEmailVerification(currentUser);
            alert('Email de verificação enviado!');
        }
    };

    return (
        <main className={styles.mainNeedEmailVerification}>
            <div className={styles.mainText}>
                <h1 className={styles.mainTitle}>Para realizar essa ação, você precisa verificar o email da sua conta.</h1>
                <p className={styles.mainSubtitle}><span className={styles.emailVerifyLink} onClick={handleEmailVerify} >Clique aqui</span> para receber seu email de verificação e depois confirme através do link.</p>
                <hr />
            </div>
        </main>
    )
}