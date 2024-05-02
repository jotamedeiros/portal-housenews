import styles from './SocialBar.module.css'

const socialIcons = [
    './facebook-24.png',
    './instagram-24.png',
    './x-24.png',
    './telegram-24.png'
]

export default function SocialBar() {
    return (
        <div className={styles.socialBar}>
            {
                socialIcons.map((icon, i) => (
                    <a href="#" key={i}>
                        <img src={icon} alt={`Icon ${icon}`} className={styles.socialIcon} />
                    </a>
                ))
            }
        </div>
    )
}