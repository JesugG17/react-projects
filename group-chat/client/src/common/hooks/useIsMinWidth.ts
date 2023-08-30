import { useEffect, useMemo, useState } from 'react';

export const useIsMinWidth = (minWidth: number) => {
  const [isMinWidth, setIsMinWidth] = useState(window.innerWidth >= minWidth);
  const desktopMediaQuery = useMemo(() => window.matchMedia(`(min-width: ${minWidth}px)`), []);

  const handleEvent = (event: MediaQueryListEvent) => {
    if (event.matches) {
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
