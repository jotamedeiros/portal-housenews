/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import styles from './Listagem.module.css'
import moment from 'moment'
import { getPastTime } from '../../utils'

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
                <h2>Breaking News</h2>
                {
                    articles.map(el => (
                        <div className={styles.newsItem}>
                            <p>title: {el.title}</p>
                            <p>url: {el.url}</p>
                            <p>date: {moment(el.seendate).format('DD/MM/YYYY - HH:mm')}</p>
                            <p>past hours: há {getPastTime(el.seendate)} horas atrás</p>
                            <img src={el.socialimage} />
                        </div>
                    ))
                }
            </main>
        </>
    )
}