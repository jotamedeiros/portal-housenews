/* eslint-disable react/jsx-key */
import styles from './Listagem.module.css'

export default function Listagem() {
    const news = [
        {
            title: "Quem é o promotor que já investigou crimes de guerra e indiciou Trump em 40 acusações",
            url: 'news.yahoo.com',
            date: '18/04/2024 - 16:00',
            img: 'https://content.api.news/v3/images/bin/1bdb9beb34af55b9cf696359b16b842a'
        },
        {
            title: "Quem é o promotor que já investigou crimes de guerra e indiciou Trump em 40 acusações",
            url: 'news.yahoo.com',
            date: '18/04/2024 - 16:00',
            img: 'https://content.api.news/v3/images/bin/1bdb9beb34af55b9cf696359b16b842a'
        },
        {
            title: "Quem é o promotor que já investigou crimes de guerra e indiciou Trump em 40 acusações",
            url: 'news.yahoo.com',
            date: '18/04/2024 - 16:00',
            img: 'https://content.api.news/v3/images/bin/1bdb9beb34af55b9cf696359b16b842a'
        },
        {
            title: "Quem é o promotor que já investigou crimes de guerra e indiciou Trump em 40 acusações",
            url: 'news.yahoo.com',
            date: '18/04/2024 - 16:00',
            img: 'https://content.api.news/v3/images/bin/1bdb9beb34af55b9cf696359b16b842a'
        },
    ]

    return (
        <>
            <main>
                <h2>Últimas Notícias</h2>

                {
                    news.map(el => (
                        <div className={styles.newsItem}>
                            <p>title: {el.title}</p>
                            <p>url: {el.url}</p>
                            <p>date: {el.date}</p>
                            <img src={el.img} />
                        </div>
                    ))
                }
            </main>
        </>
    )
}