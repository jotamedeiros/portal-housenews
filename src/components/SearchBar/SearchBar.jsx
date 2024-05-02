import styles from './SearchBar.module.css'
import SearchIcon from '../../assets/icons/search-32.svg'

export default function SearchBar() {
    return (
        <div className={styles.searchContainer}>
            <input className={styles.inputSearch} type="text" name="search" id="search" placeholder='O que você está procurando?' />

            <img className={styles.iconSearch} src={SearchIcon} alt="Search Icon" />
        </div>
    )
}