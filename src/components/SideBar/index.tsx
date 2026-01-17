import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.scss";

const SideBar = () => {
  const navItems = [
    { name: "Investors", path: "/investors", icon: "src/assets/investment.svg" },
    {
      name: "Emails Sense",
      path: "/emails-sense",
      icon: "src/assets/email.svg",
    },
    { name: "Competitors", path: "/competitors", icon: "src/assets/competitor.svg" },
  ];

  return (
    <aside className={styles.sideBar}>
      <div className={styles.logo}>
        <img
          src="src/assets/selliq-logo.png"
          height={170}
          width={170}
          alt="logo"
        />
      </div>

      <nav className={styles.nav}>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${styles.listItem} ${isActive ? styles.active : ""}`
                }
              >
                <div>{item.name}</div>
                <img src={item.icon} alt={item.name} />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.help}>
        <div>Revolte</div>
      </div>
    </aside>
  );
};

export default SideBar;
