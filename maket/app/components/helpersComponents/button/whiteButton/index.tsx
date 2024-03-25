'use client';
import React, { HTMLAttributes } from 'react';
import Button from '..';
import { Tmod } from '../style';
import { globalTheme } from '@app/hooks/useTheme';

interface Tprops extends HTMLAttributes<HTMLButtonElement> {}

const mod: Tmod = {
    color: globalTheme.mainBlue,
    backgroundColor: '#00000000',
    focus: {
        backgroundColor: globalTheme.whiteGray,
    },
    hover: {
        boxShadowColor: globalTheme.gray,
    },
    disabled: {
        backgroundColor: globalTheme.whiteGray,
        color: globalTheme.gray,
    },
};

export default ({ children, ...props }: Tprops) => {
    return (
        <Button mod={mod} {...props}>
            {children}
        </Button>
    );
};
