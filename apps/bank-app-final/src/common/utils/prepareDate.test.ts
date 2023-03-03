import { prepareDate } from './prepareDate';

describe('prepareDate function', () => {

  test('should return string date when take Date object', () => {
    expect(prepareDate(new Date('2023-03-03'))).toBe('3.03.2023');
  })

});
