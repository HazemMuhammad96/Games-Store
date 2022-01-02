import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppFetchSelector = <T>(
    selectorFunction,
    dispatchFunction,
    payload?,
) => {
    const dispatch = useAppDispatch();
    const state: T = useAppSelector(root => selectorFunction(root));

    React.useEffect(() => { 
        dispatch(dispatchFunction(payload));
    },[payload])

    return state;
};