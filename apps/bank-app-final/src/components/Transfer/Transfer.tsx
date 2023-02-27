import { FC, useState } from 'react';
import { prepareTransferValue } from '../../utils/prepareTransferValue';
import TransferDetails from '../TransferDetails/TransferDetails';
import { TransferProps } from './Transfer.model';

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
  const styleObj = {
    padding: '10px',
    color: showDetails ? 'red' : 'blue',
  }

  const onClick = () => {
    handleClick(id);
    setShowDetails((prevState) => !prevState);
  }

  return <li style={styleObj}>
    <div onClick={onClick}>
      {name}
    </div>
    <div>
      {prepareTransferValue(value, currency)}
    </div>
    {isActive &&<TransferDetails type={type} date={date} />}
  </li>
}

export default Transfer;
