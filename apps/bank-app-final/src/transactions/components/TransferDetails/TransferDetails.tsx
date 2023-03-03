import { FC, ReactNode } from 'react';
import { prepareDate } from '../../../common/utils/prepareDate';

interface TransferDetailsProps {
  date: string | Date;
  typeComponent: ReactNode;
}

const TransferDetails: FC<TransferDetailsProps> = ({ date, typeComponent }) => {
  return (
    <div>
      {prepareDate(date)}
      ({typeComponent})
    </div>
  )
}

export default TransferDetails;
