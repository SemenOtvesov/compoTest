'use client';
import React from 'react';
import style from './style';

const itemList = [
    { title: 'Женщинам', subList: ['Одежда', 'Обувь', 'Аксессуары', 'Белье', 'Bra fitting'] },
    { title: 'Мужчинам', subList: ['Одежда', 'Обувь', 'Аксессуары', 'Белье'] },
    { title: 'Детям', subList: ['Одежда', 'Обувь', 'Аксессуары', 'Белье', 'Игрушки', 'Малыши'] },
    {
        title: 'Виды спорта',
        subList: ['Велоспорт', 'Туризм', 'Тренажеры и фитнес', 'Командные виды спорта', 'Самокаты'],
    },
];

export default () => {
    const { Container, Item, ItemTitle, ItemSubList, ItemSubItem } = style();
    return (
        <Container>
            {itemList.map((el, i) => (
                <Item key={el.title + i}>
                    <ItemTitle>{el.title}</ItemTitle>
                    <ItemSubList>
                        {el.subList.map((subItem, i) => (
                            <ItemSubItem key={subItem + i}>{subItem}</ItemSubItem>
                        ))}
                    </ItemSubList>
                </Item>
            ))}
        </Container>
    );
};
