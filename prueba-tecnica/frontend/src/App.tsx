import { useState } from 'react'
import { AddItem, ListItem } from './components';
import { Item } from './types/item.interface';

function App() {

  const [items, setItems] = useState<Item[]>([]);

  const handleRemoveItem = (id: number) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }

  return (
    <main className='bg-slate-700 h-screen flex flex-col gap-10 justify-center items-center'>
      <AddItem setItems={setItems} />
      <ul className='bg-white flex flex-col gap-2 min-w-[300px] min-h-[200px] max-h-[200px] p-2 rounded overflow-scroll no-scrollbar'>
        <h4 className='text-center font-bold text-xl'>Items {items.length}</h4>
        {
          items.length === 0 &&
          <p className='text-center font-bold text-gray-400'>No items to show</p>
        }
        {
          items.map(item => (
            <ListItem item={item} remove={handleRemoveItem} />
          ))
        }
      </ul>
    </main>
  )
}

export default App
