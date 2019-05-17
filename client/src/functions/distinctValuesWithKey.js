export const distinctValuesWithKey = (objectsArray, key) => {
  const result = [];
  const map = new Map();
  for (const item of objectsArray) {
    if (!map.has(item[key])) {
      map.set(item[key], true);
      result.push(item.key);
    }
  }
};
