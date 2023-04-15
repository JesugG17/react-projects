import { useEffect, useState } from "react";

export const GifCard = ({ category }) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=23ETDkw3oXxCWbZ5Ci2mAJHTGwiQRs90&q=${ category }&limit=10&offset=0&rating=g&lang=en`;
    const [gifs, setGifs] = useState([]);
    
    const getGifs = async() => {
        const resp = await fetch(url);
        const { data } = await resp.json();
        const newGifs = data.map( gif => {
          return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
          }
        });

        setGifs([...newGifs]);
    }

    useEffect(() => {
        getGifs();
    }, [category]);

  return (
    <>
        <h1 className='text-center'>{ category }</h1>
        <div className='gif_container'>
            {
                gifs.map( ({ title, url, id }) => {
                    return (
                        <div className='gif_card' key={ id }>
                            <img src={ url } /> 
                            <p className="text-center">{ title }</p>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}
