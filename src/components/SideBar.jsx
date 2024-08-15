import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          Copyright &copy; {new Date().getFullYear()} by WORLDWISE inc.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
