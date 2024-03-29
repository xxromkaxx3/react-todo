import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {AppDispatch, RootStateType} from './store'


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector
