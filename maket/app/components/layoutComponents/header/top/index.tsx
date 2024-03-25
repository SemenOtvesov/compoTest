'use client';
import style from './style';
import React from 'react';
import Logo from './logo';
import HeaderInput from './headerInput';
import Account from './account';
import Cart from './cart';
import Buttons from './buttons';
import BlueButton from '@app/components/helpersComponents/button/blueButton';

export default () => {
    const { Container } = style();
    return (
        <Container>
            <Logo />
            <BlueButton>
                <div className="icon-burger"></div>
                Меню
            </BlueButton>
            <HeaderInput />
            <Buttons />
            <Cart />
            <Account />
        </Container>
    );
};
