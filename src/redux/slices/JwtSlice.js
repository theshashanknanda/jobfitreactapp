import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    value: -1,
}

export const JwtSlice = createSlice({
    name: "jwt",
    initialState,
    reducers: {
        setJwt: (state, action) => {
            state.value = action.payload
        }
    }
})

export default JwtSlice.reducer
export const {setJwt} = JwtSlice.actions
