class DynamicArray {
  constructor() {
    this.capacity = 2;
    this.length = 0;
    this.arr = new Array(2);
  }

  // Insert n in the last position of the array
  pushback(n) {
    if (this.length === this.capacity) {
      this.resize();
    }

    this.arr[this.length] = n;
    this.length++;
  }

  resize() {
    // Create new array of double capacity
    this.capacity = 2 * this.capacity;
    const newArr = new Array(this.capacity);

    // Copy the elements from the old array to the new array
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.arr[i];
    }

    this.arr = newArr;
  }

  // Remove the last element in the array
  popback() {
    if (this.length > 0) {
      this.length--;
    }
  }

  // Get value at i-th index
  get(i) {
    if (i < this.length) {
      return this.arr[i];
    }
    // Here we would throw an out of bounds exception
    return;
  }

  // Insert n at -th index
  insert(i, n) {
    if (i < this.length) {
      this.arr[i] = n;
      return;
    }
    return;
    // Here we would throw an out of bounds exception
  }

  print() {
    let s = '';
    for (let i = 0; i < this.length; i++) {
      s += this.arr[i] + ' ';
    }
    console.log(s);
  }
}

const arr = new DynamicArray();
arr.pushback(1);
arr.pushback(2);
arr.pushback(3);
arr.pushback(4);
arr.pushback(5);
arr.print();
arr.insert(2, 10);
arr.print();
arr.popback();
arr.print();
console.log(arr.get(2));
