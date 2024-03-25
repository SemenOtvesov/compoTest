'use client';
import Input from '@app/components/helpersComponents/input';
import style, { containerAttributes, inputAttributes } from './style';
import React from 'react';

export default () => {
    const { Icon } = style();
    return (
        <Input
            containerProps={containerAttributes}
            inputProps={inputAttributes}
            placeholder="Название запроса"
        >
            <Icon className="icon-close" />
            <Icon className="icon-search" />
        </Input>
    );
};
