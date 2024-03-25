import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/header';
import { TlayoutContext } from '@app/locTypes/context/layout';
import Footer from './footer/footer';

export const LayoutContext = createContext<TlayoutContext>({});

export default () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
