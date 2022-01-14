import React from "react";
import styles from "../styles/searchForm.module.css";
import searchIcon from "../images/search.svg";

function SearchForm() {
  return (
    <form className={styles.search}>
      <img className={styles.searchIcon} src={searchIcon} alt="Magnifying glass" />
      <input className={styles.searchInput} type="search" placeholder="Search for programs" />
    </form>
  );
}

export default SearchForm;
