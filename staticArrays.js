class StaticArray {
  // Insert n into arr at the next open position.
  // Length is the number of 'real' values in arr, and capacity
  // is the size (aka memory allocated for the fixed size array).
  insertEnd(arr, n, length, capacity) {
    if (length < capacity) {
      arr[length] = n;
    }
  }

  // Remove from the last position in the array if the array
  // is not empty (i.e. length is non-zero).
  removeEnd(arr, length) {
    if (length > 0) {
      // Overwrite last element with some default value.
      // We would also the length to decreased by 1.
      arr[length - 1] = 0;
      length--;
    }
  }

  // Insert n into index i after shifting elements to the right.
  // Assuming i is a valid index and arr is not full.
  insertMiddle(arr, i, n, length) {
    // Shift starting from the end to i.
    for (let index = length - 1; index > i - 1; index--) {
      arr[index + 1] = arr[index];
    }
    //Insert at i
    arr[i] = n;
  }

  // Remove value at index i before shifting elements to the left.
  // Assuming i is a valid index.
  removeMiddle(arr, i, length) {
    // Shift starting from i + 1 to end.
    for (let index = i + 1; index < length; index++) {
      arr[index - 1] = arr[index];
    }
    // No need to 'remove' arr[i], since we already shifted
  }

  printArr(arr, length) {
    let s = '';
    for (let i = 0; i < length; i++) {
      s += arr[i] + ' ';
    }
    console.log(s);
  }
}

const staticArray = new StaticArray();
const arr = [];
const capacity = 10;
let length = 0;
staticArray.insertEnd(arr, 1, length++, capacity);
staticArray.insertEnd(arr, 2, length++, capacity);
staticArray.insertEnd(arr, 3, length++, capacity);
staticArray.insertEnd(arr, 4, length++, capacity);
staticArray.insertEnd(arr, 5, length++, capacity);
staticArray.insertEnd(arr, 6, length++, capacity);
staticArray.insertEnd(arr, 7, length++, capacity);
staticArray.insertEnd(arr, 8, length++, capacity);
staticArray.insertEnd(arr, 9, length++, capacity);
staticArray.insertEnd(arr, 10, length++, capacity);
staticArray.printArr(arr, length);
staticArray.removeEnd(arr, length--);
staticArray.printArr(arr, length);
staticArray.insertMiddle(arr, 5, 11, length++);
staticArray.printArr(arr, length);
staticArray.removeMiddle(arr, 5, 11, length--);
staticArray.printArr(arr, length);
