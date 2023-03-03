export const prepareTransferValue = (value: number, currency: string) => {
  return `${value} ${currency.toUpperCase()}`
}
