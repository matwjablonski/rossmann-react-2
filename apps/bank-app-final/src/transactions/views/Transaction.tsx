import { useParams } from 'react-router-dom';

const Transaction = () => {
  const { id } = useParams();

  return (
    <div>
      Dane o przelewie {id}
    </div>
  )
}

export default Transaction;
