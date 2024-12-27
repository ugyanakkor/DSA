type Node<T> = {
  value: T,
  prev?: Node<T>,
}

export default class Stack<T> {
  private length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const node =  { value: item } as Node<T>;

    this.length++;
    if(!this.head) {
      this.head = node;
      return;
    }

    node.prev = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    if (!this.head) {
      return;
    }

    if(length === 1) {
      this.head = undefined;
    } else {
      const head = this.head;
      this.head = head.prev;
  
      return head.value;
    }

    this.length--;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

const stack =  new Stack();
console.log(stack.peek()); // Should print undefined
stack.push(3); // Should not print anything 
stack.push('N'); // Should not print anything 
stack.push(21); // Should not print anything
stack.push(69); // Should not print anything
console.log(stack.pop()); // Should print 69
console.log(stack.pop()); // Should print 21
console.log(stack.peek()); // Should print N
console.log(stack.pop()); // Should print N
console.log(stack.pop()); // Should print 3
console.log(stack.pop()); // Should print undefined

