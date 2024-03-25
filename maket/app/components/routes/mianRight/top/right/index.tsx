'use client';
import InfoItem from '@app/components/helpersComponents/infoItem';
import style from './style';
import React from 'react';

const settingsList = [
    { title: 'ELC00696', text: 'Код поставщика' },
    { title: 'ELC0200000696', text: 'Артикул' },
    { title: 'ELC00696', text: 'Код РАЭК' },
    { title: 'ELC00696', text: 'Код ЕТМ' },
    { title: 'Electric used', text: 'Бренд' },
    { title: 'ELC00696', text: 'Серия' },
    { title: 'ELC0200000696', text: 'Код производителя ' },
];

export default () => {
    const { Container, Title, Settings } = style();
    return (
        <Container>
            <Title>Характеристики</Title>
            <Settings>
                {settingsList.map((el, i) => (
                    <InfoItem item={el} key={el.title + i} />
                ))}
            </Settings>
        </Container>
    );
};
