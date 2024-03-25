import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import MainRoute from '../routes/mainRoute';
import { ThemeProvider as ThemeProviderMUI } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import useTheme from '@app/hooks/useTheme';

export default () => {
    const [theme, MUITheme] = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <ThemeProviderMUI theme={MUITheme}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<MainRoute />} />
                    </Route>
                </Routes>
            </ThemeProviderMUI>
        </ThemeProvider>
    );
};
