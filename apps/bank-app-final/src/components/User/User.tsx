import { FC } from 'react';

interface UserProps {
  name: string;
  profession: string;
  imageUrl: string;
}

const User: FC<UserProps> = ({ name, profession, imageUrl }) => {
  return (
    <div>
      <h2>{name} ({profession})</h2>
      <img src={imageUrl} alt={name} style={{ width: '200px' }} />
    </div>
  )
}

export default User;
