import styles from "./searchForm.module.css";
import { BsSearch } from "react-icons/bs";

function SearchForm() {
  return (
    <form className={styles.search}>
      <BsSearch className={styles.searchIcon} />
      <input className={styles.searchInput} type="search" placeholder="Search for programs" />
    </form>
  );
}

export default SearchForm;
