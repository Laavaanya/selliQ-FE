import styles from "./navbar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.content}>
        <div>James</div>
        <div className={styles.avatar}>J</div>
      </div>
    </div>
  );
};

export default NavBar;
