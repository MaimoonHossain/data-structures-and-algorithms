class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Implementation for Queue
class Queue {
  constructor() {
    this.left = null;
    this.right = null;
  }

  enqueue(val) {
    const newNode = new ListNode(val);

    if (this.right) {
      this.right.next = newNode;
      this.right = this.right.next;
    } else {
      this.left = newNode;
      this.right = newNode;
    }
  }

  dequeue() {
    if (this.left === null) return;

    const val = this.left.val;
    this.left = this.left.next;
    return val;
  }

  print() {
    let cur = this.left;
    let s = '';
    while (cur != null) {
      s += cur.val + '->';
      cur = cur.next;
    }
    console.log(s);
  }
}

// Test
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // 1->2->3->
queue.dequeue();
queue.print(); // 2->3->
