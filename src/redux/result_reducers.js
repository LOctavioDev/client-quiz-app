import { createSlice } from '@reduxjs/toolkit';

export const resultReducers = createSlice({
  name: 'result',
  initialState: {
    userId: null,
    result: [],
  },

  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setUserId } = resultReducers.actions;

export default resultReducers.reducer;
