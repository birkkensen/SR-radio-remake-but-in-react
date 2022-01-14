import { Link } from "react-router-dom";
import backArrow from "../images/backMain.svg";
import styles from "../styles/backBtn.module.css";
function BackBtn() {
  return (
    <Link to="/" className={styles.container}>
      <img className={styles.image} src={backArrow} alt="Go backa arrow" />
      <h3 className={styles.text}>Back</h3>
    </Link>
  );
}

export default BackBtn;
