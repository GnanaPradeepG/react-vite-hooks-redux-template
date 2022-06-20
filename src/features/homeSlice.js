import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      count : 0
}

const homeSlice = createSlice({
      name: "home",
      initialState,
      reducers: {
            increment: (state) => {
                  state.count++;
            },
            decrement: (state) => {
                  state.count--;
            }
      }
});

export default homeSlice.reducer;
export const { increment, decrement } = homeSlice.actions;