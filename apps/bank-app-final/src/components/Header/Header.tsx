import { FC } from 'react';
import Nav from '../Nav/Nav';

type HeaderProps = {
  bankName: string;
}

const Header: FC<HeaderProps> = ({ bankName }) => {
  return (
    <header style={{
      textAlign: 'center'
    }}>
      {bankName}
      <Nav />
    </header>
  )
}

export default Header;
