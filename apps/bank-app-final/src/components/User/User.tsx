import { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import { UserBox, UserName } from './User.styled';

interface UserProps {
  name: string;
  profession: string;
  imageUrl: string;
}

const User: FC<UserProps> = ({ name, profession, imageUrl }) => {
  return (
    <UserBox>
      <Avatar src={imageUrl} alt={name} />
      <UserName>{name} <span>({profession})</span></UserName>
    </UserBox>
  )
}

export default User;
