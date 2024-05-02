/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import styles from './Listagem.module.css'
import NewsCard from './NewsCard/NewsCard'

    // https://api.gdeltproject.org/api/v2/doc/doc
    //?query=%20sourcelang:por
    //mode=ArtList
    //maxrecords=10
    //format=json
    //timespan=1d


export default function Listagem({ articles }) {
    return (
        <>
            <main>
                <div className={styles.mainTitle}>
                    {/* <h2>Breaking News</h2> */}
                </div>
                <div className={styles.breakingNewsContainer}>
                    {
                        articles.map((el, i) => (
                            <NewsCard
                                key={i}
                                title={el.title}
                                url={el.url}
                                seendate={el.seendate}
                                socialimage={el.socialimage}
                                articles={articles}
                            />
                        ))
                    }
                </div>
            </main>
        </>
    )
}