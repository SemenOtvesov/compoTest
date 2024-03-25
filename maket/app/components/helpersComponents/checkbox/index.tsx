'use client';
import { AnimatePresence } from 'framer-motion';
import style from './style';
import React, { useEffect, useState } from 'react';
import { globalTheme } from '@app/hooks/useTheme';

export default ({
    state,
    setState,
}: {
    state: boolean;
    setState: (a: (a: boolean) => boolean) => void;
}) => {
    const { Container, CircleStart, CircleEnd } = style();

    return (
        <Container
            onClick={() => setState(prerSt => !prerSt)}
            style={state ? { backgroundColor: globalTheme.mainBlue } : {}}
        >
            <AnimatePresence>
                {!state ? (
                    <CircleStart
                        initial={{ x: 'calc(-100% + -2px)', y: '-50%', left: '100%' }}
                        animate={{ x: 2, y: '-50%', left: 0 }}
                        transition={{ ease: 'linear', duration: 0.1 }}
                        key={'CircleStart'}
                    />
                ) : (
                    <></>
                )}
                {state ? (
                    <CircleEnd
                        initial={{ x: 2, y: '-50%', left: 0 }}
                        animate={{ left: '100%', x: 'calc(-100% + -2px)' }}
                        transition={{ ease: 'linear', duration: 0.1 }}
                        key={'CircleEnd'}
                    />
                ) : (
                    <></>
                )}
            </AnimatePresence>
        </Container>
    );
};
