import { FC, useState } from 'react';
import { prepareTransferValue } from '../../../common/utils/prepareTransferValue';
import TransferDetails from '../TransferDetails/TransferDetails';
import { TransferProps } from './Transfer.model';
import TransferTypeComponent from '../TransferType/TransferType';
import { Link } from 'react-router-dom';
import { TransferBox } from './Transfer.styled';

const Transfer: FC<TransferProps> = ({
  id,
  name, 
  value,
  currency, 
  date,
  type,
  isActive,
  handleClick,
}) => {
  const [ showDetails, setShowDetails ] = useState<boolean>(false);

  const onClick = () => {
    handleClick(id);
    setShowDetails((prevState) => !prevState);
  }

  return <TransferBox showDetails={showDetails}>
    <div onClick={onClick}>
      {name}
    </div>
    <div>
      {prepareTransferValue(value, currency)}
      <Link to={`/history/${id}`}>Zobacz szczegóły</Link>
    </div>
    {isActive && <TransferDetails
      date={date}
      typeComponent={<TransferTypeComponent type={type}/>}  
    />}
  </TransferBox>
}

export default Transfer;
