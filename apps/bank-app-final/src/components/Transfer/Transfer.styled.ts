import styled from 'styled-components';

export const TransferBox = styled.li<{ showDetails: boolean; }>`
  padding: 10px;
  background: ${({ showDetails }) => showDetails ? '#ccc' : '#222'};
  color: ${({ showDetails }) => showDetails ? '#000' : '#eee'};
  cursor: pointer;
`;
