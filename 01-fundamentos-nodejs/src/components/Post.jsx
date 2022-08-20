import { format, formatDistanceToNow } from "date-fns/";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([""]);

  const [newCommentext, setNewCommentText] = useState("");

  const publishedDateFormat = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm 'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleNewComment() {
    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment() {
    event.preventDefault();

    // const newCommentText = event.target.comment.value;

    setComments([...comments, newCommentext]);
    setNewCommentText("");
  }

  function deleteComment(comment) {
    const commentsWithoutDeleteOne = comments.filter((commentToDelete) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeleteOne);
  }

  const isNewCommentEmpty = newCommentext.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          return line.type === "pharagraph" ? (
            <p key={line.content}>{line.content}</p>
          ) : (
            <p key={line.content}>
              <a href="#">{line.content} </a>
            </p>
          );
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentario</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentario"
          value={newCommentext}
          onChange={handleNewComment}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
