import { Types } from './actionTypes';

export const initstateAction = (pizzas) => {
    return {type: Types.INIT, payload: pizzas}
} 