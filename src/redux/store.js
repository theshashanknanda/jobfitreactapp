import { configureStore } from "@reduxjs/toolkit";
import jwtReducer from './slices/JwtSlice'

export const store = configureStore({
    reducer: {
        jwt: jwtReducer,
    },
})
