import { useState, ChangeEvent, FC, useId } from 'react';
import { Filters as FiltersType } from '../hooks/useFilter';

export const Filters: FC<Props>  = ({ setFilters }) => {

    const [minPrice, setMinPrice] = useState<number>(0);
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const onChangeMinPrice = (event: ChangeEvent<HTMLInputElement>) => {  
        const newMinPrice = event.currentTarget.valueAsNumber;
        setMinPrice(newMinPrice);
        setFilters((prevState) => (
            {...prevState, minPrice: newMinPrice}
        ));
    }

    const onChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {  
        const newCategory = event.currentTarget.value;
        console.log({newCategory});
        setFilters((prevState) =>(
            {...prevState, category: newCategory}
        ));
    }

  return (
    <section className="search__container">
      <div className="search__input">
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input 
            type="range"
            id={minPriceFilterId}
            defaultValue={0}
            min="0" 
            max="1000"
            onChange={onChangeMinPrice} 
        />
        <p>${minPrice}</p>
      </div>
      <div className="search__filter">
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select 
            id={categoryFilterId}
            onChange={onChangeCategory}
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
  
