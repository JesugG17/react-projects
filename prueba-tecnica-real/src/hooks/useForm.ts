import { useState, ChangeEvent } from 'react';

interface FormData {
  [key: string]: any;
}

export const useForm = (initialState: FormData) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormState(initialState);
  };

  return {
    // ...formState,
    formState,
    handleChange,
    resetForm,
  };
};
