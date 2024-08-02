/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { getPastTime } from "../../../utils";
import styles from "./NewsCard.module.css";
import moment from "moment";

export default function NewsCard({ author, categorie, imageUrl, subtitle, text, timestamp, title, uid }) {

  return (
    <div className={styles.newsCard}>
      <div className={styles.img}>
            <img src={imageUrl} alt="Imagem da notícia" />
      </div>
      <div className={styles.generalInfo}>
            <h3>{title}</h3>
            <p>{moment(timestamp).format("DD/MM/YYYY - HH:mm")}</p>
            <p>há {getPastTime(timestamp)} horas atrás</p>
      </div>
    </div>
  );
}
