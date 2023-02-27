export const prepareDate = (value: string | Date): string => {
  if (value instanceof Date) {
    return value.toLocaleDateString();
  }

  return value;
}
