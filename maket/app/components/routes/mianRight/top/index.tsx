'use client';
import Left from './left';
import Right from './right';
import style from './style';
import React from 'react';

export default () => {
    const { Container } = style();
    return (
        <Container>
            <Left />
            <Right />
        </Container>
    );
};
