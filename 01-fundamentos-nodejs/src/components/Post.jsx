import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/GuilhermeGueds.png" />
          <div className={styles.authorInfo}>
            <strong>Guilherme Guedes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de maio" dateTime="2022-05-11">
          Publicado a 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>paragrafo 1</p>
        <p>paragarafo 2</p>
        <p>
          <a href=""> Guedes.design </a>
        </p>
        <p>
          <a href="">#novo projeto</a> <a href="">#novo projeto</a>{" "}
          <a href="">#novo projeto</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentario</strong>
        <textarea placeholder="Deixe um comentario" />
        <footer>
          <button type="submite">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
