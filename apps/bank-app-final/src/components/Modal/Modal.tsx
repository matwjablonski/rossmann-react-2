import { FC } from 'react';
import { createPortal } from 'react-dom';
import { ModalBox, ModalWrapper } from './Modal.styled';

const Modal: FC<{ value: string }> = ({ value }) => {
  return createPortal(
    <ModalWrapper>
      <ModalBox>
        test: {value}
      </ModalBox>
    </ModalWrapper>,
    document.getElementById('modal') as HTMLDivElement,
  )
}

export default Modal;
