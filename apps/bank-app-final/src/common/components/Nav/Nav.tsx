import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../contexts/Language.context';

const Nav = () => {
  const lang = useContext(LanguageContext);
  
  console.log();
  return (
    <nav>
      <ul>
        <li><Link to="/">{lang === 'en' ? 'Home' : 'Strona główna'}</Link></li>
        <li><Link to="/history">{lang === 'en' ? 'History' : 'Historia'}</Link></li>
        <li><Link to="/contact">{lang === 'en' ? 'Contact' : 'Kontakt'}</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;
