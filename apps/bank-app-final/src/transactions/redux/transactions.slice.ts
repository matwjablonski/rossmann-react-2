import { createSlice } from '@reduxjs/toolkit';

type State = {
  visits: number;
}

const initialState: State = {
  visits: 0,
}

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    incrementVisitsOnHistoryPage: (state, action) => {
      state.visits += 1;
    }
  }
});

export const { incrementVisitsOnHistoryPage } = transactionsSlice.actions;

export default transactionsSlice.reducer;
