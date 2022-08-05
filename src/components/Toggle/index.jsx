import { useContext } from 'react';

// Context
import { ThemeContext } from 'context/ThemeContext';

// Styles
import { Switch, Input, Circle } from './styled';

const Toggle = () => {
  const { theme, onToggleTheme } = useContext(ThemeContext);

  return (
    <Switch>
      <Input type="checkbox" checked={theme === 'dark'} onChange={onToggleTheme} />
      <Circle />
    </Switch>
  );
};

export default Toggle;
