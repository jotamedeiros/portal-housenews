/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import styles from './Listagem.module.css'
import NewsCard from './NewsCard/NewsCard'

export default function Listagem({ articles }) {
    return (
        <>
            <main>
                <div className={styles.breakingNewsContainer}>
                    {
                        articles.map((el, i) => (
                            <NewsCard
                                key={i}
                                author={el.author}
                                categorie={el.categorie}
                                imageUrl={el.imageUrl}
                                subtitle={el.subtitle}
                                text={el.text}
                                timestamp={el.timestamp}
                                title={el.title}
                                uid={el.uid}
                                articles={articles}
                            />
                        ))
                    }
                </div>
            </main>
        </>
    )
}