import { createSlice } from '@reduxjs/toolkit';
import { Transfer } from '../models/transfer.model';

type State = {
  visits: number;
  currentTransfer?: Transfer;
}

const initialState: State = {
  visits: 0,
  currentTransfer: undefined,
}

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    incrementVisitsOnHistoryPage: (state) => {
      state.visits += 1;
    },
    setCurrentTransfer: (state, action) => {
      state.currentTransfer = action.payload;
    }
  }
});

export const { incrementVisitsOnHistoryPage, setCurrentTransfer } = transactionsSlice.actions;

export default transactionsSlice.reducer;
