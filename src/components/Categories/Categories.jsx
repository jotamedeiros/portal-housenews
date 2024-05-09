/* eslint-disable react/prop-types */
import styles from './Categories.module.css'

const categories = [
    {
        name: 'Esportes',
        url: '/cat1'
    },
    {
        name: 'Meio-Ambiente',
        url: '/cat2'
    },
    {
        name: 'Geopolítica',
        url: '/cat3'
    },
    {
        name: 'Comportamento',
        url: '/cat4'
    },
    {
        name: 'Saúde',
        url: '/cat5'
    },
    {
        name: 'Ásia',
        url: '/cat6'
    },
    {
        name: 'I.A',
        url: '/cat7'
    },
    {
        name: 'Extraterrestres',
        url: '/cat8'
    },
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
                        <a className={styles.navItem} href={categorie.url} key={i}>
                            <li>{categorie.name}</li>
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
                        <a className={styles.footerNavItem} href={categorie.url} key={i}>
                            <li>{categorie.name}</li>
                        </a>
                    ))
                }
            </ul>
            <ul className={styles.footerNavList}>
                {
                    col2.map((categorie, i) => (
                        <a className={styles.footerNavItem} href={categorie.url} key={i}>
                            <li>{categorie.name}</li>
                        </a>
                    ))
                }
            </ul>
        </div>
    )
}