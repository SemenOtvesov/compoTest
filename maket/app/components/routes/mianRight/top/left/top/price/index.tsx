'use client';
import React from 'react';
import style from '../style';
import useAppSelector from '@app/hooks/useAppSelector';

export default () => {
    const { NewPrice, Sale } = style();
    const activeItemPrice = useAppSelector(state => state.cartState.activeItem);
    return (
        <NewPrice>
            {Math.floor(activeItemPrice.count * activeItemPrice.onePrice)} ₽ <Sale>-15%</Sale>
        </NewPrice>
    );
};
