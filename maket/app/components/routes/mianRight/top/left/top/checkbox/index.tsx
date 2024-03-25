'use client';
import React, { useEffect, useState } from 'react';
import style from '../style';
import Checkbox from '@app/components/helpersComponents/checkbox';
import useAppDispatch from '@app/hooks/useAppDispatch';
import { setActiveItem } from '@app/state/cartState/cartState';

export default () => {
    const {} = style();
    const dispatch = useAppDispatch();
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        if (checkbox) {
            dispatch(setActiveItem({ id: 1, count: 12, onePrice: 10213.83 }));
        } else {
            dispatch(setActiveItem({ id: 1, count: 1, onePrice: 10213.83 }));
        }
    }, [checkbox]);

    return <Checkbox state={checkbox} setState={setCheckbox} />;
};
