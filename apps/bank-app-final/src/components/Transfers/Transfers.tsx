import { useState } from 'react';
import { Transfer as TransferType } from '../../data';
import TransferComponent from '../Transfer/Transfer';

interface TransfersProps {
  transfers: TransferType[];
}

const Transfers = ({ transfers }: TransfersProps) => {
  const [ activeTransfer, setActiveTransfer ] = useState<number | null>(null);
  return (
    <ul>
      {transfers.map(({ id, ...transferData}) => <TransferComponent 
        key={id}
        id={id}
        isActive={id === activeTransfer}
        handleClick={(id) => setActiveTransfer(id)}
        {...transferData}
      />)}
    </ul>
  )
}

export default Transfers;
