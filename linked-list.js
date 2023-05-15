/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.head.prev = newNode;
    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    try {
      const prevLastNode = this.tail;
      const currLastNode = prevLastNode.prev;
      this.tail = currLastNode;
      currLastNode.next = null;
      return prevLastNode.val;
    } catch (error) {
      return null;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) throw new Error("List is empty");
    const prevHead = this.head;
    this.head = prevHead.next;
    return prevHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currIndex = 0;
    let currNode = this.head;
    while (currNode) {
      if (currIndex === idx) return currNode.val;
      currIndex++;
      currNode = currNode.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currIndex = 0;
    let currNode = this.head;
    while (currNode) {
      if (currIndex === idx) {
        currNode.val = val;
        return currNode;
      }
      currIndex++;
      currNode = currNode.next;
    }
    throw new Error("invalid index");
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let currNode = this.head;
    let newNode = { val };

    let currIndex = 0;
    while (currNode) {
      if (currIndex === idx - 1) {
        newNode.next = currNode.next;
        currNode.next = newNode;
      } else {
        currNode = currNode.next;
        currIndex++;
      }
    }
    throw new Error("Invalid Index");
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currIndex = 0;
    let currNode = this.head;
    while (currNode) {
      if (currIndex === idx) {
        let prevNode = currNode.prev;
        let nextNode = currNode.next;
        prevNode.next = nextNode;
        console.log(currNode);
      }
      currIndex++;
      currNode = currNode.next;
    }
    throw new Error("Invalid index");
  }

  /** average(): return an average of all values in the list */

  average() {
    let totalSum = 0;
    let count = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      totalSum += currentNode.val;
      count += 1;
      currentNode = currentNode.next;
    }
    if (count === 0) {
      return 0.0;
    }
    return totalSum / count;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  reverse() {
    let currNode = this.head;
    this.tail = currNode;

    while (currNode) {
      const temp = currNode.next;

      currNode.next = currNode.prev;
      currNode.prev = temp;
      if (!temp) {
        this.head = currNode;
      }
      currNode = temp;
    }
  }
}

// module.exports = LinkedList;
