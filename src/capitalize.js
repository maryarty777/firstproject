function capitalize(text) {
  if (text === "" || typeof text !== "string") return "";
  const arr = text.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
	return arr;
}
console.log(capitalize("hello"));
console.log(capitalize("how are you?"));

export { capitalize };
