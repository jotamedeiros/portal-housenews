/* eslint-disable react/jsx-key */
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './Listagem.module.css'
import gdelt from '../../gdelt'

// const news = [
//     {
//         title: "Quem é o promotor que já investigou crimes de guerra e indiciou Trump em 40 acusações",
//         url: 'news.yahoo.com',
//         date: '18/04/2024 - 16:00',
//         img: 'https://content.api.news/v3/images/bin/1bdb9beb34af55b9cf696359b16b842a'
//     },
//     {
//         title: "Quem é o promotor que já investigou crimes de guerra e indiciou Trump em 40 acusações",
//         url: 'news.yahoo.com',
//         date: '18/04/2024 - 16:00',
//         img: 'https://content.api.news/v3/images/bin/1bdb9beb34af55b9cf696359b16b842a'
//     },
//     {
//         title: "Quem é o promotor que já investigou crimes de guerra e indiciou Trump em 40 acusações",
//         url: 'news.yahoo.com',
//         date: '18/04/2024 - 16:00',
//         img: 'https://content.api.news/v3/images/bin/1bdb9beb34af55b9cf696359b16b842a'
//     },
//     {
//         title: "Quem é o promotor que já investigou crimes de guerra e indiciou Trump em 40 acusações",
//         url: 'news.yahoo.com',
//         date: '18/04/2024 - 16:00',
//         img: 'https://content.api.news/v3/images/bin/1bdb9beb34af55b9cf696359b16b842a'
//     },
// ]

    // https://api.gdeltproject.org/api/v2/doc/doc
    //?query=%20sourcelang:por
    //mode=ArtList
    //maxrecords=10
    //format=json
    //timespan=1d

export default function Listagem() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!loading) {
            setLoading(true)
            gdelt.get('/doc', {
                params: {
                    query: 'sourcelang:por',
                    maxrecords: 10,
                    format: 'json',
                    timespan: '1d',
                }
            })
            .then(({ data }) => {
                console.log(data?.articles)
                if (typeof data === 'string') {
                    console.error(`Error fetching data: ${data}`)
                } else if (typeof data === 'object' && 'articles' in data) {
                    setArticles(data.articles)
                } else {
                    console.error(`Error fetching articles`)
                }
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
                console.log(`Erro ao buscar gdelt`, err)
            })
        }
    }, [loading])

    return (
        <>
            <main>
                <h2>Últimas Notícias</h2>

                {
                    articles.map(el => (
                        <div className={styles.newsItem}>
                            <p>title: {el.title}</p>
                            <p>url: {el.url}</p>
                            <p>date: {el.seendate}</p>
                            <img src={el.socialimage} />
                        </div>
                    ))
                }
            </main>
        </>
    )
}