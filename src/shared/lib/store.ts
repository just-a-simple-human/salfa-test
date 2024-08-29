import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { api } from "#shared/api/apiSlice.js";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        card: cardSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootStore>()
export type RootStore = ReturnType<typeof store.getState>