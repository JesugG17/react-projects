import { useState, ChangeEvent, FC } from 'react';
import { Filters as FiltersType } from '../App';

export const Filters: FC<Props>  = ({ setFilters }) => {

    const [minPrice, setMinPrice] = useState<number>(0);

    const onChangeMinPrice = (event: ChangeEvent<HTMLInputElement>) => {
        
        const newMinPrice = event.currentTarget.valueAsNumber;
        setMinPrice(newMinPrice);
        setFilters((prevState) => {
            return {
                ...prevState,
                minPrice: newMinPrice
            }
        })
    }


  return (
    <section className="search__container">
      <div className="search__input">
        <label htmlFor="price">Precio a partir de:</label>
        <input 
            type="range"
            id="price"
            defaultValue={0}
            min="0" 
            max="1000"
            onChange={onChangeMinPrice} 
        />
        <p>${minPrice}</p>
      </div>
      <div className="search__filter">
        <label htmlFor="category">Categoria</label>
        <select 
            id="category"
        >
          <option value="all">Todos</option>
          <option value="smartphones">Celulares</option>
          <option value="laptops">Laptops</option>
        </select>
      </div>
    </section>
  );
};


type Props = {
    setFilters: React.Dispatch<React.SetStateAction<FiltersType>>
}
  
