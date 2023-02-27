import { Transfer as TransferType } from '../../data';
import TransferComponent from '../Transfer/Transfer';

interface TransfersProps {
  transfers: TransferType[];
}

const Transfers = ({ transfers }: TransfersProps) => {
  return (
    <ul>
      {transfers.map(({ id, ...transferData}) => <TransferComponent key={id} {...transferData}/>)}
    </ul>
  )
}

export default Transfers;
