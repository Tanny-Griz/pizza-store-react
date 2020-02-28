import React, { useEffect } from 'react';
import { useReducer } from "react";
import { initialState } from './initialState';
import { reducer } from './reducer';

export const useStateHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return [state, dispatch];
}

