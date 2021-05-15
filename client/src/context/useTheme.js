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
            console.log("use1",context.theme)
            localStorage.setItem('theme', theme);
            context.setTheme(theme);
            console.log("use2",context.theme)
        },
    };
};

export default useTheme;
