import { useState } from 'react';
import { Transfer as TransferType } from '../../data';
import AccountSummary from '../AccountSummary/AccountSummary';
import TransferComponent from '../Transfer/Transfer';

interface TransfersProps {
  transfers: TransferType[];
}

const Transfers = ({ transfers }: TransfersProps) => {
  const [ activeTransfer, setActiveTransfer ] = useState<number | null>(null);
  
  const incomeInTotal = transfers.reduce((acc, curr) => {
    if (curr.type === 'income') {
      return acc + curr.value;
    }
    return acc;
  }, 0);

  const outcomeInTotal = transfers.reduce((acc, curr) => {
    if (curr.type === 'outcome') {
      return acc + curr.value;
    }
    return acc;
  }, 0);
  
  return (
    <>
      <AccountSummary
        incomeInTotal={incomeInTotal}
        outcomeInTotal={outcomeInTotal}
        currentTransfer={transfers.find(transfer => transfer.id === activeTransfer)}
      />
      <ul>
        {transfers.map(({ id, ...transferData}) => <TransferComponent 
          key={id}
          id={id}
          isActive={id === activeTransfer}
          handleClick={(id) => setActiveTransfer(id)}
          {...transferData}
        />)}
      </ul>
    </>
  )
}

export default Transfers;
