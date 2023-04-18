import { GifCardItem } from './GifCardItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifCard = ({ category }) => {

    const gifs = useFetchGifs(category);

  return (
    <>
        <h1 className={`text-center ${ gifs.length === 0 ? 'd-none' : '' }`}>{ category }</h1>
            {   
                gifs.length > 0 &&
                <div className='gif_container'>
                    {
                        gifs.map( ({ title, url, id }) => (
                            <GifCardItem 
                                key={ id }
                                title={ title }
                                url={ url }
                                category={ category }
                            />
                        ))
                    }
                </div>
            }
        
    </>
  )
}
