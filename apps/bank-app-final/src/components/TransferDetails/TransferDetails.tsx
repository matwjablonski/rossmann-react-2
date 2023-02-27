import { FC } from 'react';
import { prepareDate } from '../../utils/prepareDate';
import TransferTypeComponent from '../TransferType/TransferType';

interface TransferDetailsProps {
  date: string | Date;
  type: 'income' | 'outcome';
}

const TransferDetails: FC<TransferDetailsProps> = ({ date, type }) => {
  return (
    <div>
      {prepareDate(date)}
      (<TransferTypeComponent type={type}/>)
    </div>
  )
}

export default TransferDetails;
