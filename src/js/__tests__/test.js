import giveHealth from '../health';

test('state check test', () => {
  const result = giveHealth({ name: 'Witch', health: 90 });
  expect(result).toBe('healthy');
});
