export type TcartState = { list: Array<TcartItem>; activeItem: TcartItem; cartSumm: number };
export type TcartItem = { id: number; count: number; onePrice: number };
