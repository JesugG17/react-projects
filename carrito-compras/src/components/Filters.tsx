
export const Filters = () => {
  return (
    <section className="search__container">
      <div className="search__input">
        <p>Precio a partir de:</p>
        <input min="0" max="1000" type="range" />
        <p>${}</p>
      </div>
      <div className="search__filter">
        <span>Categoria</span>
        <select>
          <option value="all">Todos</option>
          <option value="smartphones">Celulares</option>
          <option value="laptops">Laptops</option>
        </select>
      </div>
    </section>
  );
};
