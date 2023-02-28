import { useMemo, memo } from 'react';
import { Link } from 'react-router-dom';

const Footer = memo(() => {
  const year = useMemo(() => {
    return new Date().getFullYear()
  }, []);

  return (
    <footer>
      <p>&copy;{year} by Mateusz</p>
      <Link to="/contact">Napisz do mnie</Link>
    </footer>
  )
})

Footer.displayName = 'FooterMemo';

export default Footer;
