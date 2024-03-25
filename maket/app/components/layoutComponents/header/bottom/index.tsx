'use client';
import WhiteButton from '@app/components/helpersComponents/button/whiteButton';
import style from './style';
import React from 'react';
import AzureButton from '@app/components/helpersComponents/button/azureButton';

const itemList = ['Мои заказы', 'Сотрудники', 'Шаблоны заказов', 'Обращения'];

export default () => {
    const { Container, ItemBox, Item } = style();
    return (
        <Container>
            <ItemBox>
                {itemList.map((el, i) => (
                    <Item key={el + i}>{el}</Item>
                ))}
            </ItemBox>
            <ItemBox>
                <AzureButton style={{ padding: '11px 12px' }}>
                    <div className="icon-message"></div> Ваш менеджер
                </AzureButton>
                <WhiteButton style={{ padding: '11px 12px' }}>
                    <div>%</div>
                    Акции
                </WhiteButton>
                <WhiteButton style={{ padding: '11px 11px' }}>Блог</WhiteButton>
            </ItemBox>
        </Container>
    );
};
