import styles from './NewsletterForm.module.css'

export default function NewsletterForm() {
    return (
        <div className={styles.newsletter}>
            <h4>Assine nossa Newsletter e receba todas as novidades!</h4>
            {/* <p>Receba as últimas notícias em primeira mão!</p> */}
            <input placeholder='Seu email' />
            <button>Assinar</button>
        </div>
    )
}

