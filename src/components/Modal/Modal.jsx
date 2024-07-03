import styles from './Modal.module.css';

export default function Modal({isOpen, children}) {
    
    if (isOpen) {
        return (
            <div className={styles.modalBackground}>
                <div className={styles.modal}>
                    {children}
                </div>
            </div>
        )
    }

    return null
}