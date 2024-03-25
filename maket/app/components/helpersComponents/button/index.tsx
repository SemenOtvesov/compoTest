'use client';
import React, { HTMLAttributes } from 'react';
import style, { Tmod } from './style';

interface Tprops extends HTMLAttributes<HTMLButtonElement> {
    mod?: Tmod;
}

export default ({ children, mod, ...props }: Tprops) => {
    const { Button } = style();
    return (
        <Button {...props} mod={mod}>
            {children}
        </Button>
    );
};
