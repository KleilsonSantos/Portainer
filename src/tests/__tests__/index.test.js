import soma from '../../index';

describe('index test', () => {
  test('soma should return the sum of two numbers', () => {
    expect(soma(1, 2)).toBe(3);
    expect(soma(-1, -2)).toBe(-3);
    expect(soma(0, 0)).toBe(0);
  });
});
