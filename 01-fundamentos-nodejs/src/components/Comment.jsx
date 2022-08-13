import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="http://github.com/GuilhermeGueds.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Guedes</strong>
              <time title="11 de maio" dateTime="2022-05-11">
                Cerca de 1 hora atrás
              </time>
            </div>
            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom parabens</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir . <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
