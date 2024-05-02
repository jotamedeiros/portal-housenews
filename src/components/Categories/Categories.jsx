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

export default function Categories() {
    return (
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
    )
}