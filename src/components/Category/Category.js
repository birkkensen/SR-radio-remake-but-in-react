import s from "./category.module.css";
function Category({ name }) {
  return (
    <header className={s.categoryWrapper}>
      <h2 className={s.categoryName}>{name}</h2>
      <button className={s.categoryExpand}>See all</button>
    </header>
  );
}

export default Category;
