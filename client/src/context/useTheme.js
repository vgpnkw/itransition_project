import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
  theme: 'dark',
  setTheme: () => {},
});

const useTheme = () => {
  const context = useContext(ThemeContext);

  return {

    theme: context.theme,
    setTheme: (theme) => {
      localStorage.setItem('theme', theme);
      context.setTheme(theme);
    },
  };
};

export default useTheme;
