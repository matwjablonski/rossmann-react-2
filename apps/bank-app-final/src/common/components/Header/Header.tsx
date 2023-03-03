import { FC, useContext } from 'react';
import User from '../../../user/components/User/User';
import { UserContext } from '../../../user/contexts/User.context';
import Nav from '../Nav/Nav';

type HeaderProps = {
  bankName: string;
}

const Header: FC<HeaderProps> = ({ bankName }) => {
  const {isAuthenticated} = useContext(UserContext);
  return (
    <header style={{
      textAlign: 'center'
    }}>
      {isAuthenticated && <User />}
      {bankName}
      <Nav />
    </header>
  )
}

export default Header;
