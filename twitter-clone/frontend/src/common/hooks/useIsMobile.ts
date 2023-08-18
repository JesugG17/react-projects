import { useEffect, useMemo, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const desktopMediaQuery = useMemo(() => window.matchMedia('(max-width: 426px)'), []);

  const handleEvent = (event: MediaQueryListEvent) => {
    if (event.matches) {
      return setIsMobile(true);
    }
    setIsMobile(false);
  };

  useEffect(() => {
    desktopMediaQuery.addEventListener('change', handleEvent);
    return () => {
      desktopMediaQuery.removeEventListener('change', handleEvent);
    };
  }, []);

  return isMobile;
};
