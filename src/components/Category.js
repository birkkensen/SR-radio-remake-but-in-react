import styles from "../styles/category.module.css";
function Category({ name }) {
  return (
    <header className={styles.categoryWrapper}>
      <h2 className={styles.categoryName}>{name}</h2>
      <button className={styles.categoryExpand}>See all</button>
    </header>
  );
}

export default Category;
