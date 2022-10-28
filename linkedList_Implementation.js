class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
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
    let node = new Node(element);
    if (this.isEmpty()) {
      this.head = node;
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
    let node = new Node(element);
    if (index < 0 || index > this.size) {
      return;
    } else if (index === 0) {
      this.prepand(element);
    } else if (index) {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removedByIndex(index) {
    if (this.isEmpty() || index > this.getSize()) {
      return null;
    } else if (index === 0) {
      console.log("the element is removed from list is : ", this.head.element);
      this.head = this.head.next;
      this.size--;
    } else if (index) {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedData = prev.next;
        prev.next = removedData.next;
        this.size--;
        console.log(
          "the element is removed from the  list : ",
          removedData.element
        );
      }
      return null;
    }
  }

  search(element) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.element === element) {
      return true;
    } else {
      let prev = this.head;
      while (prev && prev.next?.element !== element) {
        prev = prev.next;
      }
      if (prev?.next && prev.next?.element === element) {
        return true;
      } else {
        return false;
      }
    }
  }

  removedByValue(element) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.element === element) {
      console.log("element :", element, " is removed");
      this.head = this.head.next;
      this.size--;
    } else if (element) {
      let prev = this.head;
      while (prev && prev.next.element !== element) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedValue = prev.next;
        prev.next = removedValue.next;
        this.size--;
        console.log("element :", element, " is removed");
      }
      return null;
    }
  }

  reverseList() {
    if (this.isEmpty()) {
      console.log("list is empty, we cannot reverse the list.");
    } else {
      let prev = null;
      let curr = this.head;
      while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      this.head = prev;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty.");
    } else {
      let curr = this.head;
      let listItems = "";
      while (curr) {
        listItems += `${curr.element} `;
        curr = curr.next;
      }
      console.log(listItems);
    }
  }
}

let linked = new LinkedList();
linked.prepand(10);
linked.prepand(20);
linked.prepand(30);
linked.append(50);
linked.insert(100, 4);
console.log("The search element is present in the list : ", linked.search(30));
// linked.removedByIndex(4);
linked.removedByValue(30);
linked.reverseList();
linked.print();
