'use client';
import style from './style';
import React from 'react';
import Top from './top';
import Bottom from './bottom';

export default () => {
    const { Container } = style();
    return (
        <Container>
            <Top />
            <Bottom />
        </Container>
    );
};
