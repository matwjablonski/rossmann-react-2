import { FC } from 'react';

type HeaderProps = {
  welcomeMsg: string;
}

const Header: FC<HeaderProps> = ({ welcomeMsg }) => {
  return (
    <header style={{
      textAlign: 'center'
    }}>
      {welcomeMsg}
    </header>
  )
}

export default Header;
