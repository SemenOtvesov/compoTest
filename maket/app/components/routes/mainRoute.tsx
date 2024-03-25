'use client';
import Breadcrums from './breadcrums';
import MainLeft from './mainLeft';
import MainRight from './mianRight';
import style from './style';
import React from 'react';

export default () => {
    const { Container, Title, Main } = style();
    return (
        <Container>
            <Breadcrums />
            <Title>Кроссовки мужские Skechers Sunny Dale</Title>
            <Main>
                <MainLeft />
                <MainRight />
            </Main>
        </Container>
    );
};
