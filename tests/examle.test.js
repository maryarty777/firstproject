import { take } from "../src/example.js";
import { strict as assert } from "assert";

assert.deepStrictEqual(take([1, 2, 3], 2), [1, 2]) // есть массив, есть n
assert.deepStrictEqual(take([true, 'length', 4]), [true]) // есть массив, не задано n
assert.deepStrictEqual(take([4, null, ''], 9), [4, null, '']) // есть массив, n > массива
assert.deepStrictEqual(take([], 2), []) // пустой массив, задано n
assert.deepStrictEqual(take(['one', 'two', 'three'], NaN), ['one']) // есть массив, n = Nan
assert.deepStrictEqual(take([{key: 'value'}, 'two', 'three'], undefined), [{key: 'value'}])


console.log( 'Тесты успешно пройдены!' );
