import { FC, useEffect } from 'react';
import { Transfer } from '../../data';
import { prepareWindowTitle } from '../../utils/prepareWindowTitle';
import Modal from '../Modal/Modal';

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
        {currentTransfer?.name && <Modal value={currentTransfer?.name} />}
      </div>
    </div>
  )
}

export default AccountSummary;
