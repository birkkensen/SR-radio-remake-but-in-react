import { Link } from "react-router-dom";
import styles from "../styles/notfound.module.css";
function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.notFound}>404 - Not Found!</h1>
      <Link className={styles.notFoundLink} to="/">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
