import React, { useEffect, useState } from 'react';

// Hooks
import useThemeDetector from 'hooks/useThemeDetector';

// Styles
import { Switch, Input, Circle } from './styled';

const Toggle = ({ onToggleMode }) => {
  const isDefaultTheme = useThemeDetector();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      setIsDarkMode(isDefaultTheme);
      onToggleMode(isDefaultTheme);
    } 
  }, [isDefaultTheme]);

  return (
    <Switch>
      <Input type="checkbox" checked={isDarkMode} onChange={() => {
        localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
        setIsDarkMode(!isDarkMode);
        onToggleMode(!isDarkMode);
      }} />
      <Circle />
    </Switch>
  );
};

export default Toggle;
