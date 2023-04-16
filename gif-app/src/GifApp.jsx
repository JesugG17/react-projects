import { useState } from 'react';
import { GifCard } from './components/GifCard';
import { GifAdd } from './components/GifAdd';

export const GifApp = () => {
  
  
  const [categories, setCategories] = useState([])

  
  return (
    <>
      <header className='gif_header'>
        <h1>Gif App</h1>
        <hr />
      </header>
      
      <GifAdd setCategories={ setCategories }/>

      {
        categories.map( (category, index) => (
          <GifCard 
            key={ index }
            category={category}
          />
        ))
      }

    </>
  )
}

