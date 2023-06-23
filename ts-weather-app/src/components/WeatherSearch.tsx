import { useState, SyntheticEvent } from 'react';

interface Props {
    handleSearch: (event: SyntheticEvent, formState: string) => Promise<void>;
}

export const WeatherSearch = ({ handleSearch }: Props) => {

    const [formState, setFormState] = useState('');

    const handleChange = (event: SyntheticEvent) => {
        const target = event.target as HTMLInputElement;

        if (target.value.length === 0) {
          handleSearch(event, target.value);
        }

        setFormState(target.value);
    }

  return (
    <header className='card_header'>
      <form onSubmit={(event) => handleSearch(event, formState)}>
        <input
          placeholder='Enter a city name'
          value={formState}
          onChange={handleChange}
        />
      </form>
      <button type='submit' className='pointer' onClick={(event) => handleSearch(event, formState)}>
        Search
      </button>
    </header>
  );
};
