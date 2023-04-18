export default function appendToEachArrayValue(array, appendString) {
  const finalArray = [];
  for (const idx of array) {
    finalArray.push(appendString + idx);
  }

  return finalArray;
}
