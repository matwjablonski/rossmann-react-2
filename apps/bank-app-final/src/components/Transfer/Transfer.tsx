import { FC, useState } from 'react';
import { prepareTransferValue } from '../../utils/prepareTransferValue';
import TransferTypeComponent from '../TransferType/TransferType';
import { TransferProps } from './Transfer.model';

const Transfer: FC<TransferProps> = ({
  name, 
  value,
  currency, 
  date,
  type,
}) => {
  const [ isClicked, setIsClicked ] = useState<boolean>(false);
  const styleObj = {
    padding: '10px',
    color: isClicked ? 'red' : 'blue',
  }

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  }

  return <li style={styleObj}>
    <div onClick={handleClick}>
      {name} (<TransferTypeComponent type={type}/>)
    </div>
    <div>
      {prepareTransferValue(value, currency)}
    </div>
  </li>
}

export default Transfer;
