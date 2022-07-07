import { createTheme } from '@mui/material';

const contrast = '#ffffff';

export const LightTheme = createTheme({
    palette: {
        primary: {
            50: '#e2f8fb',
            100: '#b7edf4',
            200: '#8ae2ed',
            300: '#61d6e5',
            400: '#4accde',
            500: '#41c3d8',
            600: '#3cb3c5',
            700: '#379eab',
            800: '#328993',
            900: '#296668',
            main: '#328993',
            dark: '#296668',
            light: '#41c3d8',
            contrastText: contrast,
        },
        secondary: {
            50: '#e1f2ec',
            100: '#b6decf',
            200: '#89c9b1',
            300: '#5eb493',
            400: '#43a37f',
            500: '#32936c',
            600: '#2d8661',
            700: '#277653',
            800: '#206646',
            900: '#144b2e',
            main: '#32936c',
            dark: '#206646',
            light: '#89c9b1',
            contrastText: contrast,
        },
        background: {
            default: '#f7f6f3',
            paper: '#fff',
        },
    },
});
