import { useState } from 'react';
import { GifCard } from './components/GifCard';

export const GifApp = () => {
  
  
  const [formState, setFormState] = useState('');
  const [categories, setCategories] = useState([])

  const handleChange = (event) => {
    setFormState(event.target.value);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (formState.length <= 1) return;

    setCategories([ formState, ...categories ]);
    setFormState('');
  }

  return (
    <>
      <header className='gif_header'>
        <h1>Gif App</h1>
        <hr />
      </header>
      
      <div className='git_input mb-3'>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            value={ formState }
            onChange={ handleChange }
            type='text'
          />
        </form>
      </div>

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

