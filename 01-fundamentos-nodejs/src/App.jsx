import { useState } from "react";
import { Header } from "./components/Header";

import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>Post</main>
      </div>
    </div>
  );
}

export default App;
