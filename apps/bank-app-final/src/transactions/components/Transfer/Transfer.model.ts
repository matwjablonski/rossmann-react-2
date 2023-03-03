import { Transfer as TransferType } from '../../models/transfer.model';

export interface TransferProps extends TransferType {
  isActive: boolean;
  handleClick(id: number): void;
}
