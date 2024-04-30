/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { getPastTime } from "../../../utils";
import styles from "./NewsCard.module.css";
import moment from "moment";

export default function NewsCard({ title, url, seendate, socialimage }) {
  const isHttps = url.startsWith('https')
  const rest = isHttps ? url.substring(8) : url.substring(7)
  const [domain] = rest.split('/')

  return (
    <div className={styles.newsCard}>
      <div className={styles.img}>
            <img src={socialimage} alt="Imagem da notícia" />
      </div>
      <div className={styles.generalInfo}>
            <h3>{title}</h3>
            <a href={url} target="_blank">{domain}</a>
            <p>{moment(seendate).format("DD/MM/YYYY - HH:mm")}</p>
            <p>há {getPastTime(seendate)} horas atrás</p>
      </div>
    </div>
  );
}
