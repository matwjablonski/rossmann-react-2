import { FC } from 'react';

interface ButtonProps {
  label: string;
  type: 'submit' | 'button' | 'reset';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  label,
  ...rest
}) => {
  return (
    <button {...rest}>{label}</button>
  )
}

export default Button;
