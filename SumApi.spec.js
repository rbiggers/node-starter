const sumApi = require('./SumApi');

describe('Sum Tests', () => {
  test('Syncronously validate 1 + 2 = 3', () => {
    expect(sumApi.GetSumSync(1, 2)).toBe(3);
  });
  test('Asncronously validate 1 + 2 = 3', async () => {
    expect.assertions(1);
    await expect(sumApi.GetSumAsync(1, 2)).resolves.toBe(3);
  });
});
