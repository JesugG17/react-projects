import { useState } from 'react';

export const GifAdd = ({ setCategories }) => {

  const [formState, setFormState] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formState.length <= 1) return;

    setCategories((categories) => [formState, ...categories]);
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
