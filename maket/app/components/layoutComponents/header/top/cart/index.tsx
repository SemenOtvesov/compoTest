'use client';
import AzureButton from '@app/components/helpersComponents/button/azureButton';
import style from './style';
import React from 'react';
import useAppSelector from '@app/hooks/useAppSelector';

export default () => {
    const cartPrice = useAppSelector(state => state.cartState.cartSumm);
    const { Icon, Text } = style();
    return (
        <AzureButton>
            <Icon className="icon-cart"></Icon>
            <Text>{cartPrice} ₽</Text>
        </AzureButton>
    );
};
