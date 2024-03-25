'use client';
import WhiteButton from '@app/components/helpersComponents/button/whiteButton';
import style from './style';
import React from 'react';

export default () => {
    const { Container, Separator, Icon } = style();
    return (
        <Container>
            <WhiteButton style={{ padding: 8, marginRight: 16 }}>
                <Icon className="icon-notifications"></Icon>
            </WhiteButton>
            <Separator />
            <WhiteButton style={{ padding: 8, marginLeft: 16 }}>
                <Icon className="icon-favourites"></Icon>
            </WhiteButton>
        </Container>
    );
};
