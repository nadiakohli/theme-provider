import { useContext } from 'react';

// Context
import { ThemeContext } from 'context/ThemeContext';

// Components
import Toggle from 'components/Toggle';

// Styles
import { 
	Wrapper,
	H1,
	H2,
	ToggleWrap,
} from 'styled';

const App = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<Wrapper theme={theme}>
			<H1 theme={theme}>Current theme: {theme} mode</H1>
			<ToggleWrap>
				<H2 theme={theme}>Dark</H2>
				<Toggle />
				<H2 theme={theme}>Light</H2>
			</ToggleWrap>
		</Wrapper>
	)
};

export default App;
