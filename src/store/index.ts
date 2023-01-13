import {configureStore} from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux/es/exports"
import counterSlice from "./counterSlice"
export const store = configureStore({
    reducer:{
        posts:counterSlice
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
  export const useAppSelector:TypedUseSelectorHook<RootState> =useSelector