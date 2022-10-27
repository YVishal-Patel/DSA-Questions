class Node {
    constructor(element, next = null) {
      this.element = element;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    getSize() {
      return this.size;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    prepand(element) {
      this.node = new Node(element);
      if (this.isEmpty()) {
        this.head = this.node;
      } else {
        this.node.next = this.head;
        this.head = this.node;
      }
      this.size++;
    }
  
    append(element) {
      let node = new Node(element);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        let prev = this.head;
        while (prev.next) {
          prev = prev.next;
        }
        prev.next = node;
      }
      this.size++;
    }
  
    insert(element, index) {
      if (index < 0 || index > this.size) {
        return;
      } else if (index === 0) {
        return this.prepand(element);
      } else {
        let node = new Node(element);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
      }
    }
  
    removed(index) {
      if ((index && index < 0) || index > this.size) {
        return;
      } else if (index === 0) {
        this.head = this.head.next;
      } else if (index && index > 0 && index < this.size) {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        prev.next = prev.next.next;
        this.size--;
      }
    }
  
    removedByValue(element) {
      if (this.isEmpty()) {
        return "nothing to remove, the list is empty.";
      } else if (element && this.head.element === element) {
        this.head = this.head.next;
        this.size--;
        return "the value is removed from list is : " + element;
      } else if (element) {
        let prev = this.head;
        let removingNode;
        while (prev.next && prev.next.element !== element) {
          prev = prev.next;
        }
        if (prev.next) {
          removingNode = prev.next;
          prev.next = removingNode.next;
          this.size--;
          return "the element is removed from list is : " + element;
        }
        return null;
      }
    }
  
  
    print() {
      if (this.isEmpty()) {
        console.log("list is empty");
      } else {
        let curr = this.head;
        let listValues = "";
        while (curr) {
          listValues += `${curr.element} `;
          curr = curr.next;
        }
        console.log(listValues);
      }
    }
  }
  
  let linked = new LinkedList();
  linked.append(40);
  linked.append(30);
  linked.append(20);
  linked.append(10);
  linked.insert(100, 1);
  console.log(linked.removedByValue(10));
  // linked.removed(4);
  linked.print();
  