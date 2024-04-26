/* eslint-disable react/prop-types */
import { getPastTime } from "../../../utils";
import styles from "./NewsCard.module.css";
import moment from "moment";

export default function NewsCard({ title, url, seendate, socialimage }) {
  return (
    <div className={styles.newsCard}>
      <div className={styles.img}>
            <img src={socialimage} />
      </div>
      <div className={styles.generalInfo}>
            <p>title: {title}</p>
            <p>date: {moment(seendate).format("DD/MM/YYYY - HH:mm")}</p>
            <p>past hours: há {getPastTime(seendate)} horas atrás</p>
      </div>
    </div>
  );
}
