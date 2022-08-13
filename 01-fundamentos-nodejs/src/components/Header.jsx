import styles from "./Header.module.css";
import { logoImg } from "../assets";
export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="Logotipo ignite" />
    </header>
  );
}
