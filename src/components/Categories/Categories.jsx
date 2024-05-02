import styles from './Categories.module.css'

/* Meio-Ambiente
Geopolítica
Comportamento
Saúde
Ásia
I.A
Extraterrestres
*/

const categories = [
    'Meio-Ambiente',
    'Geopolítica',
    'Comportamento',
    'Saúde',
    'Ásia',
    'I.A',
    'Extraterrestres',
]

export default function Categories({ orientation = 'horizontal' }) {

    const middle = Math.ceil((categories.length) / 2)
    const col1 = categories.slice(0, middle)
    const col2 = categories.slice(middle, categories.length)

    return orientation === 'horizontal' ? (
        <div className={styles.navContainer}>
            <ul className={styles.navList}>
                {
                    categories.map((categorie, i) => (
                        <a className={styles.navItem} href="#" key={i}>
                            <li>{categorie}</li>
                        </a>
                    ))
                }
            </ul>
        </div>
    ) : (
        <div className={styles.footerNavContainer}>
            <ul className={styles.footerNavList}>
                {
                    col1.map((categorie, i) => (
                        <a className={styles.footerNavItem} href="#" key={i}>
                            <li>{categorie}</li>
                        </a>
                    ))
                }
            </ul>
            <ul className={styles.footerNavList}>
                {
                    col2.map((categorie, i) => (
                        <a className={styles.footerNavItem} href="#" key={i}>
                            <li>{categorie}</li>
                        </a>
                    ))
                }
            </ul>
        </div>
    )
}