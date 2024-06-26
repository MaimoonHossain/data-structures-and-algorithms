class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Init the list with a 'dummy' node which makes
    // removing a node from the beginning of list easier.
    this.head = new ListNode(-1);
    this.tail = this.head;
  }

  insertEnd(val) {
    this.tail.next = new ListNode(val);
    this.tail = this.tail.next;
  }

  remove(index) {
    let i = 0;
    let curr;
    curr = this.head;

    while (i < index && curr !== null) {
      i++;
      curr = curr.next;
    }

    // Remove the node ahead of curr
    if (curr !== null) {
      curr.next = curr.next.next;
    }
  }

  print() {
    let curr = this.head.next;
    let s = '';

    while (curr !== null) {
      if (curr.next) {
        s += curr.val + '->';
      } else {
        s += curr.val;
      }
      curr = curr.next;
    }
    console.log(s);
  }
}

const list = new LinkedList();
list.insertEnd(1);
list.insertEnd(2);
list.insertEnd(3);
list.insertEnd(4);
list.insertEnd(5);
list.print();
list.remove(2);
list.print();
