import { useState, FormEvent, FC } from 'react';
import { Item } from '../types/item.interface';

export const AddItem: FC<Props> = ({ setItems }) => {

    const [formState, setFormState] = useState('');

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (formState.length === 0) return;

        setFormState('');
        const newItem = {
            id: new Date().getTime(),
            description: formState
        }

        setItems(prevState => [...prevState, newItem]);
    }

    return (
        <form onSubmit={onSubmit} className='flex gap-3'>
            <input onChange={(e) => setFormState(e.target.value)} value={formState} className='p-1 rounded' type="text" placeholder='Ingresa algo aqui' />
            <button className='bg-zinc-800 text-white py-1 px-4 rounded'>Enviar</button>
        </form>)
}

type Props = {
    setItems: React.Dispatch<React.SetStateAction<Item[]>>
}
