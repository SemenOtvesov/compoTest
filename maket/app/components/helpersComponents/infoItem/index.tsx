'use client';
import style from './style';
import React from 'react';

type Tprops = { item: { title: string; text: string } };

export default ({ item }: Tprops) => {
    const { InfoItem, InfoTitle, InfoText } = style();
    return (
        <InfoItem>
            <InfoTitle>{item.title}</InfoTitle>
            <InfoText>{item.text}</InfoText>
        </InfoItem>
    );
};
