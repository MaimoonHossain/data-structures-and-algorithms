class Stack {
  constructor() {
    this.stack = new Array();
  }

  push(n) {
    this.stack.push(n);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.size()); // 3
console.log(stack.peek()); // 3
console.log(stack.pop()); // 3
