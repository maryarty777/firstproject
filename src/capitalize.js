import _ from "lodash";

const get = (obj, key, defaultValue) => {
  return _.has(obj, key) ? obj[key] : defaultValue;
};
//console.log( get({first: 'one'}, 'first', 'nothing') );

export { get };
