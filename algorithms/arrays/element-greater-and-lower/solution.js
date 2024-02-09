function findElementIndex(array) {

  if (array.length < 3) {
    return -1;
  }

  const lastIndex = array.length - 1;

  let candidate = undefined;
  let candidateIndex = -1;
  let fromLeftMax = array[0];

  let index = 1;
  const secondToLastIndex = lastIndex - 1;
  while (index <= secondToLastIndex) {
    if (array[index] <= fromLeftMax) {
      index++;
    } else {
      candidate = array[index];
      candidateIndex = index;
      fromLeftMax = array[index];

      index++;

      while (array[index] > candidate && index <= secondToLastIndex) {
        if (array[index] > fromLeftMax) {
          fromLeftMax = array[index];
        }
        index++;
      }
      if (array[index] <= candidate) {
        candidate = undefined;
        candidateIndex = -1;
      }
    }
  }

  if (candidate !== undefined && candidate < array[lastIndex]) {
    return candidateIndex;
  } else {
    return -1;
  }
}

console.log('test case 1', findElementIndex([4, 3, 6, 8, 10, 5, 12, 14, 13]) === 6);
console.log('test case 2', findElementIndex([12, 3, 6, 8, 10, 5, 12, 14, 13]) === -1);
console.log('test case 3', findElementIndex([13, 3, 6, 8, 10, 5, 12, 14, 13]) === -1);
console.log('test case 4', findElementIndex([11, 3, 6, 8, 10, 5, 12, 14, 13]) === 6);
console.log('test case 5', findElementIndex([4, 3, 6, 8, 10, 5, 12, 14, 12]) === -1);
console.log('test case 6', findElementIndex([4, 3, 6, 8, 10, 5, 12, 14, 11]) === -1);
console.log('test case 7', findElementIndex([6, 3, 5, 4, 7, 9, 11, 6, 13, 15, 14]) === 8);
console.log('test case 8', findElementIndex([6, 3, 5, 4, 7, 9, 11, 6, 13, 14]) === 8);
console.log('test case 9', findElementIndex([6, 3, 5, 4, 7, 9, 11, 8, 10]) === 4);
console.log('test case 10', findElementIndex([7, 3, 6, 6]) === -1);
console.log('test case 11', findElementIndex([5, 4]) === -1);
console.log('test case 12', findElementIndex([5]) === -1);
console.log('test case 13', findElementIndex([]) === -1);
console.log('test case 14', findElementIndex([2, 7, 3, 14, 10, 6]) === -1);
console.log('test case 15', findElementIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === 1);
console.log('test case 16', findElementIndex([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) === -1);
console.log('test case 17', findElementIndex([3, 2, 1, 4, 5]) === 3);
console.log('test case 18', findElementIndex([1, 2, 3, 4, 0]) === -1);
console.log('test case 19', findElementIndex([5, 10, 20, 8, 7, 6]) === -1);
console.log('test case 20', findElementIndex([0, 1, 2, 3, 5, 8, 13, 21, 34, 1]) === -1);
console.log('test case 21', findElementIndex([3, 4, 5, 8, 9, 10, 11, 12, 7]) === 1);
console.log('test case 22', findElementIndex([1, 2, 3, 7, 5, 4]) === 1);
console.log('test case 23', findElementIndex([2, 4, 6, 8, 10, 9, 7, 5, 3, 1]) === -1);
console.log('test case 24', findElementIndex([1, 3, 2]) === -1);