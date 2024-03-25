import { Theme } from '@emotion/react';
import { Theme as ThemeMui, createTheme } from '@mui/material';

export interface TglobalTheme {
    mainBlue: string;
    mainBlueHover: string;
    mainBlueFocus: string;
    whiteGray: string;
    gray: string;
    inputTextGray: string;
    strokeGray: string;
    strokeDarkGray: string;
    errorRed: string;
    azure: string;
    textBlack: string;
}
export const globalTheme: TglobalTheme = {
    mainBlue: '#316CFF',
    mainBlueHover: '#316CFF70',
    mainBlueFocus: '#1551E5',
    whiteGray: '#E9ECF2',
    gray: '#B2BACE',
    inputTextGray: '#828EAD',
    strokeGray: '#E2E4F0',
    strokeDarkGray: '#828EAD',
    errorRed: '#FF608A',
    azure: '#F2F6FF',
    textBlack: '#071435',
};

export default () => {
    const theme: Theme = {
        ...globalTheme,
    };
    const MUItheme: ThemeMui = createTheme({});
    return [theme, MUItheme];
};
