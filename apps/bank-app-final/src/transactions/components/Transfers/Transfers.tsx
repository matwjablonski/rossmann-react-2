import { useMemo, useState } from 'react';
import AccountSummary from '../AccountSummary/AccountSummary';
import Filter from '../../../components/Filter/Filter';
import { Transfer as TransferType } from '../../models/transfer.model';
import { useRequest } from '../../../hooks/useRequest';
import TransferComponent from '../Transfer/Transfer';
import styles from './Transfers.module.scss';
import { RootStore } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTransfer } from '../../redux/transactions.slice';

const Transfers = () => {
  const { data: transfers, isLoading } = useRequest<TransferType[]>('transfers');
  const [ filteredTransfers, setFilteredTransfers ] = useState<TransferType[]>([]);
  const visits = useSelector((state: RootStore) => state.transactions.visits);
  const dispatch = useDispatch();
  const currentTransfer = useSelector((state: RootStore) => state.transactions.currentTransfer);
  
  const incomeInTotal = useMemo(() => transfers ? transfers.reduce((acc, curr) => {
    if (curr.type === 'income') {
      return acc + curr.value;
    }
    return acc;
  }, 0) : 0, [transfers]);

  const outcomeInTotal = useMemo(() => transfers ? transfers.reduce((acc, curr) => {
    if (curr.type === 'outcome') {
      return acc + curr.value;
    }
    return acc;
  }, 0) : 0, [transfers]);

  const filterOptions = useMemo(() => [
    {
      name: 'Wpływ',
      value: 'income',
    },
    {
      name: 'Wydatek',
      value: 'outcome',
    }
  ], []);
 
  const filterBy = (selectedFilter: string) => {
    if (selectedFilter !== '' && transfers) {
      setFilteredTransfers(
        transfers.filter(transfer => transfer.type === selectedFilter),
      );
    } else {
      setFilteredTransfers([]);
    }
  }

  const setActiveTransfer = (id: number) => {
    const selectedTransfer = (filteredTransfers.length > 0 ? filteredTransfers : transfers || [])
      .find(transfer => transfer.id === id)
    dispatch(setCurrentTransfer(selectedTransfer));
  }

  return isLoading ? <>Trwa ładowanie danych</> : (
    <section className={styles.Transfers}>
      <p>Stronę odwiedzono: {visits} razy</p>
      {transfers && <AccountSummary
        incomeInTotal={incomeInTotal}
        outcomeInTotal={outcomeInTotal}
      />}
      <Filter
        options={filterOptions}
        filterAction={filterBy}
      />
      <ul className={styles.List}>
        {
          (filteredTransfers.length > 0 ? filteredTransfers : transfers || [])
            .map(({ id, ...transferData}) => <TransferComponent 
              key={id}
              id={id}
              isActive={id === currentTransfer?.id}
              handleClick={(id) => setActiveTransfer(id)}
              {...transferData}
            />)
          }
      </ul>
    </section>
  )
}

export default Transfers;
