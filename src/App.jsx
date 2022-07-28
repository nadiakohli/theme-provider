import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Themes
import { lightTheme, darkTheme } from 'themes.js';

// Components
import Toggle from 'components/Toggle';

//Styles
const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
`;

const ToggleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 28px;
  }

  & div {
    font-size: 18px;
    padding: 25px 10px;
  }
`;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onToggleMode = (value) => {
    setIsDarkMode(value);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <StyledApp>
        <h1>Current theme: {isDarkMode ? 'dark' : 'light'}</h1>
        <ToggleWrap>
          <div>Dark</div>
          <Toggle onToggleMode={onToggleMode} />
          <div>Light</div>
        </ToggleWrap>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
