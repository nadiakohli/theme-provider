import { useContext } from 'react';

// Context
import { ThemeContext } from 'context/ThemeContext';

// Styles
import { Switch, Input, Circle } from './styled';

const Toggle = () => {
  const { theme, onToggleTheme } = useContext(ThemeContext);

  const isDarkMode = theme === 'dark' ? true : false;

  return (
    <Switch>
      <Input type="checkbox" checked={isDarkMode} onChange={() => onToggleTheme()} />
      <Circle />
    </Switch>
  );
};

export default Toggle;
