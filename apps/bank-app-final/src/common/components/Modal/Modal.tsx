import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalBox, ModalWrapper } from './Modal.styled';

const TIME_TO_CLOSE_MODAL = 4000;

const Modal: FC<{ value: string }> = ({ value }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, TIME_TO_CLOSE_MODAL)
  }, []);

  return isVisible ? createPortal(
    <ModalWrapper>
      <ModalBox>
        test: {value}
      </ModalBox>
    </ModalWrapper>,
    document.getElementById('modal') as HTMLDivElement,
  ) : null;
}

export default Modal;
