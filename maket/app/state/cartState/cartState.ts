import { TcartItem, TcartState } from '@app/locTypes/state/cartState';
import { createSlice } from '@reduxjs/toolkit';

const initialState: TcartState = {
    list: [],
    activeItem: { id: 1, onePrice: 10213.83, count: 0 },
    cartSumm: 0,
};

const cartState = createSlice({
    name: 'cartState',
    initialState,
    reducers: {
        addItem: (state: TcartState, { payload }: { payload: TcartItem }) => {
            let item = state.list.find(el => (el.id = payload.id));
            if (item) {
                item.count += payload.count;
            } else {
                state.list.push(payload);
            }
            state.cartSumm = calcSumm(state);
        },
        decItem: (state: TcartState, { payload }: { payload: TcartItem }) => {
            let item = state.list.find(el => (el.id = payload.id));
            if (item) {
                item.count -= payload.count;
            }
            state.cartSumm = calcSumm(state);
        },
        setActiveItem: (state: TcartState, { payload }: { payload: TcartItem }) => {
            state.activeItem = payload;
        },
    },
});

export const { addItem, setActiveItem, decItem } = cartState.actions;
export default cartState;

function calcSumm({ list }: TcartState) {
    let summ = 0;
    list.forEach(el => (summ += el.count * el.onePrice));
    return Math.floor(summ);
}
