'use client';
import BlueButton from '@app/components/helpersComponents/button/blueButton';
import style from '../style';
import locStyle from './style';
import React from 'react';
import useAppDispatch from '@app/hooks/useAppDispatch';
import useAppSelector from '@app/hooks/useAppSelector';
import { addItem, decItem } from '@app/state/cartState/cartState';

export default () => {
    const { Icon } = style();
    const { ButtonContainer, Button, Text } = locStyle();
    const dispatch = useAppDispatch();
    const activeItem = useAppSelector(state => state.cartState.activeItem);
    const listCart = useAppSelector(state => state.cartState.list);

    const listItem = listCart.find(el => el.id === activeItem.id);
    if (listItem && listItem.count) {
        return (
            <ButtonContainer>
                <Button onClick={() => dispatch(decItem(activeItem))}>-</Button>
                <Text>
                    <span>{listItem.count}</span> {numberText(listItem.count)}
                </Text>
                <Button onClick={() => dispatch(addItem(activeItem))}>+</Button>
            </ButtonContainer>
        );
    } else {
        return (
            <BlueButton style={{ flex: '1 1' }} onClick={() => dispatch(addItem(activeItem))}>
                <Icon className="icon-cart"></Icon>В корзину
            </BlueButton>
        );
    }
};
function numberText(num: number) {
    let text = '';
    if ([1].includes(num % 10)) {
        text = ' штука';
    }
    if ([2, 3, 4].includes(num % 10)) {
        text = ' штуки';
    }
    if ([5, 6, 7, 8, 9, 0].includes(num % 10)) {
        text = ' штук';
    }

    return text;
}
