import { useState, useEffect } from 'react';

export const useScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleRezise = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', handleRezise);
        return () => {
            window.removeEventListener('rezise', handleRezise);
        }
    }, []);


    return { width, height };
}
