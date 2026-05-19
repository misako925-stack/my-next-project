import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.navi}>
        <ul className={styles.items}>
          <li className={styles.items}>
            <a href="/news">ニュース</a>
          </li>
          <li className={styles.item}>
            <a href="/members">メンバー</a>
          </li>
          <li className={styles.item}>
            <a href="/comtact">お問い合わせ</a>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>©️ SIMPLE. All Rights Reserved 2024</p>
    </footer>
  );
}
