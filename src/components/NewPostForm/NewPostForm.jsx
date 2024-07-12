import styles from './NewPostForm.module.css'
import ArrowBack from '../ArrowBack/ArrowBack';
import { auth, db } from '../../firebase/firebase';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useState } from 'react';
import { useAuth } from '../../contexts/Auth/AuthContext';

export default function NewPostForm() {
    const [ categorie, setCategorie ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ subtitle, setSubtitle ] = useState('');
    const [ text, setText ] = useState('');

    const { currentUser } = useAuth();

    const newpostData = {
        uid: currentUser.uid,
        categorie: categorie,
        title: title,
        subtitle: subtitle,
        text: text
    };

    // cria o documento referente ao usuário dentro do banco de dados.
    async function createDocumentWithCustomId(collectionName, customId, newpostData) {
        try {
            // Referência ao documento com o ID personalizado
            const docRef = doc(db, collectionName, customId)

            // Defina os dados no documento
            await setDoc(docRef, newpostData)

            console.log(`Documento criado com o ID personalizado: ${customId}`);
        } catch (error) {
            console.error("Erro ao criar documento com ID personalizado: ", error);
        }
    }

    // // função que limpa os campos.
    // const handleClearFields = async (e) => {
    //     e.preventDefault();
    //     setCategorie('');
    //     setAuthor('');
    //     setTitle('');
    //     setSubtitle('');
    //     setText('');
    // }

    // função que cria o documento referente ao novo post.
    const handleCreateNewPost = async (e) => {
        e.preventDefault();
        try {
            await createDocumentWithCustomId('news', currentUser.uid, newpostData).then(() => {
                alert('Nova notícia compartilhada com sucesso!');
                location.reload();
            })
        } catch (error) {
            alert('Erro ao compartilhar notícia', error)
        }
    }

    return (
        <>
            <main className={styles.mainNewPost}>
                <div className={styles.mainText}>
                    <div className={styles.mainTitleContainer}>
                        <ArrowBack url={'/userlobby'} />
                        <h1 className={styles.mainTitle}>Nova Postagem</h1>
                    </div>
                    <p className={styles.mainSubtitle}>Crie um novo post e compartilhe suas informações publicando a notícia rapidamente aqui no House News.</p>
                    <hr />
                </div>
                <div className={styles.NewPostFormContainer}>
                    <form onSubmit={handleCreateNewPost}>
                        <label htmlFor="f_categorie">Categoria</label>
                        <select name="f_categorie" id="f_categorie" onChange={(evt) => setCategorie(evt.target.value)} required>
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
                        <input type="text" name="f_author" id="f_author" value={author} onChange={(evt) => setAuthor(evt.target.value)} required />

                        <label htmlFor="f_title">Título</label>
                        <input type="text" name="f_title" id="f_title" value={title} onChange={(evt) => setTitle(evt.target.value)} required />
                
                        <label htmlFor="f_subtitle">Subtítulo</label>
                        <input type="text" name="f_subtitle" id="f_subtitle" value={subtitle} onChange={(evt) => setSubtitle(evt.target.value)} required />

                        <label htmlFor="f_img">Imagem</label>
                        <input type="file" name="f_img" id="f_img" accept='image/*' />

                        <label htmlFor="f_text">Texto</label>
                        <textarea name="f_text" id="f_text" value={text} onChange={(evt) => setText(evt.target.value)} autoComplete='off' placeholder='Insira o texto da notícia aqui.' minLength='20' maxLength='400' required></textarea>

                        <button type="submit">Postar</button>
                    </form>
                </div>
            </main>
        </>
    )
}