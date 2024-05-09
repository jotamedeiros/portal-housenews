import Listagem from "../../components/Listagem/Listagem";
import { useState } from 'react';
import { useEffect } from 'react';
import gdelt from '../../gdelt';

export default function Homepage() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)

    // executa requisição p/ API gdelt
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
            <Listagem articles={articles} />
        </>
    )
}