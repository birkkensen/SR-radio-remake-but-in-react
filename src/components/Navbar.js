import React from "react";
import energy from "../images/energy.svg";
import profile from "../images/profile.svg";
import styles from "../styles/navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Sveriges Radio</h1>
      <div>
        <img className={styles.icon} src={energy} alt="Energy icon" />
        <img
          className={styles.icon}
          style={{ marginLeft: "16px" }}
          src={profile}
          alt="Profile icon"
        />
      </div>
    </nav>
  );
}

export default Navbar;
