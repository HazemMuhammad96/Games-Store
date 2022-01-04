import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { clear } from '../../features/games/gamesSlice';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppFetchSelector = <T>(
    selectorFunction,
    dispatchFunction,
    payload?,
    refreshable = false,
    clearFunction?,
) => {
    const dispatch = useAppDispatch();
    const state: T = useAppSelector(root => selectorFunction(root));

    React.useEffect(() => {
        dispatch(dispatchFunction(payload));

        return () => { if (clearFunction) dispatch(clearFunction()) };
    }, refreshable ? [payload] : []);

    return state;
};