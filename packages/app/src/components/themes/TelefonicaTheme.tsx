import {
    createTheme,
    genPageTheme,
    lightTheme,
    shapes,
} from '@backstage/theme';

export const telefonicaTheme = createTheme({
    palette: {
        ...lightTheme.palette,
        primary: {
            main: '#007aff',
        },
        secondary: {
            main: '#565a6e',
        },
        error: {
            main: '#8c4351',
        },
        warning: {
            main: '#8f5e15',
        },
        info: {
            main: '#34548a',
        },
        success: {
            main: '#485e30',
        },
        background: {
            default: '#d5d6db',
            paper: '#d5d6db',
        },
        banner: {
            info: '#34548a',
            error: '#8c4351',
            text: '#3a3a3a',
            link: '#565a6e',
        },
        errorBackground: '#8c4351',
        warningBackground: '#8f5e15',
        infoBackground: '#3a3a3a',
        navigation: {
            background: '#3a3a3a',
            indicator: '#8f5e15',
            color: '#d5d6db',
            selectedColor: '#ffffff',
        },
    },
    defaultPageTheme: 'home',
    fontFamily: 'Poppins, Arial',
    /* below drives the header colors */
    pageTheme: {
        home: genPageTheme({ colors: ['#007aff', '#3a3a3a'], shape: shapes.wave }),
        documentation: genPageTheme({
            colors: ['#007aff', '#3a3a3a'],
            shape: shapes.wave2,
        }),
        tool: genPageTheme({ colors: ['#007aff', '#3a3a3a'], shape: shapes.round }),
        service: genPageTheme({
            colors: ['#007aff', '#3a3a3a'],
            shape: shapes.wave,
        }),
        website: genPageTheme({
            colors: ['#007aff', '#3a3a3a'],
            shape: shapes.wave,
        }),
        library: genPageTheme({
            colors: ['#007aff', '#3a3a3a'],
            shape: shapes.wave,
        }),
        other: genPageTheme({ colors: ['#007aff', '#3a3a3a'], shape: shapes.wave }),
        app: genPageTheme({ colors: ['#007aff', '#3a3a3a'], shape: shapes.wave }),
        apis: genPageTheme({ colors: ['#007aff', '#3a3a3a'], shape: shapes.wave }),
    },
});
