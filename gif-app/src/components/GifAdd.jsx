import { useState } from 'react';

export const GifAdd = ({ categories, setCategories, setCategory }) => {

  const [formState, setFormState] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.length <= 1) return;

    const categoryExists = categories.find( category => category === formState);
    
    if (categoryExists) return;

    setCategories((categories) => [formState, ...categories]);
    setCategory( formState );
    setFormState('');
  }

  const handleChange = (event) => {
    setFormState(event.target.value);
  };

  return (
    <div className='git_input mb-3'>
      <form onSubmit={handleSubmit}>
        <input
          className='form-control'
          value={formState}
          onChange={handleChange}
          type='text'
        />
      </form>
    </div>
  );
};
