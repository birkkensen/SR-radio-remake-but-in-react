import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import s from "./backBtn.module.css";
function BackBtn() {
  return (
    <Link to="/" className={s.container}>
      <BiArrowBack className={s.backArrow} alt="Go back" />
      <h3 className={s.text}>Back</h3>
    </Link>
  );
}

export default BackBtn;
