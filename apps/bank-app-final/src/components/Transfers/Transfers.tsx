import { useMemo, useState } from 'react';
import { Transfer as TransferType } from '../../data';
import { useRequest } from '../../hooks/useRequest';
import AccountSummary from '../AccountSummary/AccountSummary';
import Filter from '../Filter/Filter';
import TransferComponent from '../Transfer/Transfer';
import styles from './Transfers.module.scss';

const Transfers = () => {
  const [ activeTransfer, setActiveTransfer ] = useState<number | null>(null);
  const { data: transfers, isLoading } = useRequest<TransferType[]>('transfers')
  const [ filteredTransfers, setFilteredTransfers ] = useState<TransferType[]>([]);
  
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

  return (
    <section className={styles.Transfers}>
      {transfers && <AccountSummary
        incomeInTotal={incomeInTotal}
        outcomeInTotal={outcomeInTotal}
        currentTransfer={transfers.find(transfer => transfer.id === activeTransfer)}
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
              isActive={id === activeTransfer}
              handleClick={(id) => setActiveTransfer(id)}
              {...transferData}
            />)
          }
      </ul>
    </section>
  )
}

export default Transfers;
