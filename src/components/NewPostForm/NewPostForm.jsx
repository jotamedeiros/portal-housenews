import styles from "./NewPostForm.module.css";
import ArrowBack from "../ArrowBack/ArrowBack";
import { auth, db, storage } from "../../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Resizer from "react-image-file-resizer";
import { useState } from "react";
import { useAuth } from "../../contexts/Auth/AuthContext";

export default function NewPostForm() {
  const { currentUser } = useAuth();

  // declaração de states da nova notícia
  const [categorie, setCategorie] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [text, setText] = useState("");

  // declaração de states referentes ao upload da imagem.
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");

  // função que seta a o state 'image' de acordo com o arquivo enviado pelo usuário.
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300, // largura máxima
        300, // altura máxima
        "JPEG", // formato da img
        70, // qualidade [0 ~ 100]
        0, // rotação
        (uri) => {
          resolve(uri);
        },
        "file" // saída do tipo 'file'
      );
    });

  // função que faz o upload da imagem para o Storage e retorna o url da imagem no state 'url'.
  const handleUpload = async () => {
    if (image) {
      try {
        const resizedImage = await resizeFile(image);
        const storageRef = ref(storage, `news-images/${resizedImage.name}`);
        const uploadTask = uploadBytesResumable(storageRef, resizedImage);

        return new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setProgress(progress);
              console.log(progress);
            },
            (error) => {
              console.error("Error uploading image: ", error);
              reject(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setUrl(downloadURL);
                resolve(downloadURL);
              });
            }
          );
        });
      } catch (error) {
        console.error("Error resizing image: ", error);
        throw error;
      }
    }
  };

  // função que cria o documento referente ao novo post.
  const handleCreateNewPost = async (e) => {
    e.preventDefault();
    try {
      const downloadURL = await handleUpload();
      await addDoc(collection(db, "news"), {
        uid: currentUser.uid,
        categorie: categorie,
        author: author,
        title: title,
        subtitle: subtitle,
        text: text,
        imageUrl: downloadURL,
        timestamp: serverTimestamp(),
      });
      console.log(downloadURL);
      // alert('Nova notícia compartilhada com sucesso!');
      // location.reload();
    } catch (error) {
      alert("Erro ao compartilhar notícia", error);
      console.log(error);
    }
  };

  return (
    <>
      <main className={styles.mainNewPost}>
        <div className={styles.mainText}>
          <div className={styles.mainTitleContainer}>
            <ArrowBack url={"/userlobby"} />
            <h1 className={styles.mainTitle}>Nova Postagem</h1>
          </div>
          <p className={styles.mainSubtitle}>
            Crie um novo post e compartilhe suas informações publicando a
            notícia rapidamente aqui no House News.
          </p>
          <hr />
        </div>
        <div className={styles.NewPostFormContainer}>
          <form onSubmit={handleCreateNewPost}>
            <label htmlFor="f_categorie">Categoria</label>
            <select
              name="f_categorie"
              id="f_categorie"
              onChange={(evt) => setCategorie(evt.target.value)}
              required
            >
              <option value="" selected disabled>
                Escolha uma categoria
              </option>
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
            <input
              type="text"
              name="f_author"
              id="f_author"
              value={author}
              onChange={(evt) => setAuthor(evt.target.value)}
              required
            />

            <label htmlFor="f_title">Título</label>
            <input
              type="text"
              name="f_title"
              id="f_title"
              value={title}
              onChange={(evt) => setTitle(evt.target.value)}
              required
            />

            <label htmlFor="f_subtitle">Subtítulo</label>
            <input
              type="text"
              name="f_subtitle"
              id="f_subtitle"
              value={subtitle}
              onChange={(evt) => setSubtitle(evt.target.value)}
              required
            />

            <label htmlFor="f_img">Imagem</label>
            <input
              type="file"
              name="f_img"
              id="f_img"
              onChange={handleChange}
              accept="image/*"
              required
            />

            <label htmlFor="f_text">Texto</label>
            <textarea
              name="f_text"
              id="f_text"
              value={text}
              onChange={(evt) => setText(evt.target.value)}
              autoComplete="off"
              placeholder="Insira o texto da notícia aqui."
              minLength="20"
              maxLength="400"
              required
            ></textarea>

            <button type="submit">Postar</button>
          </form>
        </div>
      </main>
    </>
  );
}
