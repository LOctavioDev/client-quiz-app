import { createSlice } from '@reduxjs/toolkit';

// ? CREATE REDUCER
export const questionReducer = createSlice({
  name: 'questions',
  initialState: {
    queque: [],
    answers: [],
    trace: 0,
  },

  reducers: {
    startExamAction: (state, action) => {
      return {
        ...state,
        queque: action.payload,
      };
    },
  },
});

export const { startExamAction } = questionReducer.actions;

export default questionReducer.reducer