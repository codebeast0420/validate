import { defineRule, validate } from '@/vee-validate';

test('passing a non-function as the validate method will throw', () => {
  expect(() => {
    defineRule('noFn', '' as unknown as (value: any) => boolean);
  }).toThrow();
});

test('define global validations using string ids', async () => {
  defineRule('test-direct', (value, _, { field }) => {
    if (value === '1') {
      return 'Cannot be 1';
    }

    if (value === '2') {
      return `${field} Cannot be 2`;
    }

    return true;
  });

  let result = await validate('1', 'test-direct');
  expect(result.errors[0]).toBe('Cannot be 1');

  result = await validate('2', 'test-direct', { name: 'test' });
  expect(result.errors[0]).toBe('test Cannot be 2');
});
