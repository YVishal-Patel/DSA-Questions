class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }
  
  class linkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    getSize() {
      return this.size;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    prepand(element) {
      let node = new Node(element);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
  
    append(element) {
      let node = new Node(element);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
      this.size++;
    }
  
    removedByFirst() {
      if (this.isEmpty()) {
        return null;
      } else {
        this.head = this.head.next;
        this.size--;
      }
    }
  
    removedFromLast() {
      if (this.isEmpty()) {
        return null;
      } else if (this.size === 1) {
        this.head = null;data.prepand(10);
        this.tail = null;
      } else {
        let prev = this.head;
        while (prev && prev.next !== this.tail) {
          prev = prev.next;data.prepand(10);
        }
        prev.next = null;
        this.tail = prev;
      }
      this.size--;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("list is empty.");
      } else {
        let prev = this.head;
        let listItems = "";
        while (prev) {
          listItems += `${prev.element} `;
          prev = prev.next;
        }
        console.log(listItems);
      }
    }
  }
  
  let data = new linkedList();
  data.prepand(10);
  data.prepand(20);
  data.prepand(30);
  data.append(40);
  data.removedByFirst();
  data.removedFromLast()
  console.log(data);
  data.print();
  