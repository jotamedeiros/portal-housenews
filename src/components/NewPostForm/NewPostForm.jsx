import styles from './NewPostForm.module.css'

export default function NewPostForm() {
    return (
        <>
                <main className={styles.mainNewPost}>
                    <div className={styles.mainText}>
                        <h1 className={styles.mainTitle}>Nova Postagem</h1>
                        <p className={styles.mainSubtitle}>Crie um novo post e compartilhe suas informações publicando a notícia rapidamente aqui no House News.</p>
                        <hr />
                    </div>
                    <div className={styles.NewPostFormContainer}>
                        <form>
                            <label htmlFor="f_categorie">Categoria</label>
                            <select name="f_categorie" id="f_categorie" required>
                                <option value="" selected disabled>Escolha uma categoria</option>
                                <option value="esportes">Esportes</option>
                                <option value="meioambiente">Meio Ambiente</option>
                                <option value="geopolitica">Geopolítica</option>
                                <option value="comportamento">Comportamento</option>
                                <option value="saude">Saúde</option>
                                <option value="asia">Ásia</option>
                                <option value="ia">I.A</option>
                                <option value="extraterrestres">Extraterrestres</option>
                            </select>

                            <label htmlFor="f_author">Autor</label>
                            <input type="text" name="f_author" id="f_author" required />

                            <label htmlFor="f_title">Título</label>
                            <input type="text" name="f_title" id="f_title" required />
                    
                            <label htmlFor="f_subtitle">Subtítulo</label>
                            <input type="text" name="f_subtitle" id="f_subtitle" required />

                            <label htmlFor="f_img">Imagem</label>
                            <input type="file" name="f_img" id="f_img" accept='image/*' required />

                            <label htmlFor="f_text">Texto</label>
                            <textarea name="f_text" id="f_text" autoComplete='off' placeholder='Insira o texto da notícia aqui.' minLength='20' maxLength='400' required></textarea>

                            <button type="submit">Postar</button>
                        </form>
                    </div>
                </main>
        </>
    )
}