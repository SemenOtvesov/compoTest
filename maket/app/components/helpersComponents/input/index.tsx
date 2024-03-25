'use client';
import React, { CSSProperties, HtmlHTMLAttributes } from 'react';
import style from './style';

interface Tprops extends HtmlHTMLAttributes<HTMLInputElement> {
    containerProps?: CSSProperties;
    inputProps?: CSSProperties;
}

export default ({ children, containerProps, inputProps, ...props }: Tprops) => {
    const { Container, Input } = style();
    return (
        <Container containerProps={containerProps}>
            <Input inputProps={inputProps} {...props}></Input>
            {children}
        </Container>
    );
};
