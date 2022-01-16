import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import styles from "../styles/backBtn.module.css";
function BackBtn() {
  return (
    <Link to="/" className={styles.container}>
      <BiArrowBack className={styles.backArrow} alt="Go back" />
      <h3 className={styles.text}>Back</h3>
    </Link>
  );
}

export default BackBtn;
