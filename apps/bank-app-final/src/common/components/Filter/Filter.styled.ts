import Chip from '@mui/material/Chip';
import styled from 'styled-components';

export const StyledChip = styled(Chip)`
  margin-right: 10px;

  &[class*="MuiChip"] {
    background: lightblue;
  }
`;
