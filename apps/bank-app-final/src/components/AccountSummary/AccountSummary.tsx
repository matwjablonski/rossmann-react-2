import { FC, useEffect } from 'react';
import { Transfer } from '../../data';
import { prepareWindowTitle } from '../../utils/prepareWindowTitle';

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

  useEffect(() => {
    document.title = prepareWindowTitle(currentTransfer?.name || '');
  }, [
    currentTransfer?.name
  ])

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
