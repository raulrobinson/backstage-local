import { createTheme, lightTheme } from '@backstage/theme';

export const customTheme = createTheme({
    palette: lightTheme.palette,
    fontFamily: 'Poppins, Arial',
    defaultPageTheme: 'home',
});
