import { Item } from "../types/item.interface"
import { FC } from 'react';

export const ListItem: FC<Props> = ({ item, remove }) => {
    return (
        <li
            key={item.id}
            className='bg-blue-500 p-2 text-white rounded cursor-pointer hover:brightness-105'
            onClick={() => remove(item.id)}
        >
            {item.description}
        </li>
    )
}


type Props = {
    item: Item,
    remove: (id: number) => void;
}