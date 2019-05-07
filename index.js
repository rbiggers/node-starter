const sumApi = require('./SumApi');

console.log('Syncronous sum of 1 + 2 = ', sumApi.GetSumSync(1, 2));
sumApi.GetSumAsync(1, 2).then(sum => console.log('Asyncronousum of 1 + 2 = ', sum));
