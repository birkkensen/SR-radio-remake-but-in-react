import { CgProfile } from "react-icons/cg";
import styles from "../styles/navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Sveriges Radio</h1>
      <CgProfile className={styles.icon} alt="Anonymous profile" />
    </nav>
  );
}

export default Navbar;
