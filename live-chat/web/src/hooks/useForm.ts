import { useState } from 'react';

interface InitialState {
  [key: string]: string;
}

export const useForm = (initialState: InitialState) => {
  const [formState, setFormState] = useState(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onReset = () => {
    setFormState(initialState);
  };

  return {
    formState,
    onChange,
    onReset,
  };
};
