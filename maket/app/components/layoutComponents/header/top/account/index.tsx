'use client';
import style from './style';
import React from 'react';

const userName = 'Ермаков Е.';
export default () => {
    const { Container, Logo, Name, Arrow } = style();
    return (
        <Container>
            <Logo src="./img/userLogo.png" />
            <Name>{userName}</Name>
            <Arrow className="arrow">
                <span></span>
            </Arrow>
        </Container>
    );
};
