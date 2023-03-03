import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './transactions/redux/transactions.slice';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  }
})

export type RootStore = ReturnType<typeof store.getState>
