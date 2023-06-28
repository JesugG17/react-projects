import { SyntheticEvent, useState } from "react"



export const App = () => {

  const [range, setRange] = useState(0);

  const handleChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setRange(+target.value)
  }

  return (
    <>
      <h1 className="title">React Shop 🛒</h1>
      <section className="search__container">
        <div className="search__input">
          <p>Precio a partir de:</p>
          <input
            onChange={ handleChange } 
            min="0"
            max="1000"
            type="range"
          />
          <p>${ range }</p>
        </div>
        <div className="search__filter">
            <span>Categoria</span>
            <select>
              <option>Todos</option>
            </select>
        </div>
      </section>

      <article>
          
      </article>
    </>
  )
}

