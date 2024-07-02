import styles from './ArrowBack.module.css';
import arrow from '../../assets/icons/actions/arrow.png';
import { useNavigate } from 'react-router-dom';

export default function ArrowBack({ url }) {
    const navigate = useNavigate();

    const handleNavigate = (url) => {
        navigate(url)
    }

    return (
        <img className={styles.arrowImg} onClick={() => handleNavigate(url)} src={arrow} alt="Retornar" />
    )
}