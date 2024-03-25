'use client';
import style from './style';
import React from 'react';
import Price from './price';
import Checkbox from './checkbox';

export default () => {
    const { Container, OldPrise, NewPrice, Settings, SettingsCount, SettingsText } = style();
    return (
        <Container>
            <OldPrise>166 534.00 цена без скидки</OldPrise>
            <Price />
            <Settings>
                <SettingsCount>12 штук в уп.</SettingsCount>
                <Checkbox />
                <SettingsText>Заказ упаковкой</SettingsText>
            </Settings>
        </Container>
    );
};
