import { useEffect, useMemo, useState } from 'react';

export const useIsMinWidth = (width: number = 425) => {
  const [isMinWidth, setIsMinWidth] = useState(window.innerWidth >= width);
  const desktopMediaQuery = useMemo(() => window.matchMedia(`(min-width: ${width}px)`), []);

  const handleEvent = (event: MediaQueryListEvent) => {
    if (event.matches) {
      console.log('matches');
      return setIsMinWidth(true);
    }
    setIsMinWidth(false);
  };

  useEffect(() => {
    desktopMediaQuery.addEventListener('change', handleEvent);
    return () => {
      desktopMediaQuery.removeEventListener('change', handleEvent);
    };
  }, []);

  return isMinWidth;
};
