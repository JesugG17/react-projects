import { useEffect, useState } from 'react';

export const useFetchGifs = (category) => {
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

    return gifs;
}
