import Categories from '../Categories/Categories'
import Logo from '../Logo/Logo'
import SocialBar from '../SocialBar/SocialBar'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.topFooter}>
                <Logo />
                <Categories orientation='column' />
                <SocialBar />
            </div>
            <hr />
            <p>2024 HouseNews. ₢ Todos os direitos reservados.</p>
        </footer>
    )
}