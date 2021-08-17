/* eslint-disable @next/next/no-img-element */
import styles from "./style.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="Logo Da Horta Pra Porta" />
    </header>
  );
}
