import { FC, useEffect } from 'react';
import { prepareWindowTitle } from '../../../utils/prepareWindowTitle';
import Modal from '../../../components/Modal/Modal';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../store';

interface AccountSummaryProps {
  incomeInTotal: number;
  outcomeInTotal: number;
}

const AccountSummary: FC<AccountSummaryProps> = ({
  incomeInTotal,
  outcomeInTotal,
}) => {
  const currentTransfer = useSelector((state: RootStore) => state.transactions.currentTransfer);

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
