import { useState } from 'react';
import { GifCard } from './components/GifCard';
import { GifAdd } from './components/GifAdd';
import { GifTimeline } from './components/GifTimeline';

export const GifApp = () => {
  
  
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('');

  const handleCategory = ( category ) => {

    const newCategories = categories.filter( cat => cat !== category);

    setCategories([ category, ...newCategories ]);
    setCategory( category )
  }
  
  return (
    <div className='gif_app_container'>
      <section className='timeline_container'>
        <GifTimeline
          categories={ categories }
          handleCategory={ handleCategory } 
        />
      </section>
      <main className='gif_app_main'>
        <header className='gif_header'>
          <h1>Gif App</h1>
          <hr />
        </header>
        
        <GifAdd 
          categories={ categories }
          setCategories={ setCategories }
          setCategory={ setCategory }
        />

        <GifCard
          category={ category } 
        />
      </main>

    </div>
  )
}

