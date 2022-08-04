import { createContext, useState } from 'react';

// Hooks
import useThemeDetector from 'hooks/useThemeDetector';

export const ThemeContext = createContext({
	theme: 'dark',
	toggleTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
	const isDefaultDark = useThemeDetector();
	const themeStorage = localStorage.getItem('theme');
	const initialState = themeStorage === 'dark' || themeStorage === 'light'
		? themeStorage
		: isDefaultDark
		? 'dark'
		: 'light'

	const [theme, setTheme] = useState(initialState);

	const onToggleTheme = () =>
		setTheme((prev) => {
			const newTheme = prev === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			return newTheme;
		});

	return (
		<ThemeContext.Provider value={{ theme, onToggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
};

export default ThemeContextProvider;
