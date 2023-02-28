import { useEffect, useMemo, useState } from 'react';
import { Transfer as TransferType } from '../../data';
import AccountSummary from '../AccountSummary/AccountSummary';
import Filter from '../Filter/Filter';
import TransferComponent from '../Transfer/Transfer';

interface TransfersProps {
  transfers: TransferType[];
}

const Transfers = ({ transfers }: TransfersProps) => {
  const [ activeTransfer, setActiveTransfer ] = useState<number | null>(null);
  const [ filteredTransfers, setFilteredTransfers ] = useState<TransferType[]>([]);
  
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
 
  const filterBy = (selectedFilter: string) => {
    if (selectedFilter !== '') {
      setFilteredTransfers(
        transfers.filter(transfer => transfer.type === selectedFilter),
      );
    } else {
      setFilteredTransfers([]);
    }
  }

  return (
    <>
      <AccountSummary
        incomeInTotal={incomeInTotal}
        outcomeInTotal={outcomeInTotal}
        currentTransfer={transfers.find(transfer => transfer.id === activeTransfer)}
      />
      <Filter
        options={[
          {
            name: 'Wpływ',
            value: 'income',
          },
          {
            name: 'Wydatek',
            value: 'outcome',
          }
        ]}
        filterAction={filterBy}
      />
      <ul>
        {
          (filteredTransfers.length > 0 ? filteredTransfers : transfers)
            .map(({ id, ...transferData}) => <TransferComponent 
              key={id}
              id={id}
              isActive={id === activeTransfer}
              handleClick={(id) => setActiveTransfer(id)}
              {...transferData}
            />)
          }
      </ul>
    </>
  )
}

export default Transfers;
