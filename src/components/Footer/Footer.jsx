import Categories from '../Categories/Categories'
import Logo from '../Logo/Logo'
import NewsletterForm from '../NewsletterForm/NewsletterForm'
import SocialBar from '../SocialBar/SocialBar'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.topFooter}>
                <div className={styles.footerLogo}>
                    <Logo />
                    <SocialBar />
                </div>
                <Categories orientation='column' />
                <NewsletterForm />
            </div>
            <hr />
            <p className={styles.copyrightText}>2024 HouseNews. ₢ Todos os direitos reservados.</p>
        </footer>
    )
}