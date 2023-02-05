import giveHealth from './health.js';
test('state check test', () => {
    let result = giveHealth({name: 'Witch', health: 90});
    expect(result).toBe('healthy');
});