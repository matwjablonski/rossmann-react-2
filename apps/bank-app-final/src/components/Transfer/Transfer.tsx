import { FC, useState } from 'react';
import { prepareTransferValue } from '../../utils/prepareTransferValue';
import TransferDetails from '../TransferDetails/TransferDetails';
import { TransferProps } from './Transfer.model';
import TransferTypeComponent from '../TransferType/TransferType';
import { Link } from 'react-router-dom';

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
      <Link to={`/history/${id}`}>Zobacz szczegóły</Link>
    </div>
    {isActive && <TransferDetails
      date={date}
      typeComponent={<TransferTypeComponent type={type}/>}  
    />}
  </li>
}

export default Transfer;
