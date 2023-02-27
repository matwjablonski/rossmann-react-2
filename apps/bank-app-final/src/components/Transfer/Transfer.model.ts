import { Transfer as TransferType } from '../../data';

export interface TransferProps extends Omit<TransferType, 'id'> {}
