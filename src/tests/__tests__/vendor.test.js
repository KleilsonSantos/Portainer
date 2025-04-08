import soma from '../../vendor';

describe('vendor test', () => {
  test('soma should return the sum of two numbers', () => {
    expect(soma(1, 2)).toBe(3);
    expect(soma(-1, -2)).toBe(-3);
    expect(soma(0, 0)).toBe(0);
  });
});
