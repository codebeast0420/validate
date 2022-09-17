import validate from '../src/is_not';

test('checks if the value does not match another', () => {
  expect(validate(1, { other: '1' })).toBe(true);
  expect(validate(1, { other: 1 })).toBe(false);
  expect(validate(1, { other: 2 })).toBe(true);
  expect(validate({}, { other: {} })).toBe(true);
  const obj = {};
  expect(validate(obj, { other: obj })).toBe(false);
});
