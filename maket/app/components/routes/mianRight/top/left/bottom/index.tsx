'use client';
import style from './style';
import React from 'react';
import AzureButton from '@app/components/helpersComponents/button/azureButton';
import InfoItem from '@app/components/helpersComponents/infoItem';
import AddButton from './addButton';

const infoList = [
    { title: 'Завтра', text: 'Доставка' },
    { title: '7 шт.', text: 'Тарасовка' },
    { title: '7 шт.', text: 'Тарасовка' },
];

export default () => {
    const { Container, Info, ButtonBox, Icon } = style();
    return (
        <Container>
            <Info>
                {infoList.map((el, i) => (
                    <InfoItem item={el} key={el.title + i} />
                ))}
            </Info>
            <ButtonBox>
                <AddButton />
                <AzureButton>
                    <Icon className="icon-favourites"></Icon>
                </AzureButton>
            </ButtonBox>
        </Container>
    );
};
