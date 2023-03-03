import { FC, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import { UserBox, UserName } from './User.styled';
import { UserContext } from '../../contexts/User.context';

const User: FC = () => {
  const { user } = useContext(UserContext);
  return user ? (
    <UserBox>
      <Avatar src={user.avatar} alt={user.name} />
      <UserName>{user.name} <span>({user.profession})</span></UserName>
    </UserBox>
  ) : null;
}

export default User;
