export type Transfer = {
  id: number;
  name: string;
  value: number;
  currency: 'PLN' | 'USD' | 'EUR';
  date: string | Date;
  type: 'income' | 'outcome';
}
