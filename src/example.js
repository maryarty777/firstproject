import _ from "lodash";

const take = (items, n = 1) => {
	if (!Array.isArray(items)) return [];
	if (!n || isNaN(n)) n = 1;

  return items.slice(0, n);
};
console.log(take([{key: 'value'}, 'two', 'three'], undefined));
console.log(take(['one', 'two', 'three'], NaN));
console.log(take([4, null, ''], 9));
console.log(take([true, 'length', 4]));

export { take };
