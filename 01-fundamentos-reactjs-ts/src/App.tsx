import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

interface Posts {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: "pharagraph" | "link";
    content: string;
  }[];
  publishedAt: Date;
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/GuilhermeGueds.png",
      name: "Guilherme Guedes",
      role: "Developer",
    },
    content: [
      { type: "pharagraph", content: "Fala Galera" },
      {
        type: "pharagraph",
        content: "Dando continuidade ao curso de react 2022 da rocketseat",
      },
      { type: "link", content: " Guedes.design" },
    ],
    publishedAt: new Date("2022-02-02 08:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "pharagraph", content: "Fala Galera" },
      {
        type: "pharagraph",
        content: "Dando continuidade ao curso de react 2022 da rocketseat",
      },
      { type: "link", content: " Diego.design" },
    ],
    publishedAt: new Date(Date.now()),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
