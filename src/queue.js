const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    let node = new ListNode(value);
    
    if (this.tail !== null) {
     this.tail.next = node;
    } else {
      this.head = node;
    }

    this.tail = node;
    this.size++
    
  }
  dequeue() {
    if (this.head !== null && this.head.next !== null) {
      let temp = this.head.value;
      this.head = this.head.next
      this.size--
      return temp
    }
  }
}

module.exports = {
  Queue,
};
