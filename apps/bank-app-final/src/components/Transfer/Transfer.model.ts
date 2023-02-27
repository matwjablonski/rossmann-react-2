import { Transfer as TransferType } from '../../data';

export interface TransferProps extends TransferType {
  isActive: boolean;
  handleClick(id: number): void;
}
