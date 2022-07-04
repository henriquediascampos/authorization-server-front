import { ThemeProvider } from '@mui/system';

import { Box } from '@mui/system';
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { DarkTheme, LightTheme } from '../themes';

type TypeTheme = 'light' | 'dark';

interface IThemeContextData {
    themeName: TypeTheme;
    toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

interface IThemeProviderProps {
    children: React.ReactNode;
}

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = useState<TypeTheme>('light');

    const toggleTheme = useCallback(() => {
        setThemeName((oldThemeName) => (oldThemeName === 'light' ? 'dark' : 'light'));
    }, []);

    const theme = useMemo(() => {
        return themeName === 'light' ? LightTheme : DarkTheme;
    }, [themeName]);

    return (
        <ThemeContext.Provider
            value={{
                themeName,
                toggleTheme,
            }}>
            <ThemeProvider theme={theme}>
                <Box
                    width="100vw"
                    height="100vh"
                    bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
