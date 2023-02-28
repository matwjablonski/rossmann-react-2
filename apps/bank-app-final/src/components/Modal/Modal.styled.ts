import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .7);
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalBox = styled.div`
  width: 400px;
  padding: 30px;
  min-height: 100px;
  background: #fff;
`
