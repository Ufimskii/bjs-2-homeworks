function compareArrays(arr1, arr2) {
  let result = false;
  if (arr1.length !== arr2.length)
    return result;
  if (arr1.every((n, i) => n === arr2[i]))
    result = true;
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr
    .filter((element) => element > 0)
    .filter((element) => element % 3 === 0)
    .map((element) => element * 10);
  return resultArr; // array
}
