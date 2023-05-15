export default function orderByProps(data, firstKeys) {
  const restKeys = Object.keys(data)
    .filter((key) => !firstKeys.includes(key))
    .sort();
  const keys = firstKeys.concat(restKeys);
  return keys.map((key) => ({
    key,
    value: data[key],
  }));
}
