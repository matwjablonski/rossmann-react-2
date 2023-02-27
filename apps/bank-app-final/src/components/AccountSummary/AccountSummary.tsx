import { FC } from 'react';
import { Transfer } from '../../data';

interface AccountSummaryProps {
  incomeInTotal: number;
  outcomeInTotal: number;
  currentTransfer?: Transfer;
}

const AccountSummary: FC<AccountSummaryProps> = ({
  incomeInTotal,
  outcomeInTotal,
  currentTransfer,
}) => {

  return (
    <div>
      <div>
        Ostatnio wybrany przelew: {currentTransfer?.name}
      </div>
      <div>
        <div>Wpływy: {incomeInTotal}</div>
        <div>Płatności: {outcomeInTotal}</div>
      </div>
    </div>
  )
}

export default AccountSummary;
