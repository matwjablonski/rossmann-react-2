import Transfers from '../components/Transfers/Transfers';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { incrementVisitsOnHistoryPage } from '../redux/transactions.slice';

const Transactions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(incrementVisitsOnHistoryPage(''))
  }, []);

  return (
    <Transfers />
  )
}

export default Transactions;
