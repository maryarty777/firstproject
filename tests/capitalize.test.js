import { get } from "../src/capitalize.js";
import { strict as assert } from "assert";

// if (get ({first: 'one'}, 'first', 'nothing') !== 'one') {
// 	throw new Error ('Функция работает неверно!')
// } // если есть объект, ключ и значение по умолчанию

// if (get ({first: 'one'}, 'first') !== 'one') {
// 	throw new Error ('Функция работает неверно!')
// } // если есть объект и ключ

// if (get ({}, 'first', 'nothing') !== 'nothing') {
// 	throw new Error ('Функция работает неверно!')
// } // если есть ключ и значение по умолчанию, но объект пуст

// if (get ({}, '', 'nothing') !== 'nothing') {
// 	throw new Error ('Функция работает неверно!')
// }

assert.equal(get({ first: "one" }, "first", "nothing"), "one");
assert.equal(get({ first: "one" }, "first"), "one");
assert.equal(get({}, "first", "nothing"), "nothing");
assert.equal(get({}, "", "nothing"), "nothing");

console.log("All tests are sucsess :)");
