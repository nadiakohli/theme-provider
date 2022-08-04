import { useEffect, useState } from 'react';

const useThemeDetector = () => {
  const getMatchMedia = () => window.matchMedia('(prefers-color-scheme: dark)');

  const [isDarkTheme, setIsDarkTheme] = useState(getMatchMedia().matches);
  
  const mediaQueryListener = (e) => {
    setIsDarkTheme(e.matches);
  };
  
  useEffect(() => {
    const mediaQuery = getMatchMedia();
    mediaQuery.addEventListener('change', mediaQueryListener);

    return () => {
      mediaQuery.removeEventListener('change', mediaQueryListener);
    };
  }, []);
  return isDarkTheme;
};

export default useThemeDetector;
