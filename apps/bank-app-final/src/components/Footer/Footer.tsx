import { useMemo, memo } from 'react';

const Footer = memo(() => {
  const year = useMemo(() => {
    return new Date().getFullYear()
  }, []);

  return (
    <footer>
      <p>&copy;{year} by Mateusz</p>
    </footer>
  )
})

Footer.displayName = 'FooterMemo';

export default Footer;
