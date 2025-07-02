import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from './store';
// Remember :
// we defined RootState and AppDispatch in our store.ts file

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// instead of doing this everywhere :
//      import {useDisptach , useSelector} from 'react-redux';
//      const dispatch = useDispatch <AppDispatch> ()
//      const theme = useSelector((state: RootState) => state.theme.theme)

// we'll just write :
//      import { useAppDispatch, useAppSelector } from '@/store/hooks'
//      const dispatch = useAppDispatch()
//      const theme = useAppSelector((state) => state.theme.theme)