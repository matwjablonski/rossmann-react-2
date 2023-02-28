import { useEffect, useMemo, useState } from 'react';
import { Transfer as TransferType } from '../../data';
import AccountSummary from '../AccountSummary/AccountSummary';
import Filter from '../Filter/Filter';
import TransferComponent from '../Transfer/Transfer';
import styles from './Transfers.module.scss';

interface TransfersProps {}

const Transfers = ({}: TransfersProps) => {
  const [ activeTransfer, setActiveTransfer ] = useState<number | null>(null);
  const [ transfers, setTransfers ] = useState<TransferType[]>([]);
  
  const incomeInTotal = useMemo(() => transfers.reduce((acc, curr) => {
    if (curr.type === 'income') {
      return acc + curr.value;
    }
    return acc;
  }, 0), [transfers]);

  const outcomeInTotal = useMemo(() => transfers.reduce((acc, curr) => {
    if (curr.type === 'outcome') {
      return acc + curr.value;
    }
    return acc;
  }, 0), [transfers]);

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
    if (selectedFilter !== '') {
      setTransfers(
        transfers.filter(transfer => transfer.type === selectedFilter),
      );
    } else {
      fetchTransfers();
    }
  }

  const fetchTransfers = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/transfers');
      const { data }: { data: TransferType[]}  = await response.json();
      
      setTransfers(data);
    } catch {}
  }

  useEffect(() => {
    fetchTransfers();
  }, []);

  return (
    <section className={styles.Transfers}>
      <AccountSummary
        incomeInTotal={incomeInTotal}
        outcomeInTotal={outcomeInTotal}
        currentTransfer={transfers.find(transfer => transfer.id === activeTransfer)}
      />
      <Filter
        options={filterOptions}
        filterAction={filterBy}
      />
      <ul className={styles.List}>
        {
          transfers
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
