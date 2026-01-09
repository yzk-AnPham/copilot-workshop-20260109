const assert = require('assert');
const { fizzBuzz, validateIntegerInput } = require('./fizzbuzz');

// 正常系
assert.strictEqual(fizzBuzz(3), 'Fizz');
assert.strictEqual(fizzBuzz(5), 'Buzz');
assert.strictEqual(fizzBuzz(15), 'FizzBuzz');
assert.strictEqual(fizzBuzz(7), 7);

// 文字列での数値入力
assert.strictEqual(fizzBuzz('9'), 'Fizz');

// 範囲チェック: 0 はエラー
assert.throws(() => validateIntegerInput(0), RangeError);

// 浮動小数点はエラー
assert.throws(() => validateIntegerInput(2.5), RangeError);

// NaN / null / 非数
assert.throws(() => validateIntegerInput(NaN), TypeError);
assert.throws(() => validateIntegerInput(null), TypeError);
assert.throws(() => validateIntegerInput('abc'), TypeError);

console.log('All tests passed');
