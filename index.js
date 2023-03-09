//import _ from "lodash";

const capitalize = (text) => {
	if (text === ''|| typeof text !== 'string') return '';
	const [firstchar, ...restChar] = text;
	return `${firstchar.toUpperCase()}${restChar.join('')}`
}

if (capitalize ('hello') !== 'Hello') {
	throw new Error ('Aункция работает неверно!')
}

console.log( capitalize (null) );
console.log( capitalize ('how are you') );

